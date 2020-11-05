exports.up = async (sql) => {
  await sql`
CREATE TABLE IF NOT EXISTS shoes (
id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
name varchar(50) NOT NULL,
price integer,
image varchar,
alttext varchar,
info text);
`;
};

// My pre-configured "undo" function
exports.down = async (sql) => {
  await sql`
    DROP TABLE IF EXISTS shoes;
	`;
};
