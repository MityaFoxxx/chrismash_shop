type CardTab = 'for work' | 'for health' | 'for harmony';
export interface Gift {
  id: number;
  tab: CardTab;
  title: string;
  imgUrl: string;
}

type GiftsData = Gift[];
export const giftsDataList: GiftsData = [
  {
    id: 1,
    tab: 'for work',
    title: 'console.log guru',
    imgUrl: '/gift_ball_1.svg',
  },
  {
    id: 2,
    tab: 'for health',
    title: 'step master',
    imgUrl: '/gift_ball_2.svg',
  },
  {
    id: 3,
    tab: 'for work',
    title: 'bug magnet',
    imgUrl: '/gift_ball_1.svg',
  },
  {
    id: 4,
    tab: 'for work',
    title: 'shortcut cheater',
    imgUrl: '/gift_ball_1.svg',
  },
  {
    id: 5,
    tab: 'for health',
    title: 'posture levitation',
    imgUrl: '/gift_ball_2.svg',
  },
  {
    id: 6,
    tab: 'for harmony',
    title: 'Bug Acceptance Guru',
    imgUrl: '/gift_ball_3.svg',
  },
  {
    id: 7,
    tab: 'for health',
    title: 'Snack Resister',
    imgUrl: '/gift_ball_2.svg',
  },
  {
    id: 8,
    tab: 'for harmony',
    title: 'Error Laugher',
    imgUrl: '/gift_ball_3.svg',
  },
  {
    id: 9,
    tab: 'for health',
    title: 'Hydration Bot',
    imgUrl: '/gift_ball_2.svg',
  },
  {
    id: 10,
    tab: 'for work',
    title: 'Merge Master',
    imgUrl: '/gift_ball_1.svg',
  },
  {
    id: 11,
    tab: 'for harmony',
    title: 'Joy Charger',
    imgUrl: '/gift_ball_3.svg',
  },
  {
    id: 12,
    tab: 'for harmony',
    title: 'Spontaneous Coding Philosopher',
    imgUrl: '/gift_ball_3.svg',
  },
];

export const tabColors = {
  'for health': '#06A44F',
  'for harmony': '#FF43F7',
  'for work': '#4361FF',
};

export const giftsDataUI: GiftsData = [
  {
    id: 1,
    tab: 'for work',
    title: 'console.log guru',
    imgUrl: '/gift_ball_1.svg',
  },
  {
    id: 9,
    tab: 'for health',
    title: 'Hydration Bot',
    imgUrl: '/gift_ball_2.svg',
  },
  {
    id: 10,
    tab: 'for work',
    title: 'Merge Master',
    imgUrl: '/gift_ball_1.svg',
  },
  {
    id: 12,
    tab: 'for harmony',
    title: 'Spontaneous Coding Philosopher',
    imgUrl: '/gift_ball_3.svg',
  },
];
