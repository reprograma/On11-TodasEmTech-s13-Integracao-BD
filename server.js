const app = require("./src/app");
const PORT =  process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Vamos ter pipoca, sala ${PORT}`))

