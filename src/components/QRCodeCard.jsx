import { QRCodeSVG } from 'qrcode.react';

export default function QRCodeCard({ code }) {
    return (
        <div className='qr-code-card'>
            <QRCodeSVG key={code} value={code} level="Q"
                size={300} />
            <p>{code}</p>
        </div>
    )
}