import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';

export async function getCharacters(charactersRetrieved) {
  var characterList = [];
  var snapshot = await firebase
    .firestore()
    .collection('favorites')
    .where('userId', '==', Auth().currentUser.uid)
    .get();
  snapshot.forEach(doc => {
    const characterDoc = doc.data();
    characterDoc.id = doc.id;
    characterList.push(characterDoc);
  });

  charactersRetrieved(characterList);
}

export async function deleteCharacter(character, deleteComplete) {
  firebase
    .firestore()
    .collection('favorites')
    .doc(character.id)
    .delete()
    .then(() => deleteComplete(character))
    .catch(error => console.log(error));
}
