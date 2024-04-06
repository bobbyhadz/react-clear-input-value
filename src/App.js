import './App.css';

import {useState} from 'react';

const App = () => {
  // 👇️ Store the input's value in the state
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    // 👇️ Clear the input value
    setMessage('');
  };

  return (
    <div>
      <input
        id="message"
        name="message"
        type="text"
        onChange={handleChange}
        value={message}
      />

      <button onClick={handleClick}>Clear field</button>
    </div>
  );
};

export default App;
