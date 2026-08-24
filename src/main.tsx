//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import { ThemeProvider } from './wiggets/ThemeContext.tsx';

import './index.css'

import App from './App.tsx'
import Projetos from './Projetos.tsx'
import Publicacoes from './Publicacoes.tsx';
import Equipe from './Equipe.tsx';
import NotFound from './NotFound.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <Routes>
        <Route index element={<App />}/>
        <Route path="projetos" element={<Projetos />}/>
        <Route path="publicacoes" element={<Publicacoes />}/>
        <Route path="equipe" element={<Equipe />}/>
        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
)
