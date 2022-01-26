// External Imports
import React, { useEffect, Fragment } from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";

// Local Imports
import UserTasksList from "./UserTasksList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/";
import { fetchAsyncTasks } from "../../redux/slices/tasksSlice";

const AllTasks = () => {
  const params = useParams<{ usersId: string | undefined }>();

  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.tasks);

  /*   const activeUserTasks = (tasks: Task[], userId: number) => (
    <UserTasksList tasks={tasks} userTasksId={userId} />
  ); */

  useEffect(() => {
    dispatch(fetchAsyncTasks());
  }, [dispatch]);

  let routeItems = [];
  for (var i = 1; i < 4; i++) {
    routeItems.push(
      <Route
        key={i}
        path={`/users/${i}`}
        element={<UserTasksList tasks={tasks} userTasksId={params.usersId} />}
      />
    );
  }

  return (
    <Fragment>
      {Object.keys(params).length === 0 && params.constructor === Object ? (
        <Navigate to="/users/1" replace={true} />
      ) : (
        <Routes>{routeItems}</Routes>
      )}
    </Fragment>
  );
};

export default AllTasks;
