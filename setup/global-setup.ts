import { FullConfig } from "@playwright/test";
import sql from 'mssql';

export default async function globalSetup(config: FullConfig) {
  console.log('hello from global setup!');
  const sqlConfig = {
    user: 'TestingWhiz',
    password: 'T3$t1nG',
    server: 'stglsnr1.tcgplayer.local',
    database: 'TCGStoreStaging',
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
  };

  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`SELECT top 10 * FROM dbo.AvailableInventory WHERE Price = 3.30`;
    console.log(result);
    // await sql.connection
  } catch (error) {

  }
}

//  "connectionString": "Data Source= qalsnr1.tcgplayer.local;multisubnetfailover=true;Initial Catalog=TCGStoreQA;Persist Security Info=True;User ID=TestingWhiz;Password=T3$t1nG",
//  "connectionString": "Data Source= stglsnr1.tcgplayer.local;multisubnetfailover=true;Initial Catalog=TCGStoreStaging;Persist Security Info=True;User ID=TestingWhiz;Password=T3$t1nG",
// 