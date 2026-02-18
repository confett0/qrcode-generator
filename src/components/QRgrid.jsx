import QRCodeCard from "./QRCodeCard";

export default function QRgrid({ codeArray, qrSize }) {
  const printWidth = 210; // mm
  const printMargin = 10;
  // calculate number of columns for screen preview
  const columnNum = Math.floor((printWidth - printMargin * 2) / qrSize);
  const qrCodeElements = codeArray.map((code, index) => (
    <QRCodeCard key={`${code}-${index}`} code={code} />
  ));

  return (
    <div
      className="qr-grid"
      style={{ "--qr-size": `${qrSize}mm`, "--column-num": `${columnNum}` }}
    >
      {qrCodeElements}
    </div>
  );
}
