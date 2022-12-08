import './App.css';
import React, {useEffect, useState} from 'react';
import {routes} from "./router";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import {PageContainer, ProLayout} from "@ant-design/pro-components";
import {GithubFilled, InfoCircleFilled, QuestionCircleFilled} from "@ant-design/icons";
import {getProfile} from "./services/request";
import ArticleEditor from "./pages/Article/ArticleEditor";

const bgColor = {
  bgLayout: '#f5f5f5',
  header: {
    colorBgHeader: '#fff',
  },
  sider: {
    colorMenuBackground: '#fff',
  },
  pageContainer: {
    colorBgPageContainer: '#f5f5f5',
  },
}

const App = () => {
  const location = useLocation();
  const [user, setUser] = useState()
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    getProfile()
      .then(resp => {
        if (resp.status) {
          setUser(resp.data)
        }
      })
  }, [])

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        collapsedButtonRender={false}
        collapsed={false}
        siderWidth={216}
        token={bgColor}
        title={'后台管理系统'}
        avatarProps={user && {
          src: user.avatarUrl,
          title: user.nickName
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        location={{ pathname }}
        menu={{
          defaultOpenAll: true,
          autoClose: false,
          type: 'group'
        }}
        menuItemRender={(item) => (
          <div
            onClick={() => {
              setPathname(item.path || '/');
            }}
          >
            <Link to={item.path}>{item.name}</Link>
          </div>
        )}
        route={{
          path: '/',
          routes: routes
        }}
        menuFooterRender={() => (
          <>
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>Created by</div>
              <div>edison.cs.chan@gmail.com</div>
            </div>

          </>
        )}
      >
        <PageContainer title={null}>
          <Routes>
            {routes.map(item => (item.routes ?
                item.routes.map(child => (<Route key={child.path} path={child.path} element={child.component}/>)) :
                <Route key={item.path} exact={true} path={item.path} element={item.component}/>
            ))}
            <Route path={'/article/editor'}>
              <Route path={':id'} element={<ArticleEditor/>}/>
              <Route path={''} element={<ArticleEditor/>}/>
            </Route>
          </Routes>
        </PageContainer>
      </ProLayout>
    </div>
  )
}

export default App;
