const { MongoClient } = require("mongodb")
// const mongoose = require("mongoose");
// import MongoClient from "mongodb"
// import mongodb from "mongodb"

// async function test() {
//   await mongoose.connect('mongodb+srv://the-byte-site:aVSg43npkZzQtrj@byte-site-cluster.fgeu8pl.mongodb.net/?retryWrites=true&w=majority')
//   const Recipe = mongoose.model('Recipe', mongoose.Schema({
//     title: String,
//     subTitle: String,
//     tags: Array,
//     ingredients: Array,
//     instructions: String,
//     picture: String
//   }));
//   const recipes = Recipe.find()
//   await recipes.forEach(console.dir)
//   console.log(recipes)
// }

exports.get_recipes = async () => {
  const uri = 'mongodb+srv://the-byte-site:aVSg43npkZzQtrj@byte-site-cluster.fgeu8pl.mongodb.net/?retryWrites=true&w=majority'
  const client = new MongoClient(uri)

  try {
    // connect
    const collections = ['recipe-collection'] // all collections to be used in database
    const recipes = []
    await client.connect();
    const db = client.db("recipes")

    // go through each collection
    for (const collection of collections) {
      const coll = db.collection(collection)
      let cursor = await coll.find().toArray()
      for (const recipe of cursor) {
        recipes.push({
          title: recipe.title,
          subTitle: recipe.subTitle,
          tags: recipe.tags,
          ingredients: recipe.ingredients,
          instructions: recipe.instructions,
          picture: recipe.picture
        })
      }
    }

    // return array of recipes
    await client.close()
    // console.log(recipes)
    return recipes
  }
  catch (e) {
    console.error(e)
    await client.close()
  }
}

test().catch(e => {console.log(e)}) // for testing
