import '@picocss/pico/css/pico.min.css';
import './styles/background.css';
import './styles/layout.css';

import { loadAllComponents } from './scripts/loadComponents.js';

// Cargar todos los componentes (themeSwitcher se inicializa dentro del header)
loadAllComponents();
