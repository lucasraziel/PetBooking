import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SignIn from '../Containers/SignIn';
import SignUp from '../Containers/SignUp';
import Dashboard from '../Containers/Dashboard';

// Manifest of possible screens

// const store = createStore();

const isSigned = false;
const PrimaryNav = createSwitchNavigator(
  {
    Sign: createSwitchNavigator(
      {
        SignIn: { screen: SignIn },
        SignUp: { screen: SignUp }
      },
      {
        // Default config for all screens
        initialRouteName: 'SignIn'
      }
    ),
    App: createSwitchNavigator({
      Dashboard: { screen: Dashboard }
    })
  },
  {
    // Default config for all screens
    initialRouteName: isSigned ? 'App' : 'Sign'
  }
);

export default createAppContainer(PrimaryNav);
