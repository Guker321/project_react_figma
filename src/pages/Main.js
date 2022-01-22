import Header from '../components/Header';
import Product from '../components/Product';
import Overview from '../components/Overview';
import How from '../components/How';
import Footer from '../components/Footer';

import StepOne from '../components/steps/StepOne';
import StepTwo from '../components/steps/StepTwo';
import StepThree from '../components/steps/StepThree';
import StepFour from '../components/steps/StepFour';
import StepFive from '../components/steps/StepFive';

const Main = (props) => {
  return (
    <>
      <Header />
      <Product />
      <Overview />
      <How />
      <Footer />
    </>
  );
};

export default Main;
