import React, { useEffect, useState } from 'react';
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import AddFile from './AddFile';
import AddFolder from './AddFolder';
import styles from '../../styles/commonStyles';

const Dialog = (props) => {
  const [flag, setFlag] = useState(false);
  const [tab, setTab] = useState(0);
  const { modalVisible, close, navigation } = props;
  useEffect(() => {
    if (flag === true) {
      close(false);
      setFlag(false);
    }
  }, [flag]);

  const changeTab = (val) => {
    setTab(val);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.tabContainer}>
              <TouchableOpacity style={styles.tab}>
                <Text
                  onPress={() => changeTab(0)}
                  style={{ color: tab === 0 ? 'green' : 'black' }}
                >
                  Add Folder
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab}>
                <Text
                  onPress={() => changeTab(1)}
                  style={{ color: tab === 1 ? 'green' : 'black' }}
                >
                  Add File
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%' }}>
              {tab === 0 ? (
                <AddFolder close={close} />
              ) : (
                <AddFile close={close} />
              )}
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

export default Dialog;
