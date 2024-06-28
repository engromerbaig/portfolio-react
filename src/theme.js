const sharedColors = {
  bgColor: 'bg-white-800',
  textColor: 'text-black',
};

export const theme = {
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
    bgColor: 'bg-transparent',
    hoverBgColor: 'hover:bg-blue-500',
    textColor: 'text-blue-500',
    hoverTextColor: 'hover:text-white',
    borderColor: 'border-blue-500',
    borderWidth: 'border-4',
    rounded: 'none',
    padding: 'py-2.5 px-7',
    transition: 'transition duration-300',
  },
  hero: {
    bgColor: sharedColors.bgColor,
    titleColor: sharedColors.textColor,
    textColor: 'text-gray-500',
  },
  content: {
    bgColor: sharedColors.bgColor,
  },
};
