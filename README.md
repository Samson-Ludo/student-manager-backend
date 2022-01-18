# Student Course Manager Backend

This is the API for a Student Manager Web App.
The front end can be found [here](https://github.com/Samson-Ludo/student-manager-frontend).

The Heroku deployed API URL: [https://student-manager-backend.herokuapp.com/students](https://student-manager-backend.herokuapp.com/students)

## Technologies

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Bitbucket](https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Routes

The available routes include:

- **GET /courses/** - Returns a list of courses in the database in JSON format
- **GET /courses/{{id}}/** - Returns a detail view of the specified course. Including name, and id in JSON format
- **GET /students/** - Returns a list of students in the database in JSON format including the ids of the courses they signed up for.
- **GET /students/{{id}}/** - Returns a detail view of the specified student id including the ids of the courses they signed up for.

- **POST /courses/** - Creates a new course with the specified details - Expects a JSON body
- **POST /students/** - Creates a new student with the specified details - Expects a JSON body

- **PUT /courses/{{id}}** - Updates an existing course - Expects a JSON body
- **PUT /students/{{id}}** - Updates an existing student - Expects a JSON body

## Installation

Download this repo and run:

```bash
npm install
```

## Start on Local server: http://localhost:5000

```bash
npm start
```

## Testing on Local server:

```bash
npm run test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
