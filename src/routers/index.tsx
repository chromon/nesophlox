import { Navigate } from 'react-router-dom';

import AdminForm from '../pages/form';
import AdminTable from '../pages/list';
import ProfileBasic from '../pages/profile';
import ResultSuccess from '../pages/result/success';
import ResultFail from '../pages/result/fail';
import Exception403 from '../pages/exception/403';
import Exception404 from '../pages/exception/404';
import Exception500 from '../pages/exception/500';
import Setting from '../pages/account/setting';
import BasicSetting from '../pages/account/setting/basic';
import SecuritySetting from '../pages/account/setting/security';
import BindingSetting from '../pages/account/setting/binding';
import NotificationSetting from '../pages/account/setting/notification';
import Admin from '../pages/admin';
import Login from '../pages/user/login';
import Register from '../pages/user/register';
import Default from '../pages/dashboard/default';

/**
 * 路由表
 */
const routes = [
    {
        path: '/',
        element: <Admin />,
        children: [
            {
                path: '/',
                element: <Default />
            }, {
                path: '/dashboard/default',
                element: <Navigate to="/" />
            },
            {
                path: '/form/basic',
                element: <AdminForm />
            },
            {
                path: '/list/table',
                element: <AdminTable />
            },
            {
                path: '/profile/basic',
                element: <ProfileBasic />
            },
            {
                path: '/result/success',
                element: <ResultSuccess />
            },
            {
                path: '/result/fail',
                element: <ResultFail />
            },
            {
                path: '/exception/403',
                element: <Exception403 />
            },
            {
                path: '/exception/404',
                element: <Exception404 />
            },
            {
                path: '/exception/500',
                element: <Exception500 />
            },
            {
                path: '/account/setting',
                element: <Setting />,
                children: [
                    {
                        path: '',
                        element: <BasicSetting />,
                    },
                    {
                        path: 'basic',
                        element: <BasicSetting />,
                    },
                    {
                        path: 'security',
                        element: <SecuritySetting />,
                    },
                    {
                        path: 'binding',
                        element: <BindingSetting />,
                    },
                    {
                        path: 'notification',
                        element: <NotificationSetting />,
                    },
                ]
            }

        ],
    },
    {
        path: '/user/login',
        element: <Login />
    },
    {
        path: '/user/register',
        element: <Register />
    },
];

export default routes;