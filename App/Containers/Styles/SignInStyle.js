import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginTop: 50,
    width: 235,
    height: 235
  },
  logoText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 60,
    color: '#fff',
    marginTop: 0,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4
  },
  inputStyle: {
    borderRadius: 5,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    minWidth: '70%',
    marginTop: 20
  },
  buttonStyle: {
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    minWidth: 145,
    minHeight: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  linkStyle: {
    marginTop: 30,
    fontSize: 26,
    fontFamily: 'JosefinSans-Regular'
  }
});
