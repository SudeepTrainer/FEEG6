import "./style.css"
export default function MovieCard(props){
    const movie = props.data;
    return(
        <div className="card">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}/>
       </div>   
    )
}