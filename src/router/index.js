import React from "react";
import Dashboard from "../pages/Dashboard";
import ArticleList from "../pages/Article/ArticleList";

export const routes = [
  {
    path: '/',
    name: '首页',
    component: <Dashboard />
  },
  {
    name: '文章管理',
    routes: [
      {
        path: '/article/list',
        name: '文章列表',
        component: <ArticleList />
      }
    ]
  }
]