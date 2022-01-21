import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Overview from './components/Overview';
import How from './components/How';
import Footer from './components/Footer';
import StepOne from './components/steps/StepOne.js';
import StepTwo from './components/steps/StepTwo.js';
import StepThree from './components/steps/StepThree.js';

function App() {
  return (
    <>
      <Header />
      <StepThree />
      {/* <StepOne /> */}
      {/* <Product /> */}
      <Overview />
      <How />
      <Footer />
    </>
  );
}

export default App;
