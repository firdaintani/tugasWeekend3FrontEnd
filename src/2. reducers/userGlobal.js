const INITIAL_STATE  = {username : 'Seto', email : 'seto@mail.com'}

export default (state=INITIAL_STATE,action)=>{
    // switch(action.type){
    //     case "USER_LOGIN_SUCCESS" :
    //         return action.payload;
    //     default :
    if(action.type === 'UBAH_USER'){
         return {...INITIAL_STATE,username:action.payload}
    }
    else{
        return state;
    
    }
        
}