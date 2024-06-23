const Header = (props) => {
  const { title, paragraph } = props;
  return (
    <>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </>
  );
};

export default Header;
