import React, { useState } from 'react';
import Alert from './Alert';
const Right = () => {
  const [subscribe, setSubscribe] = useState(false);
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || email.includes('@') === false) {
      setAlert({
        msg: 'Please enter the valid email address.',
        type: 'danger',
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
      console.log(alert);
      console.log('Error');
    } else {
      setSubscribe(true);
    }
  };

  return (
    <div className='card card-body'>
      {subscribe && (
        <div>
          <h3 className='mb-5 mt-5 text-center text-primary'>
            Thanks for subscribing to the NewsLetter!!
          </h3>
          <h6 className='text-center'>We will contact you at {email} </h6>
        </div>
      )}
      {!subscribe && (
        <div>
          <Alert alert={alert} />
          <h5 className='text-center text-primary'>
            Subscribe to NewsLetter !
          </h5>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className='form-group btn btn-primary '>Subscribe</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Right;
