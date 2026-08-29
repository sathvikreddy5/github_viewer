const searchBtn = document.querySelector("#searchBtn");
const usernameInput = document.querySelector("#username");
const profile = document.querySelector("#profile");

searchBtn.addEventListener("click", async () => {
  const username = usernameInput.value;

  if (username.trim() === "") {
    profile.innerHTML = "<p>Please enter a username</p>";
  }
  profile.innerHTML = "<p>Loading...!</p>";

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();

    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos`,
    );

    const reposData = await reposResponse.json();

    reposData.sort((a, b) => b.stargazers_count - a.stargazers_count);

    // const topRepos = reposData.slice(0, 5);

    const repoHtml = reposData
      .map((repo) => {
        return `
        <div class="repo">
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description"}</p>
        <p>⭐ ${repo.stargazers_count}</p>
        <p> ${repo.forks_count}</p>
        <a href="${repo.html_url}" target="_blank">
            View Repository
        </a>
        </div>`;
      })
      .join();

    console.log(data);
    console.log(reposData);

    profile.innerHTML = `
            <img src="${data.avatar_url}" width="150">
            <h2>${data.name}</h2>
            <p>@${data.login}</p>
            <p>${data.bio || "No bio available"}</p>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
            <p>Repositories: ${data.public_repos}</p>
            <h2>Repositories</h2>
            ${repoHtml}
        `;
  } catch (error) {
    profile.innerHTML = `<p>${error.message}</p>`;
  }
});
