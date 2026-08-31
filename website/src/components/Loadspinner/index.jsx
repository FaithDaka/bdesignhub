import React from 'react'

const LoadSpinnerComponent = () => {
  return (
    <div className="load-spinner-container">
      <div className="spinner"></div>
      <p className="loading-text">Preparing...</p>
    </div>
  );
}

export default LoadSpinnerComponent