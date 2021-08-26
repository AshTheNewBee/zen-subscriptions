import axios from "axios";

interface FetchedData {
  data?: {};
  error?: {} | any;
}

const currentURL = `api/current`;

export const FetchData = async (url: string): Promise<FetchedData> => {
  try {
    return await axios.get(url).then((res) => {
      return { data: res.data };
    });
  } catch (err) {
    return { error: "Could not retrieve the plan details" };
  }
};

export const UpdateData = async (
  url: string,
  updatedData: {}
): Promise<FetchedData> => {
  try {
    return await axios({
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      url: url,
      data: JSON.stringify(updatedData),
    }).then((res) => {
      return { data: res.data };
    });
  } catch (err) {
    return { error: "Could not update the plan details" };
  }
};
