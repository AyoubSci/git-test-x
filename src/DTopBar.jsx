

/*
import React, { useState, useRef } from "react";
import "./DashboardCSS.css";

export default function DTopBar({ sections }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchBarRef = useRef(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const results = [];
  
    if (query.trim() !== "") {
      sections.forEach((section) => {
        if (section.title.toLowerCase().includes(query.toLowerCase())) {
          results.push({ type: "Title", content: section.title, sectionId: section.id });
        }
  
        if (section.desc.toLowerCase().includes(query.toLowerCase())) {
          results.push({ type: "Description", content: section.desc, sectionId: section.id });
        }
  
        // Ensure tasks exist before iterating
        if (section.tasks && Array.isArray(section.tasks)) {
          section.tasks.forEach((task) => {
            if (task.title.toLowerCase().includes(query.toLowerCase())) {
              results.push({ type: "Task", content: task.title, sectionId: section.id });
            }
          });
        }
      });
    }
  
    setSearchResults(results);
  };
  

  const handleResultClick = (sectionId, content) => {
    const element = document.querySelector(`[data-section-id="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      const highlightEl = element.querySelector(`[data-content="${content}"]`);
      if (highlightEl) {
        highlightEl.style.backgroundColor = "yellow";

        // Remove highlight after a timeout
        setTimeout(() => {
          highlightEl.style.backgroundColor = "transparent";
        }, 3000);
      }
    }
    setSearchResults([]); // Close the search results dropdown
  };

  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        backgroundColor: "#16375D",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
    
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div>
          <p
            style={{
              fontFamily: "Righteous",
              color: "white",
              lineHeight: "25px",
              margin: 0,
              fontSize: "30px",
              marginRight: "25px",
            }}
          >
            TO<br />
            DO
          </p>
        </div>
        <div
          style={{
            position: "relative", // Needed for the dropdown
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "11px",
            padding: "5px 10px",
            width: "300px",
            height: "40px",
            gap: "10px",
          }}
          className="SearchBar"
        >
          <i className="material-icons" style={{ fontSize: "23px", fontWeight: "500", color: "#1A4372" }}>
            search
          </i>
          <input
            type="text"
            ref={searchBarRef}
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search..."
            style={{ border: "none", outline: "none", width: "100%", fontSize: "14px" }}
          />
          
          {searchResults.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "45px",
                left: "0",
                width: "100%",
                maxHeight: "200px",
                overflowY: "auto",
                backgroundColor: "white",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
                borderRadius: "8px",
                padding: "5px",
              }}
            >
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  onClick={() => handleResultClick(result.sectionId, result.content)}
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #e0e0e0",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  <strong>{result.type}:</strong> {result.content}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          className="pfp"
          style={{ width: "50px", height: "50px", borderRadius: "100%" }}
          src={require("./pfp.jpg")}
          alt="Profile"
        />
      </div>
    </div>
  );
} 
  */

import React, { useState, useRef } from "react";
import "./DashboardCSS.css";

export default function DTopBar({ sections }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchBarRef = useRef(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const results = [];

    if (query.trim() !== "") {
      sections.forEach((section) => {
        const sectionResults = { sectionTitle: section.title, matches: [] };

        const regex = new RegExp(`(${query})`, "i"); // Case-insensitive match

        // Check for matches in the description
        if (regex.test(section.desc)) {
          sectionResults.matches.push({
            type: "Description",
            content: section.desc.replace(regex, `<span style='color:#1A4372'>$1</span>`),
          });
        }

        // Check for matches in tasks
        if (section.tasks && Array.isArray(section.tasks)) {
          section.tasks.forEach((task) => {
            if (regex.test(task.title)) {
              sectionResults.matches.push({
                type: "Task",
                content: task.title.replace(regex, `<span style='color:#1A4372'>$1</span>`),
              });
            }
          });
        }

        if (sectionResults.matches.length > 0) {
          results.push(sectionResults);
        }
      });
    }

    setSearchResults(results);
  };

  const handleResultClick = (sectionId, content) => {
    const element = document.querySelector(`[data-section-id="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      const highlightEl = element.querySelector(`[data-content="${content}"]`);
      if (highlightEl) {
        highlightEl.style.backgroundColor = "yellow";

        // Remove highlight after a timeout
        setTimeout(() => {
          highlightEl.style.backgroundColor = "transparent";
        }, 3000);
      }
    }
    setSearchResults([]); // Close the search results dropdown
  };

  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        backgroundColor: "#16375D",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      {/* Left Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div>
          <p
            style={{
              fontFamily: "Righteous",
              color: "white",
              lineHeight: "25px",
              margin: 0,
              fontSize: "30px",
              marginRight: "25px",userSelect:"none"
            }}
          >
            TO<br />
            DO
          </p>
        </div>
        <div
          style={{
            position: "relative", // Needed for the dropdown
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "11px",
            padding: "5px 10px",
            width: "300px",
            height: "40px",
            gap: "10px",
          }}
          className="SearchBar"
        >
          <i
            className="material-icons"
            style={{ fontSize: "23px", fontWeight: "500", color: "#1A4372" }}
          >
            search
          </i>
          <input
            type="text"
            ref={searchBarRef}
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search..."
            style={{ border: "none", outline: "none", width: "100%", fontSize: "14px" }}
          />
          {/* Search Results Dropdown */}
          {searchResults.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "45px",
                left: "0",
                width: "100%",
                maxHeight: "200px",
                overflowY: "auto",
                backgroundColor: "white",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
                borderRadius: "8px",
                padding: "5px",
              }}
            >
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  style={{ padding: "10px", borderBottom: "1px solid #e0e0e0" }}
                >
                  <strong style={{ fontSize: "16px", color: "#1A4372" }}>
                    {result.sectionTitle}
                  </strong>
                  {result.matches.map((match, idx) => (
                    <div
                      key={idx}
                      dangerouslySetInnerHTML={{
                        __html: `<div style='font-size: 14px; margin-top: 5px'>${match.content}</div>`,
                      }}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleResultClick(result.sectionId, match.content)}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          className="pfp"
          style={{ width: "50px", height: "50px", borderRadius: "100%" }}
          src={require("./pfp.jpg")}
          alt="Profile"
        />
      </div>
    </div>
  );
}

