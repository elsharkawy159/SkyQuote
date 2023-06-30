import React from "react";

export default function InputWithValidation({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  touched,
  inputType,
  onInput,
  min,
  max,
  maxlength,
}) {
  return (
    <>
      <div className="form-outline mb-3">
        <input
          type={inputType || "text"}
          name={name}
          id={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className={`form-control ${error ? "text-danger" : "text-light"} shadow-sm`}
          title={error && touched ? `${error}` : `Please enter your ${name}`}
          onInput={onInput}
          min={min}
          max={max}
          maxLength={maxlength}
        />
        <label
          className={`form-label ${error ? "text-danger" : "text-secondary"}`}
          htmlFor={name}
        >
          {error && touched ? `${error}` : label}
        </label>
      </div>
    </>
  );
}
