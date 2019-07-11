// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './server/data/bookr.sqlite3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './server/data/migrations',
			tableName: 'dbMigrations'
		},
		seeds: {
			directory: './server/data/seeds'
		}
	}
};
