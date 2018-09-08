import 'jest'
import Ais from '../src'
import { InvalidCredentialsError } from '../src/errors/invalid-credentials-error'

const aisHandler = new Ais({ apiKey: 'Invalid-Key', apiPass: 'Invalid-Password' })

test('Trying to perform request with invalid credentials', (done) => {
  aisHandler.getCharts('SBRF')
    .catch((error) => {
      expect(error).toBeInstanceOf(InvalidCredentialsError)
      done()
    })
})
