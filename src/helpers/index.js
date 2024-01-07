export function isNotValidEmail(email) {
  return !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}

export function isNotValidPassword(password) {
  return password.trim().length < 8
}

export function isEmptyName(name) {
  return name.trim().length === 0
}

export function isNotValidPhoneNumber(phone) {
  return phone.trim().length < 10 || isNaN(Number(phone.trim()))
}
