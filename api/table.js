const axios = require('axios')
module.exports = app => {
    
    const post = async(req, res) => {
        const credentials = req.headers
        const billData = req.body

        console.log(billData)

        try {
            const bill = await axios.post('https://app.vendaerp.com.br/api/request/pedidos/salvar', billData, {
                headers: {
                    user: credentials.user,
                    app: credentials.app,
                    'authorization-token': credentials['authorization-token']
                }
            })
                .then(res => res.data)
            console.log(bill)
            res.status(200).json(bill)
        }
        catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
    return {post}
}
