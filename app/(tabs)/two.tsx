import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles as styles } from '../../styles/globalStyles';

type Venda = {
  id: string;
  valor: number;
  data: string;
};

const SalesScreen = () => {
  const navigation = useNavigation();
  const [sales, setSales] = useState<Venda[]>([]);
  const [loading, setLoading] = useState(false);

  const URL_SHEET = 'https://script.google.com/macros/s/AKfycbxAgHSf85U1Z8Xcq2oBGUJlTeXbod1MS-iR8WrU1zOrei2f7nT7lcUoN4a_Wi0FKGHz/exec'; // troque pela sua URL real

  useEffect(() => {
    setLoading(true);
    fetch(URL_SHEET)
      .then((res) => res.json())
      .then((data: Venda[]) => {
        setSales(data);
        setLoading(false);
      })
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar as vendas');
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }: { item: Venda }) => (
    <View style={styles.saleItem}>
      <Text>Valor: R$ {item.valor.toFixed(2)}</Text>
      <Text>Data: {item.data}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.salesHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.salesTitle}>Vendas do Dia</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AllSales')}>
          <Text style={styles.linkText}>Lista Completa</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={styles.secondary || '#4CAF50'} />
      ) : sales.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhuma venda registrada hoje.</Text>
      ) : (
        <FlatList
          data={sales}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </SafeAreaView>
  );
};

export default SalesScreen;