import type { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta = {
    title: 'feature/AuthByUsername/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator initialState={{ loginForm: { username: 'admin', password: '123' } }}>
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator initialState={{ loginForm: { username: 'admin', password: '123', error: 'Error' } }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        ),
    ],
};

export const WithErrorLight: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator initialState={{ loginForm: { username: 'admin', password: '123', error: 'Error' } }}>
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const WithErrorDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator initialState={{ loginForm: { username: 'admin', password: '123', error: 'Error' } }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        ),
    ],
};

export const LoadingLight: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator initialState={{ loginForm: { username: 'admin', password: '123', isLoading: true } }}>
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const LoadingDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator initialState={{ loginForm: { username: 'admin', password: '123', isLoading: true } }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        ),
    ],
};
