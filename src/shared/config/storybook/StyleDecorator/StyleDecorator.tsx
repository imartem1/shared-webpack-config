import 'app/styles/index.scss';
import { FC, PropsWithChildren } from 'react';

const StyleDecorator: FC<PropsWithChildren> = ({ children }) => <div>{children}</div>;

export default StyleDecorator;
