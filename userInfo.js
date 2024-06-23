// userInfo.js

function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((originalName, index) => ({
        originalName: originalName,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example usage:
// const originalNames = ["Ali", "Charleston", "Kwesi"];
// const modifiedNames = ["ALi", "charles", "kwesi"];
// console.log(createUserProfiles(originalNames, modifiedNames));
// Output: [
//   { originalName: "Ali", modifiedName: "ALI", id: 1 },
//   { originalName: "Charleston", modifiedName: "charles", id: 2 },
//   { originalName: "Ali", modifiedName: "ALI", id: 3 }
// ]
