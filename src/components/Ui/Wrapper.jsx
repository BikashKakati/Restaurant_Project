function Wrapper(props){
    return(
        <div className={`max-w-200 mx-auto my-0 px-5 ${props ? props.className:""}`}>
            {props.children}
        </div>
    )
}
export default Wrapper