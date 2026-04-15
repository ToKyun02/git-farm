import type { Preview } from '@storybook/react';
import '../src/index.css';
import '../src/styles/pretendard.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: 'oklch(0.97 0.01 160)',
                },
                {
                    name: 'dark',
                    value: 'oklch(0.18 0.02 260)',
                },
            ],
        },
    },
    globalTypes: {
        theme: {
            description: 'Color theme',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: ['light', 'dark'],
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (Story, context) => {
            const theme = context.globals['theme'] ?? 'light';
            document.documentElement.classList.toggle('dark', theme === 'dark');
            return Story();
        },
    ],
};

export default preview;
