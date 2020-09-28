"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments();
      table.string("name");
      table.string("email");
      table.string("password");
      table.date("data_praca");
      table.date("birth_date");
      table
        .integer("rank_id")
        .unsigned()
        .references("id")
        .inTable("ranks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("companies")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("role_id")
        .unsigned()
        .references("id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
