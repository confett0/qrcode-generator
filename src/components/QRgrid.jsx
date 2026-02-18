import QRCodeCard from "./QRCodeCard";

export default function QRgrid({ codeArray, qrSize }) {
  const printWidth = 210; // mm
  const printMargin = 10;
  // calculate number of columns for screen preview
  const columnNum =
    qrSize === 40 ? 3 : Math.floor((printWidth - printMargin * 2) / qrSize);
  const gap = qrSize === 40 ? "1.5rem 3rem" : 0; // 35mm qr codes require a different print layout
  const qrCodeElements = codeArray.map((code, index) => (
    <QRCodeCard key={`${code}-${index}`} code={code} />
  ));

  return (
    <div
      className="qr-grid"
      style={{
        "--qr-size": `${qrSize}mm`,
        "--column-num": columnNum,
        gap: gap,
      }}
    >
      {qrCodeElements}
    </div>
  );
}
