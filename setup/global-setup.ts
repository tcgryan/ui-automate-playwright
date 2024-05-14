import { FullConfig } from "@playwright/test";
import * as mysql from 'mysql2/promise';

export default async function globalSetup(config: FullConfig) {
  console.log('hello from global setup!')

  // try {
  //   const connection = await mysql.createConnection({ 
  //     host: 'stglsnr1.tcgplayer.local',
  //     user: 'TestingWhiz',
  //     password: 'T3$t1nG',
  //     database: 'TCGStoreStaging',
  //     insecureAuth: true,

  //   });

  //   const [rows, fields] = await connection.execute(
  //     'SELECT top 10 * FROM dbo.AvailableInventory WHERE Price = 3.30'
  //   );

  //   console.log(rows);
  //   console.log(fields);
  // } catch (error) {
  //   console.error(error);
  // }
}

//  "connectionString": "Data Source= stglsnr1.tcgplayer.local;multisubnetfailover=true;Initial Catalog=TCGStoreStaging;Persist Security Info=True;User ID=TestingWhiz;Password=T3$t1nG",
