import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import {classNames} from "shared/lib/classNames";
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;