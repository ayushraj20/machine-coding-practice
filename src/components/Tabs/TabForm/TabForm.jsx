import { useState } from 'react';
import Profile from './Profile';
import Intrests from './Intrests';
import Settings from './Settings';
import '../../../styles/TabForm.css';

const tabs = [
  {
    name: 'Profile',
    component: Profile,
  },
  {
    name: 'Intrests',
    component: Intrests,
  },
  {
    name: 'Settings',
    component: Settings,
  },
];

const INITIAL_DATA = {
  name: 'knocks',
  age: 21,
  email: 'abc@gmail.com',
  intrests: ['coding', 'music'],
  theme: 'dark',
};

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [formData, setFormData] = useState(INITIAL_DATA);

  const ActiveTabComponent = activeTab.component;

  const handleSubmitClick = () => {
    console.log('Form Submitted with Data - ', formData);
  };

  return (
    <div className="tab-container">
      <div>
        {tabs.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(item)}
            style={{ opacity: activeTab.name !== item.name ? '0.3' : '1' }}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="tab-content-container">
        <ActiveTabComponent formData={formData} setFormData={setFormData} />
      </div>

      <button
        disabled={activeTab !== tabs[tabs.length - 1]}
        onClick={handleSubmitClick}
      >
        Submit
      </button>
    </div>
  );
};

export default TabForm;
