<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Repair Station Form</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://unpkg.com/html5-qrcode/minified/html5-qrcode.min.js"></script>
</head>
<body>
    <div class="form-container">
        <h1 class="form-title">Select Your Repair Station</h1>

        <form id="repair-form" action="#" method="POST">
            <!-- Station Selection -->
            <div class="form-group">
                <label for="station">Select the Repair Station:</label>
                <select id="station" name="station" required>
                    <option value="">Select a station</option>
                    <option value="QC 1">QC 1</option>
                    <option value="NAPRAWA">NAPRAWA</option>
                    <option value="QC 2">QC 2</option>
                </select>
            </div>

            <!-- QR Code Scanner (Initially hidden) -->
            <div class="form-group" id="qr-scanner" style="display: none;">
                <label for="qr-code">Scan the QR Code:</label>
                <div id="reader" style="width: 100%; height: 200px;"></div>
                <p id="qr-code"></p> <!-- Display the QR Code content here -->
            </div>

            <!-- Repair Type Selection (Initially hidden) -->
            <div class="form-group" id="repair-type" style="display: none;">
                <label>Jaka naprawa?</label>
                <select id="repair" name="repair" required>
                    <option value="">Select Repair Type</option>
                    <option value="ciezka">Ciezka</option>
                    <option value="lekka">Lekka</option>
                    <option value="dobra">Dobra</option>
                </select>
            </div>

            <!-- User's Name -->
            <div class="form-group">
                <label for="question1">What is your name?</label>
                <input type="text" id="question1" name="question1" required>
            </div>

            <!-- User's Age -->
            <div class="form-group">
                <label for="question2">What is your age?</label>
                <input type="number" id="question2" name="question2" required>
            </div>

            <!-- Question 3 -->
            <div class="form-group">
                <label for="question3">What is your gender?</label>
                <select id="question3" name="question3" required>
                    <option value="">Select an option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="submit-btn">Submit</button>
        </form>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const stationSelect = document.getElementById('station');
            const repairTypeDiv = document.getElementById('repair-type');

            // Listen for changes in the station selection
            stationSelect.addEventListener('change', function () {
                const selectedStation = stationSelect.value;

                // Show or hide the repair type dropdown based on the selected station
                if (selectedStation === 'QC 1') {
                    repairTypeDiv.style.display = 'block';  // Show the repair type dropdown
                } else {
                    repairTypeDiv.style.display = 'none';   // Hide the repair type dropdown
                }
            });
        });
    </script>
</body>
</html>
