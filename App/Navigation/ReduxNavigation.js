import * as React from 'react';
import { BackHandler, Platform } from 'react-native';
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import AppNavigation from './AppNavigation';
import { NavigationActions } from 'react-navigation';

export const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root'
);

const ReduxAppNavigator = createReduxContainer(AppNavigation, 'root');

class ReduxNavigation extends React.Component {
  componentDidMount() {
    if (Platform.OS === 'ios') return;
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props;
      // change to whatever is your first screen, otherwise unpredictable results may occur
      if (nav.routes.length === 1 && nav.routes[0].routeName === 'Sign') {
        return false;
      }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: 'Navigation/BACK' });
      return true;
    });
  }

  componentDidUpdate() {
    const { routes, index, isTransitioning } = this.props.nav;
    if (this.props.isSigned) {
      if (routes[index].routeName === 'Sign') {
        this.props.dispatch(NavigationActions.navigate({ routeName: 'App' }));
      }
    } else {
      if (routes[index].routeName === 'App') {
        this.props.dispatch(NavigationActions.navigate({ routeName: 'Sign' }));
      }
    }
    console.tron.log(this.props.nav);
    console.tron.log(this.props.dispatch);
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') return;
    BackHandler.removeEventListener('hardwareBackPress', undefined);
  }

  render() {
    return (
      <ReduxAppNavigator
        dispatch={this.props.dispatch}
        state={this.props.nav}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  isSigned: state.auth.isSigned
});
export default connect(mapStateToProps)(ReduxNavigation);
