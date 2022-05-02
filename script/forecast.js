const apiKey = "AkEFW24M0SECGziwL1RijWjvkd92y9Cs";

const getCity = async (city) => {

    const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const queryParameters = `?apikey=${apiKey}&q=${city}`;

    const apiResponse = await fetch(baseUrl + queryParameters);
    const data = await apiResponse.json();

    return data[0];
};

getCity('Miami')
    .then(data => console.log(data))
    .catch(err => console.log(err));