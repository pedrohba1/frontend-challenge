import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Forward5 from '@material-ui/icons/Forward5';
import Replay5 from '@material-ui/icons/Replay5';

import { Container, Button, ButtonsContainer } from './style';

const MediaPlayer: React.FC<any> = () => {
  const [y, setY] = useState(0);

  const expandIconStyle = {
    fontSize: 30,
    color: '#000'
  };
  return (
    <Container animate={{ y }}>
      <Button
        type="button"
        onClick={() => {
          if (y === 60) setY(0);
          else setY(60);
        }}
      >
        {y === 60 ? (
          <ExpandLess style={expandIconStyle} />
        ) : (
          <ExpandMore style={expandIconStyle} />
        )}
      </Button>
      <ButtonsContainer>
        <Replay5 style={expandIconStyle} />
        <PlayArrow style={expandIconStyle} />
        <Forward5 style={expandIconStyle} />
      </ButtonsContainer>
    </Container>
  );
};

export default MediaPlayer;
