const express = require('express');
const router = express.Router();
const tableauController = require('../../controllers/tableauController');

router.post('/', tableauController.createTableau);
router.get('/', tableauController.getAllTableau);
router.get('/random', tableauController.getRandomTableau);
router.get('/:uuid', tableauController.getTableauId);
router.put('/:uuid', tableauController.updateTableau);
router.delete('/:uuid', tableauController.deleteTableau);

module.exports = router;