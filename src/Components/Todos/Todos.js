import React, { useState, useEffect } from "react";
import axios from "axios";
function Todos() {


    const [user, setUser] = useState([]);
    // console.log(user);
  
    const fetchData = async () => {
      const item = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setUser(item.data);
      console.log(item.data);
    };
    useEffect(() => {
      fetchData();
    }, []);
  


    return (
        <div className='container-xl container-lg container-md container-sm container-xs mt-5'>

            <table className="table table table-striped table-hover  table-bordered">
                <thead className="table-danger">
                    <tr>
                        <th className="text-center" scope="col">Id</th>
                        <th className="text-center" scope="col">Title</th>
                        <th className="text-center" scope="col">Completed</th>
                    </tr>
                </thead>
                {user.map((comm) => (
                <tbody>
                    <tr>
                        <td className="text-center">{comm.id}</td>
                        <td className="text-center">{comm.title}</td>
                        <td className="text-center">{comm.userId}</td>
                    </tr>
                </tbody>
                 ))}
            </table>

        </div>
    )
}

export default Todos
