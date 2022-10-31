import { IItem } from '../types';

export const items: IItem[] = [
  {
    title: 'This is a title',
    description: 'This is a description',
    price: 350,
    location: {
      city: 'Paris',
      country: 'France',
    },
  },
  {
    title: 'This is a shiny title',
    description: 'This is a shiny description',
    price: 770,
    location: {
      city: 'Berlin',
      country: 'Germany',
    },
  },
  {
    title: 'Narrow Track Tractor Fendt Farmer 204 V',
    description:
      'Operating hours (read): 3,115.5 h. Engine transmission hydraulics working! Factors affecting value: Damaged bodywork damaged lighting general need for restoration. Hour meter disconnected operating hours not usable. Registration certificates must be provided by the buyer/bidder.',
    price: 10999,
    location: {
      city: 'Berlin',
      country: 'Germany',
    },
  },
  {
    title: 'B1-17 Bulltra Tractor',
    description: 'B1-17 Bulltra with front loader small tractor tractor tractor wheel loader yard loader Fudex',
    price: 78990,
    location: {
      city: 'Berlin',
      country: 'Germany',
    },
  },
  {
    title: 'Fendt Vario - Used Urgent',
    description: 'suitable for Fendt 700 Vario SCR+S4',
    price: 88900,
    location: {
      city: 'Dalaman',
      country: 'Turkey',
    },
  },
  {
    title: 'Second hand but quite new tractor',
    description: null,
    price: 120000,
    location: {
      city: 'Klaipeda',
      country: 'Lithuania',
    },
  },
  // error condition [6]
  {
    title: 'title with some error',
    description: `hello from other side`,
    price: 120000,
    location: {
      city: 'Klaipeda',
      country: 'Lithuania',
    },
  },
];
