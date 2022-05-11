import  Sequelize  from "Sequelize";
import dotenv from 'dotenv';


dotenv.config() 

export const connection = new Sequelize(
    // process.env.DB_BASE,
    // process.env.DB_USER,
    // process.env.DB_PASS,
    // {
    //     host: process.env.DB_LOCAL,
    //     port: 5432,
    //     dialect: "postgres"
    // },
    // 'postgres://catalogo_livros_user:qAHH3I87YSTEk3VqAUDHb3HQmLRhcggz@dpg-c9tg4uj19n07s441pv7g-a.oregon-postgres.render.com/catalogo_livros',
    // {
    //     dialect: 'postgres',
    //     dialectOptions: {
    //         ssl: {
    //             require: true,
    //             rejectUnauthorized: false
    //         }
    //     }
    // }
    process.env.DB_URL,
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
       
    );


