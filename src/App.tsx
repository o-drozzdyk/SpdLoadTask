import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/organisms/Header';
import { HomePage } from './components/pages/HomePage';
import { FavouritesPage } from './components/pages/FavouritesPage';
import styled from 'styled-components';

const StyledContainer = styled(Router)`
  position: relative;
`;

function App() {
  return (
    <StyledContainer basename="/SpdLoadTask">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </main>
    </StyledContainer>
  );
}

export default App;
