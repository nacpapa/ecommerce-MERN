import axios from "axios";

const BASE_URL = "http://localhost:5010/API/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTg2MmRmZDg5OGY4NTc1NjMyZTBkYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTg4ODczNSwiZXhwIjoxNjYwMTQ3OTM1fQ.DhgEqO8hP8mDyrEdLC8A2kE3ieJvbKtMhRTlfvG52V0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    token: `Bearer ${TOKEN}`,
  },
});
