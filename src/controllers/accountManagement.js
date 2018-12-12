const login = async(ctx, next) => {
  ctx.response.type = 'json';
  ctx.response.body = {
    code: 0,
    data: {
      name: 'haha',
    }
  }
}

module.exports = {
  'GET /daodao/login': login
};