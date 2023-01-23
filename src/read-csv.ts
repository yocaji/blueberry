type UserInfo = {
  name: string;
  age: number;
  premiumUser: boolean;
}
const data: string = `
Alice,15,1
Bob,12,0
Carol,13,0
`;

// for版
// const users: UserInfo[] = [];
// const lines = data.split("\n");
// for (const line of lines) {
//   if (line === "") {
//     continue;
//   }
//   const [name, ageString, premiumUserString] = line.split(",");
//   const age = Number(ageString)
//   const premiumUser = premiumUserString === "1";

//   users.push({
//     name,
//     age,
//     premiumUser
//   });
// }

// map版
const users: UserInfo[] = data.split("\n")
.filter(line => line !== "")
.map(line => {
  const [name, ageString, premiumUserString] = line.split(",");
  return {
    name,
    age: Number(ageString),
    premiumUser: premiumUserString === "1"
  }
})

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
  }
}
