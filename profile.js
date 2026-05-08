
if (sessionStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'sign.html'; 
} else {
    displayUserProfile();
}
function displayUserProfile() {
    const userName = sessionStorage.getItem('userName') || 'user';  
    const userEmail = sessionStorage.getItem('userEmail') || 'user@example.com';
    const userMemberSince = sessionStorage.getItem('userMemberSince') || new Date().toLocaleDateString();
    const userDetails = document.getElementById('userDetails');
    userDetails.innerHTML = `
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Member since:</strong> ${userMemberSince}</p>
    `;
}
document.getElementById('logoutBtn').addEventListener('click', function() {
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userMemberSince');
    window.location.href = 'sign.html';
});
