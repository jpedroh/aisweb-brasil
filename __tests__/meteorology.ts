import 'jest'
import { config } from '../config'
import Ais from '../src'
import { Meteorology } from '../src/factories'

const aisHandler = new Ais(config)

test('Try to get meteorology from SBRF', (done) => {
    aisHandler.getMeteorology('SBRF')
        .then((result: Meteorology[][]) => {
            expect(result[0][0]).toBeInstanceOf(Meteorology)
            done()
        })
})

test('Try to get meteorology from XXXX - invalid airport', (done) => {
    aisHandler.getMeteorology('XXXX')
        .then((result: Meteorology[][]) => {
            expect(result[0][0].metar).toBeNull()
            expect(result[0][0].taf).toBeNull()
            done()
        })
})
