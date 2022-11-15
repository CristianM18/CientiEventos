const mongoose = require("mongoose"); // importando el componente mogoose
const eventoSchema = mongoose.Schema({
    Titulo  : {
        type: String,
        required: true
    },
    Descripcion: {
        type: String,
        required: true
    },
    Referencias: {
        type: String,
        required: false
    },
    Conclusiones: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('evento', eventoSchema);