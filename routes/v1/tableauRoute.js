const express = require('express');
const router = express.Router();
const tableauController = require('../../controllers/tableauController');

router.post('/', tableauController.createTableau);
router.get('/', tableauController.getAllTableau);
router.get('/:id', tableauController.getTableauId);
router.get('/random', tableauController.getRandomTableau);
router.put('/:id', tableauController.updateTableau);
router.delete('/:id', tableauController.deleteTableau);

module.exports = router;