export const MOVE_MENU_RIGHT = 'MOVE_MENU_RIGHT';
export const moveMenuRight = () => ({
  type: MOVE_MENU_RIGHT
});

export const MOVE_MENU_LEFT = 'MOVE_MENU_LEFT';
export const moveMenuLeft = () => ({
  type: MOVE_MENU_LEFT
});

export const UPDATE_DISPLAY = 'UPDATE_DISPLAY';
export const updateDisplay = (display) => ({
  type: UPDATE_DISPLAY,
  display
})

export const TOGGLE_SLIDESHOW = 'TOGGLE_SLIDESHOW';
export const toggleSlideShow = () => ({
  type: TOGGLE_SLIDESHOW,
})

export const NEXT_PICTURE = 'NEXT_PICTURE';
export const nextPicture = () => ({
  type: NEXT_PICTURE
})

