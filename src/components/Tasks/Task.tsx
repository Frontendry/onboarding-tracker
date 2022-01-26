// Local Imports
import CompleteTaskView from "./CompleteTaskView";
import IncompleteTaskView from "./IncompleteTaskView";
import { TaskProps } from "../../types/types";

const Task = (props: TaskProps) => {
  const { isCompleted } = props;

  return (
    <li className="mb-3">
      {isCompleted ? (
        <CompleteTaskView data={props} />
      ) : (
        <IncompleteTaskView data={props} />
      )}
    </li>
  );
};

export default Task;
