import React from 'react';

function Resume() {
  const resumePdfFileName = 'Resume.pdf';

  const handleResumeClick = () => {
    const resumePdfPath = process.env.PUBLIC_URL + '/' + resumePdfFileName;
    window.open(resumePdfPath, '_blank');
  };

  return (
    <button onClick={handleResumeClick}>Download Resume (PDF)</button>
  );
}

export default Resume;
