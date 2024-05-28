import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = ({id}) => {
    const navigate = useNavigate()
    const[editData,setEditData]=useState({
        id: "",
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: "",
          },
        },
        phone: "",
        website: "",
        company: {
          companyname: "",
          catchPhrase: "",
          bs: "",
        },
      });
      useEffect(()=>{
        fetchData();
      },[])
      const fetchData=async()=>{
        await axios.get(`https://6652d5ae813d78e6d6d65804.mockapi.io/api/user/${id}`)
        .then(res=>setEditData(res.data))
        .catch((error)=>console.log(error))
      };

      const handleChange=(e)=>{
        const { name, value } = e.target;
    setEditData((preData) => ({
      ...preData,
      [name]: value,
      address: {
        ...preData.address,
        [name]: value,
        geo: { ...preData.address.geo, [name]: value },
      },
      company: { ...preData.company, [name]: value },
    }));
      }
      const handleSubmit=async(e)=>{
        e.preventDefault();
        await axios
          .put(
            `https://6652d5ae813d78e6d6d65804.mockapi.io/api/user/${id}`,
            editData
          )
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error));
    
        navigate("/users");
      }
    return (
        <div className="text-center">
        <form className="p-2 fs-4 fw-bold" onSubmit={handleSubmit}>
          <div className="table-responsive">
            <table className="table table-borderless ">
              <tbody>
                <tr>
                  <td className="col-4">
                    <label>Id:</label>
                  </td>
                  <td className="col-8">
                    <input
                      className="rounded-3"
                      type="text"
                      name="id"
                      value={editData.id}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-4">
                    <label>Name:</label>
                  </td>
                  <td className="col-8">
                    <input
                      className="rounded-3"
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-4">
                    <label>UserName:</label>
                  </td>
                  <td className="col-8">
                    <input
                      className="rounded-3"
                      type="text"
                      name="username"
                      value={editData.username}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-4">
                    <label>Email:</label>
                  </td>
                  <td className="col-8">
                    <input
                      className="rounded-3"
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-4">
                    <label>street:</label>
                  </td>
                  <td className="col-8">
                    <input
                      className="rounded-3"
                      type="text"
                      name="street"
                      value={editData.address.street}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-4">
                    <label>Suite:</label>
                  </td>
                  <td className="col-8">
                    <input
                      className="rounded-3"
                      type="text"
                      name="suite"
                      value={editData.address.suite}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-4">
                    <label>city:</label>
                  </td>
                  <td className="col-8">
                    <input
                      className="rounded-3"
                      type="text"
                      name="city"
                      value={editData.address.city}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-4">
                    <label>Zipcode:</label>
                  </td>
                  <td className="col-8">
                    <input
                      className="rounded-3"
                      type="text"
                      name="zipcode"
                      value={editData.address.zipcode}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-4">
                    <label>Lattitude:</label>
                  </td>
                  <td className="col-8">
                    <input
                      className="rounded-3"
                      type="text"
                      name="lat"
                      value={editData.address.geo.lat}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-4">
                    <label>Longitude:</label>
                  </td>
                  <td className="col-8">
                    <input
                      className="rounded-3"
                      type="text"
                      name="lng"
                      value={editData.address.geo.lng}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-4">
                    <label>Phone:</label>
                  </td>
                  <td className="col-8">
                    <input
                      className="rounded-3"
                      type="text"
                      name="phone"
                      value={editData.phone}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-4">
                    <label>Website:</label>
                  </td>
                  <td className="col-8">
                    <input
                      className="rounded-3"
                      type="text"
                      name="website"
                      value={editData.website}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-4">
                    <label>companyName:</label>
                  </td>
                  <td className="col-4">
                    <input
                      className="rounded-3"
                      type="text"
                      name="companyname"
                      value={editData.company.companyname}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-4">
                    <label>CatchPhtase:</label>
                  </td>
                  <td className="col-8">
                    <input
                      className="rounded-3"
                      type="text"
                      name="catchPhrase"
                      value={editData.company.catchPhrase}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-4">
                    <label>Bs:</label>
                  </td>
                  <td className="col-8">
                    <input
                      className="rounded-3"
                      type="text"
                      name="bs"
                      value={editData.company.bs}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn btn-success btn-lg fs-3 rounded-3" type="submit">
            Update
          </button>
        </form>
      </div>
    );
};

export default Edit;