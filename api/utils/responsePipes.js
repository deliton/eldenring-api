function parseLimit(limit) {
  if (limit != null) {
    var intLimit = parseInt(limit, 10);
    // Set upper limit to 200 to support current data set
    // If intLimit is NaN, return 20
    if (isNaN(intLimit)) {
      return 20;
    } else if (intLimit > 200) {
      // For efficiency, if over 200, implement paging
      return 200;
    } else {
      return intLimit;
    }
  } else {
    return 20;
  }
}

function parseObject(object, apiPath, objectName) {
  const root_path = process.env.API_URL
    ? process.env.API_URL
    : "https://eldenring.fanapis.com/api/";
  return object.map((entries) => {
    return {
      ...entries,
      [objectName]: entries[objectName].map(
        (objectId) => root_path + apiPath + objectId
      ),
    };
  });
}

function parseOneObject(object, apiPath, objectName) {
  const root_path = process.env.API_URL
    ? process.env.API_URL
    : "https://eldenring.fanapis.com/api/";
  const entries = object[objectName].map(
    (objectId) => root_path + apiPath + objectId
  );
  return {
    ...object,
    [objectName]: entries,
  };
}

module.exports = { parseObject, parseOneObject, parseLimit };
