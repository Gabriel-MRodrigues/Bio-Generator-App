import { useState } from 'react';

function BiographyForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    coreValues: '',
    motivation: '',
    careerPath: '',
    milestones: '',
    strengths: '',
    workStyle: '',
    impact: '',
    achievement: '',
    vision: '',
    industryImpact: '',
    tone: 'formal',
    unique: '',
    personalTouch: '',
    funFact: '',
    closing: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {Object.keys(formData).map((key) =>
        key === 'tone' ? (
          <label key={key}>
            Tone:
            <select name={key} value={formData[key]} onChange={handleChange}>
              <option value="formal">Formal</option>
              <option value="inspiring">Inspiring</option>
              <option value="witty">Witty</option>
              <option value="approachable">Approachable</option>
            </select>
          </label>
        ) : (
          <textarea
            key={key}
            name={key}
            placeholder={key}
            value={formData[key]}
            onChange={handleChange}
          />
        )
      )}

      <button type="submit" disabled={loading}>
        {loading ? 'Generating...' : 'Generate Biography'}
      </button>
    </form>
  );
}

export default BiographyForm;
