export default function Logout({ user, dispatchUser }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <p>
        Logged In As: <b>{user}</b>
      </p>
      <input
        type="submit"
        value="Log Out"
        onClick={() => dispatchUser({ type: "LOGOUT" })}
      />
    </form>
  );
}
