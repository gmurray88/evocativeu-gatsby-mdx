const Ajv = require('ajv');
const express = require('express');
const fs = require('fs');

const ajv = new Ajv();
const app = express();
const port = 3000;

const userSchema = JSON.parse(fs.readFileSync('./schemas/user.json'));

app.use(express.json());
app.put('/:id', async (req, res) => {
  const updateData = req.body;
  const valid = ajv.validate(userSchema, updateData);
  if (!valid) {
    res.status(400).json({ errors: ajv.errors });
    return;
  }

  // const user = await User.findById(req.params.id);
  // await user.update(updateData);
  // res.send({ user });
  res.status(200).send('that was great');
});

app.listen(port, () => console.log(`JSON Schema-enabled app on port ${port}!`));
