document.getElementById("station").addEventListener("change", function(event) {
    const selectedStation = event.target.value;

    // Hide QR Scanner and Repair Type Selection initially
    document.getElementById("qr-scanner").style.display = "none";
    document.getElementById("repair-type").style.display = "none";

    if (selectedStation === "QC 1") {
        // Show the QR scanner and repair type selection
        document.getElementById("qr-scanner").style.display = "block";
        startQRCodeScanner();
    } else {
        // If not QC 1, hide everything related to QR and repair type
        document.getElementById("qr-code").textContent = '';
    }
});

// Start the QR Code Scanner when QC 1 is selected
let qrCodeScanner;
function startQRCodeScanner() {
    const reader = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

    reader.render(onScanSuccess, onScanError);
}

// Handle QR code scanning success
function onScanSuccess(decodedText, decodedResult) {
    // Show the scanned QR code in the text
    document.getElementById("qr-code").textContent = `Scanned QR Code: ${decodedText}`;
    // Stop QR code scanning after success
    qrCodeScanner.stop().then(() => {
        // Show the repair type options after QR scan
        document.getElementById("repair-type").style.display = "block";
    }).catch((err) => {
        console.log("Error stopping the QR scanner: ", err);
    });
}

// Handle QR code scanning error
function onScanError(errorMessage) {
    // In case of error, you can show the error message or retry logic.
    console.error(`QR Code scanning error: ${errorMessage}`);
}

// Optional: Form submit handler to capture all data
document.querySelector("#repair-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const qrCode = document.getElementById("qr-code").textContent; // QR code content
    const repairType = document.getElementById("repair").value; // Repair type selection

    alert(`Form submitted! QR Code: ${qrCode}, Repair Type: ${repairType}`);
});
