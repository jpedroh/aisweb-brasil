# aisweb-brasil
A lib for retrieving AisWeb API data to JavaScript objects.

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

Notice that the `Ais` constructor receives an `IAisConfig` object, that contains your credentials to access the API

## Methods
After intializing the connection, we can retrieve Charts, Notams, AIP Suplements and Meteorological information about almost any brazilian airport. For every following method, you can use spread operator to retrieve information for one or more airports.

### Retrieving Airports Charts
Use method `getCharts` to retrieve charts from one or more airport. The method returns a promise, containing an array of the request airports, each one containing an array of Charts instances.

##### Example
On the following example, we gonna retrieve charts from 2 airports. Note that the Ais class has already been initiated previously.
```typescript
/**
  * Retrieves charts from one or more airports.
  * @param {...airports} - ICAO code of each airport.
  * @return {Promise<Chart[][]>} - An array of airports, each one containing an array of Charts.
*/
Ais.getCharts('SBEG', 'SBRF')
  .then((charts: Chart[][]) => console.log(charts))
  .catch((error: Error) => console.error(error))
```
Please, refer to the [`Chart`](https://github.com/jpedroh/aisweb-brasil/blob/master/src/factories/chart.ts) factory file, to be aware of each field.

### Retrieving Airports Notams
Use method `getNotams` to retrieve Notams from one or more airport. The method returns a promise, containing an array of the request airports, each one containing an array of Notams instances.

##### Example
On the following example, we gonna retrieve notams from 2 airports.
```typescript
/**
  * Retrieves notams from one or more airports.
  * @param {...airports} - ICAO code of each airport.
  * @return {Promise<Notam[][]>} - An array of airports, each one containing an array of Notams.
*/
Ais.getNotams('SBEG', 'SBRF')
  .then((charts: Notam[][]) => console.log(charts))
  .catch((error: Error) => console.error(error))
```
Please, refer to the [`Notam`](https://github.com/jpedroh/aisweb-brasil/blob/master/src/factories/notam.ts) factory file, to be aware of each field.

### Retrieving Airports AipSuplements
Use method `getAipSuplements` to retrieve AipSuplements from one or more airport. The method returns a promise, containing an array of the request airports, each one containing an array of AipSuplements instances.

##### Example
On the following example, we gonna retrieve AipSuplements from 2 airports.
```typescript
/**
  * Retrieves AipSuplements from one or more airports.
  * @param {...airports} - ICAO code of each airport.
  * @return {Promise<AipSuplement[][]>} - An array of airports, each one containing an array of AipSuplements.
*/
Ais.getAipSuplement('SBEG', 'SBRF')
  .then((charts: AipSuplement[][]) => console.log(charts))
  .catch((error: Error) => console.error(error))
```
Please, refer to the [`AipSuplement`](https://github.com/jpedroh/aisweb-brasil/blob/master/src/factories/aipSuplement.ts) factory file, to be aware of each field.

### Retrieving Airports Meteorologys
Use method `getMeteorology` to retrieve Meteorology information from one or more airport. The method returns a promise, containing an array of the request airports, each one containing an array of Meteorology instances.

##### Example
On the following example, we gonna retrieve Meteorology from 2 airports.
```typescript
/**
  * Retrieves Meteorology from one or more airports.
  * @param {...airports} - ICAO code of each airport.
  * @return {Promise<Meteorology[][]>} - An array of airports, each one containing an array of Meteorology.
*/
Ais.getMeteorology('SBEG', 'SBRF')
  .then((charts: Meteorology[][]) => console.log(charts))
  .catch((error: Error) => console.error(error))
```
Please, refer to the [`Meteorology`](https://github.com/jpedroh/aisweb-brasil/blob/master/src/factories/meteorology.ts) factory file, to be aware of each field.

### Retrieving Airports Rotaer
Use method `getRotaer` to retrieve Rotaer from one or more airports. The method returns a promise, containing an array of the request airports, each one containing an array with a single Rotaer instance - this is done to preserve the overall module structure.

##### Example
On the following example, we gonna retrieve Rotaer from 2 airports.
```typescript
/**
  * Retrieves Rotaer from one or more airports.
  * @param {...airports} - ICAO code of each airport.
  * @return {Promise<Rotaer[][]>} - An array of airports, each one containing an array of Rotaer.
*/
Ais.getRotaer('SBEG', 'SBRF')
  .then((charts: Rotaer[][]) => console.log(charts))
  .catch((error: Error) => console.error(error))
```
Please, refer to the [`Rotaer`](https://github.com/jpedroh/aisweb-brasil/blob/master/src/factories/rotaer.ts) factory file, to be aware of each field.
NOTE: By now, services are still not available. Expect it to be released on the next updates.

## Error Handling
There are two Errors classes on the module. 

### Invalid credentials
In case you place invalid credentials on the initialization, an instance of `InvalidCredentialsError` will be thrown.

### Request Error
In case the request to the AisWeb API returns an error, an instance of `RequestError` will be thrown. 

### Parse
In case it's not possible to parse the XML response from AisWeb API, an instance of `ParseError` will be thrown.