import React, { useEffect, useState } from 'react';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { api, auth } from '../../services/api';

import { Container } from './style';

const Playlist: React.FC<PlaylistProp> = ({ playlist }) => {
  const [enableContent, setEnableContent] = useState<boolean>(false);

  return (
    <div>
      <Container
        onMouseOver={(e) => {
          setEnableContent(true);
        }}
        onMouseLeave={(e) => {
          setEnableContent(false);
        }}
        showPlayer={enableContent}
      >
        <img src={playlist.images[0].url} alt={playlist?.description} />
        <div>
          <h1>
            <span>
              <PlayCircleOutline style={{ fontSize: 40, color: '#FFD300' }} />
            </span>
          </h1>
        </div>
      </Container>
      <p>{playlist.description}</p>
    </div>
  );
};

export default Playlist;
