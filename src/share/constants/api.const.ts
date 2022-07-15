export const CONTROLLER_CONSTANTS = {
  APP: { NAME: 'app', API_TAG: 'Application' },
  DASHBOARD: {
    NAME: 'dashboard', API_TAG: 'Dashboard', METHODS: {
      BALANCES: 'balances/:address/:pagekey?'
    }
  },
  COLLECTIBLES: {
     NAME: 'collectibles', API_TAG: 'Collectibles', METHODS: {
      GET_BY_ADDRESS: ':address'
    }
  },
   LAUNCHPAD: {
     NAME: 'launchpad', API_TAG: 'Launchpad', METHODS: {
      GET_BY_ADDRESS: ':address',
      GET_PAGING: ':limit/:offset'
    }
  },
};
