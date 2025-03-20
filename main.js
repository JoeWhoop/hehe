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
