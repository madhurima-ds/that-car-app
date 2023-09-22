import React, { useState, useRef }  from 'react';

import classes from "./InventoryForm.module.css";

import Button from '../UI/Button';

const InventoryForm = (props) => {
    const imageLibrary = props.imageLibrary;
    const imageKeys = [...imageLibrary.keys()];

    const [validVin, setValidVin] = useState(undefined);
    const [validMake, setValidMake] = useState(undefined);
    const [validModel, setValidModel] = useState(undefined);
    const [validYear, setValidYear] = useState(undefined);
    const [validType, setValidType] = useState(undefined);
    const [validMileage, setValidMileage] = useState(undefined);
    const [validColor, setValidColor] = useState(undefined);
    const [validPrice, setValidPrice] = useState(undefined);
    const [validImg, setValidImg] = useState(undefined);
  
    const [formIsValid, setFormIsValid] = useState(false);
  
    const vinRef = useRef();
    const makeRef = useRef();
    const modelRef = useRef();
    const yearRef = useRef();
    const typeRef = useRef();
    const mileageRef = useRef();
    const colorRef = useRef();
    const imgNameRef = useRef();
    const priceRef = useRef();
  
    // const initialVehicle = {
    //   vin: "a1b2c3d4e5f6h7i8j",
    //   img: null,
    //   make: "BMW",
    //   model: "X3",
    //   year: "2021",
    //   type: "sDrive30i",
    //   mileage: "1,000",
    //   price: "1.00",
    //   color: "blue",
    // };
  
    const onSaveHandler = (event) => {
      event.preventDefault();
  
      if(formIsValid) {
        const newVehicle = {
          vin: vinRef.current.value,
          make: makeRef.current.value,
          model: modelRef.current.value,
          year: yearRef.current.value,
          type: typeRef.current.value,
          mileage: mileageRef.current.value,
          color: colorRef.current.value,
          price: priceRef.current.value,
          imgName: imgNameRef.current.value,
        };
  
        props.onSave(newVehicle);
        resetFormValues();
        resetFormValidation();
      }
    };
  
    const resetFormValues = () => {
      vinRef.current.value = "";
      makeRef.current.value = "";
      modelRef.current.value = "";
      yearRef.current.value = "";
      typeRef.current.value = "";
      mileageRef.current.value = "";
      colorRef.current.value = "";
      priceRef.current.value = "";
      imgNameRef.current.value = "";
    };
  
    const resetFormValidation = () => {
      setValidVin(undefined);
      setValidMake(undefined);
      setValidModel(undefined);
      setValidYear(undefined);
      setValidType(undefined);
      setValidMileage(undefined);
      setValidColor(undefined);
      setValidPrice(undefined);
      setValidImg(undefined);
    };
  
    const onResetHandler = (event) => {
      event.preventDefault();
      resetFormValues();
      resetFormValidation();
    };
  
    const onCancelHandler = (event) => {
      event.preventDefault();
      resetFormValues();
      resetFormValidation();
      props.onCancel();
    };
  
  
    const validateVinHandler = (event) => {    
      let isValid = false;
      if (event.target.value.trim().length === 13)
        isValid = true
        
      setValidVin(isValid);
      setFormIsValid(
        isValid &&
          validMake &&
          validModel &&
          validYear &&
          validType &&
          validMileage &&
          validColor &&
          validPrice &&
          validImg
      );
      //setFormIsValid(validVin && validMake && validModel && validYear && validType && validMileage && validColor && validPrice)
    };
  
    const validateMakeHandler = (event) => {
      let isValid = false;
      if (event.target.value.trim().length > 0) 
        isValid = true;
  
      setValidMake(isValid);
      setFormIsValid(
        validVin &&
          isValid &&
          validModel &&
          validYear &&
          validType &&
          validMileage &&
          validColor &&
          validPrice &&
          validImg
      );
    };
  
    const validateModelHandler = (event) => {
      let isValid = false;
      if (event.target.value.trim().length > 0)
        isValid = true;
  
      setValidModel(isValid);
      setFormIsValid(
        validVin &&
          validMake &&
          isValid &&
          validYear &&
          validType &&
          validMileage &&
          validColor &&
          validPrice &&
          validImg
      );
    };
  
    const validateYearHandler = (event) => {
      let isValid = false;
      if (event.target.value.trim().length === 4)
        isValid = true;
        
      setValidYear(isValid);
      setFormIsValid(
        validVin &&
          validMake &&
          validModel &&
          isValid &&
          validType &&
          validMileage &&
          validColor &&
          validPrice &&
          validImg
      );
    };
  
    const validateTypeHandler = (event) => {
      let isValid = false;
      if (event.target.value.trim().length > 0) 
        isValid = true;
      
      setValidType(isValid);
      setFormIsValid(
        validVin &&
          validMake &&
          validModel &&
          validYear &&
          isValid &&
          validMileage &&
          validColor &&
          validPrice &&
          validImg
      );
    };
  
    const validateMileageHandler = (event) => {
      let isValid = false;
      if (event.target.value.trim().length > 0)
        isValid = true;
          
      setValidMileage(isValid);
      setFormIsValid(
        validVin &&
          validMake &&
          validModel &&
          validYear &&
          validType &&
          isValid &&
          validColor &&
          validPrice &&
          validImg
      );
      
    };
  
    const validateColorHandler = (event) => {
      let isValid = false
      if (event.target.value.trim().length > 0)
        isValid = true;
      
      setValidColor(isValid);
      setFormIsValid(
        validVin &&
          validMake &&
          validModel &&
          validYear &&
          validType &&
          validMileage &&
          isValid &&
          validPrice &&
          validImg
      );
    };
  
    const validatePriceHandler = (event) => {
      let isValid = false;
      if (event.target.value.trim().length > 0) 
        isValid = true;
  
      setValidPrice(isValid);
      setFormIsValid(
        validVin &&
          validMake &&
          validModel &&
          validYear &&
          validType &&
          validMileage &&
          validColor &&          
          isValid &&
          validImg 
      );
    };

    const validateImageHandler = (event) => {
      let isValid = false;
      if (event.target.value.trim().length > 0) 
        isValid = true;
  
      console.log(event.target.value);

      setValidImg(isValid);
      setFormIsValid(
        validVin &&
          validMake &&
          validModel &&
          validYear &&
          validType &&
          validMileage &&
          validColor &&
          validPrice &&          
          isValid
      );
    };


    return (
      <div className={classes["inventory-form"]}>
        <form onSubmit={onSaveHandler}>
          <div className={classes["inventory-form__controls"]}>
            <div
              className={`${classes["inventory-form__control"]} ${
                validVin === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="vin">Vin</label>
              <input
                id="vin"
                type="text"
                ref={vinRef}
                onBlur={validateVinHandler}
              />
            </div>
            <div
              className={`${classes["inventory-form__control"]} ${
                validMake === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="make">Make</label>
              <input
                id="make"
                type="text"
                ref={makeRef}
                onBlur={validateMakeHandler}
              />
            </div>
            <div
              className={`${classes["inventory-form__control"]} ${
                validModel === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="model">Model</label>
              <input
                id="model"
                type="text"
                ref={modelRef}
                onBlur={validateModelHandler}
              />
            </div>
            <div
              className={`${classes["inventory-form__control"]} ${
                validYear === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="year">Year</label>
              <input
                id="year"
                type="number"
                ref={yearRef}
                onBlur={validateYearHandler}
              />
            </div>
            <div
              className={`${classes["inventory-form__control"]} ${
                validType === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="type">Type</label>
              <input
                id="type"
                type="text"
                ref={typeRef}
                onBlur={validateTypeHandler}
              />
            </div>
            <div
              className={`${classes["inventory-form__control"]} ${
                validMileage === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="mileage">Mileage</label>
              <input
                id="mileage"
                type="number"
                ref={mileageRef}
                onBlur={validateMileageHandler}
              />
            </div>
            <div
              className={`${classes["inventory-form__control"]} ${
                validColor === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="color">Color</label>
              <input
                id="color"
                type="text"
                ref={colorRef}
                onBlur={validateColorHandler}
              />
            </div>
            <div
              className={`${classes["inventory-form__control"]} ${
                validPrice === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                ref={priceRef}
                onBlur={validatePriceHandler}
              />
            </div>
            <div
              className={`${classes["inventory-form__control"]} ${
                validImg === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="img">Image</label>
              <select
                id="img"
                type="text"
                ref={imgNameRef}  
                onBlur={validateImageHandler}
              >
                {
                  imageKeys.map(key => (
                    <option key={key} value={key}>{imageLibrary.get(key).name}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className={classes["inventory-form__actions"]}>
            <Button type="submit">Save</Button>
            <Button onClick={onResetHandler}>Reset</Button>
            <Button onClick={onCancelHandler}>Cancel</Button>
          </div>
        </form>
      </div>
    );
};

export default InventoryForm;