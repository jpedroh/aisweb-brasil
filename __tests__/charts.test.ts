import 'jest'
import { config } from '../config'
import Ais from '../src'
import { Chart } from '../src/factories'

const aisHandler = new Ais(config)

test('Get Charts from SBRF', (done) => {
    aisHandler.getCharts('SBRF')
        .then((result: Chart[][]) => {
            expect(result[0][0]).toBeInstanceOf(Chart)
            done()
        })
})

test('Get Charts from SNEM - has no Charts', (done) => {
    aisHandler.getCharts('SNEM')
        .then((result: Chart[][]) => {
            expect(result[0].length).toBe(0)
            done()
        })
})
