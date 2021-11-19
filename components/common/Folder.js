import React from 'react';
import { View, Text, Image } from 'react-native';
import classes from '../../styles/homeStyles';

const Folder = (props) => {
  const { val } = props;
  return (
    <View style={classes.folderContainer}>
      <View>
        <Image
          style={classes.tinyLogo}
          source={
            val.type === 'folder'
              ? require('../../assets/folder.png')
              : require('../../assets/file.png')
          }
        />
        <Text>{val.name}</Text>
      </View>
    </View>
  );
};

export default Folder;
