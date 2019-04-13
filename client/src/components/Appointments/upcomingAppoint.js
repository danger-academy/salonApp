import React from "react";
import './upcomingAppoint.css'
import posts from "../../posts";
import {AuthConsumer} from "../../authContext";
import Can from "../Can";

const UpcomingAppoint = () => (
  <AuthConsumer>
    {({user}) => (
      <div>
        <h2>Upcoming Appointments</h2>
        <table className="table">
          <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Name/Service</th>
            <th scope="col">Edit</th>
          </tr>
          </thead>
          <tbody>
          {posts.map((post, index) => (
            <tr key={post.id}>
              <th scope="row">{post.id}</th>
              <td>{post.name}</td>
              <td>
                <Can
                  role={user.role}
                  perform="posts:edit"
                  data={{
                    userId: user.id,
                    postOwnerId: post.ownerId
                  }}
                  yes={() => (
                    <button className="btn btn-sm btn-default">
                      Edit Appt
                    </button>
                  )}
                />
                <Can
                  role={user.role}
                  perform="posts:delete"
                  yes={() => (
                    <button className="btn btn-sm btn-danger">
                      Delete Appt
                    </button>
                  )}
                />
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )}
  </AuthConsumer>
);

export default UpcomingAppoint;
