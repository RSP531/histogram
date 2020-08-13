import React, { useState } from 'react';
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
  // ActionSheetProps,
  useActionSheet
} from '@expo/react-native-action-sheet';
// import ShowActionSheetButton from './ShowActionSheetButton';

const SpecialButton = ({ title, onSelection }) => {
  const { showActionSheetWithOptions } = useActionSheet();

  const showActionSheet = () => {
    const options = ['Edit', 'Delete', 'Cancel'];
    const destructiveButtonIndex = 1;
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
        if (buttonIndex === 1) {
          onSelection(buttonIndex);
        } else if (buttonIndex === 0) {
          console.log('Go to the Edit Screen', buttonIndex)
        }
      },
    );
  }

  return (
    <View>
      <Button
        title={title}
        onPress={showActionSheet}>
        <Text>
          {title}
        </Text>
      </Button>
    </View>
  )
}

const SettersSetProblem = () => {
  const { showActionSheetWithOptions } = useActionSheet();
  const [selectedIndex, updateSelectedIndex] = useState(null);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <SpecialButton
        title='Submit'
        onSelection={() =>
          showActionSheetWithOptions(
            {
              title: 'Are you sure?',
              message: 'Deleting this set will erase it forever for everyone on the app.',
              options: ['Delete', 'Cancel'],
              destructiveButtonIndex: 0,
              cancelButtonIndex: 1,
              tintColor: '#22BFAC'
            }, buttonIndex => {
              if (buttonIndex === 0) {
                console.log('Delete a route permanently')
              }
              updateSelectedIndex(selectedIndex)
            }
          )
        }
      />
    </View>
  )
}



const ConnectedAppTwo = connectActionSheet(SettersSetProblem);

export default class SettersActionButton extends React.Component {
  render() {
    return (
      <ActionSheetProvider>
        <ConnectedAppTwo />
      </ActionSheetProvider>
    );
  }
}