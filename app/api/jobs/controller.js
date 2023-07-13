const { StatusCodes } = require("http-status-codes");
const fetch = require("node-fetch");
const { constantURL, constantGetByIdURL } = require("../../utils");

const getJobsList = async (req, res, next) => {
  let settings = { method: "Get" };
  let filterSearch = req.query;
  let page = req.query.page;
  let limit = req.query.limit;
  let startIndex = (page - 1) * limit;
  let endIndex = page * limit;

  try {
    await fetch(constantURL, settings)
      .then((ress) => ress.json())
      .then((json) => {
        if (filterSearch.page) {
          res.status(StatusCodes.OK).json({
            data: json.slice(startIndex, endIndex),
          });
        } else {
          const filteredUsers = filterredProcess(json, filterSearch);

          res.status(StatusCodes.OK).json({
            data: filteredUsers,
          });
        }
      });
  } catch (error) {
    next(error);
  }
};

const getJobById = async (req, res, next) => {
  const { id } = req.params;
  let settings = { method: "Get" };
  try {
    await fetch(constantGetByIdURL + `/${id}`, settings)
      .then((ress) => ress.json())
      .then((json) => {
        res.status(StatusCodes.OK).json({
          data: json,
        });
      });
  } catch (error) {
    next(error);
  }
};

const getJobsFiltered = async (req, res, next) => {
  let settings = { method: "Get" };
  try {
    await fetch(constantURL, settings)
      .then((ress) => ress.json())
      .then((json) => {
        let filtered = json.filter(function (item) {
          let result = false;
          Object.keys(item).map(function (key) {
            console.log(req.params.search, "inside filtereddddd4");
            if (item[key] == req.params.search) {
              result = true;
            }
          });
        });
        res.status(StatusCodes.OK).json({
          data: filtered,
        });
      });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getJobsList,
  getJobById,
  getJobsFiltered,
};

function filterredProcess(json, filterSearch) {
  return json.filter((jobs) => {
    let isValid = true;
    for (key in filterSearch) {
      filterSearch[key].toLowerCase();
      jobs[key].toLowerCase();

      isValid =
        isValid &&
        jobs[key].toLowerCase().includes(filterSearch[key].toLowerCase());
    }
    return isValid;
  });
}
