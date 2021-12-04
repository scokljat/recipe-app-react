import axios from "axios";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
      );

      console.log(response.data.meals);
      dispatch({
        type: "SET_MEAL",
        payload: response.data.meals,
      });
    } catch (err) {
      console.log("Err", err);
    }
  };
};
