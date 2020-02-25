const Audio = require('./model');

const getAll = async () => Audio.find({});

const getById = async (id) => Audio.findOne({ id });

const create = async (body) => new Audio({
  id: body.id,
  speakerID: body.speakerID,
  url: body.url,
}).save();

const remove = async (id) => Audio.findOneAndRemove({ id });

module.exports = {
  getAll,
  getById,
  create,
  remove,
};
