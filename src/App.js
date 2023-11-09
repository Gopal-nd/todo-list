import './App.css';
import {useState} from 'react'
function App() {
  const [list, setlist] = useState([]);
  const [task, settask] = useState();
  // const [status, setStatus] = useState(false);
  const addToList =()=>{
    const tasklist ={
      id:list.length ===0 ?1 :list[list.length - 1].id + 1,
      taskname:task,
      completed:false,
    }
    setlist([...list,tasklist])
  }
  const deleteTask =(id)=>{
    const newList = list.filter((list)=>{
      return list.id!==id
    })
    setlist(newList);
  }
  const done = (id) =>{
    setlist(list.map((tasklist)=>{
      if(tasklist.id===id){
        return {...tasklist,completed:true}
      }else{
        return task
      }
    })
    )
  }


  return (
    <div className="App">
    <div className="head">
      <input className='button' type="text" onChange={(e)=>settask(e.target.value)} />
      <button className='button' onClick={addToList}>ADD TASK</button>
    </div>
    <div className="lists">
    {
      list.map((task)=>{
        return (<div style={{backgroundColor:task.completed?"green":"white"}}>
        <h1 className='text'>{task.taskname}</h1>
        <button className='qw' onClick={()=>done(task.id)}>Completed</button>
        <button className='qw' onClick={()=>deleteTask(task.id)}>X</button>
        </div>)
      })
    }
    </div>
    </div>
  );
}

export default App;
