import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, expenses } = useContext(AppContext);
  const [editable, setEditable] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);

  const handleIncrease = () => {
    setNewBudget(prevBudget => (prevBudget + 10 <= 20000 ? prevBudget + 10 : prevBudget));
  };

  const handleDecrease = () => {
    setNewBudget(prevBudget => (prevBudget - 10 >= expenses ? prevBudget - 10 : prevBudget));
  };

  const handleSave = () => {
    if (newBudget >= expenses) {
      dispatch({
        type: 'SET_BUDGET',
        payload: newBudget,
      });
      setEditable(false);
    } else {
      alert('Budget cannot be lower than spending!');
    }
  };

  const handleCancel = () => {
    setNewBudget(budget);
    setEditable(false);
  };

  return (
    <div className='alert alert-secondary'>
      {!editable && (
        <div>
          <span>Budget: £{budget}</span>
          <button className="btn btn-sm btn-outline-primary ml-2" onClick={() => setEditable(true)}>
            Edit
          </button>
        </div>
      )}
      {editable && (
        <div className="d-flex align-items-center">
          <span>Budget: </span>
          <div className="input-group ml-2">
            <div className="input-group-prepend">
              <button className="btn btn-sm btn-outline-secondary" type="button" onClick={handleDecrease}>
                -
              </button>
            </div>
            <input type="text" className="form-control" value={newBudget} onChange={(e) => setNewBudget(e.target.value)} />
            <div className="input-group-append">
              <button className="btn btn-sm btn-outline-secondary" type="button" onClick={handleIncrease}>
                +
              </button>
            </div>
          </div>
          <button className="btn btn-sm btn-outline-primary ml-2" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-sm btn-outline-secondary ml-2" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Budget;

