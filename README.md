# React ES6 Github App

1. Install dependencies ```npm install```

2. [Generate new GitHub app](https://github.com/settings/applications/new) with the following data:
 
 --- | ---
 Homepage URL | ```http://localhost:8080```
 Authorization callback URL | ```http://localhost:8080```

3. Create ```config.js``` file with the following content:

```
module.exports = {
    clientId: '',
    clientSecret: ''
};
```

and fill it with your generated GitHub CLIENT_ID and CLIENT_SECRET.

4. Run ```npm run serve```

5. Start coding! 
