import { QRCodeSVG } from 'qrcode.react';

export default function QRCodeCard({ code }) {
    return (
        <div className='qr-code-card'>
            <QRCodeSVG value={code} level="Q" width={80} height={80} />
            <p>{code}</p>
        </div>
    )
}