import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
  justify-content: center;
  border-radius: 4px;

  width: 300px;
  color: #000;
  position: fixed;
  bottom: 2%;
  height: 70px;
  background-color: #ffd300;
`;

export const Button = styled.button`
  background: none;
  border: none;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
