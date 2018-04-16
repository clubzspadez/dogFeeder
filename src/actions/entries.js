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

// REMOVE_EXPENSE
export const removeEntry = ({ id } = {}) => ({
  type: "REMOVE_ENTRY",
  id
});

// EDIT_EXPENSE
export const editEntry = (id , updates) => ({
  type: "EDIT_ENTRY",
  id,
  updates
});