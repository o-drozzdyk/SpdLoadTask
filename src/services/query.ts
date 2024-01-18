import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query getLaunches($limit: Int) {
    launches(limit: $limit) {
      details
      id
      mission_name
    }
  }
`;
