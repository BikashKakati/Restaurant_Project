import { useState, useEffect } from "react";
import { fetchApiData } from "../../../../services/Api";
import { useFetch } from "../../../../hook/useFetch"
import { MapPinIcon } from "@heroicons/react/24/solid"

function SelectOptionBar({ setSearching, setSearchResult }) {
    const { data, loading } = useFetch("list.php?a=list");
    const [selectedPlace, setSelectedPlace] = useState("");

    useEffect(() => {
        let subscribe = true;
        if (subscribe) {
            fetchSearchData()
                .then((data) => setSearchResult(data))
                setSearching(false);
        }
        return () => { subscribe = false }
    }, [selectedPlace])

    async function fetchSearchData() {
        try {
            const res = await fetchApiData(`filter.php?a=${selectedPlace}`);
            return res;
        } catch (err) {
            console.log(err, "error in searching data")
        }
    }


    return (
        <div className="h-full w-1/3 flex items-center">
            <MapPinIcon className="h-6 w-6 ml-2 text-red-500" />
            <select
                onChange={(e) => {
                    setSelectedPlace(e.target.value);
                    setSearching(true);
                    setSearchResult([]);
                }}
                value={selectedPlace}
                className="w-full h-full px-3 py-2 outline-0 bg-transparent"
            >
                {
                    !loading && data?.meals?.map((place,index) => {
                        return (
                            <option key={index} value={place.strArea}>{place.strArea}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default SelectOptionBar