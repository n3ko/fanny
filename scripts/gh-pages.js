const ghpages = require('gh-pages')

ghpages.publish(
	'public',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/n3ko/fanny.git',
		user: {
			name: 'n3ko',
			email: 'n3ko.74@gmail.com',
		},
	},
	() => {
		console.log('Deploy Complete!')
	}
)
