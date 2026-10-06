import QRCodeCard from "./QRCodeCard";

export default function QRgrid({ codeArray, settings }) {
  const { qrSize, rowGap, columnGap, flexDirection, title, backgroundColor } =
    settings;
  const qrCodeElements = codeArray.map((code, index) => (
    <QRCodeCard
      key={`${code}-${index}`}
      code={code}
      backgroundColor={backgroundColor}
    />
  ));

  return (
    <div className="grid-wrap">
      {title && <h2>{title}</h2>}
      <div
        className="qr-grid"
        style={{
          "--qr-size": `${qrSize}mm`,
          rowGap: `${rowGap}rem`,
          columnGap: `${columnGap}rem`,
          flexDirection: flexDirection,
        }}
      >
        {qrCodeElements}
      </div>
    </div>
  );
}
