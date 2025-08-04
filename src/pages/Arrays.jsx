import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import Navbar from "../components/Navbar";

function Arrays() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h4 className="text-center">Arrays</h4>
        <h6>what is arr?</h6>
        <ul>
          <li className="content">C++ में array एक डेटा स्ट्रक्चर है जो एक ही प्रकार के डेटा को लगातार (contiguous) memory में स्टोर करता है। Indexing 0 से शुरू होती है।</li>
          <li className="content">C++ में arrays की indexing 0 से शुरू होती है क्योंकि यह memory address calculation को सरल बनाती है। जब कोई array बनता है, तो उसका पहला element उस memory location पर होता है जो array का base address कहलाता है। यदि indexing 0 से शुरू हो, तो पहले element का address base + 0 * size होता है, यानी वही base address। इससे compiler को offset कैलकुलेट करने में कोई extra computation नहीं करनी पड़ती। अगर indexing 1 से होती, तो हर access के लिए base + (index - 1) * size करना पड़ता, जिससे processing में अतिरिक्त समय लगता। यही कारण है कि अधिकतर भाषाओं, जैसे C, C++, Java आदि में arrays को 0-based रखा गया है।</li>
          <li className="content">Array के elements contiguous memory locations में इसलिए store होते हैं ताकि data access तेज़ और efficient हो सके। जब किसी array को declare किया जाता है, तो compiler उसे एक continuous memory block allocate करता है। इससे हर element का address आसानी से calculate किया जा सकता है, जैसे: base_address + index * size_of_datatype। यह predictable addressing CPU cache के साथ बेहतर काम करता है और traversal को fast बनाता है। साथ ही, sequential access (जैसे loops) में performance बेहतर मिलती है क्योंकि processor prefetching आसानी से कर पाता है। यही वजह है कि arrays को contiguous memory में store किया जाता है।</li>
        </ul>

        <button type="button" className="btn btn-sm btn-outline-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Show
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modal-dark">
              <div className="modal-header p-1 justify-content-center" style={{ borderBottom: "0px" }}>
                <h5 className="modal-title" id="exampleModalLabel">
                  Code
                </h5>
                {/* <button type="button" className="btn-close btn-white" data-bs-dismiss="modal" aria-label="Close"></button> */}
              </div>
              <div className="modal-body px-1 py-0">
                <SyntaxHighlighter language="cpp" style={vscDarkPlus} className="rounded">
                  {`int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int max = INT_MIN;
  for(int i = 0; i < 5; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  cout << "Max: " << max;
  return 0;
}`}
                </SyntaxHighlighter>
              </div>
              <div class="modal-footer p-1" style={{ borderTop: "0px" }}>
                <button type="button" class="btn btn-sm btn-outline-danger" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

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
