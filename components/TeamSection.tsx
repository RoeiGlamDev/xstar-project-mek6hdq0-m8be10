import React from 'react';
import './TeamSection.css'; // Importing CSS for styling

const teamMembers = [
  {
    name: 'Sophia Loren',
    position: 'Creative Director',
    image: '/images/sophia.jpg', // Replace with actual image path
  },
  {
    name: 'James Smith',
    position: 'Lead Makeup Artist',
    image: '/images/james.jpg', // Replace with actual image path
  },
  {
    name: 'Olivia Brown',
    position: 'Brand Strategist',
    image: '/images/olivia.jpg', // Replace with actual image path
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-position">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;