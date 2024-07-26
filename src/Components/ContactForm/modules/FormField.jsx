import React, { useState } from 'react';
import inputStyle from './inputStyles';
import './styles.css';

const FormField = ({ field, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const isFloating = isFocused || value;

  return (
    <div className="w-full relative">
      <label
        htmlFor={field.id}
        className={`floating-label ${isFloating ? 'floating' : ''}`}
      >
        {field.label}
      </label>
      { field.type === 'textarea' ? (
        <textarea
          id={field.id}
          className={inputStyle}
          required={field.required}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={field.rows || 5} // default to 5 rows if not specified
          cols={field.cols || 30} // default to 30 cols if not specified
          placeholder=" " // Empty placeholder to prevent overlap with label
          style={{
            resize: 'none',
            overflow: 'auto',
          }}
        />
      ) : (
        <input
          type={field.type}
          id={field.id}
          className={inputStyle}
          required={field.required}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder=" " // Empty placeholder to prevent overlap with label
        />
      )}
    </div>
  );
};

export default FormField;
