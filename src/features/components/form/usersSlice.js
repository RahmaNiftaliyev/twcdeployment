import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
  sortComparer: (preUser, nextUser) => preUser.id.localeCompare(nextUser.id)
});

const initialState = {
  error: null,
  status: 'idle',
  checked: false,
  currentUser: {},
  users: {
    ids: [],
    entities: {
      id1: {}
    }
  }
};



const usersSlice = createSlice(sliceInvoker());

function sliceInvoker() {
  return {
    name: 'users',
    initialState,
    reducers: {
      setCurrentUser: (state, action) => {
        state.currentUser = action.payload;
      },
      setUsers: (state, action) => {
        usersAdapter.setAll(state, action.payload);
      },
      setChecked: (state, action) => {
        state.checked = action.payload;
      }
    },
    extraReducers: {}
  };
}

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectAllUserIds
} = usersAdapter.getSelectors((state) => state.users.users);
export default usersSlice.reducer;
