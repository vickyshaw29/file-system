import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  folders: [
    {
      id: '1',
      type: 'folder',
      name: 'folder1',
    },
    {
      id: '2',
      type: 'file',
      name: 'file1',
    },
  ],
};

export const folderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    add: (state, action) => {
      return {
        folders: [...state.folders, action.payload],
      };
    },
    deleteFolder: (state, action) => {
      return {
        ...state,
        folders: state.folders.filter((e) => e.id !== action.payload.folderId),
      };
    },
    editFolder: (state, action) => {
      return {
        ...state,
        folders: state.folders.map((e) => {
          if (e.id === action.payload.id) {
            return {
              ...e,
              ...action.payload.data,
            };
          } else {
            return e;
          }
        }),
      };
    },
  },
});

export const { add, deleteFolder, editFolder } = folderSlice.actions;
export default folderSlice.reducer;
