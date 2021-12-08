const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts');
}

const getById = id => {
  // select * from accounts where id = 1
  return db('accounts').where('id', id).first()
}

const create = async account => {
  //equivalent to insert into accounts ( name, budget ) values ('foo', 1000);
    const [id] = await db('accounts').insert(account)
    return getById(id)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC

}

const deleteById = id => {
  // DO YOUR MAGIC

}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
