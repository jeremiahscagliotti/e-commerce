//
const mongoose = require('mongoose');
//

var ProductSchema = new mongoose.Schema({
    list_number: {},
    name: { type: String, required: [true, "Products must contain a Name"], minlength: 3 },
    price: { type: Number, required: [true, "Missing price"] },
    image: { type: String, required: [true, "Missing img"] }
},
    { timestamps: true }
);

mongoose.model('Product', ProductSchema);

module.exports = mongoose.model('Product');