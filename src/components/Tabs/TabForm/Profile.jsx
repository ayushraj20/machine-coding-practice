import React from 'react';
import '../../../styles/TabForm.css';

const Profile = ({ formData, setFormData }) => {
  const { name, age, email } = formData;

  const handleFormDataChange = (e, key) => {
    console.log(e.target.value, key);

    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <div className="profile-container">
      <div>
        <label>Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleFormDataChange(e, 'name')}
        />
      </div>

      <div>
        <label>Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleFormDataChange(e, 'age')}
        />
      </div>

      <div>
        <label>Email : </label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleFormDataChange(e, 'email')}
        />
      </div>
    </div>
  );
};

export default Profile;
