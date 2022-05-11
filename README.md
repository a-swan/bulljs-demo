# Overview
This is a quick NodeJS app to demo and experiment with the [BullJS](https://github.com/OptimalBits/bull) package.

Need to have REDIS installed and running either locally or on a server that accepts incoming connections.
# Structure
## bullConfig.js
Estabilishes connection to REDIS queue.

Basic local REDIS connection:
```
REDIS_HOST=localhost
REDIS_PORT=6379
```
## Client Folder
This folder adds jobs to the queue

## Server Folder
This folder processes jobs from the queue