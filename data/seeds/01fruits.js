/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fruits').truncate()
  await knex('fruits').insert([
    {name: 'apple', color: 'red', delicious: true, sweet: true, avgWeightOz: 10 },
    {name: 'orange', color: 'orange', delicious: false, sweet: true, avgWeightOz:15},
    {name: 'pomegranate', color: 'burgundy', delicious: true, sweet: true, avgWeightOz:18}
  ]);
};
