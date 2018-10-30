# Machine learning product match
Survey tool that uses [Brain.js](https://github.com/BrainJS/brain.js) Neural Networks to predict the right product for a user based on training data and past survey successes.

## Developer Setup

Create a folder called database in root.
Install docker and run `docker-compose up` in the root folder.

Go to phpmyadmin(`localhost:9001`) and create Database named `machine-learning-match`

Import database from `/config/suvey_data.sql`

Project will now sync the raw mysql info in that database folder so no database is lost (this folder is not saved to the repo)

Local copy should be running in on port 8001

### API
`/postResult` needs to send data in the following format: 
`{ "input": [0,1,2,1] }`

`/getResult` needs to send data in the following format:
`{ "input": [1,0,2,1], "output": "\"typeA\""}`
