import React from 'react';

const Intrests = ({ formData, setFormData }) => {
  const { intrests } = formData;

  const handleIntrestChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      intrests: e.target.checked
        ? [...prev.intrests, e.target.name]
        : [...prev.intrests.filter((i) => i !== e.target.name)],
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>
        <input
          name="coding"
          type="checkbox"
          checked={intrests.includes('coding')}
          onChange={handleIntrestChange}
        />
        Coding
      </label>

      <label>
        <input
          name="music"
          type="checkbox"
          checked={intrests.includes('music')}
          onChange={handleIntrestChange}
        />
        Music
      </label>

      <label>
        <input
          name="video games"
          type="checkbox"
          checked={intrests.includes('video games')}
          onChange={handleIntrestChange}
        />
        Video Games
      </label>
    </div>
  );
};

export default Intrests;
