import {useNavigate} from "react-router-dom";


export default function SearchLocations({ suggestedLocations }: { suggestedLocations: { name: string, state?: string, country: string }[] }) {

    const navigate = useNavigate();

    function handleClick(location: { name: string, state?: string, country: string }) {
        navigate('/', { state: { city: location.name } });
    }

    return (
    <div className="search-locations-container">
      <ul className="search-locations-list">
        {suggestedLocations.length > 0 ? (
          suggestedLocations.map((location, index) => (
              <li onClick={() => handleClick(location)} key={index} className="search-locations-list--item">
                  {`${location.name}, ${location.state ?? ""} ${location.country}`}
              </li>
          ))
        ) : (
            <li className="search-locations-list--item">No results found</li>
        )}
      </ul>
    </div>
    );
}
