import React, { useState } from 'react'

function MovieList() {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState([])
    const [checkBox, setCheckBox] = useState(false)
    const [actived, setActived] = useState([])
    const [complete, setComplete] = useState([])
    const [activeCheck, setActiveCheck] = useState(false)
    const [completeCheck, setCompleteCheck] = useState(false)
    const [allCheck, setAllCheck] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    
        let obj = {
            id : Date.now() , 
            value : value ,
            check : false
        }

        setTodos([...todos, obj])
        setValue("")
  

    }
    const handleChange = (e) => {
        setValue(e.target.value)
        
    }
    const handleCheckBox = (id) => {
        let checkTodo = todos.map((eachTodo) => {
            if(eachTodo.id === id){
                return {...eachTodo, check : !eachTodo.check}
            }
            return (eachTodo)

        
        })
        setTodos(checkTodo)
       
       
    }

    const handleDelete = (id) => {
        let deleted = todos.filter((elm) => {
            if (elm.id !== id){
                return {
                    ...elm
                }
            }
                
            
        })

        setTodos(deleted)
    }

    const handleActive = () => {
        let active = todos.filter((each) => {
            if(each.check === false){
                return{...each}
            }
            
        })
        setActived(active)
        setActiveCheck(true)
        setCompleteCheck(false)
        setAllCheck(false)
    }

    const handleCompleted = () => {
        let completed = todos.filter((each) => {
            if (each.check === true){
                return{
                    ...each
                }

            }
        })
        setComplete(completed)
        setCompleteCheck(true)
        setActiveCheck(false)
        setAllCheck(false)
    }

  const handleAll = () => {
    setTodos(todos)
    setAllCheck(true)
    setComplete(false)
    setActiveCheck(false)
  }

  const handleClear = () => {
    let clearCompleted = todos.filter((each) => {
        if(each.check === false){
            return{
                ...each
            }
            
        }
    })
    console.log(clearCompleted, " compleeteee")
    setTodos(clearCompleted)
  }

   

  return (
    <div className='container'>
        <div>
            <h1>MOVIE WATCH LIST!</h1>
            <form onSubmit={(e) => handleSubmit(e)} action="">
        <input value={value} onChange={(e) => handleChange(e)} className='input' type="text" placeholder='Enter the movie name' />

            </form>

        </div>
        <div>
            {

            activeCheck === true ? 
            actived?.map((elm) => {
                return(
                    <>
                    <div className=' value flex'>
                    <input checked = {elm?.check} className='check' onClick={() => handleCheckBox(elm?.id)}  type="checkbox" />
                    <h2 className = {`elm ${elm?.check === true ? "strike" : ""}`} >{elm?.value}</h2>
                    <h2 onClick={() => handleDelete(elm?.id)} className='cross'>X</h2>
                    </div>
                    <hr className='line'/>

                    </>

                )
            })
            :
            completeCheck=== true ? 
            complete?.map((elm) => {
                return(
                    <>
                    <div className=' value flex'>
                    <input checked = {elm?.check} className='check' onClick={() => handleCheckBox(elm?.id)}  type="checkbox" />
                    <h2 className = {`elm ${elm?.check === true ? "strike" : ""}`} >{elm?.value}</h2>
                    <h2 onClick={() => handleDelete(elm?.id)} className='cross'>X</h2>
                    </div>
                    <hr className='line'/>

                    </>

                )
            })
            :
           allCheck === true ? 
           todos?.map((elm) => {
            return(
                <>
                <div className=' value flex'>
                <input checked = {elm?.check} className='check' onClick={() => handleCheckBox(elm?.id)}  type="checkbox" />
                <h2 className = {`elm ${elm?.check === true ? "strike" : ""}`} >{elm?.value}</h2>
                <h2 onClick={() => handleDelete(elm?.id)} className='cross'>X</h2>
                </div>
                <hr className='line'/>

                </>

            )
        })
        :
        todos?.map((elm) => {
            return(
                <>
                <div className=' value flex'>
                <input checked = {elm?.check} className='check' onClick={() => handleCheckBox(elm?.id)}  type="checkbox" />
                <h2 className = {`elm ${elm?.check === true ? "strike" : ""}`} >{elm?.value}</h2>
                <h2 onClick={() => handleDelete(elm?.id)} className='cross'>X</h2>
                </div>
                <hr className='line'/>

                </>

            )
        })

            }     
        </div>
        <div>
            <button onClick={() => handleAll()}>All</button>
            <button onClick={() => handleActive()}>Active</button>
            <button onClick={() => handleCompleted()}>Completed</button>
            <button onClick={() => handleClear()}>Clear Completed</button>
        </div>
    </div>
  )
        
        }
export default MovieList