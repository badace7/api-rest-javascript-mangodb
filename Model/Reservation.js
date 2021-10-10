const database = require('../database');
database.connect();

const reservation = {};

reservation.reservationsList = async (id) => {
    return await database.db.collection('reservations').find({parkingId: id}).toArray();
}

module.exports = reservation;