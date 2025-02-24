import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const NewTodo = ({ handleAddTodo }) => {
  const [todo, setTodo] = useState({ title: '', desc: '' });

  // for handling todo state changes
  const handleChange = (e) => {
    setTodo((prevTodo) => {
      return { ...prevTodo, [e.target.name]: e.target.value };
    });
  };

  // submit the form and send newTodo in App.js
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      ...todo
    };

    // This function will add todo at the app state
    if (todo.title && todo.desc) {
      handleAddTodo(newTodo);
      setTodo({
        title: '',
        desc: ''
      });
    }

    // for reset todo state
  };

  return (
    <div>
      <h1 className="title">Collect Data from a Form</h1>
      <div className="card">
        <form action="" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              value={todo.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="desc">Description: </label>
            <textarea
              name="desc"
              id="desc"
              value={todo.desc}
              onChange={handleChange}
              required></textarea>
          </div>
          <div className="field-group">
            <button className="btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

NewTodo.propTypes = {
  handleAddTodo: PropTypes.func
};

export default NewTodo;
