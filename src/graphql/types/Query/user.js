const User = require('../../../models/User')

const userResolver = async (obj, args, context) => {
  // TODO: Write a resolver which returns a user given a user id.
  if (!context.user) throw new Error('User not logged in')

  const user = await User.query().findById(args.id)
  return user
}

const usersResolver = async (obj, args, context) => {
  const { substr, hometown, house, concentration, hobbies } = args
  /* TODO: Write a resolver which returns a list of all users.

  Once you're done, implement the following pieces of functionality one by one:

  If any of the following arguments are provided, apply the corresponding filter:
    - substr: include only users whose name contains the substring
    - hometown: include only users from that hometown
    - house: include only users from that house
    - concentration: include only users who have that concentration
    - hobbies: include only users who have indicated one of the hobbies in that list
  */

  const allUsers = User.query()

  if (substr) {
    allUsers.whereIn(substr, 'like', 'lower("%name%")')
  }
  if (hometown) {
    allUsers.where('hometown', hometown)
  }
  if (house) {
    allUsers.where('house', house)
  }
  if (concentration) {
    allUsers.where('concentration', concentration)
  }
  if (hobbies) {
    allUsers.whereIn('hobbies', hobbies)
  }

  // .andWhere('hometown', hometown)
  // .andWhere('house', house)
  // .andWhere('concentration', concentration)
  // .whereIn('hobbies', hobbies)
  const users = await allUsers
  return users
}

const userHobbyResolver = async (obj, args, context) => {
  const user = await User.query().findById(obj.id)
  const userHobby = await user.$relatedQuery('hobbies')
  return userHobby
}

const userPostResolver = async (obj, args, context) => {
  const user = await User.query().findById(obj.id)
  const userPost = await user.$relatedQuery('posts')
  return userPost
}

const resolver = {
  Query: {
    user: userResolver,
    users: usersResolver,
  },
  User: {
    hobbies: userHobbyResolver,
    posts: userPostResolver,
  },
}

module.exports = resolver
