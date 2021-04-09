const localeStorageUsers = (promise) => {
  const LS_USERS = promise;
  const LS_NAME_TASKS = 'users';

  if (!localStorage.getItem(LS_NAME_TASKS)) {
    localStorage.setItem(LS_NAME_TASKS, JSON.stringify(LS_USERS));
  }

  const usersString = localStorage.getItem('users');
  const parseUsers = JSON.parse(usersString);

  return parseUsers;
}

export {localeStorageUsers};