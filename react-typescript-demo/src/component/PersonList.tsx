type NameDefinition = {
  name:{
    first:string,
    last:string
  }[]
}

export const PersonList = (arr:NameDefinition)=>{
    return(
        <div>
         {arr.name.map((item)=>{
             return(
                <div>
                    <h2>{item.first} + {item.last}</h2>
                </div>
             )
         })}
         </div>
    )
}