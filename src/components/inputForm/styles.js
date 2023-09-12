import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 35,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '90%',
    marginBottom: 5,
  },
  errorContainer: {
    flex: 1,
    paddingVerticalVertical: 5,
  },
  error: {
    fontSize: 12,
    paddingVertical: 5,
    color: 'red',
  },
});