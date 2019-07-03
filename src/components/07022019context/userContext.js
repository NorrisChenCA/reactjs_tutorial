import React from 'react'

//'codevolution' is default value. if context don't have provider. the consumer will use the default value
//here if app.js don't have <UserProvider> then the default will use
const UserContext = React.createContext('codevolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

export default UserContext
