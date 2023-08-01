import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzVlNTc4ODgzZDU4YzY0NDk3ODE0MzNhMTQwN2I2OCIsInN1YiI6IjY0N2IxOTdjOTM4MjhlMDBhNzY0NTk1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3uaWvT-9bAR2miWjGX-sTnJ0dtQiu5cqLs2gM_kuTY";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`
  }
});
