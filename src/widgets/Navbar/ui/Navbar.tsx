import classNames from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch, useAppSelector } from 'app/hooks/redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useAppSelector(getUserAuthData);

    const dispatch = useAppDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOutModal = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div data-testid="navbar" className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to="/"
                        className={cls.mainLink}
                    >
                        {t('Main page')}
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                        {t('About website')}
                    </AppLink>
                    <Button
                        theme={ThemeButton.BACKGROUND_INVERTED}
                        className={cls.links}
                        onClick={onLogOutModal}
                    >
                        {t('Log out')}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div data-testid="navbar" className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ThemeButton.BACKGROUND_INVERTED}
                    className={cls.links}
                    onClick={onShowModal}
                >
                    {t('Sign in')}
                </Button>
                {isAuthModal && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                )}
            </div>
        </div>
    );
};

Navbar.defaultProps = {
    className: '',
};

export default Navbar;
