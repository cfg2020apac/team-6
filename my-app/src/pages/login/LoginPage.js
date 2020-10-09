import React, { useState, useEffect } from "react";

export default function LoginPage(props) {
  // const isLoggedIn = useStoreState(state => state.auth.isLoggedIn);
  // const userType = useStoreState(state => state.auth.userType);

  // const setIsLoggedIn = useStoreActions(actions => actions.auth.setLoggedIn);
  // const setUserType = useStoreActions(actions => actions.auth.setLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      switch (userType) {
        // case "M":
        //   props.history.push("/member");
        //   break;
        // default:
        //   setIsLoggedIn(false);
        //   setUserType(null);
      }
    }
    // eslint-disable-next-line
  }, [userType]);

  useEffect(() => {
    document.body.style.backgroundColor = "#0057ff";
    return () => {
      document.body.style.backgroundColor = null;
    };
    // eslint-disable-next-line
  }, []);

  const onLoginSuccess = type => {
    switch (type) {
    //   case "M":
    //     props.history.push("/member");
    //     return;
    //   default:
    //     props.history.push("/");
    //     return;
    }
  };

  return (
    // the main app here
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    background: "linear-gradient(to right, #0057ff 0%, #0099ff 100%)",
    alignItems: "center"
  }
};
