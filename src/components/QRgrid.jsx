import QRCodeCard from './QRCodeCard';

export default function QRgrid({ codeArray }) {

    const qrCodeElements = codeArray.map(code => <QRCodeCard key={code} code={code} />)

    return <div className="qr-grid">
        {qrCodeElements}
    </div>
}