module.exports = (app) => {
    const stores = require('../controllers/store_controller.js');

    // Create a new store
    app.post('/store/new', stores.create);

    // Retrieve all stores
    app.get('/store/all', stores.findAll);

    // Retrieve a single store with store_id
    app.get('/store/:store_id', stores.findOne);

    // Update a store with store_id
    app.put('/store/update/:store_id', stores.update);

    // Delete a store with store_id
    app.delete('/store/delete/:store_id', stores.delete);
}
