import classNames from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export default ({ className }: LoaderProps) => (
    <div className={classNames('lds-ring')}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
