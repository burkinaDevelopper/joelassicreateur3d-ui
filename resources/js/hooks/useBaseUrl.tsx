import { useMemo } from "react";

const useBaseUrl = () => {
  const baseUrl = useMemo(() => "https://www.joelassicreateur3D.com/api/global-data", []);
 //  const baseUrl = useMemo(() => "http://127.0.0.1:8000/api/global-data", []);
  return baseUrl;
};

export default useBaseUrl;
