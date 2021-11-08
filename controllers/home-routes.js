const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'title',
        'body',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id', 'post_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }))
      res.render('homepage', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  module.exports = router;