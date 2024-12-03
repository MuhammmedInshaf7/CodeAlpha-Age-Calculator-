function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const resultDiv = document.getElementById('result');

    if (!dobInput) {
        resultDiv.innerHTML = "<p style='color: red;'>Please select a valid date of birth.</p>";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    resultDiv.innerHTML = `
        <p>
            You are <strong>${ageYears}</strong> years, <strong>${ageMonths}</strong> months, 
            and <strong>${ageDays}</strong> days old.
        </p>`;
}
