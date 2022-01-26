// External Imports
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

// Local Imports
import "./users.css";
import User from "./User";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/";
import { fetchAsyncUsers } from "../../redux/slices/usersSlice";

const UsersList = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchAsyncUsers());
  }, [dispatch]);

  return (
    <div>
      {users &&
        users.slice(0, 3).map(({ id, name }) => (
          <NavLink
            key={id}
            to={`users/${id}`}
            className="nav-link bg-white mb-3 d-flex justify-content-between align-items-center"
          >
            <User name={name} />
          </NavLink>
        ))}
    </div>
  );
};

export default UsersList;
