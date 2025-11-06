import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";

const MyBids = () => {
  const instanceSecure = useAxiosSecure();
  const instance = useAxios();
  const { user } = useAuth();
  const [isTokenReady, setIsTokenReady] = useState(false);

  const email = user?.email;
  console.log(email);

  // First useEffect: Get token only when email is available
  useEffect(() => {
    const getToken = async () => {
      if (!email) {
        console.log("Email not available yet");
        return;
      }

      try {
        const response = await instance.post("/getToken", { email });
        console.log(response.data);
        const token = response.data;
        localStorage.setItem("access-token", token);
        setIsTokenReady(true); // Signal that token is ready
      } catch (error) {
        console.log("Error getting token:", error);
      }
    };

    getToken();
  }, [email, instance]); // Only run when email changes

  // Second useEffect: Fetch data only after token is ready
  useEffect(() => {
    const fetchData = async () => {
      if (!email || !isTokenReady) {
        console.log("Waiting for email and token...");
        return;
      }

      try {
        const response = await instanceSecure.get(`/myBids?email=${email}`);
        const data = response?.data;
        console.log(data);
      } catch (error) {
        console.log("Error fetching bids:", error);
      }
    };

    fetchData();
  }, [email, isTokenReady, instanceSecure]); // Run when email or token readiness changes

  return (
    <div>
      <h1>My Bids</h1>
      {!email && <p>Loading user...</p>}
      {email && !isTokenReady && <p>Authenticating...</p>}
    </div>
  );
};

export default MyBids;
