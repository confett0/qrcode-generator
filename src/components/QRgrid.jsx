import QRCodeCard from './QRCodeCard';

export default function QRgrid({ codeArray }) {

    const qrCodeElements = codeArray.map((code, index) => <QRCodeCard key={`${code}-${index}`} code={code} />)

    return <div className="qr-grid" style={{ '--qr-size': `45mm` }}>
        {qrCodeElements}
    </div>
}