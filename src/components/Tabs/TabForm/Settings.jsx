import React from 'react';

const Settings = ({ formData, setFormData }) => {
  const { theme } = formData;

  const handleThemeChange = (e) => {
    setFormData((prev) => ({ ...prev, theme: e.target.name }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>
        <input
          type="radio"
          name="light"
          checked={theme === 'light'}
          onChange={handleThemeChange}
        />
        Light
      </label>

      <label>
        <input
          type="radio"
          name="dark"
          checked={theme === 'dark'}
          onChange={handleThemeChange}
        />
        Dark
      </label>
    </div>
  );
};

export default Settings;
