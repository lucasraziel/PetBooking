import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Styles/BackgroundStyle';

export default class Background extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      <LinearGradient
        style={styles.container}
        colors={['#fe9800', '#fe3d00']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        {this.props.children}
      </LinearGradient>
    );
  }
}
