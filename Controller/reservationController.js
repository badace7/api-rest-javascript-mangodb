const reservation = require('../Model/Reservation');
const reservationController= {};



reservationController.getReservations = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        console.log(id);
        const docs = await reservation.reservationsList(id);
        res.status(200).json(docs);
    } catch (err) {
        console.log(err);
        throw err
    };
};


module.exports = reservationController;