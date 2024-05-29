
type ChildrenProps = {
  children:string
}

export const Heading = (props:ChildrenProps)=>{
    return(
        <div>
           {props.children}
        </div>
    )
}

// Learning Variant of Children Props