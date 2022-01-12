import React from 'react';

const Submit = (props) => {
  const {
    onClick,
  } = props;

  return (
    <button onClick={onClick}>
      Submit
    </button>
  );
}

Submit.defaultProps = {
  onClick: () => {},
};

export default Submit;
