import React, { useState } from "react";
import "./index.css";

function ProductValidation() {

  const [formData, setFormData] = useState({
    productValue: '',
    quantityValue: '',
  });

  const [isTouched, setIsTouched] = useState({
    productValue: false,
    quantityValue: false
  })

  const handleBlur = (field) => {
    if (formData[field] === '') {
      setIsTouched((prev) => ({
        ...prev,
        [field]: true
      }));
    }
  };

  const handleChange = (field, event) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [field]: value
    }));
    if (value) {
      setIsTouched((prev) => ({
        ...prev,
        [field]: false
      }));
    }
  };

  const enableButton = formData.productValue !== '' && formData.quantityValue !== '';

  return (
    <div className="layout-column justify-contents-center align-items-center">
      <section className="card pa-50">
        <form className="layout-column" noValidate>
          <label>
            <input
              type="text"
              onBlur={() => handleBlur("productValue")}
              onChange={(event) => handleChange("productValue", event)}
              data-testid="name-input"
              className={`white large outlined`}
              placeholder="Product name"
            />
            {isTouched.productValue && <p className="error-text form-hint" data-testid="name-input-error"> Product name is required
            </p>}
          </label>
          <label>
            <input
              type="number"
              data-testid="quantity-input"
              onBlur={() => handleBlur("quantityValue")}
              onChange={(event) => handleChange("quantityValue", event)}
              className={`white large outlined`}
              placeholder="Quantity"
            />
            {isTouched.quantityValue && <p className="error-text form-hint" data-testid="quantity-input-error"> Quantity is required
            </p>}
          </label>
          <button className="mt-50" disabled={!enableButton} type="submit" data-testid="submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ProductValidation;
