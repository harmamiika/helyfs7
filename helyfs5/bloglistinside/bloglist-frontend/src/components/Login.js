import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { displayNotification, loginUser } from '../actions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('logging in with', username, password);

    try {
      dispatch(loginUser(username, password));
      dispatch(displayNotification(`Welcome back ${username}!`, 'success'));

      setUsername('');
      setPassword('');
    } catch (exception) {
      console.log(exception);
      dispatch(displayNotification('Invalid username or password', 'error'));
    }
  };

  return (
    <div>
      <h2>Log in to application</h2>
      <p>Example user: username: enni, password: enni</p>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>username</Form.Label>
          <Form.Control
            onChange={({ target }) => setUsername(target.value)}
            type="text"
            value={username}
            name="Username"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>password</Form.Label>
          <Form.Control
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            value={password}
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          log in
        </Button>
      </Form>
    </div>
  );
};

export default Login;
