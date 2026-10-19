const users = [];

let loggedIn = false;

export function isLoggedIn() {
  return loggedIn;
}

export function login(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const user = users.find(
    (user) => user.email === normalizedEmail && user.password === password,
  );

  if (!user) {
    return false;
  }

  loggedIn = true;
  return true;
}

export function logout() {
  loggedIn = false;
}
