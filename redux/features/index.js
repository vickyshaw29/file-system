import { combineReducers } from '@reduxjs/toolkit';
import folderSlice from './folderSlice';

export default combineReducers({
  folders: folderSlice,
});
