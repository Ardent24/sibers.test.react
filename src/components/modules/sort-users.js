const sortUsers = (users) => {
  const byField = (field) => (a, b) => a[field] > b[field] ? 1 : -1;

  return users.sort(byField('name'));
}

export {sortUsers};