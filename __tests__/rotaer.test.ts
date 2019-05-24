import 'jest'
import { config } from '../config'
import Ais from '../src'
import { Rotaer } from '../src/factories'

const aisHandler = new Ais(config)

test('Get Rotaers from SBRF', (done) => {
    aisHandler.getRotaer('SBRF')
        .then((result: Rotaer[][]) => {
            expect(result[0][0]).toBeInstanceOf(Rotaer)
            done()
        })
})

test('Get Rotaer from EGLL - has no Rotaer', (done) => {
    // Due to some reason, trying to retrieve Rotaers from some airports makes Ais API return a 500 Error.
    aisHandler.getRotaer('EGLL')
        .catch((error) => {
            expect(error).toBeInstanceOf(Error)
            done()
        })
})
