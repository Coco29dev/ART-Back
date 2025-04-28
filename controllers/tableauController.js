const Tableau = require('../models/tableau');


exports.createTableau = async (req, res) => {
  try {
    const { url, title, content } = req.body;
    if (!url || !title || !content) {
      return res.status(400).json({ message: 'Contenu manquant' });
    }
    const tableauExistant = await Tableau.findOne({
      where: {
        title: req.body.title
      }
    });
    if (tableauExistant) {
      return res.status(409).json({ message: 'Tableau déjà existant' });
    }
    const tableau = await Tableau.create(req.body);
    return res.status(201).json(tableau);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  };
};

exports.getAllTableau = async (req, res) => {
  try {
    const tableaux = await Tableau.findAll();
    return res.status(200).json(tableaux);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  };
};

exports.getTableauId = async (req, res) => {
  try {
    const tableau = await Tableau.findByPk(req.params.uuid);
    if (!tableau) {
      return res.status(404).json({ message: 'Tableau introuvable ' });
    }
    return res.status(200).json(tableau);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  };
};


exports.getRandomTableau = async (req, res) => {
  try {
    const tableauCount = await Tableau.count();

    if (tableauCount === 0) {
      return res.status(404).json({ message: 'Aucun tableau trouvé ' });
    }

    const tableaux = await Tableau.findAll();
    const indexRandom = Math.floor(Math.random() * tableaux.length);

    return res.status(200).json(tableaux[indexRandom]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.updateTableau = async (req, res) => {
  try {
    const tableau = await Tableau.update({
      url: req.body.url,
      title: req.body.title,
      content: req.body.content,
    }, {
      where: {
        uuid: req.params.uuid
      }
    }
    );
    if (!tableau) {
      return res.status(404).json({ message: 'Tableau introuvable' });
    }
    return res.status(200).json({ message: 'Tableau modifié', tableau });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  };
};

exports.deleteTableau = async (req, res) => {
  try {
    const tableau = await Tableau.destroy({
      where: {
        uuid: req.params.uuid,
      }
    });
    if (!tableau) {
      return res.status(404).json({ message: 'Tableau introuvable ' })
    };
    return res.status(200).json({ message: 'Tableau supprimé' })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}