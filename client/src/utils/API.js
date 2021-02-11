import axios from 'axios';
import setAuthToken from "./setAuthToken";

export default {
  getEvents: function () {
    return axios.get("/api/events");
  },
  getUser: function () {
    return axios.get("/api/users")
    }
  }
;