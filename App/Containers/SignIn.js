import React, { Component } from 'react';
import { Text, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import logo from '../Images/logo.png';
import ButtonPet from '../Components/ButtonPet';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import AuthRedux from '../Redux/AuthRedux';

// Styles
import styles from './Styles/SignInStyle';
import Background from '../Components/Background';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      email: null
    };
  }

  handleChangeScreen = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleSignIn = (email, password) => {
    this.props.signIn(email, password);
  };

  render() {
    const { loading } = this.props;

    return (
      <Background>
        <View style={styles.container}>
          <Image source={logo} style={styles.image} />
          <Text style={styles.logoText}>Pet test</Text>

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
              this.handleSignIn(this.state.email, this.state.password)
            }>
            Enter
          </ButtonPet>
          <TouchableOpacity onPress={this.handleChangeScreen}>
            <Text style={styles.linkStyle}>Click here to sign up!</Text>
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
    signIn: (email, password) =>
      dispatch(AuthRedux.authRequest(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
