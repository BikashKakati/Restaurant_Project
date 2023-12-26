// FIX ME --> Debounce cannot work properly..
// FEATURE ---> Search reslut box display all results. made a show less button

import { useEffect, useState } from "react";
import SearchResultCard from "./SearchResult/SearchResultCard";
import SearchBar from "./SearchInputs/SearchBar";
import { fetchApiData } from "../../../services/Api";
import SelectOptionBar from "./SearchInputs/SelectOptionBar";

function SearchSection() {
    const [query, setQuery] = useState("");
    const [searching, setSearching] = useState(false);
    const [searchResults, setSearchResult] = useState([]);


    useEffect(() => {
        let subscribe = true;
        if(subscribe && query){
            fetchSearchData(query)
            .then((data)=>setSearchResult(data))
        }else{
            setSearchResult([]);
        }
        setSearching(false);

        return()=>{subscribe = false}
    }, [query])

    async function fetchSearchData(queryData) {
        try {
            const res = await fetchApiData(`filter.php?c=${queryData}`);
            return res;
        } catch (err) {
            console.log(err, "error in searching data")
        }
    }

    return (
        <div className="relative flex items-center text-slate-500 h-12 bg-white rounded-xl">
            <SelectOptionBar setSearchResult={setSearchResult} setSearching={setSearching}/>
            <div className="w-0.5 h-6 bg-zinc-300"></div>
            <SearchBar setQuery={setQuery} setSearching={setSearching} setSearchResult={setSearchResult}/>
            {
                searching && (<SearchResultCard searching={searching} />)
            }
            {
                searchResults.meals?.length &&
                (<SearchResultCard searchResults={searchResults.meals} />)
            }

        </div>
    )
}
export default SearchSection