import uuid from 'uuid';

export const addEntry = ({
  entry = "",
  note = "",
  createdAt = 0
 } = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    createdAt
  }
});

// REMOVE_EXPENSE
export const removeEntry = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// EDIT_EXPENSE
export const editEntry = (id , updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});