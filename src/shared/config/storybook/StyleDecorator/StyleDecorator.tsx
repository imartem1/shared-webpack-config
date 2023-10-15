import 'app/styles/index.scss';
import { FC, PropsWithChildren } from 'react';

const StyleDecorator: FC<PropsWithChildren> = ({ children }) => {
return <div>{children}</div>;
};

export default StyleDecorator;