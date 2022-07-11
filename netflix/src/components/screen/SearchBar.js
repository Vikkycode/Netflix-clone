// import React,{useState,useEffect} from 'react'
// import '../screen/SearchBar.css'
// import axios from '../../axios'
// import requests from '../../requests';
// const SearchBar=({isLargeRow})=>{
//     const [searchTerm,setSearchTerm]=useState("")
//     const [movies,setMovies] = useState([]);

//     let base_url= "https://image.tmdb.org/t/p/original/"

//     useEffect(()=>{
//         const fetchData= async ()=>{
//               try {
//                   let request = await axios.get(requests.fetchNetflixOriginals);
//                setMovies(request.data.results)
//                console.log(request.data.results)
//                return request; 
//               } catch (error) {
//                  console.log(error) 
//               }
//           }
//           fetchData()
//       },[])
  
//   return (
//     <div className='Search'>
//         <form>
//             <input type='text'
//              className="SearchInput"
//              onChange={(e) => console.log((e.target.value))}
//             />
//         </form>
//         <div>
//             {movies?.filter((value)=>{
//                 if(searchTerm == ""){
//                     return value
//                 } else if(value.title.toLowerCase().includes(searchTerm.toLowerCase())){
//                     return value;
//                 }
//             })
//             .map((value)=>{
//                 return (
//                     <div>
//                         <img
//                           key={value.id}
//                           src={`${base_url}${isLargeRow?value.poster_path:value.backdrop_path}`}

//                           alt='img'/>
//                         <h4>{value?.title || value?.name || value?.original}</h4>
//                     </div>
//                 )
//             })
//             } 
//         </div>
//     </div>
//   )
// }

// export default SearchBar