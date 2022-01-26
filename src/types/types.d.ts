export type TaskType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TaskProps = {
  key: number;
  titleid: number;
  userId: number;
  title: string;
  isCompleted: boolean;
  onComplete: boolean;
};
