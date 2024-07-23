const sharedColors = {
  bgColor: 'bg-white-800',
  textColor: 'text-black',
};

export const theme = {
  sectionBg:{
    bgColor:'bg-theme-light dark:bg-theme-dark',
    textColor:'text-body-text-light dark:text-body-text-dark',
  },

  navbar: {
    bgColor: 'sharedColors.bgColor',
    textColor: sharedColors.textColor,
  },
  offCanvas: {
    bgColor: 'bg-white',
    textColor: 'text-black',
    overlayColor: 'bg-black bg-opacity-50',
  },


  hero: {
    bgColor: sharedColors.bgColor,
    titleColor: 'text-black dark:text-white',
    textColor: 'text-gray-500',
  },
  content: {
    bgColor: sharedColors.bgColor,
  },
};
