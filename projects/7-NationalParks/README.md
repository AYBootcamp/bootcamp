# National Park Advisor

A mini full size application uses National Park Service (NPS)'s public API to features park tour advises

## Main Dependency Packages Installed

| Library Name            | Install Script                                           |
|-------------------------|----------------------------------------------------------|
| styled-components       | ```npm i styled-components```                            |
| Material UI             | ```npm i @mui/material @emotion/react @emotion/styled``` |
| Redux                   | ```npm i @reduxjs/toolkit react-redux```                 |
| React Router            | ```npm i react-router-dom```                             |
| icons and fonts         | ```npm i @mui/icons-material @fontsource/roboto```       |
| lodash                  | ```npm i lodash```                                       |
| @types (Typescript Only)| ```npm i @types/styled-components @types/lodash```       |

## Developer Experience
The following packages are installed for improved developer experience. 

### eslint, prettier, and some extra packages

```
  "devDependencies": {
    ...
    "eslint": "^8.27.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-n": "^15.5.1",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-promise": "^6.1.1",
    "eslint-plugin-react": "^7.31.10",
    "eslint-plugin-simple-import-sort": "^8.0.0",
    "prettier": "^2.7.1"
  },
```

## API endpoints
### API Documentation: https://www.nps.gov/subjects/developer/api-documentation.htm 

### Get API key: https://www.nps.gov/subjects/developer/get-started.htm 

### Postman API Collection: https://guohao-public-assets.s3.ca-central-1.amazonaws.com/US+National+Park+Service.postman_collection.json 

### Endpoints Overview
* parks: https://developer.nps.gov/api/v1/parks
* activities: https://developer.nps.gov/api/v1/activities

```
The api endpoints free tier has limited calls per week.
Recommend to save a copy of responses as mock during early phase of development
```

### API Notes
Pagination - sometimes all results can't be returned by a single request, thus multiple requests is required to get all data
* limit: the number of data we will get from each request
* total: the total number of data available
* start: the number of data we are receiving from 


------
# Features to implement
* List all parks
  * Paginated api
  * URL navigation. Example:  /parks?page=3

* Search / Filter for parks by:
  * Name
  * State
  * activities
  * Fees (free)

* Present park detail information
* 
------
# Project Design

## Redux (ideas)
* A slice to store and manage park data information
  * data is in object structure key by id of the park id for performance (hash table access)
* A slice to store information about park data pagination
  * what page are we on
  * fetch status

## Routing (ideas)
* Landing page `'/'`
* All park list page `'/parks'`
  * Paginated list
* Park detail page `'/parks/{parkId}'`
  * Very detailed information on one specific park

## Components
* Use Material UI component where appropriate
* Style with theme color palette



------
# UI Design

## Park Details
For each park, we'd like to display the following data
| Property Key            | Description                           |
|-------------------------|---------------------------------------|
| url                     | Official website                      |
| fullName                | Park's full name                      |
| description             | Brief description about the park      |
| activities              | Things to do                          |
| states                  | State location                        |
| contacts                | Phone and Email information           |
| entranceFees            | Entrance fee                          |
| addresses               | Address                               |   
| images                  | Some images taken in the park         |