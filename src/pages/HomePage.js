import axios from "axios";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const HomePage = (e) => {
  const [medicineUploadData, setMedicineUploadData] = useState(null);
  const [fileUploadMedicineImgUrl, setFileUploadMedicineImgUrl] =
    useState(null);
  const [fileUploadTestImgUrl, setFileUploadTestImgUrl] = useState(null);
  const [fileUploadFinalImgUrl, setFileUploadFinalImgUrl] = useState(null);
  const [showAllMedicines, setShowAllMedicines] = useState(false);
  const [showAllTest, setShowAllTest] = useState(false);
  const [showAllFinalTest, setShowAllFinalTest] = useState(false);

  const allMedicines = [
    {
      Actual_Medicine_Name: "T. Irozorb",
      Predicted_Medicine_Name: "T. Irozorb | suchoD",
      similarity_score: 0.6896551724137931,
    },
    {
      Actual_Medicine_Name: "T. Cal123",
      Predicted_Medicine_Name: "T. Cal 123",
      similarity_score: 0.9473684210526315,
    },
    {
      Actual_Medicine_Name: "Argitas Sachet",
      Predicted_Medicine_Name: "Barchet",
      similarity_score: 0.5714285714285714,
    },
    {
      Actual_Medicine_Name: "T. Cetapin 500 XR",
      Predicted_Medicine_Name: "T. Cetapin 500 XR ",
      similarity_score: 0.9714285714285714,
    },
    {
      Actual_Medicine_Name: "Injection Proluton 500",
      Predicted_Medicine_Name: "• Juil proluton 500 ",
      similarity_score: 0.6666666666666666,
    },
    {
      Actual_Medicine_Name: "T. Drotin D.S",
      Predicted_Medicine_Name: "Drotin D.S ",
      similarity_score: 0.8333333333333334,
    },
    {
      Actual_Medicine_Name: "Cap Ecosprin AV",
      Predicted_Medicine_Name: "Calyphy Edoardo ",
      similarity_score: 0.5161290322580645,
    },
  ];

  const allTest = [
    {
      Actual_Test_Name: "ECG",
      Predicted_Test_Name: "ECG",
      similarity_score: 1,
    },
    {
      Actual_Test_Name: "LFT",
      Predicted_Test_Name: "LFT N",
      similarity_score: 0.75,
    },
    {
      Actual_Test_Name: "Urine",
      Predicted_Test_Name: "Cine",
      similarity_score: 0.6666666666666666,
    },
    {
      Actual_Test_Name: "PPBS",
      Predicted_Test_Name: "PPBS 131",
      similarity_score: 0.6666666666666666,
    },
  ];

  const allFinal = [
    {
      Medicine_name: "T. Irozorb",
      Test_Name: "ECG",
    },
    {
      Medicine_name: "T. Cal123",
      Test_Name: "LFT",
    },
    {
      Medicine_name: "Cap Ecosprin AV",
      Test_Name: "PPBS",
    },
    {
      Medicine_name: "Injection Proluton 500",
      Test_Name: "Urine",
    },
  ];

  const handleMedicinePreview = (e) => {
    setMedicineUploadData(e.target.files[0]);

    setFileUploadMedicineImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleTestPreview = (e) => {
    setFileUploadTestImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleFinalPreview = (e) => {
    setFileUploadFinalImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleMedicineImgUpload = (e) => {
    axios
      .post("http://13.127.0.111:8000/Medicine", medicineUploadData)
      .then((res) => console.log("res", res))
      .catch((err) => console.log("err", err));

    setFileUploadMedicineImgUrl(null);
    setShowAllMedicines(true);
  };
  const handleTestImgUpload = (e) => {
    setFileUploadTestImgUrl(null);
    setShowAllTest(true);
  };

  const handleFinalImgUpload = (e) => {
    setFileUploadFinalImgUrl(null);
    setShowAllFinalTest(true);
  };

  console.log("medicine data", medicineUploadData);

  return (
    <div>
      <div className="d-flex flex-row justify-content-center">
        <div className="me-4">
          <Card style={{ width: "18rem" }}>
            <Card.Body className="d-flex flex-column justify-content-center text-center">
              <Card.Title>Medicine</Card.Title>
              <Card.Text>
                Here you can upload your prescription image!
              </Card.Text>
              <input
                type="file"
                onChange={handleMedicinePreview}
                accept="image/*"
              />
              {fileUploadMedicineImgUrl !== null ? (
                <div className="mt-5">
                  <img
                    style={{ width: "100%", height: "25%" }}
                    src={fileUploadMedicineImgUrl}
                    alt=""
                  />
                  <div className="mt-4">
                    <button
                      className="btn btn-primary"
                      onClick={handleMedicineImgUpload}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              ) : null}
            </Card.Body>
          </Card>
        </div>

        <div className="me-4">
          <Card style={{ width: "18rem" }}>
            <Card.Body className="d-flex flex-column justify-content-center text-center">
              <Card.Title>Test</Card.Title>
              <Card.Text>Here you can upload your Test image!</Card.Text>
              <input
                type="file"
                onChange={handleTestPreview}
                accept="image/*"
              />
              {fileUploadTestImgUrl !== null ? (
                <div className="mt-5">
                  <img
                    style={{ width: "100%", height: "25%" }}
                    src={fileUploadTestImgUrl}
                    alt=""
                  />
                  <div className="mt-4">
                    <button
                      className="btn btn-primary"
                      onClick={handleTestImgUpload}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              ) : null}
            </Card.Body>
          </Card>
        </div>

        <div className="me-4">
          <Card style={{ width: "18rem" }}>
            <Card.Body className="d-flex flex-column justify-content-center text-center">
              <Card.Title>Final</Card.Title>
              <Card.Text>Here you can upload your Final image!</Card.Text>
              <input
                type="file"
                onChange={handleFinalPreview}
                accept="image/*"
              />
              {fileUploadFinalImgUrl !== null ? (
                <div className="mt-5">
                  <img
                    style={{ width: "100%", height: "25%" }}
                    src={fileUploadFinalImgUrl}
                    alt=""
                  />
                  <div className="mt-4">
                    <button
                      className="btn btn-primary"
                      onClick={handleFinalImgUpload}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              ) : null}
            </Card.Body>
          </Card>
        </div>
      </div>

      {showAllMedicines ? (
        <Table striped bordered className="mt-5 mb-5">
          <thead>
            <tr>
              <th>SI.No</th>
              <th>Actual Medicine Name</th>
              <th>Predicted Medicine Name</th>
              <th>Similarity Score</th>
            </tr>
          </thead>
          <tbody>
            {allMedicines.map((medicineItem) => {
              const index = allMedicines.indexOf(medicineItem);
              return (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{medicineItem.Actual_Medicine_Name}</td>
                  <td>{medicineItem.Predicted_Medicine_Name}</td>
                  <td>{medicineItem.similarity_score}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}

      {showAllTest ? (
        <div>
          <Table striped bordered className="mt-5 mb-5">
            <thead>
              <tr>
                <th>SI.No</th>
                <th>Actual Test Name</th>
                <th>Predicted Test Name</th>
                <th>Similarity Score</th>
              </tr>
            </thead>
            <tbody>
              {allTest.map((testItem) => {
                const index = allTest.indexOf(testItem);
                return (
                  <tr key={index}>
                    <td>{index + 1}.</td>
                    <td>{testItem.Actual_Test_Name}</td>
                    <td>{testItem.Predicted_Test_Name}</td>
                    <td>{testItem.similarity_score}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      ) : null}

      {showAllFinalTest ? (
        <div>
          <Table striped bordered className="mt-5 mb-5">
            <thead>
              <tr>
                <th>SI.No</th>
                <th>Medicine Name</th>
                <th>Test Name</th>
              </tr>
            </thead>
            <tbody>
              {allFinal.map((finalItem) => {
                const index = allTest.indexOf(finalItem);
                return (
                  <tr key={index}>
                    <td>{index + 1}.</td>
                    <td>{finalItem.Medicine_name}</td>
                    <td>{finalItem.Test_Name}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      ) : null}
    </div>
  );
};

export default HomePage;
