import { ReactNode, useState } from "react";
import { ApiContext } from ".";

type TApiContextWrapper = {
  children: ReactNode;
};
const ApiContextWrapper: React.FC<TApiContextWrapper> = ({ children }) => {
  const [data, setData] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const postData = async (endpoint: string, payload: object): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }
      const data = await response.json();
      setData(data.message);
    } catch (err: any) {
      setError(err.toString());
    }
  };

  return (
    <ApiContext.Provider
      value={{
        postData: postData,
        data: data,
        error: error,
        loading: isLoading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextWrapper;
