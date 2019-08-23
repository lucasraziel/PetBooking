import React, { Component } from 'react';
import { Text, Image, TextInput, TouchableOpacity, View } from 'react-native';
import logo from '../Images/logo.png';

import ButtonPet from '../Components/ButtonPet';
import { connect } from 'react-redux';
import Background from '../Components/Background';

// Add Actions - replace 'Your' with whatever your reducer is called :)
import AuthRedux from '../Redux/AuthRedux';

// Styles
import styles from './Styles/DashboardStyle';

class Dashboard extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  handleLogout = authentication_token => {
    this.props.destroySession(authentication_token);
  };

  render() {
    const { loading } = this.props;
    return (
      <Background>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.logoText}>Pet test</Text>
          </View>
          <Text style={styles.welcome}>welcome</Text>
          <Text style={styles.name}>{this.props.name}</Text>
          <ButtonPet
            loading={loading}
            style={styles.buttonStyle}
            onPress={() => this.handleLogout(this.props.authentication_token)}>
            Logout
          </ButtonPet>
        </View>
      </Background>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.fetching,
    name: state.auth.name,
    authentication_token: state.auth.authentication_token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    destroySession: authentication_token =>
      dispatch(AuthRedux.deleteSessionRequest(authentication_token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
