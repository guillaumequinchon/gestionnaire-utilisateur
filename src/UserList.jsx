import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import UserCard from './UserCard'
import UserListHeader from './UserListHeader'

function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api?results=7')
        const data = await response.json()
        setUsers(data.results)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsers()
  }, [])

  function handleRemoveUser(targetUser) {
    setUsers(users.filter((user) => user.login.uuid != targetUser.login.uuid))
  }

  function handleAddUser() {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        setUsers([...users, ...data.results])
      } catch (error) {
        console.error(error)
      }
    }
    fetchUser()
  }

  function handleBatchRemoveUser() {
    setUsers([])
  }

  return (
    <>
      <div className="container mx-auto w-4/5">
        <UserListHeader
          users={users}
          handleAddUser={handleAddUser}
          handleBatchRemoveUser={handleBatchRemoveUser}
        />
        <div className="flex flex-wrap gap-4 ">
          <AnimatePresence>
            {users.length <= 0 ? (
              <p className="text-center">Aucun utilisateur</p>
            ) : (
              <>
                {users.map((user) => (
                  <UserCard
                    key={user.login.uuid}
                    user={user}
                    handleRemoveUser={handleRemoveUser}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default UserList
