import React from 'react';


export const ModalButton = ({ onClick, instrument }) => {
  return (
    <h5>
      <button
        onClick={onClick}
        instrument={instrument}
        className={'badge badge-pill badge-primary'}
      >
          {instrument}
      </button>
    </h5>
  );
};
