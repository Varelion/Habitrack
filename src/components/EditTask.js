import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { fetchTask, createTask, updateTask, deleteTask, selectTask } from './taskSlice';
import { fetchTask, updateTask, selectTask } from '../features/singleTaskSlice';

const EditTask = () => {

    const dispatch = useDispatch();
    const { taskId } = useParams();
    const tasks = useSelector(selectTask);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleTaskUpdate = async (e) => {
        e.preventDefault();
        const updatedTask = { id: taskId, title, description, status }
        dispatch(updateTask(updatedTask)).then(() => {
            navigate('/');
        });

    };

    return (
        <div>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={handleTitleChange} />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={handleDescriptionChange} />
            </div>
            <div>
                <label>Status:</label>
                <input type="text" value={status} onChange={handleStatusChange} />
            </div>
            <button onClick={handleTaskUpdate}>Save</button>
        </div>
    )
}



export default EditTask