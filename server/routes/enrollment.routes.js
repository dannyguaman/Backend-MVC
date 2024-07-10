const EnrollmentController = require('../controllers/enrollment.controller');

module.exports = function(app) {
  app.post('/api/enrollment/new', EnrollmentController.enrollUser);
  app.get('/api/user/:userId/enrollments', EnrollmentController.getUserEnrollments);
};