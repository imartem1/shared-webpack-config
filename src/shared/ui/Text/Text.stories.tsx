import type { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Text, { TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllLight: Story = {
    args: {
        title: 'Title',
        text: 'Здесь знакомимся, обсуждаем все новости мира',
    },
};

export const AllDark: Story = {
    args: {
        title: 'Title',
        text: 'Здесь знакомимся, обсуждаем все новости мира',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const OnlyTitleLight: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const ErrorLight: Story = {
    args: {
        title: 'Error Title',
        text: 'Error text...',
        theme: TextTheme.ERROR,
    },
};

export const ErrorDark: Story = {
    args: {
        title: 'Error Title',
        text: 'Error text...',
        theme: TextTheme.ERROR,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const OnlyTextLight: Story = {
    args: {
        text: 'Здесь знакомимся, обсуждаем все новости мира',
    },
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Здесь знакомимся, обсуждаем все новости мира',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
