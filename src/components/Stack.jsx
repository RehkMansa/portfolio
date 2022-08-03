const Stack = ({ name, icon }) => {
  return (
    <StackWrapper className="flex g-10 ai-c">
      <i className={`fa-brands fa-${icon}`} />
      <p>{name}</p>
    </StackWrapper>
  );
};

export default Stack;
