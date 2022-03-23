function parseLimit(limit) {
  if (limit != null) {
    var intLimit = parseInt(limit, 10);
    if (intLimit > 100) {
      return 100;
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
