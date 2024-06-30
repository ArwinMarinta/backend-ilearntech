const express = require('express')
   const schema = require('../../validation/course.schema')
   const validate = require('../../middlewares/validation')
  const controller = require('../../controllers/user.course')
   const router = express.Router()

router.get('/wishlist', controller.userWishlist.getAll)
// router.post('/', validate(schema.type), controller.courseType.create)
// router.get('/:id', controller.courseType.getById)
// router.put('/:id', validate(schema.type), controller.courseType.update)
// router.delete('/:id', controller.courseType.delete)

module.exports = router