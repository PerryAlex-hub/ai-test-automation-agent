"use client";
import { UserDetailContext } from "@/context/UserDetailContext";
import axios from "axios";
import React, { useEffect } from "react";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

    const [userDetails, setUserDetails] = React.useState<any>();

  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = async () => {
    const res = await axios.post("/api/users", {});
    console.log("Result", res.data);
    setUserDetails(res.data?.user);
  };

  return(
    <UserDetailContext.Provider value={{userDetails, setUserDetails}}>
    <div>{children}</div>
    </UserDetailContext.Provider>
    )
};

export default Provider;
