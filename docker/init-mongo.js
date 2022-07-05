db.createUser({
    user: 'chorus',
    pwd: 'chorus123',
    roles: [
        {
            role: 'readWrite',
            db: 'fhir_demo'
        }
    ]
})