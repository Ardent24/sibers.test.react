const requestUsers = () => {
  return fetch("https://demo.sibers.com/users").then((res) => res.json());
};

export { requestUsers };
