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
const Company = use("App/Models/Company");

class CompanySeeder {
  async run() {
    const company1 = new Company();
    company1.name = "Companhia de Comando e Apoio";
    company1.short_name = "CCAp";
    await company1.save();

    const company2 = new Company();
    company2.name = "Companhia Logística de Suprimento";
    company2.short_name = "Cia Log Sup";
    await company2.save();

    const company3 = new Company();
    company3.name = "Companhia Logística de Manutenção";
    company3.short_name = "Cia Log Mnt";
    await company3.save();

    const company4 = new Company();
    company4.name = "Companhia Logística de Saúde";
    company4.short_name = "Cia Log Sau";
    await company4.save();
  }
}

module.exports = CompanySeeder;
