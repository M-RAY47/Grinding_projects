const footer = () => {
  const copyRightDate = new Date().getFullYear()
  return (
    <div className="footer">
      <footer>
        <small>&copy; {copyRightDate}. All right reserved</small>
      </footer>
    </div>
  );
};
export default footer;


