"use strict";

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Role = use("App/Models/Role");

class RoleSeeder {
  async run() {
    const roles_data = [
      {
        title: "Administrador",
        description:
          "Gerenciador do sistema. Possui acesso a todos os recursos.",
      },
      {
        title: "Fiscal Administrativo",
        description: "Perfil habilitado para consultar todos os dados.",
      },
      {
        title: "Comandante de Companhia",
        description:
          "Perfil habilitado para consultar todos os dados de sua companhia.",
      },
      {
        title: "Aprovisionador",
        description:
          "Perfil habilitado para consultar dados de arranchamentos.",
      },
      {
        title: "Furriel",
        description:
          "Perfil habilitado para arranchar militares de sua companhia.",
      },
    ];

    await Role.createMany(roles_data);
  }
}

module.exports = RoleSeeder;
