import React, { useEffect, useState } from 'react';

const RulesAndRegulations = () => {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/college/rules')
      .then(response => response.json())
      .then(data => setRules(data))
      .catch(error => console.error('Error fetching rules:', error));
  }, []);
  return (
    <div>
      <h1>College Rules & Regulations</h1>
      <p>The college’s policies and guidelines are outlined below. Please read them carefully to understand the standards and expectations.</p>
      {rules.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {rules.map((ruleItem, index) => (
            <li key={index}>
              <h2>{ruleItem.rule}</h2>
              <p>{ruleItem.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RulesAndRegulations;
