const UserPage = async () => {
  type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  };

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  // console.log(users);
  return (
    <>
      <h2>Data Fetching in NextJS</h2>
      <div className="grid grid-cols-2 gap-2 p-4">
        {users.map((user: User) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-black"
          >
            <div className="flex flex-col space-y-1">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm">{user.name}</p>
            </div>
            <div className="flex flex-col space-y-1 items-end">
              <h2 className="text-md">{user.email}</h2>
              <p className="text-md">{user.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default UserPage;
