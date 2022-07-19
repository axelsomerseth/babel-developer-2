function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

const {
  default: axios
} = require("axios");

function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

const getUsers = _async(function () {
  return _await(axios.get("https://jsonplaceholder.typicode.com/users"), function (results) {
    const firstUser = results.data[0];
    console.log(firstUser);
    return results;
  });
});

getUsers();