const INITIAL_STATE={todoCount:0}

export default (state=INITIAL_STATE,action)=>{
   if(action.type==='COUNT_TODO'){
       return{...INITIAL_STATE,todoCount:action.payload}
   } else{
        return state;
    }
}