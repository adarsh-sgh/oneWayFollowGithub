document.querySelector('#submit').addEventListener('click', onUsernameSubmit)
async function onUsernameSubmit(params) {
  const username = document.querySelector('#username').value
  const {onlyFollowers,onlyFollowing} = await oneWayFollowers(username)
document.querySelector('#result').innerHTML = "<h3>only follower</h3> <br>"+onlyFollowers.join('<br>')+ '<h3>only following</h3>' + onlyFollowing.join('<br>')
  console.log(onlyFollowers,onlyFollowing)
}