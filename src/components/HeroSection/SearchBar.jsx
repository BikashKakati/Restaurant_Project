import { useFetch } from "../../hook/useFetch"
import {MapPinIcon} from "@heroicons/react/24/solid"
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"

function SearchBar(){
    const {data, loading} = useFetch("list.php?a=list");
    return(
        <div className="flex items-center text-slate-500 h-12 bg-white rounded-xl">
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
            <div className="h-full w-128 rounded-xl flex items-center">
                <MagnifyingGlassIcon className="h-5 w-5 ml-2 text-zinc-500" />
                <input type="text" placeholder="search by name...." className="w-full h-full px-3 py-2 rounded-xl outline-0"/>
            </div>
        </div>
    )
}
export default SearchBar