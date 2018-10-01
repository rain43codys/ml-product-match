##Developer Setup

Install docker and run `docker-compose up` in the root folder.

Go to phpmyadmin(`localhost:8080`) and create Database named `machine-learning-match`

Import database from `/config/suvey_data.sql`

*(Eventually set backup and CREATE table with docker)*

Local copy should be running in `localhost`

###API
`/postResult` needs to send data in the following format: 
`{ "input": [0,1,2,1] }`

`/getResult` needs to send data in the following format:
`{ "input": [1,0,2,1], "output": "\"typeA\""}`