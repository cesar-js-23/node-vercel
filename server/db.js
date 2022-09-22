import { createPool } from "mysql2/promise";

export const pool = createPool({
  database: "taskdb",
  user: "yv3d35rvs9q09j2xmtwj",
  host: "us-east.connect.psdb.cloud",
  // password: "pscale_pw_KHrBsYAaX3nzRMfqTFBCw09N4WECVliQ3VHqLdppaZ",
  password: "pscale_pw_Knezpg4Vcs7ORsgXW9A81gf49uhYjqZ9ozQrzCu5Bw4",
  ssl: {
    rejectUnauthorized: true,
  },
  // sslMode: "VERIFY_IDENTITY",
});
//pscale_pw_KHrBsYAaX3nzRMfqTFBCw09N4WECVliQ3VHqLdppaZ
// user: "root",
// password: "123456789",
// host: "localhost",
// //   port: 5432,
// port: 3306,
// database: "taskdb",

// database: "taskdb",
// user: "yv3d35rvs9q09j2xmtwj",
// host: "us-east.connect.psdb.cloud",
// password: "pscale_pw_Knezpg4Vcs7ORsgXW9A81gf49uhYjqZ9ozQrzCu5Bw4",
// ssl: {
//   rejectUnauthorized: true,
// },
