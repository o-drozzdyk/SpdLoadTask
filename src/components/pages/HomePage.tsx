import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Banner } from '../organisms/Banner';
import { CardSlider } from '../organisms/CardSlider';
import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from '../../services/query';
import { missionsState } from '../../recoil/atoms/missionsAtom';

export const HomePage = () => {
  const setMissions = useSetRecoilState(missionsState);

  const { loading, error, data } = useQuery(GET_LAUNCHES, {
    variables: { limit: 3 },
  });

  useEffect(() => {
    if (!loading && !error && data) {
      const newMissions = data.launches;

      setMissions(newMissions);
    }
  }, [loading, error, data, setMissions]);

  return (
    <>
      <Banner />
      
      {data && <CardSlider />}
    </>
  );
};
