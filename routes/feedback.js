const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { feedbackService } = params;

  router.get('/', async (req, res, next) => {
    try {
      const feedback = await feedbackService.getList();
      return res.render('layout', {
        pageTitle: 'Feedback',
        template: 'feedback',
        feedback,
      });
    } catch (e) {
      return next(e);
    }
  });

  router.post('/', (req, res) => {
    console.log(req.body);
    return res.send('Feedback from posted');
  });

  return router;
};
