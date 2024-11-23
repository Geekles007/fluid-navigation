export const links = [
  {
    label: 'Dashboard',
    key: 'dashboard',
    icon: 'home',
    children: [],
  },
  {
    label: 'Profile',
    key: 'profile',
    icon: 'user',
    children: [],
  },
  {
    label: 'Messages',
    key: 'messages',
    icon: 'message',
    children: [
      {
        label: 'Inbox',
        key: 'inbox',
        icon: 'inbox',
        children: [],
      },
      {
        label: 'Sent',
        key: 'sent',
        icon: 'send',
        children: [],
      },
      {
        label: 'Drafts',
        key: 'drafts',
        icon: 'file',
        children: [],
      },
    ],
  },
  {
    label: 'Settings',
    key: 'settings',
    icon: 'settings',
    children: [
      {
        label: 'Account Settings',
        key: 'account-settings',
        icon: 'user-settings',
        children: [],
      },
      {
        label: 'Privacy Settings',
        key: 'privacy-settings',
        icon: 'lock',
        children: [],
      },
    ],
  },
  {
    label: 'Help',
    key: 'help',
    icon: 'help-circle',
    children: [],
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: 'log-out',
    children: [],
  },
];
