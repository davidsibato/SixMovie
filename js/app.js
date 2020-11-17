//init API
const omdb= new OMDB();

//Init ui
const ui= new UI();

// getting movies

document.addEventListener('DOMContentLoaded', getMoive);

// serach movies
document.getElementById('searchForm').addEventListener('submit', searchMovie);





// get movies functions

function getMoive(){
    // request api
    
    omdb.getMovies().then(results=>{
        console.log(results.movie);
       ui.showMovies(results.movie);
       ui.showSeries(results.series);
       
    } ).catch(err=>{
        console.log(err);
    })
}
//search movie function
function searchMovie(e){
    const inputText=document.querySelector('.search');
    //get input
    const userText= inputText.value;

    //make call to API
    omdb.search(userText).then(results=>{
        ui.showSearch(results);
    }).catch(err=>{
        console.log(err)
    });

    e.preventDefault();
}


 // movie clicked

 function movieClicked(id){
     sessionStorage.setItem('movieID', id);
     location.assign('./movie.html');
     return false;

 }


 //movie Info

 function movie_Info(){
     let id= sessionStorage.getItem('movieID');
     
     // make a call to OMDB API

     omdb.movieInfo(id).then(results=>{

        ui.showInfo(results);
     }).catch(err=>{

        console.log(err);
     })
 }