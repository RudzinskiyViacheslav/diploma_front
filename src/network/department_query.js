const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const department_capfkid_request = (id) => {
  fetch(`http://localhost/api/v1/production_point?capfk_id=${id}`, {
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
