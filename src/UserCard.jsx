import { FaEnvelope, FaPhone, FaTimes, FaMap } from 'react-icons/fa'
import { motion } from 'framer-motion'

function formatDate(date) {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = ('0' + (d.getMonth() + 1)).slice(-2)
  const day = ('0' + d.getDate()).slice(-2)
  return `${day}/${month}/${year}`
}

function UserCard({ user, handleRemoveUser }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.2 },
      }}
      key={user.login.uuid}
      className="card w-1/6 bg-base-100 shadow-xl"
    >
      <div className="avatar">
        <div className="w-24 rounded-full m-auto mt-8">
          <img src={user.picture.large} alt={user.name.first} />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {user.name.first} {user.name.last}
        </h2>
        <p>{formatDate(user.dob.date)}</p>
        {/* créer un composant qui gère les actions sur un utilisateur */}
        <div className="mt-4 justify-center flex gap-2">
          <button className="btn btn-primary btn-sm">
            <FaEnvelope />
          </button>
          <button className="btn btn-sm btn-outline">
            <FaPhone />
          </button>
          <button className="btn btn-outline btn-sm ">
            <FaMap />
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => handleRemoveUser(user)}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default UserCard
