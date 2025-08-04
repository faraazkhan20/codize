import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

function Arrays() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h4 className="text-center">Arrays</h4>
        <h6>What is array?</h6>
        <p className="justify-text">
          <code>C++</code> में <code>array</code> एक डेटा स्ट्रक्चर है जो एक ही प्रकार के डेटा को लगातार (contiguous) memory में स्टोर करता है। Indexing 0 से शुरू होती है। C++ में arrays की indexing 0 से शुरू होती है क्योंकि यह memory address calculation को सरल बनाती है। जब कोई array बनता है, तो उसका पहला element उस memory location पर होता है जो array का base address कहलाता है। यदि indexing 0 से शुरू हो, तो पहले element का address base + 0 * size होता है, यानी वही base address। इससे compiler को offset कैलकुलेट करने में कोई extra computation नहीं करनी पड़ती। अगर indexing 1 से होती, तो हर access के लिए base + (index - 1) * size करना पड़ता, जिससे processing में अतिरिक्त समय लगता। यही कारण है कि अधिकतर भाषाओं, जैसे C, C++, Java आदि में arrays को 0-based रखा गया है। Array के elements contiguous memory locations में इसलिए store होते हैं ताकि data access तेज़ और efficient हो सके। जब किसी array को declare किया जाता है, तो compiler उसे एक continuous memory block allocate करता है। इससे हर element का address
          आसानी से calculate किया जा सकता है, जैसे: base_address + index * size_of_datatype। यह predictable addressing CPU cache के साथ बेहतर काम करता है और traversal को fast बनाता है। साथ ही, sequential access (जैसे loops) में performance बेहतर मिलती है क्योंकि processor prefetching आसानी से कर पाता है। यही वजह है कि arrays को contiguous memory में store किया जाता है।
        </p>
      </div>
    </>
  );
}

export default Arrays;
