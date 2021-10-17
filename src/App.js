import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import  DarkModeToggle  from './components/dark-mode-toggle/dark-mode-toggle.component';

import { GlobalStyles, lightTheme, darkTheme } from './global.styles';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/use-darl-mode/use-dark-mode.component';

import Header from './components/header/header.component';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [theme, themeToggler, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles />
        <DarkModeToggle theme={theme} toggleTheme={themeToggler} />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
