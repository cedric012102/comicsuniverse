import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  img: {
    width: 140,
    height: 102,
    borderRadius: 8,
    borderColor: '#000',
    alignSelf: 'center',
    marginTop: -20,
  },
  textHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 6,
  },
  heading: {
    fontSize: 15,
    fontFamily: 'Bangers-Regular',
  },
  // change font color by alignment
  alignmentText: alignment => ({
    fontSize: 12,
    fontFamily: 'Bangers-Regular',
    color: alignment === 'good' ? '#44BBFF' : '#900C3F',
  }),
});
