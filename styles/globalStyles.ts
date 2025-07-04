import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#fff',
  secondary: '#4CAF50',
  accent: '#8B4513',
  text: '#333',
  border: '#ccc',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
  },
  display: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  displayText: {
    fontSize: 32,
    color: colors.text,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 24,
    color: colors.text,
  },
  finalizeBtn: {
    backgroundColor: colors.secondary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  finalizeText: {
    color: colors.primary,
    fontSize: 18,
  },
  navBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.accent,
    padding: 10,
    borderRadius: 10,
    zIndex: 10,
  },
  navBtnText: {
    color: colors.primary,
  },
  salesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    color: colors.secondary,
    fontSize: 16,
  },
  salesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  linkText: {
    color: colors.secondary,
    fontSize: 16,
  },
  saleItem: {
    padding: 10,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    fontSize: 16,
  },

buttonsContainer:{


}
});