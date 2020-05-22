import React, { useState } from 'react';
import Alert from './Alert';
const Top = () => {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('');
  const [isFilled, setIsFilled] = useState(false);
  const [alert, setAlert] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || interest === '') {
      setAlert({
        msg: 'Please enter the correct details.',
        type: 'danger',
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
      console.log(alert);
      console.log('Error');
    } else {
      setIsFilled(true);
    }
  };

  return (
    <div className='card card-body mb-3'>
      {isFilled && (
        <div className='text-center text-primary'>
          <h3 className='mt-3 mb-3 text-success'>
            Hey {name}, Thanks for letting us know that you are interested in{' '}
            {interest} !!{' '}
          </h3>
          <h4 className='mt-3 mb-3'>
            We will try to get you with the people having similar interest !
          </h4>
          <button className='mt-2 mb-3 btn btn-dark'>Explore More</button>
        </div>
      )}
      {!isFilled && (
        <div>
          <Alert alert={alert} />
          <h3 className='text-center text-primary'>
            Tell us about yourself !!
          </h3>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label>Name</label>
              <input
                type='text'
                name='name'
                className='form-control'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className='form-group'>
              <label>Interest</label>
              <input
                type='text'
                name='interest'
                className='form-control'
                onChange={(e) => setInterest(e.target.value)}
                value={interest}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Top;
