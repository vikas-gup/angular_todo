# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

todo1 = TodoTask.where({ title: 'Market', description: "Buy Vegetables and chocolates", status: "working" }).first_or_create
todo2 = TodoTask.where({ title: 'Hello', description: "HI I AM fine", status: "working" }).first_or_create
