const connection = require('../database');
const parking = {};


parking.list = async () => {
    return await connection.db.collection('parkings').find({}).toArray();
}

module.exports = parking;