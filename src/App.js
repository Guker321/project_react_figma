import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import StepTwo from './components/steps/StepTwo';
import Main from './pages/Main';
import StepOnePage from './pages/StepOnePage';
import StepTwoPage from './pages/StepTwoPage';
import StepThreePage from './pages/StepThreePage';
import StepFourPage from './pages/StepFourPage';
import StepFivePage from './pages/StepFivePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Navigate replace to='main' />} />
        <Route path='main' element={<Main />} />
        <Route path='main/step-one' element={<StepOnePage />} />
        <Route path='main/step-two' element={<StepTwoPage />} />
        <Route path='main/step-three' element={<StepThreePage />} />
        <Route path='main/step-four' element={<StepFourPage />} />
        <Route path='main/step-five' element={<StepFivePage />} />
      </Routes>
    </>
  );
}

export default App;
