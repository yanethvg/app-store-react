import React from "react";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <AddTodo></AddTodo>
      <VisibleTodoList></VisibleTodoList>
      <Footer></Footer>
    </div>
  );
}

export default App;
