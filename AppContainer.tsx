import * as React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  ActionSheetProvider,
  connectActionSheet,
  ActionSheetProps,
} from '@expo/react-native-action-sheet';
import ShowActionSheetButton from './ShowActionSheetButton';

type Props = ActionSheetProps;

interface State {
  selectedIndex: number | null;
  isModalOpen: boolean;
}

class App extends React.Component<Props, State> {
  state: State = {
    selectedIndex: null,
    isModalOpen: false,
  };

  _updateSelectionText = (selectedIndex: number) => {
    this.setState({
      selectedIndex,
    });
  };

  _renderSectionHeader = (text: string) => {
    return <Text style={styles.sectionHeaderText}>{text}</Text>;
  };

  _renderButtons() {
    const { showActionSheetWithOptions } = this.props;
    return (
      <View
        style={{
          alignItems: 'center',
        }}>
        {this._renderSectionHeader('Universal Options')}
        <ShowActionSheetButton
          title="Options Only (Delete Profile Photo)"
          onSelection={this._updateSelectionText}
          showActionSheetWithOptions={index => showActionSheetWithOptions({
            options: ['Delete Profile Picture', 'Select a New Profile Picture', 'Cancel'],
            destructiveButtonIndex: 0,
            cancelButtonIndex: 2,
            tintColor: '#22BFAC'
          }, buttonIndex => {
            if (buttonIndex === 0) {
              console.log('Delete a Profile Photo', buttonIndex)
            } else if (buttonIndex === 1) {
              console.log('Upload a new Profile Photo', buttonIndex)
            }
          })}
        />
        <ShowActionSheetButton
          title="Delete and cancel"
          // withTitle
          onSelection={this._updateSelectionText}
          showActionSheetWithOptions={index => showActionSheetWithOptions({
            options: ['Delete', 'Cancel'],
            destructiveButtonIndex: 0,
            cancelButtonIndex: 1,
            tintColor: '#22BFAC'
          }, buttonIndex => {
            if (buttonIndex === 0) {
              console.log('do this_ delete', buttonIndex)
            } else if (buttonIndex === 1) {
              console.log('do this_ select New', buttonIndex)
            }
          })}
        />
        <ShowActionSheetButton
          title="Title & Message"
          withTitle
          withMessage
          onSelection={this._updateSelectionText}
          showActionSheetWithOptions={showActionSheetWithOptions}
        />
        <ShowActionSheetButton
          title="Nested Action Sheets"
          onSelection={index => {
            if (index === 1) { //creates the sub action sheet if button is not 0 or 2 
              showActionSheetWithOptions(
                {
                  title: 'Are you sure?',
                  message: 'Deleting this set will erase it forever for everyone on the app.',
                  options: ['test', 'Delete', 'Cancel'],
                  destructiveButtonIndex: 0,
                  cancelButtonIndex: 1,
                  tintColor: '#22BFAC'
                },
                this._updateSelectionText
              );
            }
          }}
          showActionSheetWithOptions={showActionSheetWithOptions}
        />
        <ShowActionSheetButton
          title="Rob's Custom Button"
          onSelection={index => {
            // console.log("index", index)
            if (index === 0) {
              console.log('navigate to edit set screen')
            } else if (index === 1) {//creates the sub action sheet if button is not 0 or 2 
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
                  this._updateSelectionText
                }
              );
            }

          }}
          showActionSheetWithOptions={showActionSheetWithOptions}
        // showActionSheetWithOptions={index => showActionSheetWithOptions({
        //   options: ['Select a New Profile Picture', 'Delete Profile Picture', 'Cancel'],
        //   destructiveButtonIndex: 1,
        //   cancelButtonIndex: 2,
        //   tintColor: '#22BFAC'
        // }, buttonIndex => {
        //   if (buttonIndex === 0) {
        //     console.log('Delete a Profile Photo', buttonIndex)
        //   } else if (buttonIndex === 1) {
        //     console.log('Upload a new Profile Photo', buttonIndex)
        //   }
        // })}

        // showActionSheetWithOptions={index => {
        //   showActionSheetWithOptions(
        //     {
        //       title: 'Are you sure?',
        //       message: 'Deleting this set will erase it forever for everyone on the app.',
        //       options: ['Edit', 'test', 'Delete', 'Cancel'],
        //       destructiveButtonIndex: 2,
        //       cancelButtonIndex: 3,
        //       tintColor: '#22BFAC'
        //     },
        //     // test => {
        //     //   console.log(test)
        //     // }
        //     this._updateSelectionText
        //   );
        // }}
        />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.flex}>
        <ScrollView style={styles.flex} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.headerText}>
            {
              'Hello!\n\nThis is a simple example app to demonstrate @expo/react-native-action-sheet.'
            }
          </Text>
          {this._renderButtons()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const ConnectedApp = connectActionSheet<{}>(App);

export default class AppContainer extends React.Component {
  render() {
    return (
      <ActionSheetProvider>
        <ConnectedApp />
      </ActionSheetProvider>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingVertical: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  sectionHeaderText: {
    color: 'orange',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});