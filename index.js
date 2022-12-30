const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://user:1234@cluster0.s2zrjxl.mongodb.net/miapp?retryWrites=true&w=majority');

const User = mongoose.model('User', {
  username: String,
  age: Number
})

const create = async () => {
  const user = new User({ username: 'user 1', age: 22 })
  const savedUser = await user.save()
  console.log(savedUser);
}

//create();

const searchAll = async () => {
  const users = await User.find()
  console.log(users)
}

//searchAll();

const search = async () => {
  const user = await User.find({ username: 'user 1' }) // Devielve un array [ ].
  console.log(user);
}

//search()

const searchOne = async () => {
  const user = await User.findOne({ username: 'user 1' }) // If (true) Devielve un Objeto {} else Null.
  console.log(user);
}

//searchOne();

const update = async () => {
  const user = await User.findOne({ username: 'user 2' });
  user.age = 17;
  await user.save();
  console.log(user);
}

//update();

const eliminate = async () => {
  const user = await User.findOne({ username: 'user 1' });
  console.log(user);
  if (user) {
    await user.remove();
  }
}

//eliminate();