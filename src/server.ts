import dotenv from 'dotenv-safe';
import app from '@src/app';

dotenv.config({
  allowEmptyValues: true,
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port} ...`);
  console.log(process.env.DATABASE_LOCAL);
});
