import React from 'react';
import {
  Disc, TrendingUp, Radio, User,
} from 'react-feather';

export default [
  {
    id: 1,
    title: 'Discover',
    icon: <Disc />,
    url: '/',
  },
  {
    id: 2,
    title: 'Charts',
    icon: <TrendingUp />,
    url: '/charts',
  },
  {
    id: 3,
    title: 'Audio',
    icon: <Radio />,
    url: '/audio',
  },
  {
    id: 4,
    title: 'Artists',
    icon: <User />,
    url: '/artists',
  },
];
