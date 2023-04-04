import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import {classNames} from "shared/lib/classNames";
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Sidebar } from 'widgets/Sidebar';

import 'shared/config/i18next/i18next'

import { useTranslation } from 'react-i18next';

const App = () => {
    const { theme } = useTheme()

    return (
        <Suspense fallback="Loading...">
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    );
};

export default App;