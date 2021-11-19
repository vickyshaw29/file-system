import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/features/folderSlice';
import styles from '../../styles/commonStyles';

const AddFolder = (props) => {
  const { close } = props;
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(
      add({
        id: JSON.stringify(Math.floor(Math.random() * 100)),
        type: 'folder',
        name: name,
      })
    );
    setName('');
    close(false);
  };
  return (
    <View style={styles.addContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Enter folder name"
      />
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn}>
          <Text style={styles.textStyle} onPress={handleSubmit}>
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddFolder;
