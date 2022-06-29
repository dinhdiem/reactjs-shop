import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserType } from '../../../types/UserType';
import { signin } from '../../../api/user';
import { setUserLse } from '../../../utils/setLocalstorage';



function SignIn() {
    const {register, handleSubmit} = useForm<UserType>();
    const onSubmit : SubmitHandler<any> = async (data:UserType) => {
        const {data : user} = await signin(data)
        //setLocalStorage
        setUserLse(user);
    }
  return (
    <Form
    name="basic"
    labelCol={{ span: 6 }}
    wrapperCol={{ span: 12}}

    autoComplete="off"
    onFinish={handleSubmit(onSubmit)}
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <input type="email" className='ant-input' {...register('email')} />
    </Form.Item>


    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <input type="password" className='ant-input' {...register('password')} />
    </Form.Item>



    <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
  </Form>
  )
}

export default SignIn