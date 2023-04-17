const model = require('../model/product')
const Product = model.Product;


exports.createProduct = (req, res) => {
    const product = new Product(req.body);
    product.save().then((doc) => {
        console.log({ doc });
        res.status(201).json(doc);
    }).catch((er) => {
        console.log({ er });
        res.status(400).json(er);
    })
}

exports.getAll = (req, res) => {
    Product.find().then(results => res.json(results)).catch(er => console.log(er));
}
exports.getProduct = (req, res) => {
    const id = req.params.id;
    Product.findById(id).then(results => res.json(results)).catch(er => console.log(er));
}
exports.replaceProduct = (req, res) => {
    const id = req.params.id;
    Product.findOneAndReplace({ _id: id }, req.body, { new: true }).then(results => res.json(results)).catch(er => console.log(er));
}
exports.updateProduct = (req, res) => {
    const id = req.params.id;
    Product.findOneAndUpdate({ _id: id }, req.body, { new: true }).then(results => res.json(results)).catch(er => console.log(er));
}
exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    Product.findOneAndDelete({ _id: id }).then(results => res.json(results)).catch(er => console.log(er));
}