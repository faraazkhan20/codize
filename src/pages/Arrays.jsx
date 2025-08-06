import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import Navbar from "../components/Navbar";
import arraysTrivia from "../data/arraysTrivia";

function Arrays() {
  const [modalContent, setModalContent] = useState("");

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <h4 className="text-center">Arrays</h4>
        <h6>what is arr?</h6>
        <ul>
          <li className="content">
            C++ में array एक डेटा स्ट्रक्चर है जो एक ही प्रकार के डेटा को लगातार (contiguous) memory{" "}
            <span data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModalContent(arraysTrivia[1].trivia)}>
              <i className="fas fa-info-circle text-primary cursor-pointer"></i>
            </span>{" "}
            में स्टोर करता है। Indexing 0 से शुरू होती है।{" "}
            <span data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModalContent(arraysTrivia[0].trivia)}>
              <i className="fas fa-info-circle text-primary cursor-pointer"></i>
            </span>
          </li>
        </ul>

        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content modal-dark">
              {/* <div className="modal-header p-3 justify-content-center" style={{ borderBottom: "0px" }}>
                <h5 className="modal-title" id="exampleModalLabel">
                  Code Trivia
                </h5>
              </div> */}
              <div className="modal-body p-3">{modalContent}</div>
              <div className="modal-footer p-3 pt-0" style={{ borderTop: "0px" }}>
                <button type="button" className="btn btn-sm btn-outline-danger" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <button type="button" className="btn btn-sm btn-outline-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Show
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content modal-dark">
              <div className="modal-header p-1 justify-content-center" style={{ borderBottom: "0px" }}>
                <h5 className="modal-title" id="exampleModalLabel">
                  Code
                </h5>
              </div>
              <div className="modal-body px-2 py-0">body</div>
              <div class="modal-footer p-1" style={{ borderTop: "0px" }}>
                <button type="button" class="btn btn-sm btn-outline-danger" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div> */}

        <h6>why arr(s) are required?</h6>
        <p className="content">Array से हम multiple values को एक ही नाम से store कर सकते हैं, जिससे memory management और data access आसान होता है।</p>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-dark table-bordered">
            <tbody>
              <tr>
                <td>1,1</td>
                <td>1,2</td>
                <td>1,3</td>
                <td>1,4</td>
                <td>1,5</td>
              </tr>
              <tr>
                <td>2,1</td>
                <td>2,2</td>
                <td>2,3</td>
                <td>2,4</td>
                <td>2,5</td>
              </tr>
              <tr>
                <td>3,1</td>
                <td>3,2</td>
                <td>3,3</td>
                <td>3,4</td>
                <td>3,5</td>
              </tr>
              <tr>
                <td>4,1</td>
                <td>4,2</td>
                <td>4,3</td>
                <td>4,4</td>
                <td>4,5</td>
              </tr>
              <tr>
                <td>5,1</td>
                <td>5,2</td>
                <td>5,3</td>
                <td>5,4</td>
                <td>5,5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Arrays;
