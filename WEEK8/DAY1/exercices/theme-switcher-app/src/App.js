
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

function App() {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#1e1e1e',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '2rem',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={appStyle}>
      <ThemeSwitcher />
      <h1>Hello, Theme Switcher!</h1>
      <p>The current theme is <strong>{theme}</strong>.</p>
    </div>
  );
}

export default App;
