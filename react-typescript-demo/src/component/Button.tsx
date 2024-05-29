type Handle ={
    handleClick:()=>void,
    handleClickEvent:(event:React.MouseEvent<HTMLButtonElement>)=>void
}

export const Button = (props:Handle)=>{
    return <button onClick={props.handleClick} >Hey</button>
}