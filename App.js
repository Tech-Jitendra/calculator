import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import { Main } from './src/Pages/main';
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NativeBaseProvider>
          <View style={styles.container}>
            <Main />
          </View>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
