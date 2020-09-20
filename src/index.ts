import "reflect-metadata";
import {createConnection, getConnectionOptions} from "typeorm";

export const connection = async(config) => {
    const connectionOptions = await getConnectionOptions();
    return await createConnection({ 
        ...config, 
        ...connectionOptions, ...{
            entities: ["./entity/**/*.ts"]
        } 
    });
}

