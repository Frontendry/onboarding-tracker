// External Imports
import { Form } from "react-bootstrap";

// Local Imports
import { useAppDispatch } from "../../redux/hooks/";
import { updateAsyncTasks } from "../../redux/slices/tasksSlice";

// Types
type InCompleteTaskViewProps = {
  data: {
    key: number;
    titleid: number;
    userId: number;
    title: string;
    isCompleted: boolean;
    onComplete: boolean;
  };
};

const IncompleteTaskView = (props: InCompleteTaskViewProps) => {
  const { title, titleid, isCompleted } = props.data;

  const { Check } = Form;

  const dispatch = useAppDispatch();

  const handleChange = () => {
    const updatedData = {
      completed: !isCompleted,
    };

    const patchingData = {
      id: titleid,
      data: updatedData,
    };

    dispatch(updateAsyncTasks(patchingData));
  };

  return (
    <Check
      id={`task-${titleid}`}
      className="fs-6 text-secondary"
      type="checkbox"
      label={title}
      onClick={handleChange}
    />
  );
};

export default IncompleteTaskView;
