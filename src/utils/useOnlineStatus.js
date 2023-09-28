import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isUserOnline, setIsUserOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsUserOnline(false);
    });
    window.addEventListener("online", () => {
      setIsUserOnline(true);
    });
  }, []);

  return isUserOnline;
};

export default useOnlineStatus;
