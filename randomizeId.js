module.exports.randomizeId =  function (context, events, done) {
  context.vars.ID = rng();
  return done();
};

function rng () {
  return Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
};