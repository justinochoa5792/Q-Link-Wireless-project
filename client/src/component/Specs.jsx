import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "react-bootstrap";

const Specs = () => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    const renderDetails = async () => {
      const response = await Axios.get("http://localhost:5628/product/20425");
      console.log(response.data);
      setDetails(response.data);
    };
    renderDetails();
  }, []);

  // Api data null or false this check makes sure that something renders to the screen
  const nullCheck = (value) => {
    if (value === null || value === false) {
      return "Not available";
    } else return value;
  };

  return (
    <div className="container">
      <Table striped bordered>
        <thead>Specifications</thead>
        <tbody>
          <tr>
            <td>Brands: </td>
            <td>{details[0]?.Brand}</td>
          </tr>
          <tr>
            <td>Product Id:</td>
            <td>{details[0]?.ProductId}</td>
          </tr>
          <tr>
            <td>Device Dimension:</td>
            <td>{nullCheck(details[0]?.DeviceDimensions)}</td>
          </tr>
          <tr>
            <td>Device Weight:</td>
            <td>{nullCheck(details[0]?.DeviceWeight)}</td>
          </tr>
          <tr>
            <td>Front Camera:</td>
            <td>{nullCheck(details[0]?.FrontCamera)}</td>
          </tr>
          <tr>
            <td>Rear Camera: </td>
            <td>{nullCheck(details[0]?.RearCamera)}</td>
          </tr>
          <tr>
            <td>Four G Capable:</td>
            <td>{nullCheck(details[0]?.FourGCapable)}</td>
          </tr>
          <tr>
            <td>Battery:</td>
            <td>{nullCheck(details[0]?.Battery)}</td>
          </tr>
          <tr>
            <td>Screen Size:</td>
            <td>{nullCheck(details[0]?.ScreenSize)}</td>
          </tr>
          <tr>
            <td>Speaker phone Voice:</td>
            <td>{nullCheck(details[0]?.SpeakerphoneVoice)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Specs;
