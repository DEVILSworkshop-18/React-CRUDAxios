import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const myRef = useRef();
    useEffect(()=>{
        myRef.current.focus();
    },[])
    const[createData,setCreateData]=useState({
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
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreateData((preData) => ({
          ...preData,
          [name]: value,
          address: {
            ...preData.address,
            [name]: value,
            geo: { ...preData.address.geo, [name]: value },
          },
          company: { ...preData.company, [name]: value },
        }));
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
          .post("https://6652d5ae813d78e6d6d65804.mockapi.io/api/user/", createData)
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error));
    
        navigate("/");
      };
    return (
        <div>
      <div className="text-center">
        <form className="p-5 fs-4 fw-bold" onSubmit={handleSubmit}>
          <div className="table-responsive">
            <table className="table table-borderless ">
              <tbody>
                <tr>
                  <td className="col-4">
                    <label>Id:</label>
                  </td>
                  <td className="col-4">
                    <input
                      className="rounded-3"
                      type="text"
                      name="id"
                      ref={myRef}
                      value={createData.id}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    <label>Name:</label>
                  </td>
                  <td className="col-11">
                    <input
                      className="rounded-3"
                      type="text"
                      name="name"
                      value={createData.name}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    <label>UserName:</label>
                  </td>
                  <td className="col-11">
                    <input
                      className="rounded-3"
                      type="text"
                      name="username"
                      value={createData.username}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    <label>Email:</label>
                  </td>
                  <td className="col-11">
                    <input
                      className="rounded-3"
                      type="email"
                      name="email"
                      value={createData.email}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    <label>Street:</label>
                  </td>
                  <td className="col-11">
                    <input
                      className="rounded-3"
                      type="text"
                      name="street"
                      value={createData.address.street}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    <label>Suite:</label>
                  </td>
                  <td className="col-11">
                    <input
                      className="rounded-3"
                      type="text"
                      name="suite"
                      value={createData.address.suite}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    <label>city:</label>
                  </td>
                  <td className="col-11">
                    <input
                      className="rounded-3"
                      type="text"
                      name="city"
                      value={createData.address.city}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    <label>Zipcode:</label>
                  </td>
                  <td className="col-11">
                    <input
                      className="rounded-3"
                      type="text"
                      name="zipcode"
                      value={createData.address.zipcode}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    <label>Lattitude:</label>
                  </td>
                  <td className="col-11">
                    <input
                      className="rounded-3"
                      type="text"
                      name="lat"
                      value={createData.address.geo.lat}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    <label>Longitude:</label>
                  </td>
                  <td className="col-11">
                    <input
                      className="rounded-3"
                      type="text"
                      name="lng"
                      value={createData.address.geo.lng}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    <label>Phone:</label>
                  </td>
                  <td className="col-11">
                    <input
                      className="rounded-3"
                      type="text"
                      name="phone"
                      value={createData.phone}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    <label>Website:</label>
                  </td>
                  <td className="col-11">
                    <input
                      className="rounded-3"
                      type="text"
                      name="website"
                      value={createData.website}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    <label>CompanyName:</label>
                  </td>
                  <td className="col-11">
                    <input
                      className="rounded-3"
                      type="text"
                      name="companyname"
                      value={createData.company.companyname}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    <label>CatchPhtase:</label>
                  </td>
                  <td className="col-11">
                    <input
                      className="rounded-3"
                      type="text"
                      name="catchPhrase"
                      value={createData.company.catchPhrase}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    <label>Bs:</label>
                  </td>
                  <td className="col-11">
                    <input
                      className="rounded-3"
                      type="text"
                      name="bs"
                      value={createData.company.bs}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn btn-success btn-lg fs-3  rounded-3" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
    );
};

export default Create;