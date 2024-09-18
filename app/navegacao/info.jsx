import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Sobre = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Substitua pela URL da sua imagem de perfil
          style={styles.profileImage}
        />
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
    backgroundColor: '#f0f4f8',
  },
  profileContainer: {
    marginBottom: 20,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, 
    borderWidth: 3,
    borderColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
});

export default Sobre;
