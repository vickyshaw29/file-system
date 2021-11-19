import { StyleSheet, Dimensions } from 'react-native';

const classes = StyleSheet.create({
  container: {
    zIndex: 100,
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 18,
    height:Dimensions.get('window').height,
    top:100,
  },

  detailContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
  goBack: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  btnText: {
    color: 'gray',
    fontSize: 14,
    fontSize:20
  },
  itemContainer:{
    marginTop:20,
    display:'flex',
    flexDirection:'row'
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
  folderContainer:{
   padding:15
  },
  imageContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height: Dimensions.get('window').height - 300
  }
});

export default classes;
