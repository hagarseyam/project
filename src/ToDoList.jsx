import { useState } from 'react'
import { TrashIcon, PlusIcon, CheckIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  function addTask(formData) {
    const newTask = formData.get("task-input");
    if (!newTask.trim()) return;

    const createdAt = new Date().toLocaleString();
    const newObj = {
      task: newTask,
      date: createdAt,
      isCompleted: false,
    };

    setTasks((prevTasks) => [...prevTasks, newObj]);
  }

  const taskisCompleted = (index) => {
    setTasks((prevTasks) => {
      const updates = [...prevTasks];
      updates[index] = {
        ...updates[index],
        isCompleted: !updates[index].isCompleted,
      };
      return updates;
    });
  };

  const deleteTask = (indexs) => {
    setTasks((prevTasks) => {
      const updates = [...prevTasks];
      updates.splice(indexs, 1);
      return updates;
    });
  };

  let completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <div className='bg-purple-900 bg-opacity-90 p-7 md:p-6 rounded-xl shadow-[0_0_10px_theme(colors.purple-400)] space-y-6 w-full max-w-min md:max-w-md max-h-min overflow-y-auto'>
      <h1 className='text-3xl font-bold text-center text-purple-300'>My To-Do List</h1>

      <form action={addTask} className='flex gap-3 items-center mb-6 mt-4'>
        <input
          type="text"
          name='task-input'
          placeholder='Enter Your Task '
          className=' placeholder:text-purple-300 flex-1 border-2 border-purple-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300'
        />
        <button
          type="submit"
          className="bg-purple-300  w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-purple-300 transition-all"
        >
          <span className="w-6 h-6  text-purple-700">
            <PlusIcon />
          </span>
        </button>
      </form>

      <h1 className='text-purple-300 font-medium text-center'>
        {completedTasks} out of {tasks.length} tasks completed
      </h1>
      <input type='search' placeholder='search tasks..' className='border-purple-300 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-300  placeholder:text-purple-700 flex-1 p-3 w-full mb-4 text-center bg-purple-300'/> 

      <h1 className='text-xl font-semibold text-purple-300'>Current Tasks</h1>

      <div className='flex flex-col gap-4'>
        
        {tasks.filter(task => !task.isCompleted).map((taskObj, index) => (
          <div
            key={index}
            className='flex flex-row justify-between items-center p-4 bg-purple-300 rounded-lg shadow-md'
          >
            <p className='text-lg font-semibold text-purple-700 cursor-pointer'>
              {taskObj.task}
            </p>
            <div className="flex gap-3">
              <span
                onClick={() => deleteTask(tasks.indexOf(taskObj))}
                className="text-purple-700 w-6 h-6 cursor-pointer hover:text-purple-500 transition-colors"
              >
                <TrashIcon />
              </span>
              <span
                onClick={() => taskisCompleted(tasks.indexOf(taskObj))}
                className="w-6 h-6 text-purple-700 cursor-pointer hover:text-purple-500 transition-colors"
              >
                <CheckIcon />
              </span>
            </div>
          </div>
        ))}

      
        <hr className="border-purple-400 my-4" />

       <h1 className='text-xl font-semibold text-purple-300'> completed Tasks</h1>
        {tasks.filter(task => task.isCompleted).map((taskObj, index) => (
          <div
            key={index}
            className='flex flex-row justify-between items-center p-4 bg-purple-300 rounded-lg shadow-md'
          >
            <p className='text-lg font-semibold line-through text-purple-700 cursor-pointer'>
              {taskObj.task}
            </p>
            <div className="flex gap-3">
              <span
                onClick={() => deleteTask(tasks.indexOf(taskObj))}
                className="text-purple-700 w-6 h-6 cursor-pointer hover:text-purple-500 transition-colors"
              >
                <TrashIcon />
              </span>
              <span
                onClick={() => taskisCompleted(tasks.indexOf(taskObj))}
                className="w-6 h-6 text-purple-700 cursor-pointer hover:text-purple-500 transition-colors"
              >
                < ArrowUturnLeftIcon/>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
