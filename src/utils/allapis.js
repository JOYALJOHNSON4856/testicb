const DOMAIN = process.env.NEXT_PUBLIC_API_URL;


const API = {
  login: `${DOMAIN}authenticate`,
  
};

export const BASE_URL = DOMAIN;
export default API;
