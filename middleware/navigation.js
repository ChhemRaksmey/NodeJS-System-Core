const path = require('path');

function initNavigation(app) {
  app.use((req, res, next) => {
    
    const languages = [
      { code: 'en', name: 'English' },
      { code: 'km', name: 'ខ្មែរ' },
    ];

    const userProfile = [
      { label: 'Profile Details', url: '#' },
      { label: 'Activities', url: '#' },
      { label: 'Preferences', url: '#' },
      { label: 'Password Change', url: '#' },
      { label: 'Settings', url: '#' },
      { label: 'Signout', url: '#' },
    ];

    res.locals.nav = {
      languages,
      userProfile,
    };

    next();
  });
}

module.exports = initNavigation;
