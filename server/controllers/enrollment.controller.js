const Enrollment = require('../models/enrollment.model');
//const User = require('../models/user.model');
const Subject = require('../models/subject.model');

// Controlador para matricular un usuario en una asignatura
module.exports.enrollUser = async (req, res) => {
  try {
    const { userId, subjectId } = req.body;
    const enrollment = await Enrollment.create({ UserId: userId, SubjectId: subjectId });
    res.json(enrollment);
  } catch (err) {
    res.status(500).json({msg: "Ocurrió un error al registrar la matriculación"});
  }
};

// Controlador para obtener las asignaturas matriculadas por un usuario/estudiante
module.exports.getUserEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll({
      where: { UserId: req.params.userId },
      include: [Subject]
    });
    res.json(enrollments);
  } catch (err) {
    //res.status(500).json({msg: "Ocurrió un error al obtener las asignaturas matriculadas"});
    res.status(500).json(err);
  }
};

/*
include: [
        {
            model: Subject,
            required: true
        }
    ]

*/