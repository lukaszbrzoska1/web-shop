import React from 'react';
import { func, string } from 'prop-types';
import { IconSunMoon, IconSunMoonContainer } from './dark-mode-toggle.styles';
import { ReactComponent as MoonIcon } from '../../assets/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';

const DarkModeToggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <IconSunMoonContainer onClick={toggleTheme}>
      <IconSunMoon>
        {theme === 'light' ? <MoonIcon /> : <SunIcon /> }
      </IconSunMoon>
    </IconSunMoonContainer>
  );
};

DarkModeToggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default DarkModeToggle;
