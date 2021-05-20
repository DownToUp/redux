import React from 'react';
import PropTypes from 'prop-types';
import im1 from '../assets/delete.png';
import './Todo.css';

const Todo = ({
  task: { description, id, done },
  handleDelete,
  handleDone,
}) => {
  return (
    <div className='row'>
      <div className='col-md-8'>
        <span className={done ? 'done' : 'unDone'}>{description}</span>
      </div>
      <div className='col-md-1 justify-content-center'>
        <img
          style={{ width: `25px` }}
          src={im1}
          alt='Delete'
          onClick={() => handleDelete(id)}
        />
      </div>
      <div className='col-md-1 justify-content-center'>
        <img
          style={{ width: `25px` }}
          src={require('../assets/done.png')}
          alt='done'
          onClick={() => handleDone(id)}
        />
      </div>
    </div>
  );
};

Todo.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  done: PropTypes.bool,
};

export default Todo;
