import { useRouter } from 'expo-router';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function MainIndex() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push('./bar')}>
        <Text style={styles.title}>go to bar</Text>
      </Pressable>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
