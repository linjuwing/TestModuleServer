module.exports = {

  friendlyName: 'get model',

  description: 'Look up the specified user and welcome them, or redirect to a signup page if no user was found.',

  inputs: {
    modelId: {
      description: 'The ID of the user to look up.',
      // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
      // if the `userId` parameter is not a number.
      type: 'number',
      // By making the `userId` parameter required, Sails will automatically respond with
      // `res.badRequest` if it's left out.
      required: true
    }
  },

  exits: {
    success: {
      responseType: ''
      //viewTemplatePath: 'pages/welcome'
    },
    notFound: {
      description: 'No modal with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function (inputs, exits) {

    // Look up the user whose ID was specified in the request.
    // Note that we don't have to validate that `userId` is a number;
    // the machine runner does this for us and returns `badRequest`
    // if validation fails.
    //var user = await User.findOne({ id: inputs.userId });

    // If no user was found, respond "notFound" (like calling `res.notFound()`)
    //if (!user) { return exits.notFound(); }

    // Display the welcome view.
    //return exits.success({name: "good"});
    //return inputs;

    var fs = require('fs');
    var file = "./module.json";   //path.join(__dirname, "./package.json");  //"./package.json";

    /*fs.readFile(file, function(err, res){

    });*/

    var result = JSON.parse(fs.readFileSync(file));
    if (!result)
        return exits.notFound;

    return exits.success(result.name);
  }
};
