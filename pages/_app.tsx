import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { FetchData } from "../controller";
import "../styles/globals.scss";

import { PlanProvider } from "../utils";

function App({ Component, pageProps }: AppProps) {
  const [subscription, setSubscription] = useState(null);
  const [prevSubscription, setPrevSubscription] = useState(null);

  return (
    <PlanProvider
      value={{
        subscription,
        setSubscription,
        prevSubscription,
        setPrevSubscription,
      }}
    >
      <Component {...pageProps} />
    </PlanProvider>
  );
}
export default App;
