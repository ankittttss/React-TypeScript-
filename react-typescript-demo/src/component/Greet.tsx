type GreetProps = {
    name:string;
    count:number
}

export const Greet = (props:GreetProps)=>{
    return(
        <div>
            <h1>Welcome {props.name} and {props.count}</h1>
        </div>
    )
}