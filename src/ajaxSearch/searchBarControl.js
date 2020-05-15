import React from 'react'
import SearchBar from './searchbar'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';

const imagePath = "https://image.tmdb.org/t/p/w185";
class SearchBarControl extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            movieArtr : []
        }

        this.performSearchItem("Ant")
        this.performSearchItem = this.performSearchItem.bind(this);
    }

    performSearchItem(searchItem) {
        console.log("perform search : ", searchItem)
        const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchItem;
        $.ajax({
            url: searchURL,
            success: (searchResult) => {
               // console.log("Fetch data Successfully");
                const result = searchResult.results;
               // console.log("result : ", result);
                var movieArray = [];

                result.forEach((movie) => {
                    movie.poster_src = imagePath + movie.poster_path;
                    //console.log("Image Path : ", movie.poster_src)
                    movieArray.push(movie);
                   // console.log(movie.src)
                })

                this.setState({ movieArr: movieArray })
            }
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    handleSearch={(event) => { this.performSearchItem(event.target.value) }}></SearchBar>
                <table>
                    <tbody>
                        {(this.state.movieArr || []).map(item => (
                            <tr key={item.id}>
                                <td>
                                    <img alt="poster" width="120" src={item.poster_src} />
                                </td>
                                <td>
                                    <h3>{item.title}</h3>
                                    <h5>{item.id}</h5>
                                    <p>{item.overview}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )
    }
}
export default SearchBarControl;