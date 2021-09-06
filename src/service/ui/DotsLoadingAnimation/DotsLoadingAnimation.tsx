import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #3B5CB8;
  animation: dotFlashing 1s infinite linear alternate;
  animation-delay: .5s;

  &:before, &:after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &:before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #3B5CB8;
    color: #3B5CB8;
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 0s;
  }

  &:after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #3B5CB8;
    color: #3B5CB8;
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 1s;
  }

  @keyframes dotFlashing {
    0% {
      background-color: #3B5CB8;
    }
    50%,
    100% {
      background-color: #ebe6ff;
    }
  }
`;
