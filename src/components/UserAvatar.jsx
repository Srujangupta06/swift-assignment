import { getUserAvatar } from "../utils/helpers";
const UserAvatar = (props) => {
  const { bgColor, height, width, fontSize, userName = "" } = props;
  const [firstInitial, secondInitial] = getUserAvatar(userName);

  return (
    <div
      className="flex items-center justify-center rounded-full p-4"
      style={{ backgroundColor: bgColor, height: height, width: width }}
    >
      <span className="text-[#272a4b]" style={{ fontSize }}>
        {firstInitial}
      </span>
      <span className="text-[#272a4b]" style={{ fontSize }}>
        {secondInitial}
      </span>
    </div>
  );
};

export default UserAvatar;
