import 'jest'
import Ais from '../src'
import { InvalidCredentialsError } from '../src/errors/invalid-credentials-error'
import { AipSuplement, Chart, Meteorology, Notam, Rotaer } from '../src/factories'
import { config } from '../config'

const aisHandler = new Ais(config)

test('invalid credentials', (done) => {
  const aisHandlerIC = new Ais({ apiKey: '1934217368', apiPass: 'e9062beb-43f1-11e7-a4c1-00505680c1b4' })
  aisHandlerIC.getCharts('SBEG')
    .catch((error) => {
      expect(error).toBeInstanceOf(InvalidCredentialsError)
      done()
    })
})

test('Get Charts from SBRF', (done) => {
  aisHandler.getCharts('SBRF')
    .then((result: Chart[][]) => {
      expect(result[0][0]).toBeInstanceOf(Chart)
      done()
    })
})

// No charts
test('Get Charts from SNEM', (done) => {
  aisHandler.getCharts('SNEM')
    .then((result: Chart[][]) => {
      expect(result[0].length).toBe(0)
      done()
    })
})

test('Get Notams from SBRF', (done) => {
  aisHandler.getNotams('SBRF')
    .then((result: Notam[][]) => {
      expect(result[0][0]).toBeInstanceOf(Notam)
      done()
    })
})

// No notams
test('Get Notams from SNEM', (done) => {
  aisHandler.getNotams('SNEM')
    .then((result: Notam[][]) => {
      expect(result[0].length).toBe(0)
      done()
    })
})

test('Get Aip Sup from SBFL', (done) => {
  aisHandler.getAipSuplements('SBFL')
    .then((result: AipSuplement[][]) => {
      expect(result[0][0]).toBeInstanceOf(AipSuplement)
      done()
    })
})

test('Get Aip Sup from SNEM', (done) => {
  aisHandler.getAipSuplements('SNEM')
    .then((result: AipSuplement[][]) => {
      expect(result[0].length).toBe(0)
      done()
    })
})

test('Get Met from SBRF', (done) => {
  aisHandler.getMeteorology('SBRF')
    .then((result: Meteorology[][]) => {
      expect(result[0][0]).toBeInstanceOf(Meteorology)
      done()
    })
})

test('Get Rotaer from SBRF', (done) => {
  aisHandler.getRotaer('SBRF')
    .then((result: Rotaer[][]) => {
      expect(result[0][0]).toBeInstanceOf(Rotaer)
      done()
    })
})

// No Rotaer
test('Get Rotaer from EGLL', (done) => {
  aisHandler.getRotaer('EGLL')
    .then((result: Rotaer[][]) => {
      expect(result[0].length).toBe(0)
      done()
    })
})