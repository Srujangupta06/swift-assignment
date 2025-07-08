import { COMMENTS_API } from "../utils/constants";

export const fetchComments = async () => {
  try {
    const response = await fetch(COMMENTS_API);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (e) {
    console.error("FETCHING COMMENTS ERROR", e);
    throw e;
  }
};
