var MongoClient = require('mongodb').MongoClient;
                  
//Create a MongoDB client, open a connection to Amazon DocumentDB as a replica set,
//  and specify the read preference as secondary preferred
var client = MongoClient.connect(
'mongodb://username:password@vpce-01e07473be3ac0737-uakr9eao.vpce-svc-02125550f04ddfda6.us-east-1.vpce.amazonaws.com:27017/sample-database?directConnection=true&serverSelectionTimeoutMS=2000&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false', 
{ 
  useNewUrlParser: true,
	useUnifiedTopology: false, // commented out currently
},

function(err, client) {
    if(err)
        throw err;
    //Specify the database to be used
    db = client.db('sample-database');
    
    //Specify the collection to be used
    col = db.collection('sample-collection');

    //Insert a single document
    col.insertOne({'hello':'Amazon DocumentDB'}, function(err, result){
      //Find the document that was previously written
      col.findOne({'hello':'Amazon DocumentDB'}, function(err, result){
        //Print the result to the screen
        console.log(result);
        
        //Close the connection
        client.close()
      });
   });
});
                    