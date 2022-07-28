import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Layout from './components/Layout';
import GlobalStyle from './components/styles/GlobalStyles';

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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Home />} />
          <Route path="writing" element={<Writings />} />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;
