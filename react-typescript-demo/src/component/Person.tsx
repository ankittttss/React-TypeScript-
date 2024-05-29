type ObjectType = {
    name:{
        firstname:string,
        lastname:string
    }
}
export const Person = (name:ObjectType)=>{
    return(
        <div>
            <h2>{name.name.firstname} +  {name.name.lastname}</h2>
        </div>
    )
}