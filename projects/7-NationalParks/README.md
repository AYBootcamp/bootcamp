# National Park Service Advisor

A mini full size application uses national park service API to features park tour advises

## Main Dependency Packages Installed

| Library Name            | Install Script                                           |
|-------------------------|----------------------------------------------------------|
| styled-components       | ```npm i styled-components```                            |
| Material UI             | ```npm i @mui/material @emotion/react @emotion/styled``` |
| Redux                   | ```npm i @reduxjs/toolkit react-redux```                 |
| icons and fonts         | ```npm i @mui/icons-material @fontsource/roboto```       |
| @types (Typescript Only)| ```npm i @types/styled-components```                     |

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
Overview: https://www.nps.gov/subjects/developer/api-documentation.htm 
Get API key: https://www.nps.gov/subjects/developer/get-started.htm 
* parks: https://developer.nps.gov/api/v1/parks
* activities: https://developer.nps.gov/api/v1/activities

```
The api endpoints free tier has limited calls per week.
Save the responses as mock while development
```

### API Notes
* limit: the number of data we will get from each request
* total: the total number of data available
* start: the number of data we are receiving from 
* We need pagination