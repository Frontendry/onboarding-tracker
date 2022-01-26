type UserProps = {
  name?: string | undefined;
};

const User = ({ name }: UserProps) => {
  return <div>{name}</div>;
};

export default User;
