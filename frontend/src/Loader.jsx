import React from 'react';
import styled from 'styled-components';

const Loader = () => (
  <StyledWrapper>
    <div className="container">
      <div className="loader">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="crystal"
            style={{
              background: `linear-gradient(45deg, ${getGradient(index)})`,
              animationDelay: `${index * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  </StyledWrapper>
);

const getGradient = (index) => {
  const gradients = [
    "#003366, #336699",
    "#003399, #3366cc",
    "#0066cc, #3399ff",
    "#0099ff, #66ccff",
    "#33ccff, #99ccff",
    "#66ffff, #ccffff",
  ];
  return gradients[index];
};

const StyledWrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    position: relative;
    width: 200px;
    height: 200px;
    perspective: 800px;
  }

  .crystal {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    opacity: 0;
    transform-origin: bottom center;
    transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
    animation: spin 4s linear infinite, emerge 2s ease-in-out infinite alternate,
      fadeIn 0.3s ease-out forwards;
    border-radius: 10px;
    visibility: hidden;
  }

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotateX(45deg) rotateZ(360deg);
    }
  }

  @keyframes emerge {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    to {
      visibility: visible;
      opacity: 0.8;
    }
  }
`;

export default Loader;
