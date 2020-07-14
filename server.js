var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');


var db = mongo.connect('mongodb://localhost:27017/Cities', function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to ' + db, '+', response);
  }
});

var app = express();
app.use(bodyParser());
app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var schema = mongo.Schema;

var citySchema = new mongo.Schema({
  id: {
    type: Number
  },
  city: {
    type: String
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  price: {
    type: Number
  },
  status: {
    type: String
  },
  color: {
    type: String
  }
});

var model = mongo.model('Cities', citySchema, 'Cities');

app.get('/api/getCitiesList', function (req, res) {
  model.find({}, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/createCity', (req, res) => {
  let newCity = new model({
    city: req.body.name,
    startDate: req.body.location,
    endDate: req.body.ranking,
    price: req.body.price,
    status: req.body.status,
    color: req.body.color
  });
  newCity.save()
    .then(result => {
      res.json({
        success: true,
        result: result
      })
    })
    .catch(err => {
      res.json({
        success: false,
        result: err
      })
    })
});

app.get('/api/getCityById/:id', function (req, res) {
  model.find({
    id: req.params.id
  }, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.delete('/api/deleteCity/:id', function (req, res) {
  model.remove({
    id: req.params.id
  }, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/updateCity/:id', function (req, res) {
  model.find({
    id: req.params.id
  }, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      data[0].city = req.body.city;
      data[0].startDate = req.body.startDate;
      data[0].endDate = req.body.endDate;
      data[0].price = req.body.price;
      data[0].color = req.body.color;
      data[0].status = req.body.status;
      res.send(data);
    }
  });
});
app.listen(8080, function () {
  console.log('App Started on port 8080');
})
