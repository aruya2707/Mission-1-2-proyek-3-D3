const allUsers = [
    { id: 1, name: 'User 1', username: 'user1', followed: false },
    { id: 2, name: 'User 2', username: 'user2', followed: false },
    { id: 3, name: 'User 3', username: 'user3', followed: false },
    { id: 4, name: 'User 4', username: 'user4', followed: false },
    { id: 5, name: 'User 5', username: 'user5', followed: false },
    { id: 6, name: 'User 6', username: 'user6', followed: false },
    { id: 7, name: 'User 7', username: 'user7', followed: false }
];

const userList = document.getElementById('user-list');
const friendList = document.getElementById('friend-list');

function renderUsers(){
    userList.innerHTML = '';
    friendList.innerHTML = '';

    allUsers.forEach(user => {
        const userItem = document.createElement('li');
        userItem.className = 'profile';

        const profilePic = document.createElement('div');
        profilePic.className = 'profile_pic';
        userItem.appendChild(profilePic);

        const profileInfo = document.createElement('div');
        profileInfo.className = 'profile_info'
        userItem.appendChild(profileInfo);

        const displayName = document.createElement('span');
        displayName.className = 'display_name';
        displayName.textContent = user.name;
        profileInfo.appendChild(displayName);

        const username = document.createElement('span');
        username.className = 'username';
        username.textContent = '@${user.username}';
        profileInfo.appendChild(username);

        const actionButton = document.createElement('button');
        actionButton.className = user.followed ? 'followed follow-button' : 'follow-button';
        actionButton.textContent = user.followed ? 'Following' : 'Follow';
        actionButton.addEventListener('click', () => toggleFollow(user));

        userItem.appendChild(actionButton);

        if(user.inFriend){
            friendList.appendChild(userItem);
        }else{
            userList.appendChild(userItem);
        }
    });
}

function toggleFollow(user){
    user.followed = !user.followed;
    user.inFriend = user.followed;
    renderUsers();
}

window.onload = renderUsers;