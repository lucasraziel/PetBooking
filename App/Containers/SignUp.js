import React, { Component } from 'react';
import { Text, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Background from '../Components/Background';
import logo from '../Images/logo.png';

import ButtonPet from '../Components/ButtonPet';

// Add Actions - replace 'Your' with whatever your reducer is called :)
import AuthRedux from '../Redux/AuthRedux';

// Styles
import styles from './Styles/SignUpStyle';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      password: null,
      email: null
    };
  }

  handleChangeScreen = () => {
    this.props.navigation.navigate('SignIn');
  };

  handleSignUp = (name, email, password) => {
    this.props.signUp(name, email, password);
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

          <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            placeholderTextColor="#000"
            value={this.state.name}
            onChangeText={value => this.setState({ name: value })}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            placeholderTextColor="#000"
            value={this.state.email}
            onChangeText={value => this.setState({ email: value })}
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            placeholderTextColor="#000"
            value={this.state.password}
            onChangeText={value => this.setState({ password: value })}
            secureTextEntry
          />
          <ButtonPet
            loading={loading}
            style={styles.buttonStyle}
            onPress={() =>
              this.handleSignUp(
                this.state.name,
                this.state.email,
                this.state.password
              )
            }>
            Signup
          </ButtonPet>
          <TouchableOpacity onPress={this.handleChangeScreen}>
            <Text style={styles.linkStyle}>Click here to sign in!</Text>
          </TouchableOpacity>
        </View>
      </Background>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: (name, email, password) =>
      dispatch(AuthRedux.signUpRequest(name, email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
