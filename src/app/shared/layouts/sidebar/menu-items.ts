import {RouteInfo} from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [





  {
    path: '',
    title: 'Information',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: [],
    roles: ['ROLE_CLIENT']
  },
  {
    path: '/compte',
    title: 'Mes comptes',
    icon: 'icon-Wallet-2',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CLIENT']
  },
  {
    path: '/cours-change',
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
    submenu: []
  },
  {
    path: '/demande/chequier',
    title: 'Chéquiers',
    icon: 'icon-Library-2',
    class: '',
    extralink: false,
    submenu: [],

  },
  {
    path: '/demande/livret',
    title: 'Livrets',
    icon: 'icon-Book',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/demande/carte',
    title: 'Cartes',
    icon: 'sl-icon-credit-card',
    class: '',
    extralink: false,
    submenu: []
  },
];

