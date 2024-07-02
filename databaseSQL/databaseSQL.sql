CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    categoria VARCHAR(30) NOT NULL,
    is_completed BOOLEAN NOT NULL
);

DROP TABLE todos