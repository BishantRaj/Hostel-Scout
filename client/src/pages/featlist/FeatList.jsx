import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
// import "./list.css";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const FeatList = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  // const [dates, setDates] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState();
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  // const [searchData, setSearchData] = useState([]);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);


  
  const { data, loading, error, refetch } = useFetch(
    `/hotels?name=${destination}` 
  );
  
  console.log(data);

  const handleClick = () => {

    refetch();
  };

  

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Check-in Date</label>
              {/* <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "dd/MM/yy")}`} to ${format(dates[0].endDate, "dd/MM/yy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )} */}

              <span
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(dates[0].startDate, "dd/MM/yy")}`}</span>
                {openDate && (
                  <DateRange
                    // editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    // moveRangeOnFirstSelection={false}
                    ranges={dates}
                    // className="date"
                  />
                )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per month</small>{" "}
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>per month</small>{" "}
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Number of Students</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder="1"
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder="1"
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "Loading please wait"
            ) : (
              <>
              {data.length === 0 ? (
                  <p>No match found</p>
                ) : (
                  data.map((item) => (
                    <SearchItem item={item} key={item._id} />
                  ))
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatList;
