import "./footer.css"
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();

  return (
    <div className="footer">
        <div className="fLists">
            {/* <ul className="fList">
                <li className="fListItem">Countries</li>
                <li className="fListItem">Regions</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Hotels</li>
            </ul> */}

            <ul className="fList">
                <li className="fListItem" onClick={() => navigate("/")}>Homes</li>
                <li className="fListItem">Hostels</li>
                <li className="fListItem">Apartment</li>
                <li className="fListItem">PG</li>
                <li className="fListItem" ><a className="fListItem" href="https://www.olacabs.com/">Cabs Rental</a></li>
                <li className="fListItem" ><a className="fListItem" href="https://www.irctc.co.in/nget/train-search">Train finder</a></li>
 
            </ul>

            {/* <ul className="fList">
                <li className="fListItem">Unique places to stay</li>
                <li className="fListItem">All destinations</li>
                <li className="fListItem">All flight destinations</li>
                <li className="fListItem">Discover</li>
                <li className="fListItem">Reviews</li>
                <li className="fListItem">Travel communities</li>
            </ul> */}

            {/* <ul className="fList">
                <li className="fListItem">Car rental</li>
                <li className="fListItem">Flight finder</li>
                <li className="fListItem">Restaurant</li>
                <li className="fListItem">Travel Agents</li>
            </ul> */}

            <ul className="fList">
                <li className="fListItem">About</li>
                <li className="fListItem">Customer Service</li>
                <li className="fListItem">Partner help</li>
                <li className="fListItem">Careers</li>
                <li className="fListItem">Terms & Conditions</li>
                <li className="fListItem">Contact</li>
            </ul>

            
        </div>
        <div className="fText">Copyright © 2023 Bishant</div>
    </div>
  )
}

export default Footer