import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from '../../styles/commonStyles';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('CarsList')}>
        <Text style={styles.mainTitle}>File System</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/menu.png')}
          style={styles.menu}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
