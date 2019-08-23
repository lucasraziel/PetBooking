import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 50
  },
  image: {
    width: 85,
    height: 85
  },
  logoText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 50,
    color: '#fff',
    marginTop: 0,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    marginLeft: 10
  },
  inputStyle: {
    borderRadius: 5,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    minWidth: '70%',
    marginTop: 20
  },
  buttonStyle: {
    marginTop: 40,
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
