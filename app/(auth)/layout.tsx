
const AuthLayout = ({children}) => {
  return (
    <div>
      <nav>
        <p className="text-red-600 font-semibold"> This is navbar</p>
      </nav>
      {children}
    </div>
  );
};

export default AuthLayout;