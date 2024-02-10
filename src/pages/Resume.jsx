import React from 'react';

function Resume() {
  const resumeLink = 'https://docs.google.com/document/d/1MxepJG71C92PEXL1plYLjTVYs37SCTDzZ75fK0CoMu8/edit?usp=sharing';

  const handleResumeClick = () => {
    window.open(resumeLink, '_blank');
  };

  return (
    <button onClick={handleResumeClick}>View Resume</button>
  );
}

export default Resume;
