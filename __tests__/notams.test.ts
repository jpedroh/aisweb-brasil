import 'jest'
import { config } from '../config'
import Ais from '../src'
import { Notam } from '../src/factories'

const aisHandler = new Ais(config)

test('Get Notams from SBRF', (done) => {
    aisHandler.getNotams('SBRF')
        .then((result: Notam[][]) => {
            expect(result[0][0]).toBeInstanceOf(Notam)
            done()
        })
})

test('Get Notams from SNEM - has no Notams', (done) => {
    aisHandler.getNotams('SNEM')
        .then((result: Notam[][]) => {
            expect(result[0].length).toBe(0)
            done()
        })
})
