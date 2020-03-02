const Utterance = require('../../components/utterance/model');

const randomSamples = async (n) => Utterance.aggregate().sample(n)
  .lookup({
    from: 'audios', localField: 'contentID', foreignField: 'id', as: 'content',
  })
  .lookup({
    from: 'audios', localField: 'styleID', foreignField: 'id', as: 'style',
  })
  .lookup({
    from: 'audios', localField: 'outputID', foreignField: 'id', as: 'output',
  })
  .project({
    _id: 0,
    id: 1,
    modelID: 1,
    content: 1,
    style: 1,
    output: 1,
  });

module.exports = {
  randomSamples,
};
