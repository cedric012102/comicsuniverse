import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  // switch header background color by character alignment
  container: alignment => ({
    flex: 1,
    flexDirection: 'column',
    backgroundColor: alignment === 'good' ? '#44BBFF' : '#900C3F',
  }),
  topContainer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'column',
    top: 50,
    left: 10,
    right: 10,
    height: 155,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  horizontalContainerA: {
    flex: 2,
    flexDirection: 'row',
  },
  horizontalContainerB: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  img: {
    width: 100,
    height: 100,
    marginTop: -25,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
  },
  Right: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15,
  },
  RightHeader: {
    fontSize: 25,
    fontFamily: 'Bangers-Regular',
  },
  Holder: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
  },
  Header: {
    display: 'flex',
    marginRight: 5,
  },
  Content: {
    maxWidth: 220,
  },
  BTextHeader: {
    fontSize: 16,
    fontFamily: 'Bangers-Regular',
  },
  BText: {
    fontSize: 18,
    fontFamily: 'Bangers-Regular',
    textAlign: 'center',
  },
  bottomContainer: {
    flex: 1,
    marginTop: 110,
    zIndex: -1,
    backgroundColor: '#e2e2e2',
  },
  bottomChild: {
    marginTop: 115,
    backgroundColor: '#ecf0f1',
    marginHorizontal: 10,
    borderRadius: 7,
    flex: 1,
  },
  bottomScrollView: {
    flex: 1,
    marginBottom: 10,
  },
  bottomCard: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 4,
  },
  bottomHeader: {
    fontSize: 18,
    fontFamily: 'Bangers-Regular',
    textAlign: 'center',
  },
  bottomCardHolder: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  addFavoritesText: {
    fontSize: 21,
    fontFamily: 'Bangers-Regular',
    color: 'red',
    alignSelf: 'center',
    marginTop: 15,
  },
});
