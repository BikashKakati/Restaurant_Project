import { debounce } from "../../../../utils/Debounce";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

function SearchBar({ setQuery, setSearching,setSearchResult}) {
    function handleSearch(e) {
        setQuery(e.target.value);
    }
    const betterHandleSearch = debounce(handleSearch, 1500);
    return (
        <div className="h-full w-128 rounded-xl flex items-center">
            <MagnifyingGlassIcon className="h-5 w-5 ml-2 text-zinc-500" />
            <input
                type="text"
                placeholder="search by name...."
                className="w-full h-full px-3 py-2 rounded-xl outline-0"
                onChange={(e) => {
                    betterHandleSearch(e);
                    setSearchResult([]);
                    setSearching(true);
                }}
            />
        </div>
    )
}

export default SearchBar