import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Overview from './components/Overview';
import How from './components/How';
import Footer from './components/Footer';
import StepOne from './components/StepOne';

function App() {
  return (
    <>
      <Header />
      <StepOne />
      {/* <Product /> */}
      <Overview />
      <How />
      <Footer />
    </>
  );
}

export default App;
