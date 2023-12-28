//to get these go to console.cloud.google/dashboard
import passport from 'passport';
import GitHubStrategy from 'passport-github2'
import GoogleStrategy from 'passport-google-oauth20'
import DiscordStrategy from 'passport-discord'
const GOOGLE_CLIENT_ID = ''
const GOOGLE_CLIENT_SECRET = ''


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null , profile)
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // }); 
    //we can use this to create the user and save its information like accesstoken ,profile etc in the db which we are using 
    // emaple if you are using mongodb
    // const user = {
          // username: profile.displayName,
          // avatar : profile.photos[0]
    //}  
    //user.save()
}
));

passport.use(new GitHubStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null , profile)
  }
));

var scopes = ['identify', 'email', 'guilds', 'guilds.join'];

passport.use(new DiscordStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: '',
    scope: scopes
},
function(accessToken, refreshToken, profile, done) {
    done(null,profile)
}));

passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})