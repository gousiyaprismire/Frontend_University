import React from 'react';

const HallOfFame = () => {
  const achievers = [
    {
      name: 'John',
      title: 'Nobel Laureate in Physics',
      image: '/assets/jane-doe.jpg', // Replace with the image path
      description: 'Awarded the Nobel Prize for groundbreaking work in quantum mechanics.',
    },
    {
      name: 'Smith',
      title: 'CEO of TechCorp',
      image: '/assets/john-smith.jpg',
      description: 'Founder and CEO of a Fortune 500 tech company.',
    },
    {
      name: 'Johnson',
      title: 'Olympic Gold Medalist',
      image: '/assets/emily-johnson.jpg',
      description: 'Won gold in swimming at the Summer Olympics.',
    },
    {
      name: 'Michael Lee',
      title: 'Renowned Author',
      image: '/assets/michael-lee.jpg',
      description: 'Bestselling author of the "Future World" series.',
    },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Hall of Fame</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {achievers.map((achiever, index) => (
          <div
            key={index}
            style={{
              width: '300px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              textAlign: 'center',
            }}
          >
            <img
              src={achiever.image}
              alt={achiever.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />
            <div style={{ padding: '15px' }}>
              <h2 style={{ fontSize: '18px', color: '#444' }}>{achiever.name}</h2>
              <p style={{ fontSize: '16px', color: '#666'}}>{achiever.title}</p>
              <p style={{ fontSize: '14px', color: '#555' }}>{achiever.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HallOfFame;