//components
import TodoItem from "./components/todoItem/todoItem.js"

//styling
import './App.css';



function App() {

  return (
    <div className="root">
      <ul>
        <li>
          <TodoItem name="Do dishes" date="today" description="do dishes" />
        </li>
        <li>
          <TodoItem name="Do homework" date="tomorrow" description="do homework for class" />
        </li>
        <li>
          <TodoItem name="watch video" date="later" description="watch react video" />
        </li>
      </ul>
    </div>
  );
}

export default App;
