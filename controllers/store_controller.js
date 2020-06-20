const Store = require('../models/store.js');

// Create and Save a new Store
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Store can not be empty"
        });
    }

    // Create a Store
    const store = new Store({
        
    });

    // Save store in the database
    store.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while working on the store."
        });
    });
};

// Retrieve and return all stores from the database.
exports.findAll = (req, res) => {
    Store.find()
    .then(store => {
        res.send(store);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while working on the store."
        });
    });
};

// Find a store with a store_id
exports.findOne = (req, res) => {
    Store.findById(req.params.store_id)
    .then(store => {
        if(!store) {
            return res.status(404).send({
                message: "Store not found with id " + req.params.store_id
            });            
        }
        res.send(store);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "store not found with id " + req.params.store_id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving store with id " + req.params.store_id
        });
    });
};

// Update a store identified by the store_id in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Store content can not be empty"
        });
    }

// Delete a store with the specified store_id in the request
exports.delete = (req, res) => {
    Store.findByIdAndRemove(req.params.store_id)
    .then(store => {
        if(!store) {
            return res.status(404).send({
                message: "Store not found with id " + req.params.store_id
            });
        }
        res.send({message: "Store deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'Not Found') {
            return res.status(404).send({
                message: "Store not found with id " + req.params.store_id
            });                
        }
        return res.status(500).send({
            message: "Could not delete store with id " + req.params.store_id
        });
    });
}
}
