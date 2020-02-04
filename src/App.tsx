import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersitedState from './utils/usePersistedState';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';

const App = () => {
  const [theme, setTheme] = usePersitedState<DefaultTheme>('theme', light);

  const toggleTheme = () =>{
    setTheme(theme.title === 'light'? dark : light );
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
