const http = require("http");
const { constantURL } = require("../utils");

const getJobs = async (req, res) => {
  const url = constantURL;
  http.get(url, (data) => {
    console.log(data, "servicesssss");
  });
};

module.exports = {
  getJobs,
};
