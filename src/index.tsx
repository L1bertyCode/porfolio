import { createRoot } from 'react-dom/client';
import "@/app/styles/index.css";
import { App } from './app/App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './app/providers/context/ThemeProvider';
import { AppStyled } from './app/AppStyled';
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <AppStyled />
    </ThemeProvider>
  </BrowserRouter>
);;