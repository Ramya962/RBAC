// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Function to add a user
function addUser() {
    const userId = document.getElementById('userId').value;
    const userName = document.getElementById('userName').value;
    const userRole = document.getElementById('userRole').value;
    const userStatus = document.getElementById('userStatus').value;

    if (userId && userName && userRole && userStatus) {
        console.log('User Added:', { id: userId, name: userName, role: userRole, status: userStatus });
        alert('User successfully added!');
        closeModal('userModal');
    } else {
        alert('Please fill out all fields.');
    }
}

// Function to add a role
function addRole() {
    const roleName = document.getElementById('roleName').value;
    const rolePermissions = document.getElementById('rolePermissions').value.split(',');

    if (roleName && rolePermissions.length > 0) {
        console.log('Role Added:', { name: roleName, permissions: rolePermissions });
        alert('Role successfully added!');
        closeModal('roleModal');
    } else {
        alert('Please fill out all fields.');
    }
}

// Function to add a permission
function addPermission() {
    const permissionName = document.getElementById('permissionName').value;
    const permissionDescription = document.getElementById('permissionDescription').value;

    if (permissionName && permissionDescription) {
        console.log('Permission Added:', { name: permissionName, description: permissionDescription });
        alert('Permission successfully added!');
        closeModal('permissionModal');
    } else {
        alert('Please fill out all fields.');
    }
}

// Event listener to close modals when clicking outside
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
// Event listener to close modals when clicking outside
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Function to switch tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove 'active' class from all tabs and hide all tab contents
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Add 'active' class to the clicked tab and show the corresponding content
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Function to show Add User Form
function showUserForm() {
    openModal('userModal');
}

// Function to show Add Role Form
function showRoleForm() {
    openModal('roleModal');
}

// Function to show Add Permission Form
function showPermissionForm() {
    openModal('permissionModal');
}

// Function to add User
function addUser() {
    const userId = document.getElementById('userId').value;
    const userName = document.getElementById('userName').value;
    const userRole = document.getElementById('userRole').value;
    const userStatus = document.getElementById('userStatus').value;

    if (userId && userName && userRole && userStatus) {
        const userTable = document.getElementById('user-list');
        const newRow = userTable.insertRow();
        newRow.innerHTML = `
            <td>${userId}</td>
            <td>${userName}</td>
            <td>${userRole}</td>
            <td>${userStatus}</td>
            <td><button style="color:red"; onclick="deleteRow(this)">Delete</button></td>
        `;
        alert('User successfully added!');
        closeModal('userModal');
    } else {
        alert('Please fill out all fields.');
    }
}

// Function to add Role
function addRole() {
    const roleName = document.getElementById('roleName').value;
    const rolePermissions = document.getElementById('rolePermissions').value.split(',');

    if (roleName && rolePermissions.length > 0) {
        const roleTable = document.getElementById('role-list');
        const newRow = roleTable.insertRow();
        newRow.innerHTML = `
            <td>${roleName}</td>
            <td>${rolePermissions.join(', ')}</td>
            <td><button onclick="deleteRow(this)">Delete</button></td>
        `;
        alert('Role successfully added!');
        closeModal('roleModal');
    } else {
        alert('Please fill out all fields.');
    }
}

// Function to add Permission
function addPermission() {
    const permissionName = document.getElementById('permissionName').value;
    const permissionDescription = document.getElementById('permissionDescription').value;

    if (permissionName && permissionDescription) {
        const permissionTable = document.getElementById('permission-list');
        const newRow = permissionTable.insertRow();
        newRow.innerHTML = `
            <td>${permissionName}</td>
            <td>${permissionDescription}</td>
            <td><button onclick="deleteRow(this)">Delete</button></td>
        `;
        alert('Permission successfully added!');
        closeModal('permissionModal');
    } else {
        alert('Please fill out all fields.');
    }
}

// Function to delete row
function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
}