import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './src/navigation/AppNavigation';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return <AppNavigation />;
}

export default App;
