import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { fetchApiData } from "../../../../services/Api";

function SearchBar({ setSearching,setSearchResult}) {
    const [query, setQuery] = useState("");

    useEffect(() => {
        let timer = setTimeout(()=>{
            if(!query.length){
                setSearching(false);
                return;
            };
            fetchSearchData(query)
            .then((data)=>setSearchResult(data))
            setSearching(false);
        },800)

        return()=>{
            clearTimeout(timer);
        }
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
        <div className="h-full w-2/3 rounded-xl flex items-center">
            <MagnifyingGlassIcon className="h-5 w-5 ml-2 text-zinc-500" />
            <input
                type="search"
                placeholder="search by name...."
                className="w-full h-full px-3 py-2 rounded-xl outline-0"
                onChange={(e) => {
                    setQuery(e.target.value);
                    setSearchResult([]);
                    setSearching(true);
                }}
            />
        </div>
    )
}

export default SearchBar