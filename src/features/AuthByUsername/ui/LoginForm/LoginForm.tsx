import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { useAppDispatch, useAppSelector } from 'app/hooks/redux';
import DynemicModuleLoader, { ReducersList } from
    'shared/lib/components/DynemicModuleLoader/DynemicModuleLoader';
import {
    getLoginError,
} from '../../model/selectors/getLoginError/getLoginError';
import {
    getLoginIsLoading,
} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {
    getLoginPassword,
} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {
    getLoginUsername,
} from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import loginByUsername from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useAppSelector(getLoginUsername);
    const password = useAppSelector(getLoginPassword);
    const isLoading = useAppSelector(getLoginIsLoading);
    const error = useAppSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynemicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Auth form')} />
                {
                    error
                    && (
                        <Text
                            text={t('Wrong login or password')}
                            theme={TextTheme.ERROR}
                        />
                    )
                }
                <Input
                    className={cls.input}
                    placeholder={t('Add login')}
                    autoFocus
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    className={cls.input}
                    placeholder={t('Add password')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    theme={ThemeButton.OUTLINE}
                    disabled={isLoading}
                >
                    {t('Sign in')}
                </Button>
            </div>
        </DynemicModuleLoader>
    );
});

export default LoginForm;
