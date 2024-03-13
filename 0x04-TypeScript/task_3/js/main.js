const obj = { firstName: "Guillaume", lastName: "Salva" };
CRUD.insertRow(obj);

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(125);
