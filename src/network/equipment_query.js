export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const equipment_departmentid_request = (id) => {
  fetch(`http://localhost/api/v1/equipment?equipment_department_id=${id}`, {
    headers: headers,
    method: "GET",
  })
    .then((result) =>
      console.log(
        result.json().then((data) => {
          console.log(data);
        })
      )
    )
    .catch((error) => console.log(error));
};
