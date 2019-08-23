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
  welcome: {
    fontSize: 80,
    fontFamily: 'JosefinSans-Regular',
    color: 'rgba(255,255,255,0.6)',
    marginTop: 50,
    marginBottom: 0
  },
  name: {
    fontSize: 50,
    fontFamily: 'JosefinSans-Regular',
    color: '#fff',
    marginTop: -30,
    marginBottom: 40
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
  }
});
