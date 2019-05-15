import { createConstants, createGeneralConstants } from '../utils/actions'

export default {...createConstants(
    'TEST',
    'HOUSES',
  ),
  ...createGeneralConstants(
    'ADD',
    'TICK'
  ),
}
