import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Layout from './components/Layout';
import Resume from './components/Resume';
import GlobalStyle from './components/styles/GlobalStyles';
import Writings from './components/Writings';

const AppContainer = styled.main`
  & > * {
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
          <Route path="resume" element={<Resume />} />
          <Route path="write-ups" element={<Writings />} />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;
