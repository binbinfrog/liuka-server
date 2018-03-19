"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
exports.typeDefs = `
    type User {
        _id: ID!
        id: Int!
        phone: String!

        unm: String
        pic: String
        sig: String

        regTime: Date
    }

    type Query {
        user(): User
    }

    type Mutation {
        createUser (
            phone: String
            email: String
        ): User
    }
`;
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const bcrypt_nodejs_1 = tslib_1.__importDefault(require("bcrypt-nodejs"));
const userSchema = new Schema({
    disabled: Boolean,
    password: String,
    uid: { type: String, index: true },
    wechat: {
        id: { type: String, index: true },
        token: String,
        name: String,
        pic: String
    },
    qq: {
        id: { type: String, index: true },
        token: String,
        name: String,
        pic: String
    },
    weibo: {
        id: { type: String, index: true },
        token: String,
        name: String,
        pic: String
    },
    facebook: {
        id: { type: String, index: true },
        token: String,
        name: String,
        pic: String,
        email: String
    },
    email: { type: String, index: true },
    phone: { type: String, index: true },
    unm: String,
    pic: String,
    sig: String,
    regTime: Number,
    pipe: String,
    tester: Boolean,
    settings: {
        country: String,
        province: String,
        city: String,
        school: String,
        education: String,
        profession: String,
        industry: String,
        org: String,
        job: String,
        intro: String,
        contact: String
    },
    note: {
        savedUserCount: { type: Number, default: 0 },
        savedCaseCount: { type: Number, default: 0 },
        savedTagCount: { type: Number, default: 0 },
        saveMeCount: { type: Number, default: 0 },
        likeMeCount: { type: Number, default: 0 }
    }
});
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password'))
        return next();
    bcrypt_nodejs_1.default.genSalt(10, function (err, salt) {
        if (err)
            return next(err);
        bcrypt_nodejs_1.default.hash(user.password, salt, function (err, hash) {
            if (err)
                return next(err);
            user.password = hash;
            next();
        });
    });
});
userSchema.methods.comparePassword = function (password, cb) {
    bcrypt_nodejs_1.default.compare(password, this.password, function (err, isMatch) {
        if (err)
            return cb(err);
        cb(null, isMatch);
    });
};
mongoose_1.default.model('User', userSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1kZWZzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dyYXBocWwtc2NoZW1hcy91c2VyL3R5cGUtZGVmcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLFFBQVEsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F1QnZCLENBQUM7QUFFRixnRUFBZ0M7QUFDaEMsTUFBTSxNQUFNLEdBQUcsa0JBQVEsQ0FBQyxNQUFNLENBQUM7QUFDL0IsMEVBQW1DO0FBRW5DLE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQzdCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBa0M7SUFDbEUsTUFBTSxFQUFFO1FBQ1AsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQ2pDLEtBQUssRUFBRSxNQUFNO1FBQ2IsSUFBSSxFQUFFLE1BQU07UUFDWixHQUFHLEVBQUUsTUFBTTtLQUNYO0lBQ0QsRUFBRSxFQUFFO1FBQ0gsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQ2pDLEtBQUssRUFBRSxNQUFNO1FBQ2IsSUFBSSxFQUFFLE1BQU07UUFDWixHQUFHLEVBQUUsTUFBTTtLQUNYO0lBQ0QsS0FBSyxFQUFFO1FBQ04sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQ2pDLEtBQUssRUFBRSxNQUFNO1FBQ2IsSUFBSSxFQUFFLE1BQU07UUFDWixHQUFHLEVBQUUsTUFBTTtLQUNYO0lBQ0QsUUFBUSxFQUFFO1FBQ1QsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FB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