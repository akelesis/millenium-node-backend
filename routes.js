module.exports = app => {

    app.route("/products")
        .get(app.api.products.get)


    app.route("/bill")
        .post(app.api.table.post)
}