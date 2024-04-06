const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
	{   from_name: {type: String, required: true},
		from_account: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "account",
			require: true,
		},
        to_name: {type: String, required: true},
		to_account: { type: mongoose.Schema.Types.ObjectId, ref: "account", require: true },
		amount: {
			type: Number,
			required: [true, "Amount is required"],
		},
		date:{
			type:Date,
			default:Date.now()
		}
	},
	{
		timestamps: true,
	}
);

const Transaction = new mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
