import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 11,
    alignItems: 'center',
    marginVertical: 20,
  },
  cardHolder: {
    flexBasis: '46%',
    height: '25%',
    flexDirection: 'row',
  },
  favoriteCharacterText: {
    flex: 1,
    fontSize: 23,
    fontFamily: 'Bangers-Regular',
    alignSelf: 'center',
    padding: 14,
    color: 'blue',
  },
  profileIcon: {
    borderRadius: 475,
    backgroundColor: 'white',
    marginVertical: 32,
  },
  icon: {
    marginTop: 15,
    alignSelf: 'flex-start',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;
