var express = require('express');
const bcryptjs = require('bcryptjs');
var router = express.Router();
var dbUtil = require('../utils/dbUtils');
/*
error handler
{
  failure: true/false
  message: ""
}
*/
//middleware for finding if the hose already exists
function hoseExists(req,res,next) {
  dbUtil.getHose({inventoryNum: req.body.h.inventoryNum},(hose) => {
    if(hose){
      res.json({
          failure: true,
          message: `Inventory Number ${req.body.h.inventoryNum} already in use.`,
      });
    } else {
      next();
    }
  })
}
function userExists(req,res,next) {
  dbUtil.getUser({
    username: req.body.username
  }, (user) => {
    if(!user) {

      next();
    } else {
      res.json({
        failure: true,
        message: 'Username already taken.'
      })
    }
  })
}
function isAdmin(req,res, next){
  if(req.session.admin){
    next();
  } else {
    res.json({
      failure: true,
      message: "You do not have privledges",
    })
  }
}
function isLoggedIn(req,res,next){
  if(req.session.user){
    next();
  } else {
    res.json({
      failure: true,
      message: "You do not have privledges",
    })
  }
}
//end middleware
router.post('/insert', [isAdmin, hoseExists], function(req, res, next){ 
  var a = req.body.h; 
  dbUtil.insertHose(a, (result) => {
    if(!result){
      res.json(
        {
          failure:true,
          message: "Unable to insert hose."
        }
      );
    }else {
      res.json(
        {failure: false}
        );
    }

  });
});
//get a hose with inventory number
router.post('/getHose', isLoggedIn, function(req, res, next){ 
  var a = req.body.h;

  dbUtil.getHose(a, (result) =>{
    if(result == false){
      res.json(
        {
          failure: true,
          message: `Unable to find hose ${a.inventoryNum}`
        }
      );
    } else {
      res.json(result);
    }
  });
});
//get all hoses
router.get('/getAllHoses', isAdmin, function(req, res, next){
  dbUtil.getAllHoses( (result) =>{
    if(result == false){
      res.json(
        {
          failure: true,
          message: "Unable to fetch all hoses."
        }
      );
    } else {
      res.json(result);
    }
  });   
});
//delete hose with inventory number
router.post('/deleteHose', isAdmin, function(req, res, next){
  var hose = req.body.h;
  dbUtil.deleteHose(hose, (result) =>{
    if(result == false){
      res.json({
        failure: true,
        message: 'Unable to delete hose.'
      });
    } else {
      res.json({
        failure: false,
      });
    }
  });
});
//update hose with inventory number
router.post('/updateHose', isLoggedIn, function(req, res, next){
  var hose = req.body.h;
  dbUtil.updateHose(hose, (result) => {
    if(result == false){
      res.json({
        failure: true,
        message: 'Unable to update hose.'
      });
    } else {
      res.json({
        failure: false,
        message: "Hose updated"
      })
    }
  });
});
router.post('/user/login', function(req, res, next){
  var user = req.body.user;
  console.log("Host: ----" +req.headers.host);
  try {
    dbUtil.getUser({username: user.username}, function(result) {
      if(result) {
        bcryptjs.compare(user.password, result.password).then(r =>{
          if(r){
            req.session.user = result.username;
            req.session.admin = result.admin;
            res.json({
              failure: false,
              message: "Login successful"
            })
          } else {
            res.json({failure:true, message: "Username or password was incorrect."});
          }
        });
      } else {
        res.json({
          failure: true,
          message: "Could not find user."
        })
      }
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
});
router.post('/user/create',userExists, function(req,res,next){
    var user = req.body.user;
    if(user.username && user.password){
      //asynchronous
      bcryptjs.genSalt(10, function(err, salt){
        if (err) throw err;
        bcryptjs.hash(user.password, salt, function(err, hash){
          if (err) throw err;
          //store into database
          dbUtil.createUser({
            admin: false,
            username: user.username,
            password: hash,
          }, function(result) {
                if(result){
                  res.json({
                    failure:false,
                    message: "User inserted"
                  });
                } else {
                  res.json({
                    failure: true,
                    message: "User could not be created"
                  });
                }
            });
        });

      });
    } else {
      res.json({
        failure: true,
        message: "Username and Password are required."
      })
    }
});
router.post('/user/auth', function(req, res, next){
  console.log("Host: ----" +req.headers.host);
    var auth = {
      loggedIn: false,
      admin: false,
    };
    if(req.session.user){
      auth.loggedIn = true;
      if(req.session.admin){
        auth.admin = true;
      }
    } 
    res.json(auth);
});
router.get('/user/logout', isLoggedIn, function(req, res, next){
  req.session.destroy(function(){
    res.json({
      failure:false,
      message: "User logged out",
    });
  });
});

module.exports = router;