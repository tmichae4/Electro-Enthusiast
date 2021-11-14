const { Comment } = require('../models');

const commentdata = [
  {
    content: 'already bought the whole line!!',
    user_id: 2,
    post_id: 1
  },
  {
    content: 'so many great gift ideas',
    user_id: 3,
    post_id: 2
  },
  {
    content: 'stepping up their game!!',
    user_id: 4,
    post_id: 3
  },
  {
    content: 'take all my money',
    user_id: 2,
    post_id: 4
  },
  {
    content: 'already bought the whole line!!',
    user_id: 2,
    post_id: 3
  },
  {
    content: 'so many great gift ideas',
    user_id: 1,
    post_id: 4
  },
  {
    content: 'stepping up their game!!',
    user_id: 3,
    post_id: 2
  },
  {
    content: 'take all my money',
    user_id: 1,
    post_id: 4
  },
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;