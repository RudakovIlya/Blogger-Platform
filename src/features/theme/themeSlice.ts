import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IThemeType {
    theme: 'light' | 'dark'
}

const initialState: IThemeType = {
    theme: 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state, action: PayloadAction<'light' | 'dark'>) {
            state.theme = action.payload
        }
    }
})

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;