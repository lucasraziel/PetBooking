import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import styles from './Styles/ButtonPetStyle';

export default class ButtonPet extends Component {
  // // Prop type warnings
  static propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.any.isRequired
  };
  //
  // // Defaults for props
  static defaultProps = {
    loading: false
  };

  render() {
    const { children, loading, style, ...rest } = this.props;
    return (
      <TouchableOpacity style={[styles.container, style]} {...rest}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.text}>{children}</Text>
        )}
      </TouchableOpacity>
    );
  }
}
