/**
 * Inserts a row into the database
 * @param {object} row - The row to be inserted
 * @returns {number} - The generated row ID
*/
export function insertRow(row) {
  console.log("Insert row", row);
  return Math.floor(Math.random() * Math.floor(1000));
}

/**
 * Deletes a row
 * @param {number} rowId - The ID of the row to be deleted
*/
export function deleteRow(rowId) {
  console.log("Delete row id", rowId);
  return;
}

/**
 * Updates a row
 * @param {number} rowId - The ID of the row to be updated
 * @param {object} row - The new data for the row
 * @returns {number} - The updated row ID
*/
export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}
