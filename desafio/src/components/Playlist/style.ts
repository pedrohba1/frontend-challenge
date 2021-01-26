import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  background-color: #4444;

  img {
    position: relative;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  img:hover {
    filter: brightness(0.1);
    transition: 0.2s;
  }
`;
