const parking = require('../Model/Parking');
const parkingController = {};



parkingController.getParkings = async (req, res) => {
    try {
        const docs = await parking.parkingsList();
        res.status(200).json(docs);
    } catch (err) {
        console.log(err);
        throw err
    };
};

parkingController.getParkingById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const docs = await parking.parkingById(id);
        res.status(200).json(docs);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

parkingController.addParking = async (req, res) => {
    try {
        const body = req.body;
        const docs =  await parking.insertParking(body);
        res.status(200).json(docs);
    } catch (err) {
        console.log(err);
        throw err;     
    }
}

parkingController.updateParkingById = async (req, res) => {
   try {
        const id = parseInt(req.params.id);
        const idQuery = { id: id};
        const myQuery = {
            $set: {
                name: req.body.name,
                city: req.body.city,
                type: req.body.type
            }
        };

        const docs = await parking.updateParking(idQuery, myQuery);
        res.status(200).json(parking);

   } catch (err) {
       console.log(err);
       throw err;
   }
}

parkingController.updatePutParkingById = async (req, res) => {
   try {
        const id = parseInt(req.params.id);
        const idQuery = { id: id};
        const myQuery = {
            $set: {
                name: req.body.name,
                city: req.body.city,
                type: req.body.type
            }
        };

        const docs = await parking.putParking(idQuery, myQuery);
        res.status(200).json(parking);

   } catch (err) {
       console.log(err);
       throw err;
   }
};


parkingController.deleteParkingById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const docs =  await parking.deleteParking(id);
        res.status(200).json(parking);

    } catch (err) {
       console.log(err);
       throw err; 
    }
}

module.exports = parkingController;