export const apiHost = process.env["NODE_ENV"] === "production"
    ? "https://iiaas-server.herokuapp.com"
    : 'http://localhost:3000';