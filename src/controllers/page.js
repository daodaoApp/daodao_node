var login = async(ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
  <form action="/daodao/login" method="get">
      <p>Name: <input name="name" value="koa"></p>
      <p>Password: <input name="password" type="password"></p>
      <p><input type="submit" value="Submit"></p>
  </form>`;
}

module.exports = {
  'GET /login': login
};