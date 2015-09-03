// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '446053848918172', // your App ID
        'clientSecret'  : '8fc61f65d8809c2c4d8224e535e3d1df', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },


    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};