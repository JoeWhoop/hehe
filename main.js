document.addEventListener('DOMContentLoaded', function () {
    const stationSelect = document.getElementById('station');
    const repairTypeDiv = document.getElementById('repair-type');
    const qrScannerDiv = document.getElementById('qr-scanner');
    const formFields = document.querySelectorAll('.form-group'); // Get all form groups
    const nameField = document.getElementById('question1');
    const ageField = document.getElementById('question2');
    const genderField = document.getElementById('question3');

    // Listen for changes in the station selection
    stationSelect.addEventListener('change', function () {
        const selectedStation = stationSelect.value;

        // Show or hide the repair type dropdown based on the selected station
        if (selectedStation === 'QC 1') {
            repairTypeDiv.style.display = 'block';  // Show the repair type dropdown
            qrScannerDiv.style.display = 'block';  // Show QR scanner
            nameField.closest('.form-group').style.display = 'none'; // Hide Name field
            ageField.closest('.form-group').style.display = 'none';  // Hide Age field
            genderField.closest('.form-group').style.display = 'none';  // Hide Gender field
        } else {
            repairTypeDiv.style.display = 'none';  // Hide repair type dropdown
            qrScannerDiv.style.display = 'none';  // Hide QR scanner
            nameField.closest('.form-group').style.display = 'block'; // Show Name field
            ageField.closest('.form-group').style.display = 'block';  // Show Age field
            genderField.closest('.form-group').style.display = 'block';  // Show Gender field
        }
    });
});
