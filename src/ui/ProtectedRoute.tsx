type ButtonProps = {
  children: JSX.Element;
};

function ProtectedRoute({ children }: ButtonProps) {
  return (
    <div>
      <h1>For protecting routes</h1>
      {children}
    </div>
  );
}
export default ProtectedRoute;
