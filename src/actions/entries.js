import uuid from 'uuid';

export const addEntry = ({
  description = "",
  note = "",
  createdAt = 0
 } = {}) => ({
  type: "ADD_ENTRY",
  entry: {
    id: uuid(),
    description,
    note,
    createdAt
  }
});

export const removeEntry = ({ id } = {}) => ({
  type: "REMOVE_ENTRY",
  id
});

export const editEntry = (id , updates) => ({
  type: "EDIT_ENTRY",
  id,
  updates
});