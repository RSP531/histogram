import * as React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import {
  ActionSheetProvider,
  connectActionSheet,
  ActionSheetProps,
  useActionSheet
} from '@expo/react-native-action-sheet';
import ShowActionSheetButton from './ShowActionSheetButton';


const App = () => {
  const { showActionSheetWithOptions } = useActionSheet();

  const _onOpenActionSheet = () => {
    // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
    const options = ['Delete Profile Picture', 'Select A New Profile Picture', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;
    const tintColor = '#22BFAC';

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        tintColor,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          console.log('Delete a Profile Photo', buttonIndex)
        } else if (buttonIndex === 1) {
          console.log('Upload a new Profile Photo', buttonIndex)
        }
      },
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title='submit' onPress={_onOpenActionSheet} />
    </View>
  )
}

const ConnectedAppTwo = connectActionSheet(App);

export default class AppContainer extends React.Component {
  render() {
    return (
      <ActionSheetProvider>
        <ConnectedAppTwo />
      </ActionSheetProvider>
    );
  }
}