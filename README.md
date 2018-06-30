# aisweb-brasil
A lib for retrieving AisWeb API data on JSON format.

## Installation 
```sh
npm install aisweb-brasil --save
yarn add aisweb-brasil
```

## Initialization
First things first, it's necessary to initialize the API handler. You can do this by doing:

### Javascript
```javascript
const Ais = require('aisweb-brasil');
const aiswebHandler = new Ais({ apiKey: 'your-api-key', apiPass: 'your-api-pass' });
```

### TypeScript
```typescript
import Ais from 'aisweb-brasil';
const aiswebHandler = new Ais({ apiKey: 'your-api-key', apiPass: 'your-api-pass' });
```

## Methods
After intializing the connection, we can retrieve Charts, Notams, AIP Suplements and Meteorological information about almost any brazilian airport. The class `Ais` has the following methods:

###getCharts(... airports)
This function allows you to retrieve aeronautical charts from one or more airports. It returns an array of airports, each one containing an array of instances of the Chart class.

###getNotams(... airports)
This function allows you to retrieve notams from one or more airports. It returns an array of airports, each one containing an array of instances of the Notam class.

###getAipSuplements(... airports)
This function allows you to retrieve AIP suplements from one or more airports. It returns an array of airports, each one containing an array of instances of the AipSuplement class.

###getMeteorology(... airports)
This function allows you to retrieve the meteorology from one or more airports. It returns an array of airports, each one containing an array of instances of the Meteorology class.

## Error Handling
Still WIP.