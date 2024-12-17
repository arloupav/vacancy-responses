import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import VacanciesProvider from './components/Providers/VacanciesProvider.jsx';
import {BrowserRouter} from 'react-router';

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <VacanciesProvider>
            <App/>
        </VacanciesProvider>
    </BrowserRouter>
);
