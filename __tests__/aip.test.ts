import 'jest'
import { config } from '../config'
import Ais from '../src'
import { AipSuplement } from '../src/factories'

const aisHandler = new Ais(config)

test('Get AipSuplements from SBGR', (done) => {
    aisHandler.getAipSuplements('SBGR')
        .then((result: AipSuplement[][]) => {
            expect(result[0][0]).toBeInstanceOf(AipSuplement)
            done()
        })
})

test('Get AipSuplements from SNEM - has no AipSuplements', (done) => {
    aisHandler.getAipSuplements('SNEM')
        .then((result: AipSuplement[][]) => {
            expect(result[0].length).toBe(0)
            done()
        })
})
