import React, { useEffect, useState } from 'react';
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { editFolder } from '../../redux/features/folderSlice';
import { useDispatch } from 'react-redux';
import styles from '../../styles/commonStyles';

const Rename = (props) => {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const [tab, setTab] = useState(0);
  const [renamedValue, setRenamedValue] = useState('');
  const { renameVisible, hide, id, item } = props;
  useEffect(() => {
    if (flag === true) {
      hide(false);
      setFlag(false);
    }
  }, [flag]);

  const handleSubmit = () => {
    dispatch(
      editFolder({
        id: id,
        data: { id: id, name: renamedValue, type: item?.type },
      })
    );
    setRenamedValue('');
    hide(false);
    setFlag(false)
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={renameVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.tabContainer}>
              <TouchableOpacity style={styles.tab}>
                <Text style={{ color: tab === 1 ? 'green' : 'black' }}>
                  Rename File
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setRenamedValue(text)}
                value={renamedValue}
                placeholder="Enter new name"
              />
            </View>
            <View style={styles.btnContainer} style={{ marginBottom: 10 }}>
              <Pressable style={styles.btn}>
                <Text style={styles.textStyle} onPress={handleSubmit}>
                  Submit
                </Text>
              </Pressable>
            </View>
            <View>
              <Pressable onPress={() => setFlag(true)}>
                <Text>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// const styles = StyleSheet.create({
//   inputContainer: {
//     display: 'flex',
//     width: '100%',
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   tabContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'space-around',
//     // flex: 1,
//   },

//   tab: {
//     padding: 10,
//     borderRadius: 20,
//   },

//   modalView: {
//     // margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 22,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     width: '80%',
//     // minHeight: '30%',
//   },

//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//     marginTop: 50,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },

//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   btnContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   btn: {
//     borderRadius: 20,
//     elevation: 1,
//     backgroundColor: '#2196F3',
//     minWidth: 100,
//     padding: 6,
//     marginTop: 10,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

export default Rename;
