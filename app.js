// import express from 'express';

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// export default app;

// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const app = express();
// const port = process.env.PORT || 3000;

// // Required to use __dirname in ES module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Serve static files (like index.html)
// app.use(express.static(path.join(__dirname, 'public')));

// // Default route (optional, as index.html will be served)
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// export default app;

// app.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve index.html
app.use(express.static(path.join(__dirname, 'public')));

// Optionally add API routes here
// app.get('/api/hello', (req, res) => res.json({ msg: "Hello API" }));

export default app;
