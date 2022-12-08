import styles from './index.module.css';
import React, {useEffect, useState} from "react";
import {
  LoginForm,
  ProFormText,
} from "@ant-design/pro-components";
import {Alert} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {login} from "../../../services/request";

const LoginMessage = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login = () => {
  const [loginStatus, setLoginStatus] = useState('')

  useEffect(() => {
    let ticket = localStorage.getItem('ticket');
    if (ticket !== null) {
      window.location.href = '/'
    }
  }, [])

  const handleSubmit = async (values) => {
    const resp = await login({...values});
    if (resp.status) {
      window.localStorage.setItem("ticket", resp.data['ticket'])
      window.location.href = '/'
    } else {
      setLoginStatus(resp.message)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <LoginForm
            title={'后台管理系统'}
            subTitle={'后台管理系统'}
            onFinish={async (values) => {
              await handleSubmit(values)
            }}
          >
            {loginStatus === 'error' && (
              <LoginMessage content={loginStatus}/>
            )}
            <>
              <ProFormText
                initialValue={'13229790442'}
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'手机号码'}
                rules={[
                  {
                    required: true,
                    message: '请输入手机号码!',
                  },
                ]}
              />
              <ProFormText.Password
                initialValue={'Rogue38105713'}
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'密码'}
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
            </>
          </LoginForm>
        </div>
      </div>
    </>
  )
}

export default Login;