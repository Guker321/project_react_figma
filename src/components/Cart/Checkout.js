import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isNotFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = !isNotFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }
    
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlClasses = formInputsValidity.name ? '' : classes.invalid;
  const streetControlClasses = formInputsValidity.street ? '' : classes.invalid;
  const postalCodeControlClasses = formInputsValidity.postalCode
    ? ''
    : classes.invalid;
  const cityControlClasses = formInputsValidity.city ? '' : classes.invalid;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${nameControlClasses}`}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' />
        {!formInputsValidity.name && <p>Please enter the valid name!</p>}
      </div>
      <div className={`${classes.control} ${streetControlClasses}`}>
        <label htmlFor='street'>Street</label>
        <input ref={streetInputRef} type='text' id='street' />
        {!formInputsValidity.street && <p>Please enter the valid street!</p>}
      </div>
      <div className={`${classes.control} ${postalCodeControlClasses}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={postalCodeInputRef} type='text' id='postal' />
        {!formInputsValidity.postalCode && (
          <p>Please enter the valid postal code!</p>
        )}
      </div>
      <div className={`${classes.control} ${cityControlClasses}`}>
        <label htmlFor='city'>City</label>
        <input ref={cityInputRef} type='text' id='city' />
        {!formInputsValidity.city && (
          <p>Please enter the valid city (5 characters long!)</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
