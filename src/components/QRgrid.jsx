import QRCodeCard from "./QRCodeCard";

export default function QRgrid({ codeArray, qrSize, title }) {
  const gap = qrSize === 40 ? "1rem 3rem" : 0; // 35mm qr codes require a different print layout
  const qrCodeElements = codeArray.map((code, index) => (
    <QRCodeCard key={`${code}-${index}`} code={code} />
  ));

  return (
    <div className="grid-wrap">
      {title && <h2>{title}</h2>}
      <div
        className="qr-grid"
        style={{
          "--qr-size": `${qrSize}mm`,
          gap: gap,
        }}
      >
        {qrCodeElements}
      </div>
    </div>
  );
}
