import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Calculadora from './pages/Calculadora';

const App = () => {
  return(
    <SafeAreaProvider>
        <Calculadora/>
        <StatusBar style="auto"/>
    </SafeAreaProvider>
  );
}


export default App;