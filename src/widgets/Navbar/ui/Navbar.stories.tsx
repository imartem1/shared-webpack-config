import type { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Navbar from './Navbar';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotSignInLight: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator>
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const NotSignInDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        ),
    ],
};

export const SignInLight: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator initialState={{ user: { authData: { id: '123', username: 'admin' } } }}>
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const SignInDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator initialState={{ user: { authData: { id: '123', username: 'admin' } } }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        ),
    ],
};
