'use client';
import { useState } from 'react';

export default function Ad4() {
  const [visible, setVisible] = useState(true);

  const toggleAd = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: visible ? '0' : '-250px', // Adjust the vertical position based on visibility
          left: '0',
          right: '0',
          transition: 'bottom 0.5s',
          zIndex: '1000',
          backgroundColor: '#ccc',
        }}
        className="ad4"
      >
        <button
          onClick={toggleAd}
          style={{
            position: 'absolute',
            top: '-30px', // Place button above the ad container
            // right: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          {visible ? (
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-down"
              className="svg-inline--fa fa-chevron-down fa-w-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              style={{ width: '16px', height: '16px' }}
            >
              <path
                fill="currentColor"
                d="M207.029 381.476l-184.998-184c-9.373-9.373-9.373-24.569 0-33.941l22.662-22.662c9.373-9.373 24.569-9.373 33.941 0L224 289.941l145.365-145.068c9.373-9.373 24.569-9.373 33.941 0l22.662 22.662c9.373 9.373 9.373 24.569 0 33.941l-184.998 184c-9.373 9.372-24.569 9.372-33.941-.001z"
              />
            </svg>
          ) : (
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" className="svg-inline--fa fa-chevron-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px", color: "#fff" }}>
            <path fill="currentColor" d="M241 130.5L7.8 363.7c-4.6 4.6-12.1 4.6-16.7 0L-7.8 340.9c-4.6-4.6-4.6-12.1 0-16.7L216.4 100.2c4.6-4.6 12.1-4.6 16.7 0l224.2 224.2c4.6 4.6 4.6 12.1 0 16.7l-24.5 24.5c-4.6 4.6-12.1 4.6-16.7 0L241 130.5z"></path>
          </svg>
          )}
        </button>
        <div>
          {/* Ad content goes here */}
        </div>
      </div>
    </>
  );
}
