import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, DatePicker, Button } from "antd";
import "../style/style.css";

const Mars = (props) => {
  const [apod, setApod] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  // Fetch APOD data from NASA API
  useEffect(() => {
    const count = 20;
    const apiKey = "QEqJuF17YEpNksxMBoIn16iJS67hKVicRUrfEq0m";
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`
      )
      .then((res) => {
        console.log("MarsAPP Res>>", res.data);
        setApod(res.data);
      })
      .catch((err) => {
        console.log("Error fetching APOD data:", err);
      });
  }, []);

  // Function to handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Function to filter APOD data by selected date
  const handleSearch = () => {
    if (selectedDate) {
      const filteredApod = apod.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate.toDateString() === selectedDate.toDateString();
      });
      setApod(filteredApod);
    }
  };

  // Function to reset search and fetch APOD data again
  const resetSearch = () => {
    setSelectedDate(null);
    fetchAPODData();
  };

  // Function to fetch APOD data from NASA API
  const fetchAPODData = () => {
    const count = 20;
    const apiKey = "QEqJuF17YEpNksxMBoIn16iJS67hKVicRUrfEq0m";
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`
      )
      .then((res) => {
        console.log("MarsAPP Res>>", res.data);
        setApod(res.data);
      })
      .catch((err) => {
        console.log("Error fetching APOD data:", err);
      });
  };

  return (
    <div className="container bg-dark">
      <div className="row row-cols-6 row-cols-md-4 g-3 bg-dark">
        {apod.map((item, index) => (
          <div key={index} className="col bg-dark">
            <div className="card shadow-sm">
              <div className="Image IMG-">
                <Image
                  className="apod"
                  src={item.hdurl}
                  preview={{
                    mask: (
                      <Button type="primary">View Image</Button>
                    ),
                  }}
                />
              </div>
              <div className="MarsText">
                <h4 className="copyright">
                  Copyright: {item.copyright}
                  <h6 style={{ fontSize: "12px", color: "white", marginTop: "10px" }}>{item.date}</h6>
                </h4>
                <h4 className="title">
                  <span>*</span> {item.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mars;
