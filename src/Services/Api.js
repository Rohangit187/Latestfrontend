const baseurl ="https://api-nav.navsankalp.com/" 
{/* const baseurl = "http://localhost:5000/" */}
const apiServices = { 
    businessCreate: `${baseurl}api/businesss/add`,
    businessfetch: `${baseurl}api/business/search`,
    influencerCreate: `${baseurl}api/creators/create`,
    influencerFetch: `${baseurl}api/influencers/search`,
    propertyCreate: `${baseurl}api/property/create`,
    propertyFetch: `${baseurl}api/Propertyy/search`,
    rojgarCreate:`${baseurl}api/employee/create`,
    rojgarSearch:`${baseurl}api/employees/search`
};
export default apiServices;

