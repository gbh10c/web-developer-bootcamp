const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MONGO CONNECTION OPEN');
  })
  .catch(err => {
    console.log('OH NO, MONGO CONNECTION ERROR')
  })


const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id: { id: false },
      street: String,
      city: String,
      state: String,
      country: String,
    }
  ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
  const u = new User({
    first: 'Harry',
    last: 'Potter',
  })
  u.addresses.push({
    street: '123 Sesame Street',
    city: 'New York',
    state: 'NY',
    country: 'USA',
  })
  const res = await u.save();
  console.log(res);
}

const addAddress = async(id) => {
  const user = await User.findById(id);
  user.addresses.push(
    {
    street: '99 3rd St.',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    }
  )
  const res = await user.save()
  console.log(res);
}

addAddress('623a8f30c8e4eda6fd30fac3')