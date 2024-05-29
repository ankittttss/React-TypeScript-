type handleChange={
    value:string,
    HandleC:(event:React.ChangeEvent<HTMLInputElement>)=>void
}


export const Input = (props:handleChange)=>{
    return(
        <div>
            <input type="text" onChange={props.HandleC}/>
        </div>
    )
}