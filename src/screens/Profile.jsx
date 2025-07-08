import { FaArrowLeftLong } from "react-icons/fa6";
import UserAvatar from "../components/UserAvatar";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  if (!user) return null;
  const { name, email, address, phone, id } = user;
  const { city, street } = address;
  return (
    <div className="px-8 md:px-16 lg:px-28 py-6">
      <div className="flex items-center gap-x-2 mb-6">
        <FaArrowLeftLong
          className="text-[#272a4b] cursor-pointer"
          onClick={() => navigate("/comments")}
        />
        <h1 className="text-lg text-[#272a4b] font-[500]">Welcome, {name ? name : "User"}</h1>
      </div>

      <div className="p-8 shadow-lg rounded-md border border-gray-300">
        {/*User Avatar */}
        <div className="flex items-center gap-x-2.5">
          <UserAvatar
            bgColor="#f0f0eb"
            height="100px"
            width="100px"
            fontSize="36px"
            userName={name}
          />
          <div>
            <h3 className="text-[#272a4b] font-[500] mb-1 text-lg">{name}</h3>
            <p className="text-sm text-gray-400">{email}</p>
          </div>
        </div>
        {/*User Details */}
        <form className="mt-6 space-y-4" autoComplete="off">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* User ID*/}
            <Input
              type="text"
              placeholder="Enter Your User ID"
              labelName="User ID"
              value={id}
            />
            {/* Name */}
            <Input
              type="text"
              placeholder="Enter Your Name"
              labelName="Name"
              value={name}
            />
            {/*Email ID */}
            <Input
              type="email"
              placeholder="Enter Your Email ID"
              labelName="Email ID"
              value={email}
            />
            {/*Address */}
            <Input
              type="text"
              placeholder="Enter Your Address"
              labelName="Address"
              value={street+", "+city}
            />
            {/*Phone Number */}
            <Input
              type="tel"
              placeholder="Enter Your Phone Number"
              labelName="Phone"
              value={phone}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
