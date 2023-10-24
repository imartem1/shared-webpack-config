import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export default function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {},
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}