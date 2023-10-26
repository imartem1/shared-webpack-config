import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import {
    LOCAL_STORAGE_THEME_KEY, Theme,
} from 'app/providers/ThemeProvider/lib/ThemeContext';
import 'app/styles/index.scss';
import App from './app/App';

import 'shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root'));

const theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT;
document.body.className = theme;

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
);
