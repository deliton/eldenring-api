import { JSONDriver } from "db/driver";
import { parseLimit } from "utils/responsePipes";

export const simpleJSONGetAllHandler = async (req, res, model) => {
  const { method } = req;
  const pageOptions = {
    page: parseInt(req.query.page, 10) || 0,
    limit: parseLimit(req.query.limit),
    name: req.query.name || undefined,
  };

  const Model = new JSONDriver(model);
  await Model.init();
  const totalAmountOfObjects = Model.data.length;

  switch (method) {
    case "GET":
      try {
        var Models;
        if (pageOptions.name) {
          Models = Model.search({ name: pageOptions.name })
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit);
        } else {
          Models = Model.findMany()
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit);
        }
        res.status(200).json({
          success: true,
          count: Models.data.length,
          total: totalAmountOfObjects,
          data: Models.data,
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export const simpleJSONGetByIdHandler = async (req, res, model) => {
  const {
    query: { id },
    method,
  } = req;

  const Model = new JSONDriver(model);
  await Model.init();

  switch (method) {
    case "GET":
      try {
        const modelItem = Model.findById(id);
        res.status(200).json({
          success: true,
          count: modelItem.data.length,
          data: modelItem.data,
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export const simpleGraphQLGetAllHandler = async (_, args, model) => {
  try {
    const limit = parseLimit(args.limit);
    const page = args.page || 0;
    const search = args.search || undefined;
    delete args.limit;
    delete args.page;
    const Model = new JSONDriver(model);
    await Model.init();
    if (args.search) {
      delete args.search;
      return Model.search({ name: search })
        .skip(page * limit)
        .limit(limit).data;
    }
    return Model.findMany(args)
      .skip(page * limit)
      .limit(limit).data;
  } catch (error) {
    throw error;
  }
};

export const simpleGraphQLGetByIdHandler = async (_, args, model) => {
  try {
    const Model = new JSONDriver(model);
    await Model.init();
    const modelItem = Model.findById(args.id);
    return modelItem.data;
  } catch (error) {
    throw error;
  }
};
