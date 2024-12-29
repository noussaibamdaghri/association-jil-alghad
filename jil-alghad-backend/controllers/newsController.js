const News = require('../models/News');

exports.getNews = async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createNews = async (req, res) => {
    const news = new News({
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
    });
    try {
        const savedNews = await news.save();
        res.status(201).json(savedNews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateNews = async (req, res) => {
    try {
        const updatedNews = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedNews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteNews = async (req, res) => {
    try {
        await News.findByIdAndDelete(req.params.id);
        res.json({ message: 'Actualité supprimée' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
