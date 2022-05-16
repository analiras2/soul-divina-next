/* eslint-disable no-nested-ternary */
import HideImageIcon from '@mui/icons-material/HideImage';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container, Pressable } from './styles';

export type Props = {
  id: string;
  onPress: (event: any) => void;
  title: string;
};

const RectangleItemList: React.FC<Props> = ({ id, title, onPress }) => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Pressable>
        <Link href={`/therapies/options/${id}`}>
          <a style={{ textDecoration: 'none' }}>
            <p>{title}</p>
          </a>
        </Link>
      </Pressable>
    </Container>
  );
};

export default RectangleItemList;
