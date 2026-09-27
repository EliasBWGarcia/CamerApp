// Catches crashes in a single group's screen so the rest of the app keeps working.
import { Component } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export class GroupErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.warn('Group screen crashed:', error);
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>This group’s screen crashed 🙈</Text>
        <Text style={styles.message}>{error.message}</Text>
        <Pressable
          style={styles.button}
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
        >
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 16 },
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center' },
  message: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#b91c1c',
    textAlign: 'center',
    backgroundColor: '#fee2e2',
    padding: 12,
    borderRadius: 8,
  },
  button: { backgroundColor: '#111827', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 10 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
});
