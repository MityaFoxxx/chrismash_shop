type CardTab = 'for work' | 'for health' | 'for harmony';
type SuperPower = { live: number; create: number; love: number; dream: number };
export interface Gift {
  id: number;
  tab: CardTab;
  title: string;
  imgUrl: string;
  superpowers: SuperPower;
}

type GiftsData = Gift[];
export const giftsDataList: GiftsData = [
  {
    id: 1,
    tab: 'for work',
    title: 'console.log guru',
    imgUrl: '/gift_ball_1.svg',
    superpowers: {
      live: 200,
      create: 500,
      love: 300,
      dream: 100,
    },
  },
  {
    id: 2,
    tab: 'for health',
    title: 'step master',
    imgUrl: '/gift_ball_2.svg',
    superpowers: {
      live: 400,
      create: 200,
      love: 500,
      dream: 100,
    },
  },
  {
    id: 3,
    tab: 'for work',
    title: 'bug magnet',
    imgUrl: '/gift_ball_1.svg',
    superpowers: {
      live: 300,
      create: 400,
      love: 100,
      dream: 500,
    },
  },
  {
    id: 4,
    tab: 'for work',
    title: 'shortcut cheater',
    imgUrl: '/gift_ball_1.svg',
    superpowers: {
      live: 500,
      create: 200,
      love: 400,
      dream: 300,
    },
  },
  {
    id: 5,
    tab: 'for health',
    title: 'posture levitation',
    imgUrl: '/gift_ball_2.svg',
    superpowers: {
      live: 200,
      create: 300,
      love: 400,
      dream: 500,
    },
  },
  {
    id: 6,
    tab: 'for harmony',
    title: 'Bug Acceptance Guru',
    imgUrl: '/gift_ball_3.svg',
    superpowers: {
      live: 400,
      create: 200,
      love: 100,
      dream: 500,
    },
  },
  {
    id: 7,
    tab: 'for health',
    title: 'Snack Resister',
    imgUrl: '/gift_ball_2.svg',
    superpowers: {
      live: 200,
      create: 100,
      love: 400,
      dream: 500,
    },
  },
  {
    id: 8,
    tab: 'for harmony',
    title: 'Error Laugher',
    imgUrl: '/gift_ball_3.svg',
    superpowers: {
      live: 200,
      create: 400,
      love: 100,
      dream: 500,
    },
  },
  {
    id: 9,
    tab: 'for health',
    title: 'Hydration Bot',
    imgUrl: '/gift_ball_2.svg',
    superpowers: {
      live: 200,
      create: 300,
      love: 400,
      dream: 500,
    },
  },
  {
    id: 10,
    tab: 'for work',
    title: 'Merge Master',
    imgUrl: '/gift_ball_1.svg',
    superpowers: {
      live: 400,
      create: 200,
      love: 300,
      dream: 500,
    },
  },
  {
    id: 11,
    tab: 'for harmony',
    title: 'Joy Charger',
    imgUrl: '/gift_ball_3.svg',
    superpowers: {
      live: 300,
      create: 300,
      love: 400,
      dream: 200,
    },
  },
  {
    id: 12,
    tab: 'for harmony',
    title: 'Spontaneous Coding Philosopher',
    imgUrl: '/gift_ball_3.svg',
    superpowers: {
      live: 400,
      create: 100,
      love: 200,
      dream: 500,
    },
  },
];

export const tabColors = {
  'for health': '#06A44F',
  'for harmony': '#FF43F7',
  'for work': '#4361FF',
};
export const tabs = ['all', 'for work', 'for health', 'for harmony'];
