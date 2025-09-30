import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View
    style={styles.container}>
      <Text
      style={styles.conteoStyle}>
        Conteo: 
        </Text>
      <View style={styles.conteoContainer}>
              <Text style={styles.conteoTexStyle}> 0 </Text>
      </View>
      <View>
         <Button title='CONTAR'/>
         <Button title='REINICIAR'/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    marginHorizontal: 16,
  },
conteoContainer: {
  marginVertical: 48,
  borderColor: '#636161',
  borderWidth: 2,
  alignItems: 'center',
  padding: 24,
  },
conteoStyle: {
  fontSize: 24,
  },
  conteoTexStyle: {
    fontSize: 36,
    color: 'red',
  }
});
