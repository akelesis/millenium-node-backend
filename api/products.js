const axios = require('axios')
module.exports = app => {
    
    const get = async(req, res) => {
        const credentials = req.headers

        try {
            const products = await axios.get('https://app.vendaerp.com.br/api/request/produtos/getall', {
                headers: {
                    user: credentials.user,
                    app: credentials.app,
                    'authorization-token': credentials['authorization-token']
                }
            })
                .then(res => res.data)
            if(products) {
                res.status(200).json(products)
            }
        }
        catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
    return {get}
}
