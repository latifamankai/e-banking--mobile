import {RouteInfo} from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '',
    title: 'Employées',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: [],
    roles: ['ROLE_ADMIN', 'ROLE_CHEF_AGENCE']
  },
  {
    path: '/chef-agence',
    title: 'Chef d\'agences',
    icon: 'sl-icon-people',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_ADMIN']
  },

  {
    path: '/caissier',
    title: 'Caissier',
    icon: 'sl-icon-people',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CHEF_AGENCE']
  },
  {
    path: '/charger',
    title: 'Charger',
    icon: 'sl-icon-people',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CHEF_AGENCE']
  },
  {
    path: '',
    title: 'Parémetrages',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: [],
    roles: ['ROLE_ADMIN']
  },
  {
    path: '/agence',
    title: 'Agences',
    icon: 'icon-Bank',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_ADMIN']
  },
  {
    path: '/devise',
    title: 'Devise',
    icon: 'icon-Money-Bag',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_ADMIN']
  },
  {
    path: '/type-operation',
    title: 'Type opérations',
    icon: ' icon-Repeat-4',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_ADMIN']
  },
  {
    path: '/type-compte',
    title: 'Type comptes',
    icon: 'icon-Wallet-2',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_ADMIN']
  },

  {
    path: '/client-moral',
    title: 'Client Morale',
    icon: 'sl-icon-people',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CHARGER']
  },

  {
    path: '/client-physique',
    title: 'Client Physique',
    icon: 'sl-icon-people',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CHARGER']
  },
  {
    path: '/cours-change',
    title: 'Cours Change',
    icon: ' sl-icon-graph',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CHARGER']
  },
  {
    path: '',
    title: 'Demandes',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: [],
    roles: ['ROLE_CHEF_AGENCE', 'ROLE_CAISSIER']
  },
  {
    path: '/chef-agence/compte',
    title: 'Compte',
    icon: 'icon-Wallet-2',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CHEF_AGENCE']
  },
  {
    path: '/chef-agence/chequier',
    title: 'Chéquiers',
    icon: 'icon-Library-2',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CHEF_AGENCE']
  },
  {
    path: '/chef-agence/livret',
    title: 'Livrets',
    icon: 'icon-Book',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CHEF_AGENCE']
  },
  {
    path: '/chef-agence/carte',
    title: 'Cartes',
    icon: 'sl-icon-credit-card',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CHEF_AGENCE']
  },
  {
    path: '/demande-chequier',
    title: 'Chéquier',
    icon: 'icon-Library-2',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CAISSIER']
  },
  {
    path: '/demande-livret',
    title: 'Livret',
    icon: 'icon-Book',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CAISSIER']
  },
  {
    path: '/demande-carte',
    title: 'Carte',
    icon: ' sl-icon-credit-card',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CAISSIER']
  },
  {
    path: '/operation',
    title: 'Operation',
    icon: ' icon-Repeat-4',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_CAISSIER']
  },
];

