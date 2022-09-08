# **LEVEL 1**

<aside>
💡 **LEVEL 1**

In this level the data is stored in MongoDB.

</aside>

# Step 1) Connect to database.

```jsx
mongoose.connect("mongodb://localhost:27017/userDB");
```

# Step 2) define schema.

```jsx
const userSchema = new mongoose.Schema({
    	email: String,
    	password: String
	});
```

# Step 3) Define model

```jsx
const User = new mongoose.model("User", userSchema);
```

# Step4) Register a new user

```jsx
app.post('/register', function(req, res){
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        } else {
            res.render('secrets');
        }
    });
});
```

# Step 5) Code to verify user in login page.

```jsx
app.post('/login', function(req, res){
    const username = req.body.email;
    const password = req.body.password;
    User.findOne({email: username}, function(err, foundUser){ 
        if(err){
            console.log(err);
        } else {
            if(foundUser){
                if (foundUser.password === password){
                    res.render('secrets');
                }
            }
        }
    });
});
```

<aside>
📌 **SUMMARY: In Level 1 the email and password is not encrypted hence the database can be hacked easily and is not so secure. Hence moving on to LEVEL 2.**

</aside>

# **LEVEL 2**

<aside>
💡 **LEVEL 2**

In this level the data is stored in MongoDB ie password and email are encrypted.

Using NPM package called mongoose-encryption.

</aside>

[mongoose-encryption](https://www.npmjs.com/package/mongoose-encryption)

Refer above link to know more about mongoose-encryption package.

Mongoose Encryption package encrypts data when it is saved into database and decrypts when find method is called data will automatically be decrypted.

# Step 1) Install Package and call the function.

install mongoose encryption package.

```c
npm i mongoose-encryption
```

```jsx
const encrypt = require('mongoose-encryption');
```

# Step 2) Define a constant secret variable.

### **Secret String Instead of Two Keys**

For convenience, you can also pass in a single secret string instead of two keys.

```jsx
const secret = "Thisismysecretwhichnooneshouldknow";
```

# Step 3) Encrypt the user data with secret key.

Rest of the code in Level 2 remains same as the mongoose encryption package encrypts when

save() method is called and decrypts when find() method is called.

```jsx
userSchema.plugin(encrypt, { secret: secret , encryptedFields: ["password"] });
```

# Using Environment variables to keep Secrets safe

> When the above code is uploaded to Github it can be easily misused by Hacker to secure the code by using dotenv package from npm.
> 

# Step 4) Install dotenv package

```
npm i dotenv
```

## Import and configure dotenv

```jsx
require('dotenv').config()
```

## Create a `.env` file in the root of your project:

```
touch .env
```

## In .env file some indentations are to be followed

```
S3_BUCKET="YOURS3BUCKET"
SECRET=Thisisourlittlesecret.
```

## Assigning secret variable from .env file

```jsx
const secret = process.env.SECRET;
```

<aside>
💡 Now that secret is written in .env file how to not upload it to GIthub.

</aside>

 Simple add .gitignore file and add this folder name in that ……Simple !

<aside>
📌 **SUMMARY: In Level 2 the password is encrypted hence the database when hacked cannot be easily decrypted, but still it is not that secure.                                            Hence moving on to LEVEL 3.**

</aside>

# **LEVEL 3**

<aside>
💡 **LEVEL 3**

In this level the Password is encrypted with Hash function.

This can be done using npm package called md5

</aside>

[md5](https://www.npmjs.com/package/md5)

For more information refer above link.

# Step 1) Install the package and call the function

```jsx
npm install md5
```

```jsx
const md5 = require('md5');
```

# Step 2) Encrypting password with hash function

```jsx
app.post('/register', function(req, res){
    const newUser = new User({
        email: req.body.username,
        password: md5(req.body.password)
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        } else {
            res.render('secrets');
        }
    });
});
```

> Once the password is encrypted with hash function it cannot be decrypted by any chance i.e it is very difficult to do so.
> 

# Step 3) To match the password when user login

In Step 2 password is encoded at register level to verify the user we cannot decrypt it so we just encrypt the user entered password at login page also and match them.

```jsx
app.post('/login', function(req, res){
    const username = req.body.email;
    const password = md5(req.body.password);
    User.findOne({email: username}, function(err, foundUser){ 
        if(err){
            console.log(err);
        } else {
            if(foundUser){
                if (foundUser.password === password){
                    res.render('secrets');
                }
            }
        }
    });
});
```

<aside>
📌 **SUMMARY: In Level 3 Password is encrypted using HASH function which has no key. But there is one problem simple passwords can be easily matched and can be determined. Hence Moving on to LEVEL 4.**

</aside>

# **LEVEL 4**

<aside>
💡 **LEVEL 3**

In this level the Password is encrypted with Hash function.

This can be done using npm package called md5

</aside>
