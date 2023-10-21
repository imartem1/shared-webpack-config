import { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

const RouterDecorator:FC<PropsWithChildren> = ({ children }) => (
    <BrowserRouter>
        {children}
    </BrowserRouter>
);

export default RouterDecorator;
