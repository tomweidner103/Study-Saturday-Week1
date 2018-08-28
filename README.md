# Study-Saturday-Week1

## Objective: Build 2 sets of CRUD routes for 2 models, Students and Tests

### Details

	- For now, moodels are just objects that live in express app score

	```
		Test {id : 0, score: 99, subject : 'Physics', studentID : 2}
    	Student {id : 0, name : 'Ashi'}
	```
	- Necessary routes:

		- Get all students

		- Get all test scores

		- Update student name

		- Update test score

		- Get mean test score by student ID

		- Get top scoring student

		- Delete Student

		- Delete Score

		- Add Student

		- Add Score



### How to test routes without a frontend or specs
- GET: use your browser
- POST / PUT / DELETE :
 - CLI (command line interface) with `curl`
   - e.g. `curl -H "Content-Type: application/json" -X POST -d '{"username":"kate","password":"1234"}' http://localhost:3000/api/login`
   - `-H`: headers. `-X`: verb. `-d`: data (must be of the type specified in headers). http://[address]:[port]/[route_path]
 - [Postman](https://www.getpostman.com/)
   ![](https://www.dropbox.com/s/4fk3b90cd0i1a5y/postman_post.png?raw=true)
