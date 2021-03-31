const { Router } = require('express');

const { list, create, get, edit, remove } = require('./methods');

const router = Router();

router.get('/', list);
router.post('/', create);
router.get('/:id', get);
router.put('/:id', edit);
router.delete('/:id', remove);

module.exports = router;
