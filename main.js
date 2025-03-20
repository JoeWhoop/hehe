document.addEventListener('DOMContentLoaded', function () {
    const stationSelect = document.getElementById('station');
    const repairTypeDiv = document.getElementById('repair-type');
    const qrScannerDiv = document.getElementById('qr-scanner');
    const formFields = document.querySelectorAll('.form-group'); // Get all form groups
    const nameField = document.getElementById('question1');
    const ageField = document.getElementById('question2');
    const genderField = document.getElementById('question3');

    const qrCodeElement = document.getElementById('reader'); // QR scanner element
    let qrCodeScanner; // To store the QR scanner instance

    // Initialize the QR code scanner function
    function startQRCodeScanner() {
        qrCodeScanner = new Html5Qrcode("reader");
        qrCodeScanner.start(
            { facingMode: "environment" }, // Facing mode: environment for the back camera
            {
                fps: 10,  // Frames per second (scan rate)
                qrbox: { width: 250, height: 250 }, // Size of the scanning box
            },
            (decodedText, decodedResult) => {
                document.getElementById('qr-code').innerText = `QR Code Detected: ${decodedText}`;
            },
            (errorMessage) => {
                // You can handle errors here if needed
            }
        );
    }

    // Stop the QR scanner
    function stopQRCodeScanner() {
        if (qrCodeScanner) {
            qrCodeScanner.stop().then(() => {
                console.log("QR Scanner stopped.");
            }).catch((err) => {
                console.error("Error stopping QR scanner", err);
            });
        }
    }

    // Listen for changes in the station selection
    stationSelect.addEventListener('change', function () {
        const selectedStation = stationSelect.value;

        // Show or hide the repair type dropdown based on the selected station
        if (selectedStation === 'QC 1') {
            repairTypeDiv.style.display = 'block';  // Show the repair type dropdown
            nameField.closest('.form-group').style.display = 'none'; // Hide Name field
            ageField.closest('.form-group').style.display = 'none';  // Hide Age field
            genderField.closest('.form-group').style.display = 'none';  // Hide Gender field
        } else {
            repairTypeDiv.style.display = 'none';  // Hide repair type dropdown
            nameField.closest('.form-group').style.display = 'block'; // Show Name field
            ageField.closest('.form-group').style.display = 'block';  // Show Age field
            genderField.closest('.form-group').style.display = 'block';  // Show Gender field
        }

        // Start QR code scanner for all stations
        startQRCodeScanner();
    });

    // Start the QR scanner when the page loads (optional)
    startQRCodeScanner();
});
