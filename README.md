# react-test

Basic react test for newcomers.

## First steps

You should install all deps and run `index.js` that exposes an express server running on port 3000.

```
npm install
npm run server
```

To test that everything is fine executes:

```
curl -X POST -H "Content-Type: application/json" -d '{"username":"user1", "password":"password1"}' http://localhost:3000/login
```

## Exercises

1. Create a scaffolding for the project. Comment below the used starter. Create a `App.tsx / App.js` component as root component.

2. Create a `Login.tsx / Login.js` component with the following inputs:

   - Email (Required / well email format needed)
   - Password (Required). It should have an icon as a button to show / hide the password (Change between stars and cases)
   - Remember user checkbox.
   - Submit button that launch the action.

   It would be valued an explanation about the solution (used validation library, how to validate inputs, messages shown, etc)

3. Create a provider for using Axios in the whole application. It exposes a `login` method that call the server and save the user in the local storage. It returns the user as well for the `Login` component.

It would be valued an explanation about the solution (used hook, how, etc)

4. Create a unit test over `Login` component.
   - Test that submit button is disabled when there are some validation issues.
   - Test that `Login` component calls `login` method inside the provider.
   - Test that icon in the password input change the visibility state of password input.

It would be valued an explanation about the solution (testing framework, why it is a unit test, etc)

## Delivery

All exercises should be delivered by creating a PR in the same repo that you cloned. You could do a single commit or a bunch of them. As you wish.

## Candidate explanations

... to fill ...
