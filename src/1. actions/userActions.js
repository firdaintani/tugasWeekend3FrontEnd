export const fnUbahUser=(nama)=>{
    return {
        type : 'UBAH_USER', //tipe
        payload : nama  //payload : sesuatu yang dikirim
    }
}