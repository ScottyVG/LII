'use strict';

exports.seed = (knex) => {
  return knex(`users`).del().then(() => {
    return knex(`users`)
    .insert([
      {
        name: `Patricia Alvarez`,
        hash_pw: `$2a$12$TynpA7BX5W1K0WZ3xDwc3eg7IGEX9y6GyE9dTEJscFvzqJ6lOMxN6`,
        email: `palvarez0@mozilla.org`,
      },
      {
        name: `Kathleen Wilson`,
        hash_pw: `$2a$12$TynpA7BX5W1K0WZ3xDwc3eg7IGEX9y6GyE9dTEJscFvzqJ6lOMxN6`,
        email: `kwilson1@columbia.edu`,
      },
      {
        name: `Diane Woods`,
        hash_pw: `$2a$12$TynpA7BX5W1K0WZ3xDwc3eg7IGEX9y6GyE9dTEJscFvzqJ6lOMxN6`,
        email: `dwoods2@xinhuanet.com`,
      },
      {
        name: `Debra Harvey`,
        hash_pw: `$2a$12$TynpA7BX5W1K0WZ3xDwc3eg7IGEX9y6GyE9dTEJscFvzqJ6lOMxN6`,
        email: `email4@domain.com`,
      },
      {
        name: `Gerald Chavez`,
        hash_pw: `$2a$12$TynpA7BX5W1K0WZ3xDwc3eg7IGEX9y6GyE9dTEJscFvzqJ6lOMxN6`,
        email: `gchavez4@time.com`,
      },
    ]);
  });
};