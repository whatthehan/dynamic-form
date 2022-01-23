import { createElement, isValidElement, ReactNode, FunctionComponent, ComponentClass } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { DashboardFilled } from '@ant-design/icons';
import DashboardPage from '../pages/dashboard';

interface RouterConfig {
  key: string;
  path: string;
  name: string;
  component?: FunctionComponent | ComponentClass;
  layout?: 'basic' | 'empty';
  icon?: ReactNode;
  // 重定向
  redirect?: string;
  // 是否在菜单中隐藏
  hideInMenu?: boolean;
  // 子级
  children?: RouterConfig[];
}

const router: RouterConfig[] = [
  {
    key: 'index',
    path: '/',
    name: 'Dynamic Form',
    redirect: '/dashboard',
  },
  {
    key: 'dashboard',
    path: '/dashboard',
    name: '工作台',
    icon: DashboardFilled,
    component: DashboardPage,
  },
];

export function getRouterConfig(config = router): RouteObject[] {
  return config.map((item) => {
    const res: RouteObject = {
      path: item.path,
    };

    if (Array.isArray(item.children)) {
      res.children = getRouterConfig(item.children);
    }

    // 处理重定向
    if (typeof item.redirect === 'string') {
      res.element = createElement(Navigate, { to: item.redirect });
      return res;
    }

    if (item.component == null) {
      return res;
    }

    res.element = createElement(item.component);

    return res;
  });
}

export const RenderRouter = () => {
  return useRoutes(getRouterConfig());
};
