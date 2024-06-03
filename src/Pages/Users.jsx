import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = ({setId}) => {
  const [users, setUsers] = useState([]);
  const[deleteData,setDeleteData]=useState([])
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://665d5aa3e88051d6040638ff.mockapi.io/api/user")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  };
  const handleDelete=async(id)=>{
    await axios.delete(`https://665d5aa3e88051d6040638ff.mockapi.io/api/user/${id}`)
    .then(res=>setDeleteData(res.data))
    .catch((error)=>console.log(error))
  }
  const handleEdit=(id)=>{
    setId(id)
    navigate(`/edit/${id}`)
  }
  return (
    <div style={{ textAlign: "center" }} className="p-1 table-responsive">
      <table className="table table-light table-striped">
        <thead>
          <tr>
            <th scope="col" colSpan={3}>
              Basic Info
            </th>

            <th scope="col" colSpan={6}>
              Address
            </th>
            <th colSpan={2}>Contact</th>
            <th scope="col" colSpan={3}>
              Company
            </th>
            <th scope="col" rowSpan={2} colSpan={3}>
              Action
            </th>
          </tr>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Street</th>
            <th scope="col">Suite</th>
            <th scope="col">City</th>
            <th scope="col">ZipCode</th>
            <th scope="col">Geo Latitude</th>
            <th scope="col">Geo Longitude</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
            <th scope="col">Name</th>
            <th scope="col">Catch Phrase</th>
            <th scope="col">DS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((ele, index) => {
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>{ele.address.street}</td>
                <td>{ele.address.suite}</td>
                <td>{ele.address.city}</td>
                <td>{ele.address.zipcode}</td>
                <td>{ele.address.geo.lat}</td>
                <td>{ele.address.geo.lng}</td>
                <td>{ele.phone}</td>
                <td>{ele.website}</td>
                <td>{ele.company.companyname}</td>
                <td>{ele.company.catchPhrase}</td>
                <td>{ele.company.ds}</td>
                <td>
                  {" "}
                  <button onClick={()=>(handleEdit(ele.id))} className="btn btn-success">Edit</button>
                </td>
                <td>
                  <button onClick={()=>(handleDelete(ele.id))} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-success" style={{margin:"10px"}} onClick={()=>{navigate('/create')}}>Create user</button>
    </div>
  );
};

export default Users;
