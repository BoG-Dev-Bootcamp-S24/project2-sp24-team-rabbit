import React, { useState } from 'react';

const trainingLogs = [
  {
    id: 1,
    title: 'Basic Obedience Training',
    date: '2024-03-25',
    userName: 'John Doe',
    animalName: 'Max',
    breed: 'Labrador Retriever',
    hoursLogged: 2,
    description: 'Worked on sit, stay, and come commands.'
  },
  {
    id: 2,
    title: 'Agility Training',
    date: '2024-03-24',
    userName: 'Jane Smith',
    animalName: 'Buddy',
    breed: 'Border Collie',
    hoursLogged: 1.5,
    description: 'Practiced navigating through agility obstacles.'
  }
];

const TrainingLog = ({ log }) => (
  <div className="training-log">
    <h3>{log.title}</h3>
    <p>Date: {log.date}</p>
    <p>User: {log.userName}</p>
    <p>Animal: {log.animalName}</p>
    <p>Breed: {log.breed}</p>
    <p>Hours Logged: {log.hoursLogged}</p>
    <p>Description: {log.description}</p>
  </div>
);

const TrainingLogList = () => (
  <div>
    {trainingLogs.map(log => (
      <TrainingLog key={log.id} log={log} />
    ))}
  </div>
);

const TrainingLogForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hoursLogged, setHoursLogged] = useState('');
  const [animalId, setAnimalId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    if (title && description && hoursLogged && animalId) {
      // Successful submission, navigate back to dashboard or perform other actions
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Create Training Log</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <label>Hours Logged:</label>
        <input type="number" value={hoursLogged} onChange={(e) => setHoursLogged(e.target.value)} />
        <label>Animal ID:</label>
        <input type="text" value={animalId} onChange={(e) => setAnimalId(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


const App = () => (
  <div>
    <h1>Training Logs</h1>
    <TrainingLogList />
    <TrainingLogForm />
  </div>
);

export default App;
