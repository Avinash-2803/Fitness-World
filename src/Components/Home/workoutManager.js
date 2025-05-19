import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = "https://your-backend.onrender.com/api/user";

const WorkoutManager = () => {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    name: '',
    weight: '',
    sets: '',
    reps: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE_URL}/getAllUsers`);
      setWorkouts(res.data);
      setLoading(false);
    } catch (error) {
      setErrorMsg("Failed to fetch workouts.");
      setLoading(false);
    }
  };

  const validateForm = () => {
    if (!newWorkout.name.trim()) {
      setErrorMsg("Workout name is required.");
      return false;
    }
    if (!newWorkout.weight || isNaN(newWorkout.weight) || newWorkout.weight < 0) {
      setErrorMsg("Weight must be zero or a positive number.");
      return false;
    }
    if (!newWorkout.sets || isNaN(newWorkout.sets) || newWorkout.sets <= 0) {
      setErrorMsg("Sets must be a positive number.");
      return false;
    }
    if (!newWorkout.reps || isNaN(newWorkout.reps) || newWorkout.reps <= 0) {
      setErrorMsg("Reps must be a positive number.");
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleAdd = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      await axios.post(`${API_BASE_URL}/create`, {
        name: newWorkout.name.trim(),
        weight: Number(newWorkout.weight),
        sets: Number(newWorkout.sets),
        reps: Number(newWorkout.reps),
      });
      fetchWorkouts();
      setNewWorkout({ name: '', weight: '', sets: '', reps: '' });
      setLoading(false);
    } catch (error) {
      setErrorMsg("Failed to add workout.");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${API_BASE_URL}/delete/${id}`);
      fetchWorkouts();
      setLoading(false);
    } catch (error) {
      setErrorMsg("Failed to delete workout.");
      setLoading(false);
    }
  };

  const handleUpdate = async (id) => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      await axios.put(`${API_BASE_URL}/update/${id}`, {
        name: newWorkout.name.trim(),
        weight: Number(newWorkout.weight),
        sets: Number(newWorkout.sets),
        reps: Number(newWorkout.reps),
      });
      fetchWorkouts();
      setEditingId(null);
      setNewWorkout({ name: '', weight: '', sets: '', reps: '' });
      setLoading(false);
    } catch (error) {
      setErrorMsg("Failed to update workout.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg shadow-lg mt-8 text-white">
      <h2 className="text-3xl font-extrabold mb-6 text-center drop-shadow-lg">Workout Manager</h2>

      {errorMsg && (
        <div className="mb-4 p-3 bg-red-700 rounded shadow-md text-center font-semibold">
          {errorMsg}
        </div>
      )}

      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        <input
          type="text"
          placeholder="Workout Name"
          value={newWorkout.name}
          onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })}
          className="flex-grow min-w-[180px] p-3 rounded text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          min="0"
          value={newWorkout.weight}
          onChange={(e) => setNewWorkout({ ...newWorkout, weight: e.target.value })}
          className="w-28 p-3 rounded text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <input
          type="number"
          placeholder="Sets"
          min="1"
          value={newWorkout.sets}
          onChange={(e) => setNewWorkout({ ...newWorkout, sets: e.target.value })}
          className="w-20 p-3 rounded text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <input
          type="number"
          placeholder="Reps"
          min="1"
          value={newWorkout.reps}
          onChange={(e) => setNewWorkout({ ...newWorkout, reps: e.target.value })}
          className="w-20 p-3 rounded text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        {editingId ? (
          <button
            onClick={() => handleUpdate(editingId)}
            disabled={loading}
            className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded hover:bg-yellow-500 transition"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        ) : (
          <button
            onClick={handleAdd}
            disabled={loading}
            className="bg-green-500 font-bold px-6 py-3 rounded hover:bg-green-600 transition"
          >
            {loading ? "Adding..." : "Add"}
          </button>
        )}
      </div>

      {loading && !editingId ? (
        <div className="text-center text-white font-semibold">Loading workouts...</div>
      ) : (
        <ul>
          {workouts.length === 0 && (
            <li className="text-center font-semibold mt-4">No workouts found.</li>
          )}
          {workouts.map((workout) => (
            <li
              key={workout._id}
              className="bg-white text-gray-900 rounded p-4 mb-4 flex justify-between items-center shadow-md"
            >
              <div>
                <h3 className="text-xl font-semibold">{workout.name}</h3>
                <p className="text-sm text-gray-700">
                  {workout.sets} sets x {workout.reps} reps @ {workout.weight} kg
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setNewWorkout({
                      name: workout.name,
                      weight: workout.weight.toString(),
                      sets: workout.sets.toString(),
                      reps: workout.reps.toString(),
                    });
                    setEditingId(workout._id);
                    setErrorMsg('');
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded shadow"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(workout._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded shadow"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutManager;
