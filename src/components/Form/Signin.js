import React from 'react';
import { Button, Form, Input } from 'antd';

function Signin() {
  return (
    <div className="App">
        <header className='App-header'>
        <h3>Sign In</h3>
            <Form>
                <Form.Item 
                label='UserName' 
                name='username'  
                rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: true },
              { min: 3 },
            ]}>
                <Input placeholder='Username'></Input>
                </Form.Item>
                <Form.Item label='Password' name='password'  rules={[
              {
                required: true,
                message: "Please enter your Password",
              },
              { whitespace: true },
              { min: 3 },
            ]}>
                <Input.Password placeholder='Password'></Input.Password>
                </Form.Item>
                <Form.Item label='ConfirmPassword' name='confirmpassword'  
                rules={[
              {
                required: true,
                message: "Please enter your Password",
              },
              { whitespace: true },
              { min: 3 },
            ]}>
                <Input.Password placeholder='ConfirmPassword'></Input.Password>
                </Form.Item>
                <Form.Item>
                <Button type='primary' htmlType='submit' block>Sign In</Button>
                </Form.Item>

            </Form>
            </header>
    </div>
  );
}

export default Signin;