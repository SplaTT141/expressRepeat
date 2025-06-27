import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const services = ['UX', 'Desing', 'Development'];
    let serviceHTML = '';

    for (const service of services) {
        serviceHTML += `<li>${service}</li>`;
    }

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <h1>Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium deserunt voluptatibus obcaecati nam. Perferendis esse reiciendis, quae qui ipsam sit ipsa quam commodi, officia possimus fuga dicta reprehenderit facere quaerat veritatis ea deleniti. Doloribus unde perferendis ratione
          laboriosam atque aliquid tenetur, sequi odit, fuga ad animi rerum enim tempore obcaecati possimus sit perspiciatis nobis. Quam debitis id quos rem delectus. Quod voluptatum quas quia. Officiis nihil facilis nam totam! In ea impedit sequi, obcaecati magni eaque molestiae nisi iste quia? Tenetur
          consequuntur iste explicabo modi quod dolorem, et, corporis tempore voluptate voluptas accusamus magni. Id quasi nobis vero dolorum!
        </p>
        <ul>${serviceHTML}</ul>
      </body>
    </html>`)
});
app.get('/about', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <h1>Register page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium deserunt voluptatibus obcaecati nam. Perferendis esse reiciendis, quae qui ipsam sit ipsa quam commodi, officia possimus fuga dicta reprehenderit facere quaerat veritatis ea deleniti. Doloribus unde perferendis ratione
          laboriosam. Quam debitis id quos rem delectus. Quod voluptatum quas quia. Officiis nihil facilis nam totam! In ea impedit sequi, obcaecati magni eaque molestiae nisi iste quia? Tenetur
          consequuntur iste explicabo modi quod dolorem, et, corporis tempore voluptate voluptas accusamus magni. Id quasi nobis vero dolorum!
        </p>
      </body>
    </html>`)
});
app.get('/register', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <h1>Register page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium deserunt voluptatibus obcaecati nam. Perferendis esse reiciendis, quae qui ipsam sit ipsa quam commodi, officia possimus fuga dicta reprehenderit facere quaerat veritatis ea deleniti. Doloribus unde perferendis ratione
          laboriosam. Quam debitis id quos rem delectus. Quod voluptatum quas quia. Officiis nihil facilis nam totam! In ea impedit sequi, obcaecati magni eaque molestiae nisi iste quia? Tenetur
          consequuntur iste explicabo modi quod dolorem, et, corporis tempore voluptate voluptas accusamus magni. Id quasi nobis vero dolorum!
        </p>
      </body>
    </html>`)
});
app.get('/*error', (req, res) => { res.send('404') });

app.listen(port, () => {
    console.log(`Serverio nuoroda: http://localhost:${port}`);
});
