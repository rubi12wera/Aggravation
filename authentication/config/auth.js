// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1492866947691494', // your App ID
        'clientSecret'  : '5235cad68bb4ddfbee0d4b75538b63d5', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },


    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }

};