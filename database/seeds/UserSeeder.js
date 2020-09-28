"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const User = use("App/Models/User");

class UserSeeder {
  async run() {
    const user = new User();
    user.fill({
      name: "Rigon",
      email: "luisemanuel.alderete@gmail.com",
      password: "1234",
      data_praca: "2019-02-15",
      birth_date: "2000-08-27",
      rank_id: 10,
      company_id: 4,
      role_id: 1,
    });

    await user.save();
  }
}

module.exports = UserSeeder;
