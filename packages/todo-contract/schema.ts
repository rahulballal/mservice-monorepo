// tslint:disable
// graphql typescript definitions

declare namespace GqlTodo {
interface IGraphQLResponseRoot {
data?: IQuery;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
todos: Array<ITodo | null>;
todo: ITodo | null;
}

interface ITodoOnQueryArguments {
id: number;
}

interface ITodo {
__typename: "Todo";
id: number;
userId: number;
importance: TodoImportanceLevel;
message: string;
completed: boolean;
}

const enum TodoImportanceLevel {
LOW = 'LOW',
HIGH = 'HIGH',
MEDIUM = 'MEDIUM',
CRITICAL = 'CRITICAL'
}
}

// tslint:enable
