"use strict";

/*
|--------------------------------------------------------------------------
| RankSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Rank = use("App/Models/Rank");

class RankSeeder {
  async run() {
    const ranks_data = [
      {
        name: "Marechal",
        short_name: "Mal",
        rank_number: 1,
      },
      {
        name: "General de Exército",
        short_name: "Gen Ex",
        rank_number: 2,
      },
      {
        name: "General de Divisão",
        short_name: "Gen Div",
        rank_number: 3,
      },
      {
        name: "General de Brigada",
        short_name: "Gen Bda",
        rank_number: 4,
      },
      {
        name: "Coronel",
        short_name: "Cel",
        rank_number: 5,
      },
      {
        name: "Tenente-Coronel",
        short_name: "TC",
        rank_number: 6,
      },
      {
        name: "Major",
        short_name: "Maj",
        rank_number: 7,
      },
      {
        name: "Capitão",
        short_name: "Cap",
        rank_number: 8,
      },
      {
        name: "1º Tenente",
        short_name: "Ten",
        rank_number: 9,
      },
      {
        name: "2º Tenente",
        short_name: "Ten",
        rank_number: 10,
      },
      {
        name: "Aspirante",
        short_name: "Asp",
        rank_number: 11,
      },
      {
        name: "Subtenente",
        short_name: "ST",
        rank_number: 12,
      },
      {
        name: "1º Sargento",
        short_name: "Sgt",
        rank_number: 13,
      },
      {
        name: "2º Sargento",
        short_name: "Sgt",
        rank_number: 14,
      },
      {
        name: "3º Sargento",
        short_name: "Sgt",
        rank_number: 15,
      },
      {
        name: "Cabo",
        short_name: "Cb",
        rank_number: 16,
      },
      {
        name: "Soldado",
        short_name: "Sd",
        rank_number: 17,
      },
    ];

    await Rank.createMany(ranks_data);
  }
}

module.exports = RankSeeder;
