const { Router } = require('express');

const { list, create, get, remove } = require('./methods');

const router = Router();

router.get('/', list);
router.post('/', create);
router.get('/:id', get);
router.delete('/:id', remove);

module.exports = router;
