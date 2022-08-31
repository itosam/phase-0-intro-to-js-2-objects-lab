


//what is the this saying simple
//-store each employee as an Object.
//assign employye variable to an object containing name and streetAddress keys.

const employee = {
    name: "Sam Ito",
    streetAddress: "101 Jefferson Avenue",
} 

function updateEmployeeWithKeyAndValue(employees,key,value) {

    const newEmployee = {...employees};
    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employees,key,value) {

   employees[key] = value;

    return employee;
}

//call back to something non existent in the function.
function deleteFromEmployeeByKey(employee, key) {

    const cloneEmployee = {...employee}
    delete cloneEmployee.name;
    return cloneEmployee;
}

function  destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}