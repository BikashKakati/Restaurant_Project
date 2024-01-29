// FIX ME --> Debounce cannot work properly..
// FEATURE ---> Search reslut box display all results. made a show less button

import { useEffect, useState } from "react";
import SearchResultCard from "./SearchResult/SearchResultCard";
import SearchBar from "./SearchInputs/SearchBar";
import SelectOptionBar from "./SearchInputs/SelectOptionBar";

function SearchSection() {
    
    const [searching, setSearching] = useState(false);
    const [searchResults, setSearchResult] = useState([]);

    return (
        <div className="max-w-145 w-full relative flex items-center text-slate-500 h-12 bg-white rounded-xl overflow-hidden">
            <SelectOptionBar setSearchResult={setSearchResult} setSearching={setSearching}/>
            <div className="w-0.5 h-6 bg-zinc-300"></div>
            <SearchBar setSearching={setSearching} setSearchResult={setSearchResult}/>
            {
                searching && (<SearchResultCard searching={searching} />)
            }
            {
                searchResults?.meals?.length &&
                (<SearchResultCard searchResults={searchResults?.meals} />)
            }

        </div>
    )
}
export default SearchSection