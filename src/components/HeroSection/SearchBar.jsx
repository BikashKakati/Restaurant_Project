function SearchBar(){
    return(
        <div className="flex items-center text-slate-500 h-12 bg-white rounded-xl">
            <div className="h-full w-64 rounded-xl">
                <select id="select-state" className="w-full h-full px-3 py-2 rounded-xl outline-0">
                    <option>Indian</option>
                    <option>Chinese</option>
                </select>
            </div>
            <div className="w-0.5 h-6 bg-zinc-300"></div>
            <div className="h-full w-128 rounded-xl">
                <input type="text" placeholder="search by name...." className="w-full h-full px-3 py-2 rounded-xl outline-0"/>
            </div>
        </div>
    )
}
export default SearchBar