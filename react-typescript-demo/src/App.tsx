import './App.css';
import { Button } from './component/Button';
import { Greet } from './component/Greet';
import { Heading } from './component/Heading';
import { Input } from './component/Input';
import { Oscar } from './component/Oscar';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';
import { Status } from './component/Status';
function App() {
  const Personn = {
    firstname:"Ankit",
    lastname:"Saini"
  }

  const arr = [
    {
      first:"Ankit",
      last:"Saini",
    },
    {
      first:"Ram Chaurasia",
      last:"Saini",
    },
    {
      first:"Sushant",
      last:"Pandey",
    }
  ];

  const status = {
    fetched:"successfully"
  }

  return (
    <div className="App">
      <Greet name='Greet' count={10}/>
      <Person name={Personn}/>
      <PersonList name={arr}/>
      <Status name="fetched"/>
      <Heading>
        Hi
      </Heading>

      <Oscar>
        <Heading>
          Oscar Goes to Leonardo 
        </Heading>
      </Oscar>

      <Button handleClick={()=>{console.log('hey')}} handleClickEvent={(event)=>{console.log("hey")}}/>
      <Input value='' HandleC={(event)=>console.log(event)}/>
    </div>
  );
}

export default App;
