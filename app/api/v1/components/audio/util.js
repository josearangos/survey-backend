const Audio = require('./model');

const getAll = async () => Audio.find({});

const getById = async (id) => Audio.findOne({ id });

const create = async (body) => new Audio({
  id: body.id,
  speakerID: body.speakerID,
  url: body.url,
  type: body.type,
  description: body.description,
}).save();

const remove = async (id) => Audio.findOneAndRemove({ id });

const randomSample = async (n) => Audio.aggregate().sample(n);

module.exports = {
  getAll,
  getById,
  create,
  remove,
  randomSample,
};
