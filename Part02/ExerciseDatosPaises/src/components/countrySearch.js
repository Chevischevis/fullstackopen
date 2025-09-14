import countryService from "../services/countryService";

const CountrySearch = ({ filter, setFilter, setCountries }) => {

    const handleFilterChange = (event) => {
        const newFilter = event.target.value;
        setFilter(newFilter);   
        if (newFilter === '') {
            setCountries([]);
            return;
        }   
        countryService.getAllCountries()
            .then(data => {
                const filteredCountries = data.filter(country =>
                    country.name.common.toLowerCase().includes(newFilter.toLowerCase())
                );
                setCountries(filteredCountries);
            })
            .catch(error => {
                console.error("Error fetching countries:", error);
                setCountries([]);
            });     
    };
    return (
        <>
            <div>find countries <input value={filter} onChange={handleFilterChange} /></div>
        </>
    )
}



export default CountrySearch;