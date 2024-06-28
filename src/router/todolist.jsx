import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    alert('selamat datang');
      }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setTotalTasks(totalTasks + 1);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setTotalTasks(totalTasks - 1);
    setCompletedTasks(completedTasks + 1);
  };

  return (
    <div className='Container-fluid bg-primary bg-gradient pb-5' id='todolist'>
      <div className="container w-50 ">
      <h1 className='text-center text-light pt-4'>Todo List</h1>
      <div >
        <input type="text" id="new-task" placeholder="Tambahkan tugas baru" className=' w-50' /> <br />
        <button className='btn btn-success' onClick={() => {
          const task = document.getElementById('new-task').value;
          if (task) {
            addTask(task);
            document.getElementById('new-task').value = '';
          }
        }}>
          Tambah Tugas
        </button>
      </div>
      <p className='text-white pt-3'>Total Tugas: {totalTasks}</p>
      <p className='text-white pb-3'>Total Tugas Selesai/Dihapus/Dibatalkan: {completedTasks}</p>
      <h2 className='text-center text-light'>Daftar Tugas</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <td>No</td>
            <td>Nama Tugas</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
        {tasks.map((task, index) => (
            <tr className='p-5'>
              <td>{index + 1}</td>
              <td key={index}>{task}</td>
              <td><button className='btn btn-sm btn-success' onClick={() => completeTask(index)}>Selesai</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TodoList;
