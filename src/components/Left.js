import React, { useState } from 'react';

const Left = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={`card card-body ${dark ? 'bg-dark' : 'bg-light'}`}>
      <h4 className={`mb-5 text-center ${dark ? 'text-light' : 'text-dark'}`}>
        Hello, Nice to meet you !
      </h4>
      <button
        onClick={() => setDark(!dark)}
        className={`mt-2 mb-3 btn ${dark ? 'btn-light' : 'btn-dark'}`}
      >
        Magic
      </button>
    </div>
  );
};

export default Left;
