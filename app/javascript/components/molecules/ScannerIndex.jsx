import React, { useState } from "react";
import Scanner from "./Scanner";
import BookCardResult from "../molecules/barcodeResults/BookCardResult";

const ScannerIndex = (props) => {
  const { url } = props;
  const [camera, setCamera] = useState(true);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    setResult(result);
    setCamera(!camera)
    // window.location.href = 'https://api.openbd.jp/v1/get?isbn='; + result
  };

  return (
    <section>
      {camera && <Scanner onDetected={onDetected} />}
      <div>
        {/* {result && <BookCardResult result={result} />} */}
        {result && <BookCardResult result={result} url={url} />}
      </div>
    </section>
  );
}

export default ScannerIndex;
