import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import ChatBot from './pages/ChatBot';
import ScifiImage from './pages/ScifiImage';
import Summary from './pages/Summary';
import Paragraph from './pages/Paragraph';
import JsConverter from './pages/JsConverter';
import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { themeSettings } from './theme';
import { createTheme } from '@mui/material/styles';
import {Toaster} from 'react-hot-toast'

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/paragraph" element={<Paragraph />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/js-converter" element={<JsConverter />} />
        <Route path="/scifi-image" element={<ScifiImage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
