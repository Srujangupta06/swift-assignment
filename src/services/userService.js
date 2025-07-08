import { USERS_API } from "../utils/constants";

export const fetchUserInfo = async () => {
  try {
    const response = await fetch(USERS_API);
    if (response.ok) {
      const data = await response.json();
      return data[0];
    }
  } catch (error) {
    console.error("User Fetch Error:", error);
    throw error;
  }
};
