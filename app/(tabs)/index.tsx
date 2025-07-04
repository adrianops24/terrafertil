import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles as styles } from '../../styles/globalStyles';

const CalculatorScreen = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigation();

  const buttons = [
    ['7', '8', '9', '+'],
    ['4', '5', '6', 'x'],
    ['1', '2', '3', '/'],
    ['0', '.', ',', '-'],
    ['c', 'ce', 'del', '='],
  ];

  const handlePress = (val: string) => {
    if (val === 'c' ) return setValue('');
    setValue(value + val);
  };

  const handlepres = (val: string) => {
    if (val === 'ce' ) return setValue('');
    setValue(value + val);
  };
  const finalizeSale = async () => {
    if (!value) return;

    try {
      await fetch('https://script.google.com/macros/s/AKfycbxAgHSf85U1Z8Xcq2oBGUJlTeXbod1MS-iR8WrU1zOrei2f7nT7lcUoN4a_Wi0FKGHz/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ valor: parseFloat(value) })
      });
      Alert.alert('Sucesso', 'Venda salva com sucesso!');
      setValue('');
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível salvar a venda.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
     

      <View style={styles.display}>
        <Text style={styles.displayText}>{value}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        {buttons.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity key={btn} style={styles.button} onPress={() => handlePress(btn)}>
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.finalizeBtn} onPress={finalizeSale}>
        <Text style={styles.finalizeText}>Finalizar Venda</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CalculatorScreen;