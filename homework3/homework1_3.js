const  axios = require("axios") ;

const getData = async () => {
    const response = await axios.get("https://dev.codekit.co/devcamp-api/friends.txt");
    const allFriends = response.data;
    //let friends = allFriends.filter((gender) => gender.gender == "male").filter((friend) => friend.friends.length >= 2)
    let friends = allFriends.filter(
        (gender) => gender.gender == "male"
    )
    .filter(
        (friend) => friend.friends.length >= 2
    )

    /*.filter((fill) => fill.hasOwnProperty("name")
    .filter((fill) => fill.hasOwnProperty("gender")
    .filter((fill) => fill.hasOwnProperty("company")
    .filter((fill) => fill.hasOwnProperty("email")
    .filter((fill) => fill.hasOwnProperty("friends")
    .filter((fill) => fill.hasOwnProperty("balance")*/

    console.log(friends)
}
getData();