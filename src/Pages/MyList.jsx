import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const MyList = () => {
  const { users } = useContext(AuthContext);
  const loadedSpots = useLoaderData();
  const filteredSpots = loadedSpots.filter(spot => spot.email === users.email);
  const [spots, setSpots] = useState(filteredSpots);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/spots/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your tourist spot has been deleted.",
                icon: "success"
              });
              const remaining = spots.filter(spot => spot._id !== id);
              setSpots(remaining);
            }
          })
      }
    });
  }

  return (
    <div>
      <Helmet>
        <title>Tour Ease | My List</title>
      </Helmet>
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
              spots.map((spot, idx) => <tr key={spot._id}>
                <th>{idx + 1}</th>
                <td>{spot.spot}</td>
                <td>{spot.country}</td>
                <td>{spot.location}</td>
                <td>{spot.cost}</td>
                <td>{spot.time}</td>
                <td className="flex gap-5"><Link to={`/update/${spot._id}`}><FaEdit className="text-xl" /></Link>
                  <button onClick={() => handleDelete(spot._id)}><MdDelete className="text-xl" /></button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;