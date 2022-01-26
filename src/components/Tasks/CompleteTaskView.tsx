// External Imports
import { Form } from "react-bootstrap";

type CompleteTaskViewProps = {
  data: {
    key: number;
    titleid: number;
    userId: number;
    title: string;
    isCompleted: boolean;
    onComplete: boolean;
  };
};

const CompleteTaskView = (props: CompleteTaskViewProps) => {
  const { Text } = Form;
  const { title } = props.data;
  return (
    <Text className="d-flex fs-6 mb-0 text-secondary" as="p">
      <i className="bi bi-check2 fs-3 lh-1 me-1 text-info"></i>
      {title}
    </Text>
  );
};

export default CompleteTaskView;
