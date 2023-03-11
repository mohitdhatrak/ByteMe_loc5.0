export function validateForm(data, formType) {
  const email = data.email;
  const password = data.password;
  const name = data.firstName;
  const confirmPassword = data.confirmPassword;

  const regexEmail =
    /^[\w#!%\$'&\+\*-/\?\^`\.\{\|\}~=]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+$/;

  const regexPassword =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=\S+$).*$/;

  if (
    name?.trim() === '' ||
    email.trim() === '' ||
    password.trim() === '' ||
    confirmPassword?.trim() === ''
  ) {
    return [false, 'Please fill all compulsory fields!'];
  } else if (
    !regexEmail.test(email.trim()) ||
    email.startsWith('.') ||
    email.endsWith('.') ||
    email.endsWith('-') ||
    email.includes('..') ||
    email.includes('.@') ||
    email.includes('@-')
  ) {
    return [false, 'Please enter a valid email!'];
  } else if (password.trim().length < 8) {
    return [false, 'Password must be atleast 8 characters long!'];
  } else if (!regexPassword.test(password.trim())) {
    return [
      false,
      'Password must contain atleast 1 special character, 1 numeric value and 1 uppercase & lowercase letter each!',
    ];
  }

  return [true];
}
