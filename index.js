import { registerRootComponent } from 'expo';

// import App from './App';
import MyApp from './AppTwo';
// import AppContainer from './AppContainer';
import AppContainer from './ActionSheetApp';
// import { ActionSheetProvider } from '@expo/react-native-action-sheet'


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(AppContainer);
