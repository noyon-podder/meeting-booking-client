import { useEffect, useState } from "react";

const useServerStatus = (url: string) => {
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (!data.success) {
          throw new Error("Server is down");
        }
        setServerError(false);
      } catch (err) {
        setServerError(true);
        console.error("Server Error", err);
      }
    };

    checkServerStatus();
  }, [url]); // Runs when the URL changes

  return serverError; // Returns whether there is a server error
};

export default useServerStatus;
