class OMDB {

    constructor(){
        this.key='c849bd44';
    }
 
    async getMovies(){
        const movieResponse= await fetch(`https://www.omdbapi.com/?apikey=${this.key}&s=movie
        `);
        const seriesResponse= await fetch(`https://www.omdbapi.com/?apikey=${this.key}&s=new
        `);

        const movieResults= await movieResponse.json();
        const seriesResults= await seriesResponse.json();
        return {
           movie: movieResults.Search,
           series: seriesResults.Search
        }
    }

    async movieInfo(id){
        
        const response = await fetch(`https://www.omdbapi.com/?apikey=${this.key}&i=${id}
        `);
        const results =  await response.json();
        return results;
    }

    async search(userText){
        const response = await fetch(`https://www.omdbapi.com/?apikey=${this.key}&s=${userText}
        `);
        const results =  await response.json();
        
        return results.Search;
    }
}