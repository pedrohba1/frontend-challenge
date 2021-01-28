import styled from 'styled-components';

interface PlayerProps {
  showPlayer: boolean;
}

export const Container = styled.div``;

export const AlbumContainer = styled.div<PlayerProps>`
  position: relative;
  text-align: center;
  color: white;
  border-bottom: 1px solid #4444;

  p {
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: ${(p) => (p.showPlayer ? 'brightness(0.2)' : 'brightness(1)')};
  }

  div {
    position: absolute;
    h1 {
      span {
        cursor: pointer;
        display: ${(p) => (p.showPlayer ? 'block' : 'none')};
      }
    }

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
