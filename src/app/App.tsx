import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import {classNames} from "shared/lib/classNames";
import { AppRouter } from './providers/router';
import { Navbar } from 'widget/Navbar';

const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
};

export default App;