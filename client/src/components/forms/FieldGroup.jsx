import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';

function FieldGroup({ title, id, children }) {
  const [display, setDisplay] = useState(true);

  const handleClick = () => setDisplay((prev) => !prev);

  const childrenStyle = {
    display: display ? 'block' : 'none',
  };

  return (
    <section className="p-2 border rounded-lg my-2" id={id}>
      <h1 className="text-lg font-medium relative">
        {title}
        <button
          type="button"
          className="appearance-none absolute top-2 right-2"
          onClick={handleClick}
        >
          {display ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </button>
      </h1>
      <div style={childrenStyle}>
        {children}
      </div>
    </section>
  );
}

FieldGroup.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FieldGroup;
