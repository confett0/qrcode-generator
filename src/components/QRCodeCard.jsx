import { QRCodeSVG } from "qrcode.react";

export default function QRCodeCard({ code }) {
  return (
    <div className="qr-code-card">
      <QRCodeSVG value={code} level="Q" width="100%" height="100%" />
      <div className="card-text">
        <p>{code}</p>
      </div>
    </div>
  );
}
