import { Row, Col, Form, Button } from "react-bootstrap";
import React, { useState } from "react";

import advancedFilter from "../assets/imgs/advancedFilter.png";

const Filter = ({ showResult, setShowResult, setSelectedFilters }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);
  const [isJournal, setIsJournal] = useState(false);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center" style={{ margin: "50px" }}>
      <div
        style={{
          width: "1260px",
          height: showAdvancedFilter ? "385px" : "220px",
          backgroundColor: "#F3FCFB",
          borderRadius: "20px",
          padding: "40px",
        }}
      >
        <Row style={{ width: "100%" }} className="justify-content-between">
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="What are you looking for?"
              style={{
                width: "640px",
                height: "50px",
                fontSize: "20px",
                borderRadius: "30px",
              }}
            />
          </Col>
          <Col xs="auto">
            <Form.Select
              style={{
                width: "212px",
                height: "50px",
                fontSize: "20px",
                borderRadius: "30px",
                fontWeight: "bold",
              }}
            >
              <option>Conference</option>
              <option>Journal</option>
            </Form.Select>
          </Col>

          <Col xs="auto">
            <Button
              variant="primary"
              style={{
                width: "200px",
                height: "50px",
                backgroundColor: "#E95D54",
                fontSize: "24px",
                border: "none",
                borderRadius: "30px",
                boxShadow: "0 4px 4px rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => setShowResult(!showResult)}
            >
              <strong>Search</strong>
            </Button>
          </Col>
        </Row>

        <Row style={{ width: "100%", marginTop: "30px", marginBottom: "30px" }}>
          <Col>
            {showResult && (
              <Button
                style={{
                  width: "146px",
                  height: "60px",
                  backgroundColor: "#4EB1A4",
                  border: "none",
                  fontSize: "25px",
                  borderRadius: "10px",
                }}
              >
                <strong>10 Result</strong>
              </Button>
            )}
          </Col>
          <Col className="text-end align-items-end">
            <Button
              className="px-4"
              style={{
                width: "335px",
                height: "60px",
                backgroundColor: "#4EB1A4",
                border: "none",
                fontSize: "25px",
                borderRadius: "30px",
              }}
              onClick={() => {
                setShowAdvancedFilter(!showAdvancedFilter);
                setSelectedFilters(["KDD", "USA", "4605"]);
              }}
            >
              <img
                src={advancedFilter}
                alt="advancedFilter icon"
                style={{ paddingRight: "5px" }}
              />
              <strong>Advanced Filtering</strong>
            </Button>
          </Col>
        </Row>

        {showAdvancedFilter && (
          <>
            <Row
              style={{ width: "100%", marginTop: "30px", marginBottom: "30px" }}
              className="justify-content-between"
            >
              <Col xs="auto">
                <Form.Control
                  type="datetime-local"
                  placeholder={selectedDate ? null : "Submission date"}
                  value={selectedDate}
                  onChange={handleDateChange}
                  style={{
                    width: "270px",
                    height: "40px",
                    borderRadius: "30px",
                    border: "1px solid #434343",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                />
              </Col>
              <Col xs="auto">
                <Form.Control
                  type="datetime-local"
                  placeholder="Conference Date"
                  style={{
                    width: "270px",
                    height: "40px",
                    borderRadius: "30px",
                    border: "1px solid #434343",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                />
              </Col>
              <Col xs="auto">
                <Form.Select
                  style={{
                    width: "157px",
                    height: "40px",
                    borderRadius: "30px",
                    border: "1px solid #434343",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  <option>Location</option>
                  <option>USA</option>
                  <option>Canada</option>
                  <option>UK</option>
                  <option>Finland</option>
                  <option>China</option>
                </Form.Select>
              </Col>
              <Col xs="auto">
                <Form.Select
                  style={{
                    width: "116px",
                    height: "40px",
                    borderRadius: "30px",
                    border: "1px solid #434343",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  <option>Rank</option>
                  <option>A*</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>None</option>
                </Form.Select>
              </Col>
              <Col xs="auto">
                <Form.Select
                  style={{
                    width: "107px",
                    height: "40px",
                    borderRadius: "30px",
                    border: "1px solid #434343",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  <option>FoR</option>
                  <option>4605 - Data management and data science</option>
                  <option>4611 - Machine Learning</option>
                  <option>4612 - AI</option>
                  <option>4613 - Data Lake</option>
                </Form.Select>
              </Col>
            </Row>

            <Row style={{ width: "80%" }} className="justify-content-between">
              <Col xs="auto">
                <Form.Select
                  style={{
                    width: "140px",
                    height: "40px",
                    borderRadius: "30px",
                    border: "1px solid #434343",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  <option>Source</option>
                  <option>CORE2023</option>
                  <option>CORE2022</option>
                  <option>CORE2021</option>
                </Form.Select>
              </Col>
              <Col xs="auto">
                <Form.Select
                  style={{
                    width: "171px",
                    height: "40px",
                    borderRadius: "30px",
                    border: "1px solid #434343",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  <option>Acronym</option>
                  <option>KDD</option>
                  <option>PODS</option>
                  <option>SIGMOD</option>
                  <option>ACKM</option>
                  <option>KSMC</option>
                  <option>SIGMOD</option>
                  <option>ACKM</option>
                  <option>KSMC</option>
                </Form.Select>
              </Col>
              <Col xs="auto">
                <Form.Select
                  style={{
                    width: "119px",
                    height: "40px",
                    borderRadius: "30px",
                    border: "1px solid #434343",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  <option>Rating</option>
                  <option>4.5-5</option>
                  <option>4-4.5</option>
                  <option>3.5-4</option>
                  <option>3-3.5</option>
                  <option>*-3</option>
                </Form.Select>
              </Col>
              <Col xs="auto">
                <Form.Select
                  style={{
                    width: "106px",
                    height: "40px",
                    borderRadius: "30px",
                    border: "1px solid #434343",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  <option>Type</option>
                  <option>Online</option>
                  <option>Offline</option>
                </Form.Select>
              </Col>
              <Col xs="auto">
                <Form.Select
                  style={{
                    width: "189px",
                    height: "40px",
                    borderRadius: "30px",
                    border: "1px solid #434343",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  <option>Impact Factor</option>
                </Form.Select>
              </Col>
            </Row>
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;