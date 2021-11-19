import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import classes from '../../styles/homeStyles';
import Folder from '../common/Folder';
import { useDispatch, useSelector } from 'react-redux';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
import Dialog from '../common/Dialog';
import { deleteFolder } from '../../redux/features/folderSlice';
import Rename from '../common/Rename';
import { LogBox } from 'react-native';

const HomePage = ({ navigation }) => {
  const data = useSelector((state) => state.folders);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [renameVisible, setRenameVisible] = useState(false);
  const [editable, setEditable] = useState('');
  const [item, setItem] = useState({});
  const [flag, setfFag] = useState(false);
  const [id, setId] = useState(null);
  const actionSheet = useRef();

  const showActionSheet = (item) => {
    actionSheet.current.show();
    setId(item.id);
    setItem(item);
  };

  const options = [
    'Rename',
    'Delete',
    <Text style={{ color: 'red' }}>Cancel</Text>,
  ];

  const handleAdd = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    if (editable === 'Delete') {
      dispatch(deleteFolder({ folderId: id }));
    } else if (editable === 'Rename') {
      setRenameVisible(true);
    }
  }, [flag]);

  useEffect(() => {
    LogBox?.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  return (
    <View style={classes.container}>
      <View style={classes.detailContainer}>
        <View style={classes.goBack}></View>
      </View>
      <View style={classes.itemContainer}>
        <FlatList
          data={data?.folders}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => showActionSheet(item)}>
              <Folder val={item} key={index} />
            </TouchableOpacity>
          )}
          snapToAlignment="start"
          decelerationRate="fast"
          // snapToInterval={Dimensions.get('window').height}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          numColumns={4}
        />
      </View>
      <View style={classes.imageContainer}>
        <TouchableOpacity onPress={handleAdd}>
          <Image
            style={classes.tinyLogo}
            source={require('../../assets/add.png')}
          />
        </TouchableOpacity>
      </View>
      <Dialog
        modalVisible={modalVisible}
        close={(val) => setModalVisible(val)}
        navigation={navigation}
      />
      <Rename
        id={id}
        item={item}
        renameVisible={renameVisible}
        hide={(val) => setRenameVisible(val)}
      />
      <ActionSheet
        ref={actionSheet}
        title={'Which one do you like ?'}
        options={options}
        cancelButtonIndex={2}
        destructiveButtonIndex={1}
        onPress={(index) => {
          setEditable(options[index]);
          setfFag(!flag);
        }}
      />
    </View>
  );
};

export default HomePage;
