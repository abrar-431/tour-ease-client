import {useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const MyList = () => {
    const { users } = useContext(AuthContext);
    const loadedSpots = useLoaderData();
    const spots = loadedSpots.filter(spot => spot.email === users.email);

    const handleDelete = id =>{
        console.log('update on', id)
    }

    return (
        <div>
            <h2 className="my-4 text-2xl font-bold text-center">My Added Tourist Spots</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Country</th>
        <th>Location</th>
        <th>Average Cost</th>
        <th>Travel Time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        spots.map((spot, idx)=> <tr key={spot._id}>
            <th>{idx+1}</th>
            <td>{spot.spot}</td>
            <td>{spot.country}</td>
            <td>{spot.location}</td>
            <td>{spot.cost}</td>
            <td>{spot.time}</td>
            <td className="flex gap-5"><Link to={`/update/${spot._id}`}><FaEdit className="text-xl" /></Link>
            <button onClick={()=>handleDelete(spot._id)}><MdDelete className="text-xl" /></button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyList;