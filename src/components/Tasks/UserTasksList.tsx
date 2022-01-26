// External Imports
import { Form } from "react-bootstrap";

// Local Imports
import Task from "./Task";

// Types
import { TaskType } from "../../types/types";

type UserTaskListProps = {
  tasks: TaskType[];
  userTasksId: string | undefined;
};

const UserTasksList = ({ tasks, userTasksId }: UserTaskListProps) => {
  const parseIntuserTasksId = () => {
    if (typeof userTasksId === "string") {
      return parseInt(userTasksId);
    } else {
      return 0;
    }
  };
  return (
    <Form>
      <ul className="list-unstyled">
        {tasks &&
          tasks
            .filter((task) => task.userId === parseIntuserTasksId())
            .map(({ id, userId, title, completed }) => {
              return (
                <Task
                  key={id}
                  titleid={id}
                  userId={userId}
                  title={title}
                  isCompleted={completed}
                  onComplete={completed === false ? true : false}
                />
              );
            })}
      </ul>
    </Form>
  );
};

export default UserTasksList;
