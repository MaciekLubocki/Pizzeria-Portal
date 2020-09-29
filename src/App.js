import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import WaiterView from './components/views/WaiterView/WaiterView';
import Order from './components/views/Order/Order';
import KitchenView from './components/views/KitchenView/KitchenView';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import OrderNew from './components/views/OrderNew/OrderNew';
import { StylesProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import store from './redux/store.js';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    // secondary: {main:'#11cb5f'},
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/`}
                  component={Homepage}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/login`}
                  component={Login}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/tables`}
                  component={Tables}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/waiter`}
                  component={WaiterView}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/kitchen`}
                  component={KitchenView}
                />

                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/tables/booking/:id`}
                  component={Booking}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/tables/events/:id`}
                  component={Event}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/waiter/order/new`}
                  component={OrderNew}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/waiter/order/:id`}
                  component={Order}
                />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
