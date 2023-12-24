import {ChevronUpIcon} from '@heroicons/react/24/outline'

function UpArrow(){
    function moveToUP(){
        window.scroll(0,0);
    }
    return(
        <div className="w-20 h-20 rounded-full bg-red-500 text-center fixed bottom-5 right-3 flex justify-center items-center cursor-pointer z-10 hover:bg-red-600" onClick={moveToUP}>
            <ChevronUpIcon className="text-zinc-900 h-8 w-8"/>
        </div>
    )
}

export default UpArrow