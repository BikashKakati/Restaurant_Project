import { ChevronUpIcon } from '@heroicons/react/24/outline'

function UpArrow() {
    function moveToUp() {
        window.scroll(0, 0);
    }
    return (
        <div
            className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-red-500 text-center fixed  right-3 bottom-24 md:bottom-5 flex justify-center items-center cursor-pointer z-10 hover:bg-red-600"
            onClick={moveToUp}>
            <ChevronUpIcon className="text-zinc-900 h-8 w-8" />
        </div>
    )
}

export default UpArrow