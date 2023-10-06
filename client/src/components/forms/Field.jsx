import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { AutocompletionContext } from '../../contexts/AutocompletionContext';

function Field({
  title, type, id, placeholderText, isRequired, acceptPattern,
}) {
  const { isAutocomplete, setIsAutocomplete } = useContext(AutocompletionContext);

  const [currentValue, setCurrentValue] = useState('');

  useEffect(() => {
    if (isAutocomplete) {
      setCurrentValue(placeholderText);
    }
  }, [isAutocomplete]);

  const handleChange = (e) => setCurrentValue(e.target.value);

  // sanitize special characters
  const handleOnBlur = (e) => {
    const { value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setIsAutocomplete(false);
    return setCurrentValue(sanitizedValue);
  };

  return (
    <>
      <label
        htmlFor={id}
        className="font-extralight flex flex-row pt-2 select-none"
      >
        {isRequired ? `${title} *` : title}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholderText}
        className="text-black font-semibold placeholder:font-extralight hover:bg-gray-200 my-2 w-full appearance-none p-1 border border-secondary_1 rounded-lg"
        onChange={handleChange}
        onBlur={handleOnBlur}
        required={isRequired}
        value={currentValue}
        pattern={acceptPattern}
      />
      <p className="error-message font-light text-orange-500 mb-2 hidden">Invalid input</p>
    </>
  );
}

Field.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholderText: PropTypes.string,
  isRequired: PropTypes.bool,
  acceptPattern: PropTypes.string,
};

Field.defaultProps = {
  title: '',
  type: 'text',
  id: '',
  placeholderText: '',
  isRequired: false,
  acceptPattern: '.+',
};

export default Field;
