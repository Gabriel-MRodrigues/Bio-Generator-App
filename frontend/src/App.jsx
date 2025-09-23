import { useState } from 'react';
import axios from 'axios';
import BiographyForm from './components/BiographyForm';
import BiographyResults from './components/BiographyResults';
import './App.css';

function App() {
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError('');
    setBio(null);

    try {
      const res = await axios.post('/generate-bio', formData);
      setBio(res.data);
    } catch (err) {
      setError('⚠️ Failed to generate biography. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Professional Biography Generator</h1>

      <BiographyForm onSubmit={handleSubmit} loading={loading} />

      {error && <p className="error">{error}</p>}

      {bio && <BiographyResults bio={bio} />}
    </div>
  );
}

export default App;
