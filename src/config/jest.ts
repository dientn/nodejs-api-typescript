import * as dotenv from "dotenv";

const fs = require('fs')
const envConfig = dotenv.parse(fs.readFileSync('.env.test'));

for (const k in envConfig) {
	process.env[k] = envConfig[k]
}


// afterAll(() => {
// 	setTimeout(() => process.exit(), 1000)
// 	// process.exit();
// });
