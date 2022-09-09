# **LEVEL 5**

<aside>
💡 **LEVEL 5**

In this level the Password is encrypted with passport and many packages.

In this level cookies are also being created to ensure that logged in user may not need to login again and again.

</aside>

[passport](https://www.npmjs.com/package/passport)

[passport-local](https://www.npmjs.com/package/passport-local)

[passport-local-mongoose](https://www.npmjs.com/package/passport-local-mongoose)

[express-session](https://www.npmjs.com/package/express-session)

# Install necessary packages

```jsx
npm i passport passport-local passport-local-mongoose express-session
```

### Initialise the packages installed in app.js

```jsx
const session = require('express-session')
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
```

```jsx
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
```

### Initialise plugin for user to create cookies

```jsx
mongoose.connect("mongodb://localhost:27017/userDB");
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
```

# To authenticate user in register page

### Syntax

```jsx
User.register({username:'username', active: false}, 'password', function(err, user) {
  if (err) { ... }

  const authenticate = User.authenticate();
  authenticate('username', 'password', function(err, result) {
    if (err) { ... }

    // Value 'result' is set to false. The user could not be authenticated since the user is not active
  });
});
```

### Example code

```jsx
app.post('/register', function(req, res){
    User.register({username: req.body.username}, req.body.password, function(err, user){
        if(err){
            console.log(err);
            res.redirect('/register');
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect('/secrets');
            });
        }
    });
});
```

# By using cookies we can check whether user has logged in or not

```jsx
app.get('/secrets', function(req, res){
    if(req.isAuthenticated()){
        res.render('secrets');
    }else{
        res.redirect('/login');
    }
});
```

# In login route to verify user

```jsx
app.post('/login', function(req, res){
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user, function(err){  
    if(err){
        console.log(err);
    } else {
        passport.authenticate("local")(req, res, function(){
            res.redirect('/secrets');
        });
    }
});
```

### Logout Route being Initialised
```jsx
app.get('/logout',function(req,res){
    req.logout();
    res.redirect('/');
});
```
