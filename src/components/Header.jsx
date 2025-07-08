import UserAvatar from "./UserAvatar";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { fetchUserInfo } from "../services/userService";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const getUser = async () => {
    try {
      const userInfo = await fetchUserInfo();
      setUser(userInfo);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const name = user?.name ?? "";
  return (
    <header className="bg-[#272a4b] px-8 md:px-16 lg:px-28 flex justify-between py-4">
      {/* Left Section */}
      <div>
        <h1 className="text-white text-lg">Logo</h1>
      </div>

      {/* Right Section */}
      {user && (
        <div className="flex items-center gap-x-2">
          <UserAvatar
            bgColor="white"
            height="40px"
            width="40px"
            userName={name}
          />
          <h3 className="text-white">{name}</h3>
        </div>
      )}
    </header>
  );
};

export default Header;
