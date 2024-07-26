import React from 'react';
import inputStyle from './inputStyles';

const FormField = ({ field, value, onChange }) => {
  return (
    <div className="w-full">
      <label htmlFor={field.id} className="block text-base font-bold text-black mb-2">
        {field.label}
        {field.required && <span> *</span>}
      </label>
      { field.type === 'textarea' ? (
        <textarea
          id={field.id}
          className={inputStyle}
          required={field.required}
          value={value}
          onChange={onChange}
          rows={field.rows || 5} // default to 5 rows if not specified
          cols={field.cols || 30} // default to 30 cols if not specified
          style={{ resize: 'none', overflow: 'auto' }} // add this inline style

        />
      ) : field.type === 'tel' ? (
        <input
          type="tel"
          id={field.id}
          className={inputStyle}
          required={field.required}
          value={value}
          onChange={onChange}
          pattern="[0-9\s\+\-\.]{9,}" // allow digits, spaces, +, -, and .
          maxLength={20} // limit to 20 characters
        />
      ) : (
        <input
          type={field.type}
          id={field.id}
          className={inputStyle}
          required={field.required}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;
