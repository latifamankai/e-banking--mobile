import {RouteInfo} from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [





  {
    path: '',
    title: 'Parémetrages',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: [],
    roles: ['ROLE_CLIENT']
  },
  {
    path: '/client/cours-change',
    title: 'Cours Change',
    icon: ' sl-icon-graph',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CLIENT']
  },
  {
    path: '',
    title: 'Demandes',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: [],
    roles: ['ROLE_CLIENT']
  },
  {
    path: '/client/compte',
    title: 'Compte',
    icon: 'icon-Wallet-2',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CLIENT']
  },


  {
    path: '/client/operation',
    title: 'Operation',
    icon: ' icon-Repeat-4',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CLIENT']
  },
  {
    path: '/client/demande',
    title: 'Demande',
    icon: ' icon-Repeat-4',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CLIENT']
  },
];

