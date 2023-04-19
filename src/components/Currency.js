import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [editable, setEditable] = useState(false);
  const [newCurrency, setNewCurrency] = useState(currency);

  const handleSave = () => {
    dispatch({
      type: 'SET_CURRENCY',
      payload: {
        currency: newCurrency
      },
    });
    setEditable(false);
  };

  const handleCancel = () => {
    setNewCurrency(currency);
    setEditable(false);
  };

  const handleCurrencyChange = (event) => {
    setNewCurrency(event.target.value);
  };

  return (
    <div className='alert alert-secondary'>
      {!editable && (
        <div>
          <span>Currency: {currency}</span>
          <button className='btn btn-sm btn-outline-primary ml-2' onClick={() => setEditable(true)}>
            Edit
          </button>
        </div>
      )}
      {editable && (
        <div className='d-flex align-items-center'>
          <span>Currency:</span>
          <div className='input-group ml-2'>
            <select className='form-control' value={newCurrency} onChange={handleCurrencyChange}>
              <option value='$'>USD - $ Dollar</option>
              <option value='£'>GBP - £ Pound</option>
              <option value='€'>EUR - € Euro</option>
              <option value='₹'>INR - ₹ Rupee</option>
            </select>
          </div>
          <button className='btn btn-sm btn-outline-primary ml-2' onClick={handleSave}>
            Save
          </button>
          <button className='btn btn-sm btn-outline-secondary ml-2' onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Currency;
