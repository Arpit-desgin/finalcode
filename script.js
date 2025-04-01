function login(userType) {
    let email = document.getElementById(`${userType}-email`).value;
    let password = document.getElementById(`${userType}-password`).value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert(`Logging in as ${userType} with email: ${email}`);
}
