import React from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

interface Props {
    children?: React.ReactNode;
    initialState?: DeepPartial<StateSchema>
}

const StoreDecorator = ({ children, initialState }: Props) => (
    <StoreProvider initialState={initialState}>
        <div>{children}</div>
    </StoreProvider>
);

export default StoreDecorator;
