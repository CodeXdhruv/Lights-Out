// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxR_g7kME3PLd2K_LyAkf7rda7Qa2qRp4",
    authDomain: "lumina-ce661.firebaseapp.com",
    databaseURL: "https://lumina-ce661-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "lumina-ce661",
    storageBucket: "lumina-ce661.appspot.com",
    messagingSenderId: "353421103962",
    appId: "1:353421103962:web:4f34b038b1f5556fab1963"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to convert file to base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// Function to save form data
export async function saveFormData(formData, file) {
    try {
        // Convert file to base64
        const base64Image = await fileToBase64(file);

        // Create a unique ID for the registration using timestamp
        const registrationId = Date.now().toString();

        // Save the form data with the base64 image
        const registrationData = {
            ...formData,
            paymentScreenshot: base64Image,
            timestamp: new Date().toISOString(),
            status: 'pending' // for admin approval
        };

        // Save to the database
        await set(ref(database, `registrations/${registrationId}`), registrationData);
        
        return true;
    } catch (error) {
        console.error("Error saving form data:", error);
        if (error.message.includes("permission_denied")) {
            throw new Error("Permission denied. Please make sure you have filled all required fields.");
        } else {
            throw new Error("Error submitting form. Please try again: " + error.message);
        }
    }
}
