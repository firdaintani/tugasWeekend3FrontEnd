import React from 'react';
import axios from 'axios'

class Homepage extends React.Component{
    state={movieList:[],error:''}

    searchMovie=()=>{
        var title = this.refs.movie_title.value
        var titleSplit= title.split(' ')
       
        if(titleSplit.length>1){
            title=titleSplit.join('+')
        }
        axios.get('http://www.omdbapi.com/?s='+title+'&apikey=43fb375f')
        .then((res)=>{
            if(res.data.hasOwnProperty("Error")){
                this.setState({error:res.data.Error})
            }else{
            this.setState({movieList: res.data.Search,error:''})}
            // alert('hasil')
            
        })
        .catch((err)=>{console.log(err)
            // alert('gagal')
            this.setState({error:'System error. Try again later'})

        })
       
    }

    renderMovieList=()=>{
            if(this.state.error!==''){
                return <h5>{this.state.error}</h5>
            } else{
                var list = this.state.movieList.map((val)=>{
                  
                    return (
                        <div className="card col-md-3 mr-5 mt-3" style={{width: '18rem'}}>
                        <img className="card-img-top" src={val.Poster} alt="Card" />
                        
                        <div className="card-body">
                            <h4 className="card-text">{val.Title}</h4>
                            <p className="card-text">{val.Type}</p>
                            <p className="card-text">{val.Year}</p>
                        </div>
                    </div>
                    )
                })
                return list
            }
        }
    render(){
        return (
            <div className='container'>
                <h1>Selamat Datang di Movie</h1>
                <div className='row'>
                    <div className='col-md-4'>
                        <input type='text' placeholder='Search movie title' ref='movie_title' className='form-control'></input>
                      
                    </div>
                    <div className='col-md-2'>
                        <input type='button' value='Search' className='btn btn-primary' onClick={this.searchMovie}></input>
                    </div>
                    
                </div>
                <div className='row' style={{marginTop:'50px'}}>
                    {this.renderMovieList()}     
                 </div>
            </div>
        )
    }
    
}


export default Homepage