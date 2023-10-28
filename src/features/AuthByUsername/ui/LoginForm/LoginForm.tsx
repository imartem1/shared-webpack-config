import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm = (props: LoginFormProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input className={cls.input} placeholder={t('Add login')} autoFocus />
            <Input className={cls.input} placeholder={t('Add password')} />
            <Button className={cls.loginBtn}>
                {t('Sign in')}
            </Button>
        </div>
    );
};

LoginForm.defaultProps = {
    className: '',
};

export default LoginForm;
