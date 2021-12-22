import "./styles.css";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AddTaskForm from "./Components/AddTaskForm";
import Login from "./Components/Login";
import ShowContext from "./Components/Context";
import isloginContext from "./Components/Context";
import { createStore } from "redux";
import loginReducer from "./Redux";

export default function App() {
  const store = createStore(
    loginReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  const [login, setLogin] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      Name: "Doctors Appointment",
      Day: "Feb 5th at 2:30pm",
      Reminder: true,
      Username: "Vishal",
      Password: 9898
    },
    {
      id: 2,
      Name: "Meeting  at VNSGU!!!!",
      Day: "Feb 6th at 1:30pm",
      Reminder: true,
      Username: "RAj",
      Password: 8306
    },
    {
      id: 3,
      Name: "Do Coding Everyday!!",
      Day: "Feb 17th at 12:00pm",
      Reminder: false,
      Username: "JAy",
      Password: 8523
    }
  ]);
  const delTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, Reminder: !task.Reminder } : task
      )
    );
  };

  const AddTask = (task) => {
    //console.log(task);
    const id = Math.floor(Math.random() * 500) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const Onlogin = (user) => {
    console.log(user);
    const isExists = tasks.filter(
      (task) => task.Username === user.uname && task.Password === user.password
    );
    console.log(isExists);
    if (isExists) {
      console.log("Logged in ");
    } else {
      console.log("Invalid Username or Password");
    }
  };

  return (
    <Router>
      <div className="container">
        <ShowContext.Provider value={showAddTask}>
          <isloginContext.Provider value={login}>
            <Header
              onBtnAdd={() => setShowAddTask(!showAddTask)}
              onloginClick={() => setLogin(!login)}
            />
          </isloginContext.Provider>
        </ShowContext.Provider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTaskForm onAdd={AddTask} />}
                {login && <Login onbtnlogin={Onlogin} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={delTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No Task To Show"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
