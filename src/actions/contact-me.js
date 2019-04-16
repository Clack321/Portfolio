export const UPDATE_CONTACT_NAME = 'UPDATE_CONTACT_NAME';
export const updateContactName = (name) => ({
  type: UPDATE_CONTACT_NAME,
  name
})

export const UPDATE_CONTACT_EMAIL = 'UPDATE_CONTACT_EMAIL';
export const updateContactEmail = (email) => ({
  type: UPDATE_CONTACT_EMAIL,
  email
})

export const UPDATE_CONTACT_MESSAGE = 'UPDATE_CONTACT_MESSAGE';
export const updateContactMessage = (message) => ({
  type: UPDATE_CONTACT_MESSAGE,
  message
})

export const CLEAR_CONTACT_FORM = 'CLEAR_CONTACT_FORM';
export const clearContactForm = () => ({
  type: CLEAR_CONTACT_FORM
})