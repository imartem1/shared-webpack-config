import classNames from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

Loader.defaultProps = {
    className: 'lds-ring',
};

export default Loader;
