import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{color:"white",fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,}}>Daily Diet Plan</Text>
      <View style={styles.mealContainer}>
        <Text style={styles.mealTitle}>Breakfast</Text>
        <Text style={styles.mealDescription}>
          - Oatmeal with fruits{'\n'}
          - Whole grain toast with avocado{'\n'}
          - Greek yogurt
        </Text>
      </View>
      <View style={styles.mealContainer}>
        <Text style={styles.mealTitle}>Lunch</Text>
        <Text style={styles.mealDescription}>
          - Grilled chicken breast{'\n'}
          - Quinoa salad{'\n'}
          - Steamed vegetables
        </Text>
      </View>
      <View style={styles.mealContainer}>
        <Text style={styles.mealTitle}>Dinner</Text>
        <Text style={styles.mealDescription}>
          - Baked salmon{'\n'}
          - Brown rice{'\n'}
          - Mixed greens salad
        </Text>
      </View>
      <View style={styles.mealContainer}>
        <Text style={styles.mealTitle}>Snacks</Text>
        <Text style={styles.mealDescription}>
          - Fresh fruits{'\n'}
          - Nuts{'\n'}
          - Hummus with carrot sticks
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bd7306',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mealContainer: {
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  mealTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mealDescription: {
    fontSize: 16,
  },
});
