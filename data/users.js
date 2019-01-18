const casual = require('casual')

casual.define('user', name => ({
  id: casual.uuid,
  email: casual.email,
  name,
  password: casual.password,
  birthday: casual.date(),
  concentration: casual.random_element([
    'CS',
    'CLASSICS',
    'ANTHRO',
    'EC',
    'APPLIEDMATH',
  ]),
  hometown: casual.city,
  house: casual.random_element(['KIRKLAND', 'PFOHO', 'WINTHROP', 'DUNSTER']),
  gender: casual.random_element(['MALE', 'FEMALE', 'OTHER']),
  bio: casual.description,
  picture: 'https://picsum.photos/200?random',
}))

const names = [
  'Bliss',
  'Jada',
  'Diego',
  'Dalton',
  'Elizabeth',
  'Kofi',
  'Spencer',
]

const users = names.map(name => casual.user(name))

module.exports = users
