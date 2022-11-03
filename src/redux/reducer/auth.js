const initStateRegister = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
   
}

// const registerReducer = (state, action) => {}
// state merupakan statenya
// action merupakan function untuk merubah valuenya sama seperti setState

export const registerReducer = (state = initStateRegister, action) => {
    if(action.type === 'SET_REGISTER') {
        return {
            ...state,
            name: action.value.name,
            email: action.value.email,
            password: action.value.password,
            password_confirmation: action.value.password,
        };
    }

    return state;
};

const initPhoto = {
    uri: '',
    type: '',
    name: '',
    isUploadPhoto: false,
};

export const photoReducer = (state = initPhoto, action) => {
    if(action.type === 'SET_PHOTO'){
        return {
            ...state,
            uri: action.value.uri,
            type: action.value.type,
            name: action.value.name,
        };
    }

    if(action.type === 'SET_UPLOAD_STATUS') {
        return {
            ...state,
            isUploadPhoto: action.value
        };
    }

    return state;
}