"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RankSchema extends Schema {
  up() {
    this.create("ranks", (table) => {
      table.increments();
      table.string("name");
      table.string("short_name");
      table.integer("rank_number");
      table.timestamps();
    });
  }

  down() {
    this.drop("ranks");
  }
}

module.exports = RankSchema;
