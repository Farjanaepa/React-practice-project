import Counter from './Counter'
import './App.css'
import Batsman from './Batsman'
import Users from './Users'


function App() {

  function handleClick(){
    alert('i am Clicked')
  }

  const handleClick3= () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h1>Hellow</h1>
      <Users> </Users>
      <Batsman></Batsman>

      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={function handleClick2(){
        alert('clicked 2')
      }}>Click me 2</button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => alert('click 4')}>Click me 4</button>
      <button onClick={() => handleAdd5(7)}>Click add 5</button>
    </>
  )
}

export default App
