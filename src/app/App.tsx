import { useTheme } from 'app/providers/ThemeProvider';
import classNames from 'shared/lib/classNames/classNames';
import Navbar from 'widgets/Navbar';
import Sidebar from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { userActions } from 'entities/User';
import AppRouter from './providers/router';
import { useAppDispatch } from './hooks/redux';

const APP = () => {
    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default APP;
