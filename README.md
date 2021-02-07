# GrocerPool

**Please access our devpost link here for more information:** https://devpost.com/software/grocery-partners

## Install

1. Git clone the repository onto your local environment.
2. Run `npm install` in the root project directory.
3. cd to the `client` directory and run `npm install` once more.
4. Copy and paste the `.env` file contents below into a `.env` file in the root directory.
5. Copy and paste the `.env client` file contents below into a `.env` file in the client directory.
6. cd back to the root directory and run `npm run dev` to start up both the React app and the Node backend server.

## .env
ASTRA_DB_ID='8a52681b-0249-48e6-a0c8-fd0516d03965'<br>
ASTRA_DB_REGION='us-east1' <br>
ASTRA_DB_USERNAME='hacker' <br>
ASTRA_DB_KEYSPACE='app' <br>
ASTRA_DB_PASSWORD='123123123' <br>
ASTRA_AUTHORIZATION_TOKEN='c94f24fe-e011-4a42-ac03-ed74a3384888'<br>
LOCATION_KEY='prj_test_pk_39f450eec95125cc739660fa9e9a4382881a6921'<br>

## .env CLIENT
REACT_APP_API='http://localhost:5000/'
