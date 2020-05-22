import React from 'react';

const Alert = ({ alert }) => {
  console.log(alert);
  if (alert !== null) {
    console.log(alert.msg);
  }
  return (
    <div>
      {alert !== null && (
        <h6 className={`text-center alert alert-${alert.type}`}>{alert.msg}</h6>
      )}
    </div>
  );
};

export default Alert;
