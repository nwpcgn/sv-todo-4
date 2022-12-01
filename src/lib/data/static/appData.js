export const appData = [
  {
    "id": 0,
    "slug": "start",
    "head": {
      "titel": "Nwp-App",
      "sub": "App-Viewer",
      "bg": "https://nwp-cgn.de/studio/upload/kat11/server/php/files/jc1.png"
    },
    "link": {
      "path": "/",
      "name": "Start",
      "hidden": true,
      "icon": "home"
    }
  },
  {
    "id": 1,
    "slug": "main",
    "head": {
      "titel": "Todos Application",
      "sub": "Private Todo List",
      "bg": "https://nwp-cgn.de/studio/upload/kat11/server/php/files/jc3.png"
    },
    "link": {
      "path": "/data/",
      "name": "Todos",
      "icon": "db"
    }
  },
  {
    "id": 2,
    "slug": "settings",
    "head": {
      "titel": "App-Settings",
      "sub": "Options and Settings",
      "bg": "https://nwp-cgn.de/studio/upload/kat11/server/php/files/jc4.png"
    },
    "link": {
      "path": "/settings/",
      "name": "Settings",
      "icon": "settings"
    }
  }
];  
export const navData = appData.map((x) => x.link);
export const pageData = appData.map((x) => x.head);

export default appData;

