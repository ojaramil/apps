document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('medicalForm');
    const clearButton = document.getElementById('clearData');
    const savedMessage = document.getElementById('savedMessage');

    // Cargar datos al iniciar la app
    loadSavedData();

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores de los inputs
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const emergencyContact = document.getElementById('emergencyContact').value;
        const diagnosis = document.getElementById('diagnosis').value;
        const medication = document.getElementById('medication').value;
        const therapies = document.getElementById('therapies').value;
        const sensitivities = document.getElementById('sensitivities').value;
        const familyHistory = document.getElementById('familyHistory').value;
        const allergies = document.getElementById('allergies').value;
        const socialSkills = document.getElementById('socialSkills').value;
        const preferredCommunication = document.getElementById('preferredCommunication').value;
        const progress = document.getElementById('progress').value;
        const setbacks = document.getElementById('setbacks').value;
        const shortTermGoals = document.getElementById('shortTermGoals').value;
        const longTermGoals = document.getElementById('longTermGoals').value;
        const crisisPlan = document.getElementById('crisisPlan').value;
        const dailyRoutine = document.getElementById('dailyRoutine').value;
        const sensoryEpisodes = document.getElementById('sensoryEpisodes').value;

        // Guardar los datos en localStorage
        const medicalData = {
            name,
            dob,
            emergencyContact,
            diagnosis,
            medication,
            therapies,
            sensitivities,
            familyHistory,
            allergies,
            socialSkills,
            preferredCommunication,
            progress,
            setbacks,
            shortTermGoals,
            longTermGoals,
            crisisPlan,
            dailyRoutine,
            sensoryEpisodes
        };

        localStorage.setItem('medicalData', JSON.stringify(medicalData));

        // Mostrar mensaje de éxito
        savedMessage.classList.remove('hidden');
        setTimeout(() => savedMessage.classList.add('hidden'), 3000);
    });

    clearButton.addEventListener('click', () => {
        localStorage.removeItem('medicalData');
        form.reset();
        savedMessage.textContent = '¡Datos eliminados!';
        savedMessage.classList.remove('hidden');
        setTimeout(() => savedMessage.classList.add('hidden'), 3000);
    });

    function loadSavedData() {
        const savedData = localStorage.getItem('medicalData');
        if (savedData) {
            const medicalData = JSON.parse(savedData);

            document.getElementById('name').value = medicalData.name;
            document.getElementById('dob').value = medicalData.dob;
            document.getElementById('emergencyContact').value = medicalData.emergencyContact;
            document.getElementById('diagnosis').value = medicalData.diagnosis;
            document.getElementById('medication').value = medicalData.medication;
            document.getElementById('therapies').value = medicalData.therapies;
            document.getElementById('sensitivities').value = medicalData.sensitivities;
            document.getElementById('familyHistory').value = medicalData.familyHistory;
            document.getElementById('allergies').value = medicalData.allergies;
            document.getElementById('socialSkills').value = medicalData.socialSkills;
            document.getElementById('preferredCommunication').value = medicalData.preferredCommunication;
            document.getElementById('progress').value = medicalData.progress;
            document.getElementById('setbacks').value = medicalData.setbacks;
            document.getElementById('shortTermGoals').value = medicalData.shortTermGoals;
            document.getElementById('longTermGoals').value = medicalData.longTermGoals;
            document.getElementById('crisisPlan').value = medicalData.crisisPlan;
            document.getElementById('dailyRoutine').value = medicalData.dailyRoutine;
            document.getElementById('sensoryEpisodes').value = medicalData.sensoryEpisodes;
        }
    }
});


