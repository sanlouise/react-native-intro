var api = {

	getBio(username){
		username = username.toLowercase().trim();
		var url =`https://api.github.com/users/$(username)`
		return fetch(url).then((res) => res.json());
	},

	getRepos(username){
		username = username.toLowercase().trim();
		var url =`https://api.github.com/users/$(username)/repos`
		return fetch(url).then((res) => res.json());
	}
};

module.exports = api;
