const { default: axios } = require("axios");

const getUsers = async () => {
  const results = await axios.get("https://jsonplaceholder.typicode.com/users");
  const firstUser = results.data[0];
  console.log(firstUser);
  return results;
};

getUsers();
