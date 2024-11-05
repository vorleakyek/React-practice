import React, {useState} from "react";
import "./index.css";

function ProductValidation () {
  const [showError1, setShowError1] = useState(false);
  const [showError2, setShowError2] = useState(false);
  const [productValue, setProductValue] = useState('');
  const [quantityValue, setQuantityValue] = useState('');

  const handleProductNameBlur = () => {
    if (productValue === '') setShowError1(true);
  }

  const handleProductNameOnChange = (event) => {
    const value = event.target.value;
    setProductValue(value)
    if (value) setShowError1(false);
  }

  const handleQuantityValue = () => {
    if (quantityValue === '') setShowError2(true);
  }

  const handleQuantityValueChange = (event) => {
    const value = event.target.value;
    setQuantityValue(value);
    if (value) setShowError2(false);
  }

  const enableButton = (productValue !== '' && quantityValue !== '') ? false : true;


  return (
    <div className="layout-column justify-contents-center align-items-center">
      <section className="card pa-50">
        <form className="layout-column" noValidate>
          <label>
            <input
              type="text"
              onInput={null}
              onBlur={handleProductNameBlur}
              onChange={(event) => handleProductNameOnChange(event)}
              data-testid="name-input"
              className={`white large outlined`}
              placeholder="Product name"
            />
            {showError1 && <p className="error-text form-hint" data-testid="name-input-error"> Product name is required
            </p>}
          </label>
          <label>
            <input
              type="number"
              data-testid="quantity-input"
              onInput={null}
              onBlur={handleQuantityValue}
              onChange={(event) => handleQuantityValueChange(event)}
              className={`white large outlined`}
              placeholder="Quantity"
            />
            {showError2 && <p className="error-text form-hint" data-testid="quantity-input-error"> Quantity is required
            </p>}
          </label>
          <button className="mt-50" disabled={enableButton} type="submit" data-testid="submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ProductValidation;
