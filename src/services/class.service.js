const mongoose = require("mongoose");
const tst = async () => { }
const create_class = async (_class) => {
    try {
        const _Class = await mongoose.model("Class");

    } catch (error) {
        return error;
    }
};

module.exports = {
    create_class
}