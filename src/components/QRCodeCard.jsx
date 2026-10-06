import { QRCodeSVG } from "qrcode.react";

export default function QRCodeCard({ code, backgroundColor }) {
  return (
    <div className="qr-code-card" style={{ backgroundColor: backgroundColor }}>
      <QRCodeSVG value={code} level="Q" width="100%" height="100%" />
      <div className="card-text">
        <p>{code}</p>
      </div>
    </div>
  );
}
