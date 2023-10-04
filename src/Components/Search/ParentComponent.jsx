import { useState } from "react";
import SearchResult from "../../Pages/SearchResult/SearchResult";
import Banner from "../Header/Banner/Banner";

const ParentComponent = ({ donationsData }) => {
  const [filteredDonations, setFilteredDonations] = useState(donationsData);

  const onSearch = (searchTerm) => {
    const filteredResults = donationsData?.filter((donation) =>
      donation.category_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDonations(filteredResults);
  };

  return (
    <div>
      <Banner onSearch={onSearch} />
      <SearchResult filteredDonations={filteredDonations} />
    </div>
  );
};

export default ParentComponent;
