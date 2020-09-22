# Redux Auth Lecture Backend

```shell
npm install
psql postgres -c "create user redux_auth_lecture with createdb password 'password'"
npx sequelize-cli db:create
npx sequelize-cli db:migrate
psql redux_auth_lecture -c '\copy "Movies" from '"'"`pwd`"/movies.csv' WITH DELIMITER ','"
```
