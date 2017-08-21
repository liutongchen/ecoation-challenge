export const apiHost = process.env["NODE_ENV"] === "production"
    ? "https://incrementmyinteger.herokuapp.com"
    : 'http://localhost:3000';