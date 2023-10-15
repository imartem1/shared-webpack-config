import type { Preview } from '@storybook/react';
import StyleDecorator from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <StyleDecorator>
                <Story />
            </StyleDecorator>
        ),
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <Story />
            </ThemeDecorator>
        ),
        (Story) => (
            <RouterDecorator>
                <Story />
            </RouterDecorator>
        )
    ]
};

export default preview;
