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
  //equivalent to: insert into accounts ( name, budget ) values ('foo', 1000);
    const [id] = await db('accounts').insert(account)
    return getById(id)
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
    await db('accounts').where('id', id).update(account)
    return getById(id)
}

const deleteById = id => {
  // equivalent to: delete from accounts where id = 1
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
