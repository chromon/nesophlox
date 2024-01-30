import React from 'react';

import './Global.css'

import { useRoutes } from 'react-router-dom';
import routes from './routers';

const App: React.FC = () => {

    // 路由表
    const element = useRoutes(routes)

    return (
        <>
            {element}
        </>
    );
};

export default App;