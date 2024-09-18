import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sobre = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileImage}>😎</Text>
      </View>
      <Text style={styles.title}>Kauã Fonseca Vieira</Text>
      <Text style={styles.subtitle}>Desenvolvedor Mobile</Text>
      <Text style={styles.description}>
        Olá! Sou apaixonado por desenvolvimento mobile e estou constantemente aprendendo e aprimorando minhas habilidades em React Native. Busco sempre criar aplicativos com designs modernos, funcionais e intuitivos.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#eaeaea', 
  },
  profileContainer: {
    marginBottom: 20,
    borderRadius: 100, 
    backgroundColor: '#ffffff', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, 
    padding: 10, 
  },
  profileImage: {
    fontSize: 100, 
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    letterSpacing: 1, 
  },
  subtitle: {
    fontSize: 20,
    color: '#555',
    marginBottom: 24,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff', 
    borderRadius: 10, 
    paddingVertical: 15, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default Sobre;
