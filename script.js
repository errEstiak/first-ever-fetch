const pImg = document.querySelector('#profileImg')
  const uName = document.querySelector('#uName')
  const uFollowers = document.querySelector('#follower')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText)
      pImg.src = data.avatar_url
      uName.innerHTML = `<h2> <b> ${data.name} </b> </h2>`
      uFollowers.innerHTML = `<p>Followers: ${data.followers}</p>`
    //   console.log(data);
    }
  }
  xhr.send()