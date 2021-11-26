const { Post } = require('../models');

const postdata = [
  {
    title: 'PS5',
    post_content: 'Playstation brand new game console!',
    user_id: 1
  },
  {
    title: 'MacBook Pro',
    post_content: "So, so.. hicked the price for the same specs!",
    user_id: 2
  },
  {
    title: 'Samsung 55"',
    post_content: 'New 4K HDTV is everything!',
    user_id: 3
  },
  {
    title: 'Iphone 8 Plus',
    post_content:'Iphone has done it again!',
    user_id: 4
  },
  {
    title: 'example',
    post_content:'example!',
    user_id: 1
  },
  {
    title: 'example',
    post_content:'example!',
    user_id: 1
  },
  {
    title: 'example',
    post_content:'example!',
    user_id: 1
  },
  {
    title: 'example',
    post_content:'example!',
    user_id: 1
  },
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;