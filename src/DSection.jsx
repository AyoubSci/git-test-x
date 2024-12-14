/*

import React, { useState } from "react";
import DSTask from "./DSTask";
import "./DashboardCSS.css";

export default function DSection({ title, description }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", state: 0 },
    { id: 2, title: "Task 2", state: 0 },
  ]);

  const [addingTask, setAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    setAddingTask(true);
  };

  const handleSaveTask = (e) => {
    if (e.key === "Enter" && newTaskTitle.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, title: newTaskTitle.trim(), state: 0 }]);
      setAddingTask(false);
      setNewTaskTitle("");
    }
  };

  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "#EEEEEE",
        padding: "10px",
        margin: "25px 15px",
        borderRadius: "20px",
        boxShadow: "2px 2px 5px 0.1px black",
      }}
    >
      <p style={{ padding: "0px 20px", fontSize: "20px", fontWeight: "600", color: "black" }}>
        {title}
      </p>
      <p style={{ padding: "0px 10px", fontSize: "13px" }}>{description}</p>

      {tasks.map((task, index) => (
        <DSTask
          key={task.id}
          taskId={task.id}
          taskName={task.title}
          onDelete={deleteTask}
          isLast={index === tasks.length - 1} // True for the last task
          isFirst={index === 0} // True for the first task
        />
      ))}

      {addingTask && (
        <input
          type="text"
          autoFocus
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyDown={handleSaveTask}
          placeholder="Enter task name"
          style={{
            display: "block",
            width: "90%",
            margin: "10px auto",
            padding: "5px",
            backgroundColor:"white",
            border: "1px solid #1A4372",
            borderRadius: "5px",
          }}
        />
      )}
      <button
        className="AddTaskButton"
        style={{
          marginLeft: "10px",
          fontFamily: "Calibri",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
} 

*/


/*

import React, { useState } from "react";
import DSTask from "./DSTask";
import "./DashboardCSS.css";

export default function DSection({ title, description }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", state: 0 },
    { id: 2, title: "Task 2", state: 0 },
  ]);

  const [addingTask, setAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    setAddingTask(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTaskTitle.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, title: newTaskTitle.trim(), state: 0 }]);
      setAddingTask(false);
      setNewTaskTitle("");
    } else if (e.key === "Escape") {
      setAddingTask(false);
      setNewTaskTitle("");
    }
  };

  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "#EEEEEE",
        padding: "10px",
        margin: "25px 15px",
        borderRadius: "20px",
        boxShadow: "2px 2px 5px 0.1px black",
      }}
    >
      <p style={{ padding: "0px 20px", fontSize: "20px", fontWeight: "600", color: "black" }}>
        {title}
      </p>
      <p style={{ padding: "0px 10px", fontSize: "13px" }}>{description}</p>

      {tasks.map((task, index) => (
        <DSTask
          key={task.id}
          taskId={task.id}
          taskName={task.title}
          onDelete={deleteTask}
          isLast={index === tasks.length - 1} // True for the last task
          isFirst={index === 0} // True for the first task
        />
      ))}

      {addingTask && (
        <input
          type="text"
          autoFocus
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter task name"
          style={{
            display: "block",
            width: "90%",
            margin: "10px auto",
            padding: "5px",
            backgroundColor: "white",
            border: "1px solid #1A4372",
            borderRadius: "5px",
            outline: "none",
          }}
        />
      )}
      <button
        className="AddTaskButton"
        style={{
          marginLeft: "10px",
          fontFamily: "Calibri",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
} */
















  
  // export default function DSection({ tasks,sectionId,title, description}) {
  //   return(
  //     <div
  //       style={{
  //         backgroundColor: "#EEEEEE",
  //         padding: "20px",
  //         borderRadius: "10px",
  //         boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
  //         display: "flex",
  //         flexDirection: "column",
  //         gap: "10px", // Space between elements
  //         alignItems: "start",
  //       }}
  //       data-section-id={sectionId}
  //     >
  //       <p
  //         data-content={title}
  //         style={{
  //           fontSize: "20px",
  //           fontWeight: "600",
  //           color: "black",
  //           margin: "0 0 10px 0",
  //         }}
  //       >
  //         {title}
  //       </p>
  //       <p
  //         data-content={description}
  //         style={{
  //           fontSize: "14px",
  //           margin: "0 0 10px 0",
  //           color: "#555555",
  //         }}
  //       >
  //         {description}
  //       </p>
  //       <div>
  //         {tasks.map((task) => (
  //           <p
  //             key={task.id}
  //             data-content={task.title}
  //             style={{
  //               fontSize: "14px",
  //               margin: "5px 0",
  //             }}
  //           >
  //             {task.title}
  //           </p>
  //         ))}
  //       </div>
  //     </div>

    //   const [tasks, setTasks] = useState([
    //     { id: 1, title: "Task 1", state: 0 },
    //     { id: 2, title: "Task 2", state: 0 },
    //   ]);
    
    //   const [addingTask, setAddingTask] = useState(false);
    //   const [newTaskTitle, setNewTaskTitle] = useState("");
    
    //   const deleteTask = (taskId) => {
    //     setTasks(tasks.filter((task) => task.id !== taskId));
    //   };
    
    //   const handleAddTask = () => {
    //     setAddingTask(true);
    //   };
    
    //   const handleKeyDown = (e) => {
    //     if (e.key === "Enter" && newTaskTitle.trim()) {
    //       setTasks([...tasks, { id: tasks.length + 1, title: newTaskTitle.trim(), state: 0 }]);
    //       setAddingTask(false);
    //       setNewTaskTitle("");
    //     } else if (e.key === "Escape") {
    //       setAddingTask(false);
    //       setNewTaskTitle("");
    //     }
    // };
    
    //   return (
    //     <div
    //       style={{
    //         width: "300px",
    //         backgroundColor: "#EEEEEE",
    //         padding: "10px",
    //         margin: "25px 15px",
    //         borderRadius: "20px",
    //         boxSizing: "border-box",
    //         boxShadow: "2px 2px 5px 0.1px black",
    //         height: "auto", // Ensures it grows only based on content
    //       }}
    //     >
    //       <p style={{ padding: "0px 20px", fontSize: "20px", fontWeight: "600", color: "black" }}>
    //         {title}
    //       </p>
    //       <p style={{ padding: "0px 10px", fontSize: "13px" }}>{description}</p>
    
    //       {tasks.map((task, index) => (
    //         <DSTask
    //           key={task.id}
    //           taskId={task.id}
    //           taskName={task.title}
    //           onDelete={deleteTask}
    //           isLast={index === tasks.length - 1} // True for the last task
    //           isFirst={index === 0} // True for the first task
    //         />
    //       ))}
    
    //       {addingTask && (
    //         <input
    //           type="text"
    //           autoFocus
    //           value={newTaskTitle}
    //           onChange={(e) => setNewTaskTitle(e.target.value)}
    //           onKeyDown={handleKeyDown}
    //           placeholder="Enter task name"
    //           style={{
    //             display: "block",
    //             width: "90%",
    //             margin: "10px auto",
    //             padding: "5px",
    //             backgroundColor: "white",
    //             border: "1px solid #1A4372",
    //             borderRadius: "5px",
    //             outline: "none",
    //           }}
    //         />
    //       )}
    //       <button
    //         className="AddTaskButton"
    //         style={{
    //           marginLeft: "10px",
    //           fontFamily: "Calibri",
    //           backgroundColor: "transparent",
    //           border: "none",
    //           cursor: "pointer",
    //         }}
    //         onClick={handleAddTask}
    //       >
    //         Add Task
    //       </button>
    //     </div>

  
  
  









    
  /*
  import React, { useState } from "react";
  import DSTask from "./DSTask";
  import "./DashboardCSS.css"; 

  export default function DSection({ title, description }) {
    const [tasks, setTasks] = useState([
      { id: 1, title: "Task 1", state: 0 },
      { id: 2, title: "Task 2", state: 0 },
    ]);
  
    const [addingTask, setAddingTask] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState("");
  
    const deleteTask = (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    };
  
    const handleAddTask = () => {
      setAddingTask(true);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && newTaskTitle.trim()) {
        setTasks([...tasks, { id: tasks.length + 1, title: newTaskTitle.trim(), state: 0 }]);
        setAddingTask(false);
        setNewTaskTitle("");
      } else if (e.key === "Escape") {
        setAddingTask(false);
        setNewTaskTitle("");
      }
    };
  
    return (
      <div
        style={{
          width: "300px",
          backgroundColor: "#EEEEEE",
          padding: "10px",
          margin: "25px 15px",
          borderRadius: "20px",
          boxSizing: "border-box",
          boxShadow: "2px 2px 5px 0.1px black",
          height: "auto", // Ensures it grows only based on content
        }}
      >
        <p style={{ padding: "0px 20px", fontSize: "20px", fontWeight: "600", color: "black" }}>
          {title}
        </p>
        <p style={{ padding: "0px 10px", fontSize: "13px" }}>{description}</p>
  
        {tasks.map((task, index) => (
          <DSTask
            key={task.id}
            taskId={task.id}
            taskName={task.title}
            onDelete={deleteTask}
            isLast={index === tasks.length - 1} // True for the last task
            isFirst={index === 0} // True for the first task
          />
        ))}
  
        {addingTask && (
          <input
            type="text"
            autoFocus
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter task name"
            style={{
              display: "block",
              width: "90%",
              margin: "10px auto",
              padding: "5px",
              backgroundColor: "white",
              border: "1px solid #1A4372",
              borderRadius: "5px",
              outline: "none",
            }}
          />
        )}
        <button
          className="AddTaskButton"
          style={{
            marginLeft: "10px",
            fontFamily: "Calibri",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    );
  }

*/



/*
import React, { useState } from "react";
import DSTask from "./DSTask";
import "./DashboardCSS.css";

export default function DSection({ title, description }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", state: 0 },
    { id: 2, title: "Task 2", state: 0 },
  ]);

  const [addingTask, setAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    setAddingTask(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTaskTitle.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTaskTitle.trim(), state: 0 },
      ]);
      setAddingTask(false);
      setNewTaskTitle("");
    } else if (e.key === "Escape") {
      setAddingTask(false);
      setNewTaskTitle("");
    }
  };

  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "#EEEEEE",
        padding: "10px",
        margin: "25px 15px",
        borderRadius: "20px",
        boxSizing: "border-box",
        boxShadow: "2px 2px 5px 0.1px black",
        display: "flex",
        flexDirection: "column", // Ensures proper stacking of elements
        justifyContent: "space-between", // Push the button to the bottom
      }}
    >
      <div>
        <p
          style={{
            padding: "0px 20px",
            fontSize: "20px",
            fontWeight: "600",
            color: "black",
          }}
        >
          {title}
        </p>
        <p style={{ padding: "0px 10px", fontSize: "13px" }}>{description}</p>

        <div style={{ flexGrow: 1 }}>
          {tasks.map((task, index) => (
            <DSTask
              key={task.id}
              taskId={task.id}
              taskName={task.title}
              onDelete={deleteTask}
              isLast={index === tasks.length - 1} // True for the last task
              isFirst={index === 0} // True for the first task
            />
          ))}

          {addingTask && (
            <input
              type="text"
              autoFocus
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter task name"
              style={{
                display: "block",
                width: "90%",
                margin: "10px auto",
                padding: "5px",
                backgroundColor: "white",
                border: "1px solid #1A4372",
                borderRadius: "5px",
                outline: "none",
              }}
            />
          )}
        </div>
      </div>

      <button
        className="AddTaskButton"
        style={{
          marginTop: "10px",
          fontFamily: "Calibri",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          alignSelf: "flex-start", // Align the button to the bottom-left
        }}
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}*/

/*
import React, { useState } from "react";
import DSTask from "./DSTask";


export default function DSection({ title, description }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", state: 0 },
    { id: 2, title: "Task 2", state: 0 },
  ]);

  const [addingTask, setAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    setAddingTask(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTaskTitle.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTaskTitle.trim(), state: 0 },
      ]);
      setAddingTask(false);
      setNewTaskTitle("");
    } else if (e.key === "Escape") {
      setAddingTask(false);
      setNewTaskTitle("");
    }
  };

  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "#EEEEEE",
        padding: "10px",
        margin: "15px",
        borderRadius: "20px",
        boxSizing: "border-box",
        boxShadow: "2px 2px 5px 0.1px black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1 }}>
        <p
          style={{
            padding: "0px 20px",
            fontSize: "20px",
            fontWeight: "600",
            color: "black",
          }}
        >
          {title}
        </p>
        <p style={{ padding: "0px 10px", fontSize: "13px" }}>{description}</p>

        {tasks.map((task, index) => (
          <DSTask
            key={task.id}
            taskId={task.id}
            taskName={task.title}
            onDelete={deleteTask}
            isLast={index === tasks.length - 1}
            isFirst={index === 0}
          />
        ))}

        {addingTask && (
          <input
            type="text"
            autoFocus
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter task name"
            style={{
              display: "block",
              width: "90%",
              margin: "10px auto",
              padding: "5px",
              backgroundColor: "white",
              border: "1px solid #1A4372",
              borderRadius: "5px",
              outline: "none",
            }}
          />
        )}
      </div>

      <button
        className="AddTaskButton"
        style={{
          marginTop: "10px",
          fontFamily: "Calibri",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          alignSelf: "center",
        }}
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}*/













/*
export default function DSection({ title, description }) {
  const [tasks, setTasks] = useState([]);

  const [addingTask, setAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    setAddingTask(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTaskTitle.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTaskTitle.trim() },
      ]);
      setAddingTask(false);
      setNewTaskTitle("");
    } else if (e.key === "Escape") {
      setAddingTask(false);
      setNewTaskTitle("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#EEEEEE",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        minHeight: "150px", // Default minimal height
      }}
    >
      
      <div>
        <h3 style={{ margin: "0 0 10px 0", fontSize: "21px", paddingLeft:"10px" }}>{title}</h3>
        <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
          {description}
        </p>
      </div>


      <div style={{ marginTop: "10px", flexGrow: 1 }}>
        {tasks.map((task) => (
          <DSTask
            key={task.id}
            taskId={task.id}
            taskName={task.title}
            onDelete={deleteTask}
          />
        ))}

        {addingTask && (
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter task name"
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        )}
      </div>


      <button className="AddTaskButton"
        style={{
          marginTop: "10px",
          fontFamily: "Calibri",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize:"19px",
          alignSelf: "flex-start",backgroundColor:"",
          borderRadius:"10px"
          
        }}
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}*/

/*
import React, { useState } from "react";
import DSTask from "./DSTask";

export default function DSection({ title, description, deleteSection }) {
  const [tasks, setTasks] = useState([]);
  const [addingTask, setAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    setAddingTask(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTaskTitle.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTaskTitle.trim() },
      ]);
      setAddingTask(false);
      setNewTaskTitle("");
    } else if (e.key === "Escape") {
      setAddingTask(false);
      setNewTaskTitle("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#EEEEEE",
        padding: "20px",
        borderRadius: "15px",
        minHeight:"250px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        minHeight: "150px",
        position: "relative", // Enable positioning for the delete button
      }}
    >
      
      <button
        onClick={deleteSection}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          cursor: "pointer",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ×
      </button>


      <div>
        <h3 style={{ margin: "0 0 10px 0", fontSize: "21px", paddingLeft: "10px" }}>{title}</h3>
        <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
          {description}
        </p>
      </div>


      <div style={{ marginTop: "10px", flexGrow: 1 }}>
        {tasks.map((task) => (
          <DSTask
            key={task.id}
            taskId={task.id}
            taskName={task.title}
            onDelete={deleteTask}
          />
        ))}

        {addingTask && (
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter task name"
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        )}
      </div>


      <button
        style={{
          marginTop: "10px",
          fontFamily: "Calibri",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "19px",
          alignSelf: "flex-start",
          borderRadius: "10px",
        }}
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}
*/
/*
import React, { useState } from "react";
import DSTask from "./DSTask";

export default function DSection({ title, description, deleteSection }) {
  const [tasks, setTasks] = useState([]);
  const [addingTask, setAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [isExpanded, setIsExpanded] = useState(true); // Track section expansion state

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    setAddingTask(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTaskTitle.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTaskTitle.trim() },
      ]);
      setAddingTask(false);
      setNewTaskTitle("");
    } else if (e.key === "Escape") {
      setAddingTask(false);
      setNewTaskTitle("");
    }
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#EEEEEE",
        padding: isExpanded ? "20px" : "10px 20px", // Adjust padding when collapsed
        borderRadius: "15px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        minHeight: isExpanded ? "150px" : "50px", // Adjust height when collapsed
        position: "relative", // Enable positioning for buttons
        overflow: "hidden",
        transition: "all 0.3s ease", // Smooth transition for folding/unfolding
      }}
    >
      
      <button
        onClick={toggleExpand}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          background: "#1A4372",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          cursor: "pointer",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `rotate(${isExpanded ? "180deg" : "0deg"})`, // Rotate the "V"
          transition: "transform 0.3s ease", // Smooth rotation
        }}
      >
        ⌃
      </button>


      <button
        onClick={deleteSection}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          cursor: "pointer",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ×
      </button>

      
      <div>
        <h3 style={{ margin: "0 0 10px 0", fontSize: "21px", paddingLeft: "10px" }}>{title}</h3>
        {isExpanded && (
          <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>{description}</p>
        )}
      </div>


      {isExpanded && (
        <div style={{ marginTop: "10px", flexGrow: 1 }}>
          {tasks.map((task) => (
            <DSTask
              key={task.id}
              taskId={task.id}
              taskName={task.title}
              onDelete={deleteTask}
            />
          ))}

          {addingTask && (
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter task name"
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          )}
        </div>
      )}


      {isExpanded && (
        <button
          style={{
            marginTop: "10px",
            fontFamily: "Calibri",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "19px",
            alignSelf: "flex-start",
            borderRadius: "10px",
          }}
          onClick={handleAddTask}
        >
          Add Task
        </button>
      )}
    </div>
  );
}
*/


/*
import React, { useState } from "react";
import DSTask from "./DSTask";

export default function DSection({ title, description, deleteSection }) {
  const [tasks, setTasks] = useState([]);
  const [addingTask, setAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [isExpanded, setIsExpanded] = useState(true); // Track section expansion state

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    setAddingTask(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTaskTitle.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTaskTitle.trim() },
      ]);
      setAddingTask(false);
      setNewTaskTitle("");
    } else if (e.key === "Escape") {
      setAddingTask(false);
      setNewTaskTitle("");
    }
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#EEEEEE",
        padding: isExpanded ? "20px" : "10px 20px", // Adjust padding when collapsed
        borderRadius: "15px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        minHeight: isExpanded ? "150px" : "50px", // Adjust height when collapsed
        position: "relative", // Enable positioning for buttons
        overflow: "hidden",
        transition: "all 0.3s ease", // Smooth transition for folding/unfolding
        minWidth: "300px", // Ensure a minimum width
      }}
    >
      
      <button
        onClick={toggleExpand}
        style={{
          fontFamily:"Century gothic",
          position: "absolute",
          top: `${isExpanded ? "-15px" : "8px"}`,
          right: "-5px", // Position next to the delete button
          background: "transparent",
          color: isExpanded ? "#1A4372" : "red", // Change color based on state
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          transform: `rotate(${isExpanded ? "-180deg" : "0deg"})`, // Rotate the "V"
          transition: "transform 0.3s ease", // Smooth rotation
        }}
      >
        <p style={{color:"#1A4372",fontSize:"50px"}} className="material-icons" >
          arrow_drop_up
          </p>
      </button>


      <button
        onClick={deleteSection}
        style={{
          fontFamily:"Cascadia mono",
          position: "absolute",
          top: "8px",
          right: "55px",
          background: "transparent",
          color: "red",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        <p style={{fontSize:"30px",color:"#1A4372"}} className="material-icons">
          remove
        </p>
      </button>


      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            margin: "0",
            fontSize: "21px",
            paddingLeft: "10px",
            textAlign: "left",
          }}
        >
          {title}
        </h3>
      </div>

      {isExpanded && (
        <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>{description}</p>
      )}


      {isExpanded && (
        <div style={{ marginTop: "10px", flexGrow: 1 }}>
          {tasks.map((task) => (
            <DSTask
              key={task.id}
              taskId={task.id}
              taskName={task.title}
              onDelete={deleteTask}
            />
          ))}

          {addingTask && (
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter task name"
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          )}
        </div>
      )}


      {isExpanded && (
        <button
          style={{
            marginTop: "10px",
            fontFamily: "Calibri",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "19px",
            alignSelf: "flex-start",
            borderRadius: "10px",color:"#1A4372"
          }}
          onClick={handleAddTask}
        >
          Add Task
        </button>
      )}
    </div>
  );
}

*/



/*

import React, { useState } from "react";
import DSTask from "./DSTask";

export default function DSection({ title, description, deleteSection }) {
  const [tasks, setTasks] = useState([]);
  const [addingTask, setAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [isExpanded, setIsExpanded] = useState(true); // Track section expansion state
  const [isDeleting, setIsDeleting] = useState(false); // Track deletion animation

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    setAddingTask(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTaskTitle.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTaskTitle.trim() },
      ]);
      setAddingTask(false);
      setNewTaskTitle("");
    } else if (e.key === "Escape") {
      setAddingTask(false);
      setNewTaskTitle("");
    }
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleDeleteSection = () => {
    setIsDeleting(true);
    setTimeout(deleteSection, 300); // Wait for animation to complete before removing
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#EEEEEE",
        padding: isExpanded ? "20px" : "10px 20px", // Adjust padding when collapsed
        borderRadius: "15px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        minHeight: isExpanded ? "150px" : "50px", // Adjust height when collapsed
        position: "relative", // Enable positioning for buttons
        overflow: "hidden",
        transition: "all 0.3s ease", // Smooth transition for folding/unfolding
        minWidth: "300px", // Ensure a minimum width
        maxWidth: "45%", // Ensure sections span across rows
        margin: "10px", // Space between sections
        opacity: isDeleting ? 0 : 1, // Fade out on delete
        transform: isDeleting ? "scale(0.9)" : "scale(1)", // Shrink on delete
        transition: "all 0.3s ease", // Smooth delete animation
      }}
    >
      <button
        onClick={toggleExpand}
        style={{
          fontFamily: "Century gothic",
          position: "absolute",
          top: `${isExpanded ? "-15px" : "8px"}`,
          right: "-5px", // Position next to the delete button
          background: "transparent",
          color: isExpanded ? "#1A4372" : "red", // Change color based on state
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          transform: `rotate(${isExpanded ? "-180deg" : "0deg"})`, // Rotate the "V"
          transition: "transform 0.3s ease", // Smooth rotation
        }}
      >
        <p
          style={{ color: "#1A4372", fontSize: "50px" }}
          className="material-icons"
        >
          arrow_drop_up
        </p>
      </button>

      <button
        onClick={handleDeleteSection}
        style={{
          fontFamily: "Cascadia mono",
          position: "absolute",
          top: "8px",
          right: "55px",
          background: "transparent",
          color: "red",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        <p
          style={{ fontSize: "30px", color: "#1A4372" }}
          className="material-icons"
        >
          remove
        </p>
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            margin: "0",
            fontSize: "21px",
            paddingLeft: "10px",
            textAlign: "left",
          }}
        >
          {title}
        </h3>
      </div>

      {isExpanded && (
        <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>{description}</p>
      )}

      {isExpanded && (
        <div style={{ marginTop: "10px", flexGrow: 1 }}>
          {tasks.map((task) => (
            <DSTask
              key={task.id}
              taskId={task.id}
              taskName={task.title}
              onDelete={deleteTask}
            />
          ))}

          {addingTask && (
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter task name"
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "8px",
                border: "1px solid transparent", // Remove default black border
                borderRadius: "5px",
                outline: "none", // Remove default focus outline
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)", // Custom focus style
              }}
            />
          )}
        </div>
      )}

      {isExpanded && (
        <button
          style={{
            marginTop: "10px",
            fontFamily: "Calibri",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "19px",
            alignSelf: "flex-start",
            borderRadius: "10px",
            color: "#1A4372",
          }}
          onClick={handleAddTask}
        >
          Add Task
        </button>
      )}
    </div>
  );
}

*/


/*

import React, { useState } from "react";
import DSTask from "./DSTask";

export default function DSection({ title, description, deleteSection }) {
  const [tasks, setTasks] = useState([]);
  const [addingTask, setAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [isExpanded, setIsExpanded] = useState(true); // Track section expansion state
  const [isDeleting, setIsDeleting] = useState(false); // Track deletion animation

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    setAddingTask(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTaskTitle.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTaskTitle.trim() },
      ]);
      setAddingTask(false);
      setNewTaskTitle("");
    } else if (e.key === "Escape") {
      setAddingTask(false);
      setNewTaskTitle("");
    }
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleDeleteSection = () => {
    setIsDeleting(true);
    setTimeout(deleteSection, 300); // Wait for animation to complete before removing
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#EEEEEE",
        padding: isExpanded ? "20px" : "10px 20px", // Adjust padding when collapsed
        borderRadius: "15px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        minHeight: isExpanded ? "150px" : "50px", // Adjust height when collapsed
        position: "relative", // Enable positioning for buttons
        overflow: "hidden",
        transition: "all 0.3s ease", // Smooth transition for folding/unfolding
        minWidth: "300px", // Ensure a minimum width
        maxWidth: "45%", // Ensure sections span across rows
        margin: "10px", // Space between sections
        opacity: isDeleting ? 0 : 1, // Fade out on delete
        transform: isDeleting ? "scale(0.9)" : "scale(1)", // Shrink on delete
        transition: "all 0.3s ease", // Smooth delete animation
      }}
    >
      <button
        onClick={toggleExpand}
        style={{
          fontFamily: "Century gothic",
          position: "absolute",
          top: "8px",
          right: "10px", // Position next to the delete button
          background: "transparent",
          color: isExpanded ? "#1A4372" : "red", // Change color based on state
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          transform: `rotate(${isExpanded ? "-180deg" : "0deg"})`, // Rotate the "V"
          transition: "transform 0.3s ease", // Smooth rotation
        }}
      >
        <p
          style={{ color: "#1A4372", fontSize: "30px" }}
          className="material-icons"
        >
          arrow_drop_up
        </p>
      </button>

      <button
        onClick={handleDeleteSection}
        style={{
          fontFamily: "Cascadia mono",
          position: "absolute",
          top: isExpanded ? "18px" : "8px",
          right: "50px",
          background: "transparent",
          color: "red",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        <p
          style={{ fontSize: "30px", color: "#1A4372" }}
          className="material-icons"
        >
          remove
        </p>
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "column", // Allow title to wrap
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginRight: "70px", // Prevent overlap with buttons
        }}
      >
        <h3
          style={{
            margin: "0",
            fontSize: "21px",
            paddingLeft: "10px",
            textAlign: "left",
            wordBreak: "break-word", // Break long titles
            lineHeight: "1.2", // Adjust spacing for multiline titles
          }}
        >
          {title}
        </h3>
      </div>

      {isExpanded && (
        <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>{description}</p>
      )}

      {isExpanded && (
        <div style={{ marginTop: "10px", flexGrow: 1 }}>
          {tasks.map((task) => (
            <DSTask
              key={task.id}
              taskId={task.id}
              taskName={task.title}
              onDelete={deleteTask}
            />
          ))}

          {addingTask && (
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter task name"
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "8px",
                border: "1px solid transparent", // Remove default black border
                borderRadius: "5px",
                outline: "none", // Remove default focus outline
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)", // Custom focus style
              }}
            />
          )}
        </div>
      )}

      {isExpanded && (
        <button
          style={{
            marginTop: "10px",
            fontFamily: "Calibri",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "19px",
            alignSelf: "flex-start",
            borderRadius: "10px",
            color: "#1A4372",
          }}
          onClick={handleAddTask}
        >
          Add Task
        </button>
      )}
    </div>
  );
}*/
/*

make an animation for deleting tasks, 
make it looks smoother, and make the sections look fit 
in one screen and if there is an overflow make the dashboard 
page longer and contains more sections, and make it when sections 
are shrink they can stack over each other normally while they're skinny


*/


// import React, { useState } from "react";
// import DSTask from "./DSTask";

// export default function DSection({ title, description, deleteSection }) {
//   const [tasks, setTasks] = useState([]);
//   const [addingTask, setAddingTask] = useState(false);
//   const [newTaskTitle, setNewTaskTitle] = useState("");
//   const [isExpanded, setIsExpanded] = useState(true); // Track section expansion state
//   const [isDeleting, setIsDeleting] = useState(false); // Track deletion animation

//   const deleteTask = (taskId) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, isDeleting: true } : task
//     );
//     setTasks(updatedTasks);

//     setTimeout(() => {
//       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
//     }, 300); // Match animation duration
//   };

//   const handleAddTask = () => {
//     setAddingTask(true);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && newTaskTitle.trim()) {
//       setTasks([
//         ...tasks,
//         { id: tasks.length + 1, title: newTaskTitle.trim(), isDeleting: false },
//       ]);
//       setAddingTask(false);
//       setNewTaskTitle("");
//     } else if (e.key === "Escape") {
//       setAddingTask(false);
//       setNewTaskTitle("");
//     }
//   };

//   const toggleExpand = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   const handleDeleteSection = () => {
//     setIsDeleting(true);
//     setTimeout(deleteSection, 300); // Wait for animation to complete before removing
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         backgroundColor: "#EEEEEE",
//         padding: isExpanded ? "20px" : "10px 20px",
//         borderRadius: "15px",
//         boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//         minHeight: isExpanded ? "150px" : "50px",
//         position: "relative",
//         overflow: "hidden",
//         transition: "all 0.3s ease",
//         minWidth: "300px",
//         maxWidth: "45%",
//         margin: "10px",
//         opacity: isDeleting ? 0 : 1,
//         transform: isDeleting ? "scale(0.9)" : "scale(1)",
//         flexShrink: isExpanded ? 0 : 1, // Allow shrinking
//       }}
//     >
//       <button
//         onClick={toggleExpand}
//         style={{
//           fontFamily: "Century gothic",
//           position: "absolute",
//           top: "8px",
//           right: "10px",
//           background: "transparent",
//           color: isExpanded ? "#1A4372" : "red",
//           border: "none",
//           cursor: "pointer",
//           fontSize: "16px",
//           transform: `rotate(${isExpanded ? "-180deg" : "0deg"})`,
//           transition: "transform 0.3s ease",
//         }}
//       >
//         <p
//           style={{ color: "#1A4372", fontSize: "30px" }}
//           className="material-icons"
//         >
//           arrow_drop_up
//         </p>
//       </button>

//       <button
//         onClick={handleDeleteSection}
//         style={{
//           fontFamily: "Cascadia mono",
//           position: "absolute",
//           top: isExpanded ? "18px" : "8px",
//           right: "50px",
//           background: "transparent",
//           color: "red",
//           border: "none",
//           cursor: "pointer",
//           fontSize: "14px",
//         }}
//       >
//         <p
//           style={{ fontSize: "30px", color: "#1A4372" }}
//           className="material-icons"
//         >
//           remove
//         </p>
//       </button>

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-start",
//           alignItems: "flex-start",
//           marginRight: "70px",
//         }}
//       >
//         <h3
//           style={{
//             margin: "0",
//             fontSize: "21px",
//             paddingLeft: "10px",
//             textAlign: "left",
//             wordBreak: "break-word",
//             lineHeight: "1.2",
//           }}
//         >
//           {title}
//         </h3>
//       </div>

//       {isExpanded && (
//         <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>{description}</p>
//       )}

//       {isExpanded && (
//         <div style={{ marginTop: "10px", flexGrow: 1 }}>
//           {tasks.map((task) => (
//             <DSTask
//               key={task.id}
//               taskId={task.id}
//               taskName={task.title}
//               onDelete={deleteTask}
//               isDeleting={task.isDeleting}
//             />
//           ))}

//           {addingTask && (
//             <input
//               type="text"
//               value={newTaskTitle}
//               onChange={(e) => setNewTaskTitle(e.target.value)}
//               onKeyDown={handleKeyDown}
//               placeholder="Enter task name"
//               style={{
//                 width: "100%",
//                 marginTop: "10px",
//                 padding: "8px",
//                 border: "1px solid transparent",
//                 borderRadius: "5px",
//                 outline: "none",
//                 boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
//               }}
//             />
//           )}
//         </div>
//       )}

//       {isExpanded && (
//         <button
//           style={{
//             marginTop: "10px",
//             fontFamily: "Calibri",
//             backgroundColor: "transparent",
//             border: "none",
//             cursor: "pointer",
//             fontSize: "19px",
//             alignSelf: "flex-start",
//             borderRadius: "10px",
//             color: "#1A4372",
//           }}
//           onClick={handleAddTask}
//         >
//           Add Task
//         </button>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
import DSTask from "./DSTask";

export default function DSection({ title, description, deleteSection }) {
  const [tasks, setTasks] = useState([]);
  const [addingTask, setAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [isExpanded, setIsExpanded] = useState(true); // Track section expansion state
  const [isDeleting, setIsDeleting] = useState(false); // Track deletion animation

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isDeleting: true } : task
    );
    setTasks(updatedTasks);

    setTimeout(() => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }, 300); // Match animation duration
  };

  const handleAddTask = () => {
    setAddingTask(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTaskTitle.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTaskTitle.trim(), isDeleting: false },
      ]);
      setAddingTask(false);
      setNewTaskTitle("");
    } else if (e.key === "Escape") {
      setAddingTask(false);
      setNewTaskTitle("");
    }
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleDeleteSection = () => {
    setIsDeleting(true);
    setTimeout(deleteSection, 300); // Wait for animation to complete before removing
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#EEEEEE",
        padding: isExpanded ? "20px" : "10px 20px",
        borderRadius: "15px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        minHeight: isExpanded ? "150px" : "50px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        minWidth: "300px",
        maxWidth: "400px",
        margin: "10px",
        opacity: isDeleting ? 0 : 1,
        transform: isDeleting ? "scale(0.9)" : "scale(1)",
        flexShrink: isExpanded ? 0 : 1, // Allow shrinking
      }}
    >
      <button
        onClick={toggleExpand}
        style={{
          fontFamily: "Century gothic",
          position: "absolute",
          top: "8px",
          right: "10px",
          background: "transparent",
          color: isExpanded ? "#1A4372" : "red",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          transform: `rotate(${isExpanded ? "-180deg" : "0deg"})`,
          transition: "transform 0.3s ease",
        }}
      >
        <p
          style={{ color: "#1A4372", fontSize: "30px" }}
          className="material-icons"
        >
          arrow_drop_up
        </p>
      </button>

      <button
        onClick={handleDeleteSection}
        style={{
          fontFamily: "Cascadia mono",
          position: "absolute",
          top: isExpanded ? "18px" : "8px",
          right: "50px",
          background: "transparent",
          color: "red",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        <p
          style={{ fontSize: "30px", color: "#1A4372" }}
          className="material-icons"
        >
          remove
        </p>
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginRight: "70px",
        }}
      >
        <h3
          style={{
            margin: "0",
            fontSize: "21px",
            paddingLeft: "10px",
            textAlign: "left",
            wordBreak: "break-word",
            lineHeight: "1.2",
          }}
        >
          {title}
        </h3>
      </div>

      {isExpanded && (
        <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>{description}</p>
      )}

      {isExpanded && (
        <div style={{ marginTop: "10px", flexGrow: 1 }}>
          {tasks.map((task) => (
            <DSTask
              key={task.id}
              taskId={task.id}
              taskName={task.title}
              onDelete={deleteTask}
              isDeleting={task.isDeleting}
            />
          ))}

          {addingTask && (
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter task name"
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "8px",
                border: "1px solid transparent",
                borderRadius: "5px",
                outline: "none",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
              }}
            />
          )}
        </div>
      )}

      {isExpanded && (
        <button
          style={{
            marginTop: "10px",
            fontFamily: "Calibri",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "19px",
            alignSelf: "flex-start",
            borderRadius: "10px",
            color: "#1A4372",
          }}
          onClick={handleAddTask}
        >
          Add Task
        </button>
      )}
    </div>
  );
}
