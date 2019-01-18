const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    user(id: ID!): User!
    users(
      substr: String
      hometown: String
      house: House
      concentration: Concentration
      hobbies: HobbyInput
    ): [User!]!
    post(id: ID!): Post!
    posts: [Post!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): LoginUserReturn!
    loginUser(email: String!, password: String!): LoginUserReturn!
    createPost(content: String!): CreatePostReturn!
    editPost(id: ID!, newContent: String!): EditPostReturn!
    editUser(input: CreateUserInput!): EditUserReturn!
    # friendUser(id:ID!):
  }

  input CreateUserInput {
    name: String!
    email: String!
    birthday: String
    concentration: Concentration
    hometown: String
    house: House
    gender: Gender
    bio: String
    picture: String
    hobbies: [HobbyInput!]
  }

  input HobbyInput {
    hobby: String!
  }

  type Error {
    message: String
  }

  type LoginUserReturn {
    error: Error
    token: String
    User: User
  }

  type EditUserReturn {
    error: Error
    token: String
    User: User
  }

  type CreatePostReturn {
    error: Error
    Post: Post
  }

  type EditPostReturn {
    error: Error
    Post: Post
  }

  type User {
    id: ID!
    name: String!
    email: String!
    birthday: String
    concentration: Concentration
    hometown: String
    house: House
    gender: Gender
    bio: String
    picture: String
    hobbies: [Hobby!]
    posts: [Post!]
  }

  enum Concentration {
    CS
    CLASSICS
    ANTHRO
    EC
    APPLIEDMATH
  }

  enum House {
    FRESHMAN
    HOUSING
    ADAMS
    ELIOT
    MATHER
    CABOT
    KIRKLAND
    PFOHO
    CURRIER
    LEVERETT
    QUINCY
    DUDLEY
    LOWELL
    WINTHROP
    DUNSTER
  }

  enum Gender {
    FEMALE
    MALE
    OTHER
  }

  type Hobby {
    id: ID!
    hobby: HobbyEnum!
    userId: ID!
    createdAt: String!
    updatedAt: String!
  }

  enum HobbyEnum {
    SPORTS
    ARTS
    MUSIC
    READING
    TRAVEL
    DINING
    CODING
  }

  type Post {
    id: ID!
    content: String!
    userId: ID!
    createdAt: String!
    updatedAt: String!
  }
`
