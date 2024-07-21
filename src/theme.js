const sharedColors = {
  bgColor: 'bg-white-800',
  textColor: 'text-black',
};

export const theme = {
  sectionBg:{
    bgColor:'bg-white dark:bg-[#232323]',
    textColor:'text-black dark:text-white',
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
  button: {
    // bgColor: 'bg-transparent',
    // hoverBgColor: 'hover:bg-red-500',
    // textColor: 'text-red-500',
    // hoverTextColor: 'hover:text-white',
    // borderColor: 'border-red-500',
    borderWidth: 'border-4',
    // rounded: 'none',
    padding: 'py-2.5 px-7',
    transition: 'transition duration-200',
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
