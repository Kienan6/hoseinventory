const MongoClient = require('mongodb').MongoClient;
var _db;
var _client;
module.exports = {
    connect: function(callback) {
        const uri = "mongodb+srv://example:example@example.mongodb.net/";
        _client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
        _client.connect(err => {
            if(err) return callback(err);
            console.log("connected to mongoDB");
            _db = _client.db('HoseInventory');
        });
    },
    getClient: function() {
        return _client;
    },
    getDB: function() {
        return _db;
    },
    insertHose: function({inventoryNum, hoseNum, hosePass, 
                        gasketPass, hoseSize, hoseLength, 
                        hoseMfgDate, prevLocation, newLocation,
                        dateTested,manufacturer,descHose,
                        descGasket}, callback) {
        try {
            console.log("attempting insert");
            //validate
            _db.collection('Hoses').insertOne({
                inventoryNum: inventoryNum,
                hoseNum: hoseNum,
                size: hoseSize,
                length: hoseLength,
                yearMfg: hoseMfgDate,
                prevLoc: prevLocation,
                curLoc: newLocation,
                dateTest: dateTested,
                passGasket: gasketPass,
                descGasket: descGasket,
                passHose: hosePass,
                descHose: descHose,
                manufacturer: manufacturer})
                .then((result) => callback(result));

        } catch(err) {
            console.log("error with inserting");
            callback(false);
        }
    },
    updateHose: function({inventoryNum, newInvNum, hoseNum, hosePass, 
                        gasketPass, hoseSize, hoseLength, 
                        hoseMfgDate, prevLocation, newLocation,
                        dateTested,manufacturer,descHose,
                        descGasket}, callback) {
        //update the hose
        //validate
        _db.collection('Hoses').updateOne(
            {inventoryNum: inventoryNum},
            {   $set: {
            inventoryNum: newInvNum,
            hoseNum: hoseNum,
            size: hoseSize,
            length: hoseLength,
            yearMfg: hoseMfgDate,
            prevLoc: prevLocation,
            curLoc: newLocation,
            dateTest: dateTested,
            passGasket: gasketPass,
            descGasket: descGasket,
            passHose: hosePass,
            descHose: descHose,
            manufacturer: manufacturer
        }}, function(err, result) {
            if(err) throw err;
            //now get the hose and return it
            callback(true);
            console.log("document updated:"+result);
        });
    },
    getHose: function({inventoryNum}, callback) {
        try {
            //validate
            _db.collection('Hoses').findOne(
                {inventoryNum: inventoryNum})
                    .then(result => {   
                        if(result){
                            callback(result);
                        } else {
                            callback(false);
                        }
                    });
        } catch (err) {
            console.log(err);
        }
    },
    getAllHoses: (callback) => {
        try{
            //validate
            _db.collection('Hoses').find({}).toArray(function(err, result) {
                if (err) throw err;
                callback(result);
              });
        } catch(e) {
            console.log(err);
        }
    },
    deleteHose: function(invNum, callback) {
       try {
           //validate
            _db.collection('Hoses').deleteOne(
                invNum
            ).then(result => {
                if(result){
                    console.log('deleted');
                    callback(true);
                } else {
                    callback(false);
                }
            });
        } catch(err) {
            console.log(err);
        }
    },
    //account operations
    createUser: function({username, password, admin}, callback){
        try {
            _db.collection('Users').insertOne({
                username: username,
                password: password,
                admin: admin,
            }).then(res => {
                callback(res);
            })
        } catch(err) {
            console.log(err);
        }
    },
    
    getUser: function({username}, callback) {
        try {
            _db.collection('Users').findOne({
                username: username
            }).then(result => {
                if(result)
                    callback(result);
                else
                    callback(false);
            })
        } catch(err) {
            console.log(err);
        }
    },

};