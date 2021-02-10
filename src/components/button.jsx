import React from 'react';

const Button = ({ inputFunc, prevStateValue, value, optionalClassName }) => {
  return (
    <button onClick={(event) => inputFunc(prevStateValue + value)}>
      <h2 className={optionalClassName}>{value}</h2>
    </button>
  );
};

export default Button;
