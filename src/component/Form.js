import React from 'react'

function Form({setInputText,todos,setTodos,inputText}) {
  
  const inputTextHandler = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }
 const submitTodoHandler = (e) => {
   e.preventDefault();
   setTodos([
     ...todos, {
       text: inputText, completed: false, id: Math.random() * 1000
     }
   ])
}
    return (
    <form>
        <input value={ inputText } onChange={inputTextHandler} placeholder="ketikan sesuatu" />
        <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" onClick={submitTodoHandler}>Submit</button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">all</option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
          </select>
        </div>
      <h1>hii from form</h1>
    </form>
  );
}

export default Form;