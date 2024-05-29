type handleChange={
    value:string,
    HandleC:()=>void
}


export const Input = (props:handleChange)=>{
    return(
        <div>
            <input type="text" onChange={props.HandleC}/>
        </div>
    )
}