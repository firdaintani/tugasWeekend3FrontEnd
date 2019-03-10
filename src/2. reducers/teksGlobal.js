const INITIAL_STATE={jml_teks:0}

export default (state=INITIAL_STATE,action)=>{
    if(action.type==='COUNT_TEKS'){
        return {...INITIAL_STATE,jml_teks:action.payload}
    }

    return state
}