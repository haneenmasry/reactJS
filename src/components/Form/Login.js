import React from 'react';
import { Button, Form, Input } from 'antd';


function Login() {
  return (
    <div className="App">
        <header className='App-header'>
            <h3>Log In</h3>
            <Form>
                <Form.Item label='UserName' name='username'  rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: true },
              { min: 3 },
            ]}>
                <Input placeholder='Username'></Input>
                </Form.Item>
                <Form.Item label='Password' name='password' rules={[
              {
                required: true,
                message: "Please enter your Password",
              },
              { whitespace: true },
              { min: 3 },
            ]}>
                <Input.Password placeholder='Password'></Input.Password>
                </Form.Item>
                <Form.Item>
                <Button type='primary' htmlType='submit' block>Log In</Button>
                </Form.Item>

            </Form>
        </header>

    </div>
  );
}

export default Login;