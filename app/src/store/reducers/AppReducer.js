import { createSlice } from '@reduxjs/toolkit'
export const appSlice = createSlice({
    name: "app",    
    initialState: {                                                 // Redux States
      data:null,  
    },
    reducers: {                                                     // Redux Actions || Functions
      setData :(state,action) =>{
        state.data = action.payload
      },
    },
  });
  
  /**------------------------------------------------------
   * Update APP Token
   */
  export const {
    setData
  } = appSlice.actions;
  
  /**------------------------------------------------------
   * Select APP Token
   */
  export const selectData = (state) => state.app.data;
  
  /**------------------------------------------------------
   * Reducer Export
   */
  export default appSlice.reducer;
  