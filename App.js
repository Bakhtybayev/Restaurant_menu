import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {

	const [changingValue, setChangingValue] = useState('');
	const [courseValues, setCourseValues] = useState([]);

	const addValues = () => {
		setCourseValues([changingValue])
	}

  return (
    <View>
		<View>
			<TextInput placeholder="Zaibal..."
			 onChangeText={(text) => setChangingValue(text)} />
			<Button onPress={addValues} />
		</View>
		<View>
			{courseValues?.map((item) => {
			return <Text key={item}>{item}</Text>})}
		</View>
	 </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

// Extentions : React refactor
// ScrolView : alwaysBounceVertical={false}
// keyExtractor={(item) => {
// return item.id
// }}