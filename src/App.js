import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './components/HomePage';
import HomePageLayout from './components/HomePageLayout';
import GlobalStyle from './components/styles/GlobalStyles';
import ShopLayout from './components/ShopLayout';

const AppContainer = styled.main`
  & > * {
    padding-left: 7%;
    padding-right: 7%;
    overflow-x: hidden;
  }
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopLayout />} />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;
