import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://665d5aa3e88051d6040638ff.mockapi.io/api/user")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 g-4" style={{margin:"10px"}}>
        {users.map((ele, index) => {
          return (
            <div key={ele.id}>
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-header">
                    {ele.id}.{ele.name}
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>User Name:</strong> {ele.username}
                      <br />
                      <strong>Email:</strong> {ele.email}
                    </li>
                    <li className="list-group-item">
                      <strong>ADDRESS: </strong>
                      <br />
                      <strong>Street:</strong> {ele.address.street} <br />
                      <strong>Suite: </strong> {ele.address.suite}
                      <br />
                      <strong>City:</strong> {ele.address.city}
                      <br />
                      <strong>ZipCode:</strong> {ele.address.zipcode}
                      <br />
                      <br />
                      <strong>GEO:</strong>
                      <br />
                      <strong>Latitude: </strong> {ele.address.geo.lat}
                      <br />
                      <strong>Longitude</strong> {ele.address.geo.lng}
                    </li>
                    <li className="list-group-item">
                      <strong>Phone:</strong> {ele.phone}
                      <br />
                      <strong>Website:</strong> {ele.website}
                    </li>
                    <li className="list-group-item">
                      <strong>COMPANY:</strong>
                      <br />
                      <strong>Name:</strong> {ele.company.name}
                      <br />
                      <strong>Catch Phrase:</strong> {ele.company.catchphrase}
                      <br />
                      <strong>BS:</strong> {ele.company.bs}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
