import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelList } from "@/constants/options";
import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

function CreateTrip() {
  const [place, setPlace] = useState(null);
  const [formData,setFormData]=useState([]);
  const handleInputChange=(name,value)=>{

    
    setFormData({
        ...formData,
        [name]:value
    })
  }

  useEffect(()=>{
    console.log(formData);
  },[formData])

  const onGenerateTrip = () => {
    if (!formData?.noOfDays) {
      alert("Please enter the number of days for your trip.");
      return;
    }
  
    if (Number(formData.noOfDays) > 5) {
      alert("Please enter a number of days less than or equal to 5.");
      return;
    }
  
    // Add logic to proceed with generating the trip
    console.log("Trip is being generated with the following data:", formData);
  };
  
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Please provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>

      <div>
        {/* Travel Destination */}
        <div className="mt-20 flex flex-col">
          <h2 className="text-xl my-3 font-medium">Where would you like to travel to?</h2>
          <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
            selectProps={{
              value: place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange('location', v)
              },
            }}
          />
        </div>

        {/* Trip Duration */}
        <div className="mt-5">
          <h2 className="text-xl my-3 font-medium">How many days are you planning your trip?</h2>
          <Input placeholder="Ex. 3" type="number" 
          onChange={(e)=>handleInputChange('noOfDays',e.target.value)}
          />
        </div>

        {/* Budget Options */}
        <div className="mt-5">
          <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
          <p className="text-gray-500 mb-3">
            The budget is exclusively allocated for activities and dining purposes.
          </p>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={()=>handleInputChange('budget',item.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                    formData?.budget === item.title ? "shadow-lg border-black" : ""
                  }`}
                  
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Companion Options */}
        <div className="mt-5">
          <h2 className="text-xl my-3 font-medium">Who do you plan to travel with on your next adventure?</h2>
          <p className="text-gray-500 mb-3">
            Select one or more options to help us plan group-friendly activities.
          </p>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelList.map((item, index) => (
              <div
                key={index}
                onClick={()=>handleInputChange('traveler',item.people)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                    formData?.traveler === item.people ? "shadow-lg border-black" : ""
                  }`}
                role="button"
                aria-label={`Travel with ${item.title}`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
        
            <div  className="my-10 justify-end flex">
            <Button onClick={onGenerateTrip}>Generate Trip</Button>
            </div>
    </div>
  );
}

export default CreateTrip;
