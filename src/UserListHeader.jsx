import React from 'react'

export default function UserListHeader({
  users,
  handleAddUser,
  handleBatchRemoveUser,
}) {
  return (
    <div className="flex my-8 gap-8 items-center">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Utilisateurs</div>
          <div className="stat-value text-primary">{users.length}</div>
        </div>
      </div>
      <button className="btn btn-secondary" onClick={handleAddUser}>
        Ajouter un utilisateur
      </button>
      <button className="btn btn-secondary" onClick={handleBatchRemoveUser}>
        Tout supprimer
      </button>
    </div>
  )
}
