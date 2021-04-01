//package.json was created when putting in the main folder 'npm init' in the server

const express = require('express') //make sure to make it a string inside (), if not it will look for variable express
const app = express() //be sure to invoke the express function, now all the functions of express are in app variable, express has it own goodies
const cors = require('cors') //npm install cors --save to install the dependencies indside package.json
const PORT = 8000 //create a variable to see if code is talking to the server

//gotta use cors to invoke the function, if there's a cors error, try to add https in the main.js
app.use(cors())

//create an object that tied into the app.get
let rappers = {
    '21 savage':{
         'age': 28,
         'birthName': 'Sheeya Bin Abraham-Joseph',
         'birthLocation': 'London, England'
    },
    'chance the rapper':{
          'age': 27,
          'birthName': 'Chancelor Joseph Bennett',
          'birthLocation': 'Chicago, Illinois'
    },
    'unkown':{
        'age': 30,
        'birthName': 'unkown',
        'birthLocation': 'unkown'
  }
}


//make a simple route for server to listen and respond. Below is CRUD api (app.post(create),app.get(read), app.put(updating), app.delete(delete))
//get takes in 2 values (req, res). hears a request after '/' that would be home page, main route
//(req,res) is a callback function
app.get('/', (request, response) => { 
    response.sendFile (__dirname + '/index.html')
})

//building another route
//inside response.json is a created object as a response aka to give that computer the info
//:rapperName takes in a specific rapper instead listing all the elements in the object
// dot notation in the json will NOT work
//don't worry about spaces when using bracket notation
app.get('/api/rappers/:rapperName', (request, response) =>{
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName)
    if(rappers[rapName]){
        response.json(rappers[rapName])
    } else{
        response.json(rappers['unkown'])
    }
})

//a method to use to talk to the server
// when using process.env.PORT, it tells heroku it can use its assigned port, then when using locally the || syntax will allow to use the variable PORT that was assigned which is 8000
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server running on port ${PORT}`) //shows on console is server is running by created a port variable
})


