function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false;
    }
    return arr1.every((item) => {return arr1 [item] === arr2 [item]});
}

function getUsersNamesInAgeRange(users, gender) {
    const genderFilter = users.filter(user => user.gender === gender);
    if (genderFilter.length === 0) {
        return 0;
    }
    const ageUsers = genderFilter.map(user => user.age);
    const avarageAge = (ageUsers.reduce((acc, age) => (acc + age)))/ageUsers.length;
    return avarageAge;
}
