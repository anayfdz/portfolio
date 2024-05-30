module.exports = ({ env }) => ({  
    connection: {  
        client: 'mysql',  
        connection: {  
            socketPath: env('INSTANCE\_UNIX\_SOCKET'),  
            database: env('DB\_NAME'),  
            user: env('DB\_USER'),  
            password: env('DB\_PASS'),  
        }  
    },  
});