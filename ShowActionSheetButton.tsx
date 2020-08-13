import * as React from 'react';
import { Text, View, TextStyle, ViewStyle, findNodeHandle, Button } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { ActionSheetOptions } from '@expo/react-native-action-sheet';

interface Props {
  title: string;
  showActionSheetWithOptions: (
    options: ActionSheetOptions,
    callback: (buttonIndex: number) => void
  ) => void;
  onSelection: (index: number) => void;
  withTitle?: boolean;
  tintColor?: string;
  withMessage?: boolean;
  withSeparators?: boolean;
  useModal?: boolean;
}

// A custom button that shows examples of different share sheet configurations
export default class ShowActionSheetButton extends React.PureComponent<Props> {
  static defaultProps = {
    withTitle: false,
    withMessage: false,
    withSeparators: false,
    onSelection: null,
    useModal: false,
  };

  _showActionSheet = () => {
    const {
      withTitle,
      withMessage,
      withSeparators,
      onSelection,
      showActionSheetWithOptions,
    } = this.props;

    // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
    const options = ['Edit', 'Delete', 'Cancel'];
    const tintColor = '#22BFAC';
    const title = withTitle ? 'Are you sure?' : undefined;
    const message = withMessage
      ? 'Deleting this set will erase it forever fro everyone on the app.'
      : undefined;
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        title,
        tintColor,
        message,
        showSeparators: withSeparators,
      },
      (buttonIndex: number) => {
        // Do something here depending on the button index selected
        onSelection(buttonIndex);
      }
    );
  };

  render() {
    const { title } = this.props;
    return (
      <View
        style={{
          margin: 6,
        }}>
        <Entypo.Button
          name="code"
          backgroundColor="#3e3e3e"
          onPress={this._showActionSheet}
        // ref={this._anchorRef}
        >
          <Text
            style={{
              fontSize: 15,
              color: '#fff',
            }}>
            {title}
          </Text>
        </Entypo.Button>
      </View>
    );
  }
}