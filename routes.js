const express = require('express');
const router = express.Router();
const parkingController = require('./Controller/parkingController');
const reservationController = require('./Controller/reservationController');

/**
 * Parkings request
 */

// get request
router.get(
    '/parkings/',
    parkingController.getParkings
 );

router.get( 
    '/parkings/:id/', 
    parkingController.getParkingById
);

// post request
router.post(
    '/parkings/',
    parkingController.addParking 
);

// put request
router.put(
    '/parkings/:id',
    parkingController.updatePutParkingById
);

// patch request
router.patch(
    '/parkings/:id',
    parkingController.updateParkingById
);

// delete request
router.delete(
    '/parkings/:id',
    parkingController.deleteParkingById
);

/**
 * Reservations request
 */

// get request
router.get(
    '/parkings/:id/reservations/',
    reservationController.getReservations
);

// export router module
module.exports = router;