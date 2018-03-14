"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const date = __importStar(require("./date"));
const user = __importStar(require("./user"));
const typeDefs = [
    date.schemaString,
    user.typeDefs
];
const resolvers = [
    date.resolver,
    user.resolvers
];
exports.schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ3JhcGhxbC1zY2hlbWFzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlEQUFvRDtBQUVwRCw2Q0FBOEI7QUFDOUIsNkNBQThCO0FBRzlCLE1BQU0sUUFBUSxHQUFHO0lBQ2IsSUFBSSxDQUFDLFlBQVk7SUFDakIsSUFBSSxDQUFDLFFBQVE7Q0FDaEIsQ0FBQztBQUdGLE1BQU0sU0FBUyxHQUFHO0lBQ2QsSUFBSSxDQUFDLFFBQVE7SUFDYixJQUFJLENBQUMsU0FBUztDQUNqQixDQUFBO0FBR1ksUUFBQSxNQUFNLEdBQUcsb0NBQW9CLENBQUM7SUFDdkMsUUFBUTtJQUNSLFNBQVM7Q0FDWixDQUFDLENBQUMifQ==