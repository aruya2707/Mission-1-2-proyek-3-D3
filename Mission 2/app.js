const allUsers = [
    { id: 1, name: 'User 1', username: 'user1', followed: false, profilePictures: 'https://i.pinimg.com/1200x/70/53/d7/7053d7d1eacfbd908c41d38e02f31866.jpg' },
    { id: 2, name: 'User 2', username: 'user2', followed: false, profilePictures: 'https://i.pinimg.com/1200x/70/53/d7/7053d7d1eacfbd908c41d38e02f31866.jpg' },
    { id: 3, name: 'User 3', username: 'user3', followed: false, profilePictures: 'https://i.pinimg.com/1200x/70/53/d7/7053d7d1eacfbd908c41d38e02f31866.jpg' },
    { id: 4, name: 'User 4', username: 'user4', followed: false, profilePictures: 'https://i.pinimg.com/1200x/70/53/d7/7053d7d1eacfbd908c41d38e02f31866.jpg' },
    { id: 5, name: 'User 5', username: 'user5', followed: false, profilePictures: 'https://i.pinimg.com/1200x/70/53/d7/7053d7d1eacfbd908c41d38e02f31866.jpg' },
    { id: 6, name: 'User 6', username: 'user6', followed: false, profilePictures: 'https://i.pinimg.com/1200x/70/53/d7/7053d7d1eacfbd908c41d38e02f31866.jpg' },
    { id: 7, name: 'User 7', username: 'user7', followed: false, profilePictures: 'https://i.pinimg.com/1200x/70/53/d7/7053d7d1eacfbd908c41d38e02f31866.jpg' }
];

const userList = document.getElementById('user-list');
const friendList = document.getElementById('friend-list');

function renderUsers(){
    userList.innerHTML = '';
    friendList.innerHTML = '';

    let totalFriends = 0;

    allUsers.forEach(user => {
        const userItem = document.createElement('li');
        userItem.className = 'profile';

        const profilePic = document.createElement('div');
        profilePic.className = 'profile_pic';
        userItem.appendChild(profilePic);

        const profileImg = document.createElement('img');
        profileImg.src = user.profilePictures;
        profileImg.alt = `${user.name}'s Profile Pictures`;
        profilePic.appendChild(profileImg);

        const profileInfo = document.createElement('div');
        profileInfo.className = 'profile_info'
        userItem.appendChild(profileInfo);

        const displayName = document.createElement('span');
        displayName.className = 'display_name';
        displayName.textContent = user.name;
        profileInfo.appendChild(displayName);

        const username = document.createElement('span');
        username.className = 'username';
        username.textContent = `@${user.username}`;
        profileInfo.appendChild(username);

        const actionButton = document.createElement('button');
        actionButton.className = user.followed ? 'followed follow-button' : 'follow-button';
        actionButton.textContent = user.followed ? 'Unfollow' : 'Follow';
        actionButton.addEventListener('click', () => toggleFollow(user));

        userItem.appendChild(actionButton);

        if(user.inFriend){
            friendList.appendChild(userItem);
            totalFriends++;
        }else{
            userList.appendChild(userItem);
        }
    });

    const friendCountElement = document.getElementById('friend-count');
    friendCountElement.textContent = totalFriends;
}

function toggleFollow(user){
    user.followed = !user.followed;
    user.inFriend = user.followed;
    renderUsers();
}

window.onload = renderUsers;