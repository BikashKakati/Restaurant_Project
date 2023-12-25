import { useState } from "react";
import { useFetch } from "../../../hook/useFetch"
import {MapPinIcon} from "@heroicons/react/24/solid"
import SearchResultCard from "./SearchResultCard";
import SearchBar from "./SearchBar";

function SearchSection(){
    const {data, loading} = useFetch("list.php?a=list");
    const [query, setQuery] = useState("");
    const {data:searchResults, loading:searching} = useFetch(`filter.php?c=${query}`);

    return(
        <div className="relative flex items-center text-slate-500 h-12 bg-white rounded-xl">
            <div className="h-full w-64 rounded-xl flex items-center">
                <MapPinIcon className="h-6 w-6 ml-2 text-red-500"/>
                <select className="w-full h-full px-3 py-2 rounded-xl outline-0">
                    {
                        !loading && data?.meals?.map((place,index)=>{
                            return <option key={index} value={place.strArea}>{place.strArea}</option>
                        })
                    }
                </select>
            </div>
            <div className="w-0.5 h-6 bg-zinc-300"></div>
            <SearchBar setQuery = {setQuery}/>
            {
                searchResults.meals?.length && 
                (<SearchResultCard searchResults = {searchResults.meals}/>)
            }
            
        </div>
    )
}
export default SearchSection