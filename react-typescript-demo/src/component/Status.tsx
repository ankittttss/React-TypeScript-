type Propstatus = {
   name:'loading'|'error'|'fetched'
}

export const Status = (prop:Propstatus)=>{

    let message = "";

    if(prop.name === 'loading'){
        message = 'loading';
    }

    else if(prop.name === 'error'){
        message = 'error';
    }

    else{
        message = 'fetched'
    }
    return(
        <div>
            status - {message}
        </div>
    )
}