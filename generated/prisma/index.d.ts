
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model RecipeImage
 * 
 */
export type RecipeImage = $Result.DefaultSelection<Prisma.$RecipeImagePayload>
/**
 * Model RecipeComponent
 * 
 */
export type RecipeComponent = $Result.DefaultSelection<Prisma.$RecipeComponentPayload>
/**
 * Model RecipeIngredient
 * 
 */
export type RecipeIngredient = $Result.DefaultSelection<Prisma.$RecipeIngredientPayload>
/**
 * Model RecipeInstruction
 * 
 */
export type RecipeInstruction = $Result.DefaultSelection<Prisma.$RecipeInstructionPayload>
/**
 * Model UserPreference
 * 
 */
export type UserPreference = $Result.DefaultSelection<Prisma.$UserPreferencePayload>
/**
 * Model SharedRecipe
 * 
 */
export type SharedRecipe = $Result.DefaultSelection<Prisma.$SharedRecipePayload>
/**
 * Model MealPlan
 * 
 */
export type MealPlan = $Result.DefaultSelection<Prisma.$MealPlanPayload>
/**
 * Model MealPlanItem
 * 
 */
export type MealPlanItem = $Result.DefaultSelection<Prisma.$MealPlanItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeImage`: Exposes CRUD operations for the **RecipeImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeImages
    * const recipeImages = await prisma.recipeImage.findMany()
    * ```
    */
  get recipeImage(): Prisma.RecipeImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeComponent`: Exposes CRUD operations for the **RecipeComponent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeComponents
    * const recipeComponents = await prisma.recipeComponent.findMany()
    * ```
    */
  get recipeComponent(): Prisma.RecipeComponentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeIngredient`: Exposes CRUD operations for the **RecipeIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeIngredients
    * const recipeIngredients = await prisma.recipeIngredient.findMany()
    * ```
    */
  get recipeIngredient(): Prisma.RecipeIngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeInstruction`: Exposes CRUD operations for the **RecipeInstruction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeInstructions
    * const recipeInstructions = await prisma.recipeInstruction.findMany()
    * ```
    */
  get recipeInstruction(): Prisma.RecipeInstructionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreference`: Exposes CRUD operations for the **UserPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreference.findMany()
    * ```
    */
  get userPreference(): Prisma.UserPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sharedRecipe`: Exposes CRUD operations for the **SharedRecipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharedRecipes
    * const sharedRecipes = await prisma.sharedRecipe.findMany()
    * ```
    */
  get sharedRecipe(): Prisma.SharedRecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealPlan`: Exposes CRUD operations for the **MealPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealPlans
    * const mealPlans = await prisma.mealPlan.findMany()
    * ```
    */
  get mealPlan(): Prisma.MealPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealPlanItem`: Exposes CRUD operations for the **MealPlanItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealPlanItems
    * const mealPlanItems = await prisma.mealPlanItem.findMany()
    * ```
    */
  get mealPlanItem(): Prisma.MealPlanItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Recipe: 'Recipe',
    RecipeImage: 'RecipeImage',
    RecipeComponent: 'RecipeComponent',
    RecipeIngredient: 'RecipeIngredient',
    RecipeInstruction: 'RecipeInstruction',
    UserPreference: 'UserPreference',
    SharedRecipe: 'SharedRecipe',
    MealPlan: 'MealPlan',
    MealPlanItem: 'MealPlanItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "account" | "session" | "user" | "verificationToken" | "recipe" | "recipeImage" | "recipeComponent" | "recipeIngredient" | "recipeInstruction" | "userPreference" | "sharedRecipe" | "mealPlan" | "mealPlanItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      RecipeImage: {
        payload: Prisma.$RecipeImagePayload<ExtArgs>
        fields: Prisma.RecipeImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>
          }
          findFirst: {
            args: Prisma.RecipeImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>
          }
          findMany: {
            args: Prisma.RecipeImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>[]
          }
          create: {
            args: Prisma.RecipeImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>
          }
          createMany: {
            args: Prisma.RecipeImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>[]
          }
          delete: {
            args: Prisma.RecipeImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>
          }
          update: {
            args: Prisma.RecipeImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>
          }
          deleteMany: {
            args: Prisma.RecipeImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>[]
          }
          upsert: {
            args: Prisma.RecipeImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>
          }
          aggregate: {
            args: Prisma.RecipeImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeImage>
          }
          groupBy: {
            args: Prisma.RecipeImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeImageCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeImageCountAggregateOutputType> | number
          }
        }
      }
      RecipeComponent: {
        payload: Prisma.$RecipeComponentPayload<ExtArgs>
        fields: Prisma.RecipeComponentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeComponentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeComponentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeComponentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeComponentPayload>
          }
          findFirst: {
            args: Prisma.RecipeComponentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeComponentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeComponentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeComponentPayload>
          }
          findMany: {
            args: Prisma.RecipeComponentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeComponentPayload>[]
          }
          create: {
            args: Prisma.RecipeComponentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeComponentPayload>
          }
          createMany: {
            args: Prisma.RecipeComponentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeComponentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeComponentPayload>[]
          }
          delete: {
            args: Prisma.RecipeComponentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeComponentPayload>
          }
          update: {
            args: Prisma.RecipeComponentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeComponentPayload>
          }
          deleteMany: {
            args: Prisma.RecipeComponentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeComponentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeComponentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeComponentPayload>[]
          }
          upsert: {
            args: Prisma.RecipeComponentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeComponentPayload>
          }
          aggregate: {
            args: Prisma.RecipeComponentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeComponent>
          }
          groupBy: {
            args: Prisma.RecipeComponentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeComponentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeComponentCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeComponentCountAggregateOutputType> | number
          }
        }
      }
      RecipeIngredient: {
        payload: Prisma.$RecipeIngredientPayload<ExtArgs>
        fields: Prisma.RecipeIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          findFirst: {
            args: Prisma.RecipeIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          findMany: {
            args: Prisma.RecipeIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          create: {
            args: Prisma.RecipeIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          createMany: {
            args: Prisma.RecipeIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          delete: {
            args: Prisma.RecipeIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          update: {
            args: Prisma.RecipeIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          deleteMany: {
            args: Prisma.RecipeIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeIngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          upsert: {
            args: Prisma.RecipeIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          aggregate: {
            args: Prisma.RecipeIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeIngredient>
          }
          groupBy: {
            args: Prisma.RecipeIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeIngredientCountAggregateOutputType> | number
          }
        }
      }
      RecipeInstruction: {
        payload: Prisma.$RecipeInstructionPayload<ExtArgs>
        fields: Prisma.RecipeInstructionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeInstructionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeInstructionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeInstructionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeInstructionPayload>
          }
          findFirst: {
            args: Prisma.RecipeInstructionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeInstructionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeInstructionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeInstructionPayload>
          }
          findMany: {
            args: Prisma.RecipeInstructionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeInstructionPayload>[]
          }
          create: {
            args: Prisma.RecipeInstructionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeInstructionPayload>
          }
          createMany: {
            args: Prisma.RecipeInstructionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeInstructionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeInstructionPayload>[]
          }
          delete: {
            args: Prisma.RecipeInstructionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeInstructionPayload>
          }
          update: {
            args: Prisma.RecipeInstructionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeInstructionPayload>
          }
          deleteMany: {
            args: Prisma.RecipeInstructionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeInstructionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeInstructionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeInstructionPayload>[]
          }
          upsert: {
            args: Prisma.RecipeInstructionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeInstructionPayload>
          }
          aggregate: {
            args: Prisma.RecipeInstructionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeInstruction>
          }
          groupBy: {
            args: Prisma.RecipeInstructionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeInstructionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeInstructionCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeInstructionCountAggregateOutputType> | number
          }
        }
      }
      UserPreference: {
        payload: Prisma.$UserPreferencePayload<ExtArgs>
        fields: Prisma.UserPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findFirst: {
            args: Prisma.UserPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findMany: {
            args: Prisma.UserPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          create: {
            args: Prisma.UserPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          createMany: {
            args: Prisma.UserPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          delete: {
            args: Prisma.UserPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          update: {
            args: Prisma.UserPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          deleteMany: {
            args: Prisma.UserPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          upsert: {
            args: Prisma.UserPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          aggregate: {
            args: Prisma.UserPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreference>
          }
          groupBy: {
            args: Prisma.UserPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceCountAggregateOutputType> | number
          }
        }
      }
      SharedRecipe: {
        payload: Prisma.$SharedRecipePayload<ExtArgs>
        fields: Prisma.SharedRecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharedRecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedRecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharedRecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedRecipePayload>
          }
          findFirst: {
            args: Prisma.SharedRecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedRecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharedRecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedRecipePayload>
          }
          findMany: {
            args: Prisma.SharedRecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedRecipePayload>[]
          }
          create: {
            args: Prisma.SharedRecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedRecipePayload>
          }
          createMany: {
            args: Prisma.SharedRecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SharedRecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedRecipePayload>[]
          }
          delete: {
            args: Prisma.SharedRecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedRecipePayload>
          }
          update: {
            args: Prisma.SharedRecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedRecipePayload>
          }
          deleteMany: {
            args: Prisma.SharedRecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SharedRecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SharedRecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedRecipePayload>[]
          }
          upsert: {
            args: Prisma.SharedRecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedRecipePayload>
          }
          aggregate: {
            args: Prisma.SharedRecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSharedRecipe>
          }
          groupBy: {
            args: Prisma.SharedRecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SharedRecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SharedRecipeCountArgs<ExtArgs>
            result: $Utils.Optional<SharedRecipeCountAggregateOutputType> | number
          }
        }
      }
      MealPlan: {
        payload: Prisma.$MealPlanPayload<ExtArgs>
        fields: Prisma.MealPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          findFirst: {
            args: Prisma.MealPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          findMany: {
            args: Prisma.MealPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          create: {
            args: Prisma.MealPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          createMany: {
            args: Prisma.MealPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          delete: {
            args: Prisma.MealPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          update: {
            args: Prisma.MealPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          deleteMany: {
            args: Prisma.MealPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          upsert: {
            args: Prisma.MealPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          aggregate: {
            args: Prisma.MealPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealPlan>
          }
          groupBy: {
            args: Prisma.MealPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealPlanCountArgs<ExtArgs>
            result: $Utils.Optional<MealPlanCountAggregateOutputType> | number
          }
        }
      }
      MealPlanItem: {
        payload: Prisma.$MealPlanItemPayload<ExtArgs>
        fields: Prisma.MealPlanItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealPlanItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealPlanItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>
          }
          findFirst: {
            args: Prisma.MealPlanItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealPlanItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>
          }
          findMany: {
            args: Prisma.MealPlanItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>[]
          }
          create: {
            args: Prisma.MealPlanItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>
          }
          createMany: {
            args: Prisma.MealPlanItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealPlanItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>[]
          }
          delete: {
            args: Prisma.MealPlanItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>
          }
          update: {
            args: Prisma.MealPlanItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>
          }
          deleteMany: {
            args: Prisma.MealPlanItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealPlanItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealPlanItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>[]
          }
          upsert: {
            args: Prisma.MealPlanItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>
          }
          aggregate: {
            args: Prisma.MealPlanItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealPlanItem>
          }
          groupBy: {
            args: Prisma.MealPlanItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealPlanItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealPlanItemCountArgs<ExtArgs>
            result: $Utils.Optional<MealPlanItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    recipe?: RecipeOmit
    recipeImage?: RecipeImageOmit
    recipeComponent?: RecipeComponentOmit
    recipeIngredient?: RecipeIngredientOmit
    recipeInstruction?: RecipeInstructionOmit
    userPreference?: UserPreferenceOmit
    sharedRecipe?: SharedRecipeOmit
    mealPlan?: MealPlanOmit
    mealPlanItem?: MealPlanItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    posts: number
    recipes: number
    preferences: number
    sharedRecipes: number
    mealPlans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    recipes?: boolean | UserCountOutputTypeCountRecipesArgs
    preferences?: boolean | UserCountOutputTypeCountPreferencesArgs
    sharedRecipes?: boolean | UserCountOutputTypeCountSharedRecipesArgs
    mealPlans?: boolean | UserCountOutputTypeCountMealPlansArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferenceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedRecipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMealPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanWhereInput
  }


  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    images: number
    components: number
    sharedRecipes: number
    mealPlanItems: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | RecipeCountOutputTypeCountImagesArgs
    components?: boolean | RecipeCountOutputTypeCountComponentsArgs
    sharedRecipes?: boolean | RecipeCountOutputTypeCountSharedRecipesArgs
    mealPlanItems?: boolean | RecipeCountOutputTypeCountMealPlanItemsArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeImageWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeComponentWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountSharedRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedRecipeWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountMealPlanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanItemWhereInput
  }


  /**
   * Count Type RecipeComponentCountOutputType
   */

  export type RecipeComponentCountOutputType = {
    ingredients: number
    instructions: number
  }

  export type RecipeComponentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | RecipeComponentCountOutputTypeCountIngredientsArgs
    instructions?: boolean | RecipeComponentCountOutputTypeCountInstructionsArgs
  }

  // Custom InputTypes
  /**
   * RecipeComponentCountOutputType without action
   */
  export type RecipeComponentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeComponentCountOutputType
     */
    select?: RecipeComponentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeComponentCountOutputType without action
   */
  export type RecipeComponentCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
  }

  /**
   * RecipeComponentCountOutputType without action
   */
  export type RecipeComponentCountOutputTypeCountInstructionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeInstructionWhereInput
  }


  /**
   * Count Type MealPlanCountOutputType
   */

  export type MealPlanCountOutputType = {
    items: number
  }

  export type MealPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | MealPlanCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * MealPlanCountOutputType without action
   */
  export type MealPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanCountOutputType
     */
    select?: MealPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealPlanCountOutputType without action
   */
  export type MealPlanCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly createdById: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    recipes?: boolean | User$recipesArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    sharedRecipes?: boolean | User$sharedRecipesArgs<ExtArgs>
    mealPlans?: boolean | User$mealPlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    recipes?: boolean | User$recipesArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    sharedRecipes?: boolean | User$sharedRecipesArgs<ExtArgs>
    mealPlans?: boolean | User$mealPlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      recipes: Prisma.$RecipePayload<ExtArgs>[]
      preferences: Prisma.$UserPreferencePayload<ExtArgs>[]
      sharedRecipes: Prisma.$SharedRecipePayload<ExtArgs>[]
      mealPlans: Prisma.$MealPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipes<T extends User$recipesArgs<ExtArgs> = {}>(args?: Subset<T, User$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedRecipes<T extends User$sharedRecipesArgs<ExtArgs> = {}>(args?: Subset<T, User$sharedRecipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mealPlans<T extends User$mealPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$mealPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.recipes
   */
  export type User$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    cursor?: RecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    where?: UserPreferenceWhereInput
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    cursor?: UserPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * User.sharedRecipes
   */
  export type User$sharedRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedRecipe
     */
    select?: SharedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedRecipe
     */
    omit?: SharedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedRecipeInclude<ExtArgs> | null
    where?: SharedRecipeWhereInput
    orderBy?: SharedRecipeOrderByWithRelationInput | SharedRecipeOrderByWithRelationInput[]
    cursor?: SharedRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedRecipeScalarFieldEnum | SharedRecipeScalarFieldEnum[]
  }

  /**
   * User.mealPlans
   */
  export type User$mealPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    where?: MealPlanWhereInput
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    cursor?: MealPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    uuid: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    uuid: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type RecipeMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: string
    uuid: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: RecipeCountAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    images?: boolean | Recipe$imagesArgs<ExtArgs>
    components?: boolean | Recipe$componentsArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    sharedRecipes?: boolean | Recipe$sharedRecipesArgs<ExtArgs>
    mealPlanItems?: boolean | Recipe$mealPlanItemsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "name" | "description" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Recipe$imagesArgs<ExtArgs>
    components?: boolean | Recipe$componentsArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    sharedRecipes?: boolean | Recipe$sharedRecipesArgs<ExtArgs>
    mealPlanItems?: boolean | Recipe$mealPlanItemsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      images: Prisma.$RecipeImagePayload<ExtArgs>[]
      components: Prisma.$RecipeComponentPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs>
      sharedRecipes: Prisma.$SharedRecipePayload<ExtArgs>[]
      mealPlanItems: Prisma.$MealPlanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uuid: string
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Recipe$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    components<T extends Recipe$componentsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$componentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sharedRecipes<T extends Recipe$sharedRecipesArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$sharedRecipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mealPlanItems<T extends Recipe$mealPlanItemsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$mealPlanItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipe model
   */
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'String'>
    readonly uuid: FieldRef<"Recipe", 'String'>
    readonly name: FieldRef<"Recipe", 'String'>
    readonly description: FieldRef<"Recipe", 'String'>
    readonly createdAt: FieldRef<"Recipe", 'DateTime'>
    readonly updatedAt: FieldRef<"Recipe", 'DateTime'>
    readonly createdById: FieldRef<"Recipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.images
   */
  export type Recipe$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    where?: RecipeImageWhereInput
    orderBy?: RecipeImageOrderByWithRelationInput | RecipeImageOrderByWithRelationInput[]
    cursor?: RecipeImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeImageScalarFieldEnum | RecipeImageScalarFieldEnum[]
  }

  /**
   * Recipe.components
   */
  export type Recipe$componentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeComponent
     */
    select?: RecipeComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeComponent
     */
    omit?: RecipeComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeComponentInclude<ExtArgs> | null
    where?: RecipeComponentWhereInput
    orderBy?: RecipeComponentOrderByWithRelationInput | RecipeComponentOrderByWithRelationInput[]
    cursor?: RecipeComponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeComponentScalarFieldEnum | RecipeComponentScalarFieldEnum[]
  }

  /**
   * Recipe.sharedRecipes
   */
  export type Recipe$sharedRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedRecipe
     */
    select?: SharedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedRecipe
     */
    omit?: SharedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedRecipeInclude<ExtArgs> | null
    where?: SharedRecipeWhereInput
    orderBy?: SharedRecipeOrderByWithRelationInput | SharedRecipeOrderByWithRelationInput[]
    cursor?: SharedRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedRecipeScalarFieldEnum | SharedRecipeScalarFieldEnum[]
  }

  /**
   * Recipe.mealPlanItems
   */
  export type Recipe$mealPlanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    where?: MealPlanItemWhereInput
    orderBy?: MealPlanItemOrderByWithRelationInput | MealPlanItemOrderByWithRelationInput[]
    cursor?: MealPlanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealPlanItemScalarFieldEnum | MealPlanItemScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model RecipeImage
   */

  export type AggregateRecipeImage = {
    _count: RecipeImageCountAggregateOutputType | null
    _avg: RecipeImageAvgAggregateOutputType | null
    _sum: RecipeImageSumAggregateOutputType | null
    _min: RecipeImageMinAggregateOutputType | null
    _max: RecipeImageMaxAggregateOutputType | null
  }

  export type RecipeImageAvgAggregateOutputType = {
    timestamp: number | null
  }

  export type RecipeImageSumAggregateOutputType = {
    timestamp: bigint | null
  }

  export type RecipeImageMinAggregateOutputType = {
    id: string | null
    timestamp: bigint | null
    key: string | null
    imageData: string | null
    mimeType: string | null
    recipeId: string | null
  }

  export type RecipeImageMaxAggregateOutputType = {
    id: string | null
    timestamp: bigint | null
    key: string | null
    imageData: string | null
    mimeType: string | null
    recipeId: string | null
  }

  export type RecipeImageCountAggregateOutputType = {
    id: number
    timestamp: number
    key: number
    imageData: number
    mimeType: number
    recipeId: number
    _all: number
  }


  export type RecipeImageAvgAggregateInputType = {
    timestamp?: true
  }

  export type RecipeImageSumAggregateInputType = {
    timestamp?: true
  }

  export type RecipeImageMinAggregateInputType = {
    id?: true
    timestamp?: true
    key?: true
    imageData?: true
    mimeType?: true
    recipeId?: true
  }

  export type RecipeImageMaxAggregateInputType = {
    id?: true
    timestamp?: true
    key?: true
    imageData?: true
    mimeType?: true
    recipeId?: true
  }

  export type RecipeImageCountAggregateInputType = {
    id?: true
    timestamp?: true
    key?: true
    imageData?: true
    mimeType?: true
    recipeId?: true
    _all?: true
  }

  export type RecipeImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeImage to aggregate.
     */
    where?: RecipeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeImages to fetch.
     */
    orderBy?: RecipeImageOrderByWithRelationInput | RecipeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeImages
    **/
    _count?: true | RecipeImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeImageMaxAggregateInputType
  }

  export type GetRecipeImageAggregateType<T extends RecipeImageAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeImage[P]>
      : GetScalarType<T[P], AggregateRecipeImage[P]>
  }




  export type RecipeImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeImageWhereInput
    orderBy?: RecipeImageOrderByWithAggregationInput | RecipeImageOrderByWithAggregationInput[]
    by: RecipeImageScalarFieldEnum[] | RecipeImageScalarFieldEnum
    having?: RecipeImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeImageCountAggregateInputType | true
    _avg?: RecipeImageAvgAggregateInputType
    _sum?: RecipeImageSumAggregateInputType
    _min?: RecipeImageMinAggregateInputType
    _max?: RecipeImageMaxAggregateInputType
  }

  export type RecipeImageGroupByOutputType = {
    id: string
    timestamp: bigint
    key: string
    imageData: string
    mimeType: string
    recipeId: string
    _count: RecipeImageCountAggregateOutputType | null
    _avg: RecipeImageAvgAggregateOutputType | null
    _sum: RecipeImageSumAggregateOutputType | null
    _min: RecipeImageMinAggregateOutputType | null
    _max: RecipeImageMaxAggregateOutputType | null
  }

  type GetRecipeImageGroupByPayload<T extends RecipeImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeImageGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeImageGroupByOutputType[P]>
        }
      >
    >


  export type RecipeImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    key?: boolean
    imageData?: boolean
    mimeType?: boolean
    recipeId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeImage"]>

  export type RecipeImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    key?: boolean
    imageData?: boolean
    mimeType?: boolean
    recipeId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeImage"]>

  export type RecipeImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    key?: boolean
    imageData?: boolean
    mimeType?: boolean
    recipeId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeImage"]>

  export type RecipeImageSelectScalar = {
    id?: boolean
    timestamp?: boolean
    key?: boolean
    imageData?: boolean
    mimeType?: boolean
    recipeId?: boolean
  }

  export type RecipeImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "key" | "imageData" | "mimeType" | "recipeId", ExtArgs["result"]["recipeImage"]>
  export type RecipeImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type RecipeImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type RecipeImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $RecipeImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeImage"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: bigint
      key: string
      imageData: string
      mimeType: string
      recipeId: string
    }, ExtArgs["result"]["recipeImage"]>
    composites: {}
  }

  type RecipeImageGetPayload<S extends boolean | null | undefined | RecipeImageDefaultArgs> = $Result.GetResult<Prisma.$RecipeImagePayload, S>

  type RecipeImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeImageCountAggregateInputType | true
    }

  export interface RecipeImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeImage'], meta: { name: 'RecipeImage' } }
    /**
     * Find zero or one RecipeImage that matches the filter.
     * @param {RecipeImageFindUniqueArgs} args - Arguments to find a RecipeImage
     * @example
     * // Get one RecipeImage
     * const recipeImage = await prisma.recipeImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeImageFindUniqueArgs>(args: SelectSubset<T, RecipeImageFindUniqueArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeImageFindUniqueOrThrowArgs} args - Arguments to find a RecipeImage
     * @example
     * // Get one RecipeImage
     * const recipeImage = await prisma.recipeImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeImageFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeImageFindFirstArgs} args - Arguments to find a RecipeImage
     * @example
     * // Get one RecipeImage
     * const recipeImage = await prisma.recipeImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeImageFindFirstArgs>(args?: SelectSubset<T, RecipeImageFindFirstArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeImageFindFirstOrThrowArgs} args - Arguments to find a RecipeImage
     * @example
     * // Get one RecipeImage
     * const recipeImage = await prisma.recipeImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeImageFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeImages
     * const recipeImages = await prisma.recipeImage.findMany()
     * 
     * // Get first 10 RecipeImages
     * const recipeImages = await prisma.recipeImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeImageWithIdOnly = await prisma.recipeImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeImageFindManyArgs>(args?: SelectSubset<T, RecipeImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeImage.
     * @param {RecipeImageCreateArgs} args - Arguments to create a RecipeImage.
     * @example
     * // Create one RecipeImage
     * const RecipeImage = await prisma.recipeImage.create({
     *   data: {
     *     // ... data to create a RecipeImage
     *   }
     * })
     * 
     */
    create<T extends RecipeImageCreateArgs>(args: SelectSubset<T, RecipeImageCreateArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeImages.
     * @param {RecipeImageCreateManyArgs} args - Arguments to create many RecipeImages.
     * @example
     * // Create many RecipeImages
     * const recipeImage = await prisma.recipeImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeImageCreateManyArgs>(args?: SelectSubset<T, RecipeImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeImages and returns the data saved in the database.
     * @param {RecipeImageCreateManyAndReturnArgs} args - Arguments to create many RecipeImages.
     * @example
     * // Create many RecipeImages
     * const recipeImage = await prisma.recipeImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeImages and only return the `id`
     * const recipeImageWithIdOnly = await prisma.recipeImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeImageCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeImage.
     * @param {RecipeImageDeleteArgs} args - Arguments to delete one RecipeImage.
     * @example
     * // Delete one RecipeImage
     * const RecipeImage = await prisma.recipeImage.delete({
     *   where: {
     *     // ... filter to delete one RecipeImage
     *   }
     * })
     * 
     */
    delete<T extends RecipeImageDeleteArgs>(args: SelectSubset<T, RecipeImageDeleteArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeImage.
     * @param {RecipeImageUpdateArgs} args - Arguments to update one RecipeImage.
     * @example
     * // Update one RecipeImage
     * const recipeImage = await prisma.recipeImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeImageUpdateArgs>(args: SelectSubset<T, RecipeImageUpdateArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeImages.
     * @param {RecipeImageDeleteManyArgs} args - Arguments to filter RecipeImages to delete.
     * @example
     * // Delete a few RecipeImages
     * const { count } = await prisma.recipeImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeImageDeleteManyArgs>(args?: SelectSubset<T, RecipeImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeImages
     * const recipeImage = await prisma.recipeImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeImageUpdateManyArgs>(args: SelectSubset<T, RecipeImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeImages and returns the data updated in the database.
     * @param {RecipeImageUpdateManyAndReturnArgs} args - Arguments to update many RecipeImages.
     * @example
     * // Update many RecipeImages
     * const recipeImage = await prisma.recipeImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeImages and only return the `id`
     * const recipeImageWithIdOnly = await prisma.recipeImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeImageUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeImage.
     * @param {RecipeImageUpsertArgs} args - Arguments to update or create a RecipeImage.
     * @example
     * // Update or create a RecipeImage
     * const recipeImage = await prisma.recipeImage.upsert({
     *   create: {
     *     // ... data to create a RecipeImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeImage we want to update
     *   }
     * })
     */
    upsert<T extends RecipeImageUpsertArgs>(args: SelectSubset<T, RecipeImageUpsertArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeImageCountArgs} args - Arguments to filter RecipeImages to count.
     * @example
     * // Count the number of RecipeImages
     * const count = await prisma.recipeImage.count({
     *   where: {
     *     // ... the filter for the RecipeImages we want to count
     *   }
     * })
    **/
    count<T extends RecipeImageCountArgs>(
      args?: Subset<T, RecipeImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeImageAggregateArgs>(args: Subset<T, RecipeImageAggregateArgs>): Prisma.PrismaPromise<GetRecipeImageAggregateType<T>>

    /**
     * Group by RecipeImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeImageGroupByArgs['orderBy'] }
        : { orderBy?: RecipeImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeImage model
   */
  readonly fields: RecipeImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecipeImage model
   */
  interface RecipeImageFieldRefs {
    readonly id: FieldRef<"RecipeImage", 'String'>
    readonly timestamp: FieldRef<"RecipeImage", 'BigInt'>
    readonly key: FieldRef<"RecipeImage", 'String'>
    readonly imageData: FieldRef<"RecipeImage", 'String'>
    readonly mimeType: FieldRef<"RecipeImage", 'String'>
    readonly recipeId: FieldRef<"RecipeImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecipeImage findUnique
   */
  export type RecipeImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * Filter, which RecipeImage to fetch.
     */
    where: RecipeImageWhereUniqueInput
  }

  /**
   * RecipeImage findUniqueOrThrow
   */
  export type RecipeImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * Filter, which RecipeImage to fetch.
     */
    where: RecipeImageWhereUniqueInput
  }

  /**
   * RecipeImage findFirst
   */
  export type RecipeImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * Filter, which RecipeImage to fetch.
     */
    where?: RecipeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeImages to fetch.
     */
    orderBy?: RecipeImageOrderByWithRelationInput | RecipeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeImages.
     */
    cursor?: RecipeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeImages.
     */
    distinct?: RecipeImageScalarFieldEnum | RecipeImageScalarFieldEnum[]
  }

  /**
   * RecipeImage findFirstOrThrow
   */
  export type RecipeImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * Filter, which RecipeImage to fetch.
     */
    where?: RecipeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeImages to fetch.
     */
    orderBy?: RecipeImageOrderByWithRelationInput | RecipeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeImages.
     */
    cursor?: RecipeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeImages.
     */
    distinct?: RecipeImageScalarFieldEnum | RecipeImageScalarFieldEnum[]
  }

  /**
   * RecipeImage findMany
   */
  export type RecipeImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * Filter, which RecipeImages to fetch.
     */
    where?: RecipeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeImages to fetch.
     */
    orderBy?: RecipeImageOrderByWithRelationInput | RecipeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeImages.
     */
    cursor?: RecipeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeImages.
     */
    skip?: number
    distinct?: RecipeImageScalarFieldEnum | RecipeImageScalarFieldEnum[]
  }

  /**
   * RecipeImage create
   */
  export type RecipeImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeImage.
     */
    data: XOR<RecipeImageCreateInput, RecipeImageUncheckedCreateInput>
  }

  /**
   * RecipeImage createMany
   */
  export type RecipeImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeImages.
     */
    data: RecipeImageCreateManyInput | RecipeImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeImage createManyAndReturn
   */
  export type RecipeImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeImages.
     */
    data: RecipeImageCreateManyInput | RecipeImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeImage update
   */
  export type RecipeImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeImage.
     */
    data: XOR<RecipeImageUpdateInput, RecipeImageUncheckedUpdateInput>
    /**
     * Choose, which RecipeImage to update.
     */
    where: RecipeImageWhereUniqueInput
  }

  /**
   * RecipeImage updateMany
   */
  export type RecipeImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeImages.
     */
    data: XOR<RecipeImageUpdateManyMutationInput, RecipeImageUncheckedUpdateManyInput>
    /**
     * Filter which RecipeImages to update
     */
    where?: RecipeImageWhereInput
    /**
     * Limit how many RecipeImages to update.
     */
    limit?: number
  }

  /**
   * RecipeImage updateManyAndReturn
   */
  export type RecipeImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * The data used to update RecipeImages.
     */
    data: XOR<RecipeImageUpdateManyMutationInput, RecipeImageUncheckedUpdateManyInput>
    /**
     * Filter which RecipeImages to update
     */
    where?: RecipeImageWhereInput
    /**
     * Limit how many RecipeImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeImage upsert
   */
  export type RecipeImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeImage to update in case it exists.
     */
    where: RecipeImageWhereUniqueInput
    /**
     * In case the RecipeImage found by the `where` argument doesn't exist, create a new RecipeImage with this data.
     */
    create: XOR<RecipeImageCreateInput, RecipeImageUncheckedCreateInput>
    /**
     * In case the RecipeImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeImageUpdateInput, RecipeImageUncheckedUpdateInput>
  }

  /**
   * RecipeImage delete
   */
  export type RecipeImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * Filter which RecipeImage to delete.
     */
    where: RecipeImageWhereUniqueInput
  }

  /**
   * RecipeImage deleteMany
   */
  export type RecipeImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeImages to delete
     */
    where?: RecipeImageWhereInput
    /**
     * Limit how many RecipeImages to delete.
     */
    limit?: number
  }

  /**
   * RecipeImage without action
   */
  export type RecipeImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
  }


  /**
   * Model RecipeComponent
   */

  export type AggregateRecipeComponent = {
    _count: RecipeComponentCountAggregateOutputType | null
    _avg: RecipeComponentAvgAggregateOutputType | null
    _sum: RecipeComponentSumAggregateOutputType | null
    _min: RecipeComponentMinAggregateOutputType | null
    _max: RecipeComponentMaxAggregateOutputType | null
  }

  export type RecipeComponentAvgAggregateOutputType = {
    servings: number | null
    order: number | null
  }

  export type RecipeComponentSumAggregateOutputType = {
    servings: number | null
    order: number | null
  }

  export type RecipeComponentMinAggregateOutputType = {
    id: string | null
    uuid: string | null
    name: string | null
    storeable: boolean | null
    servings: number | null
    order: number | null
    recipeId: string | null
  }

  export type RecipeComponentMaxAggregateOutputType = {
    id: string | null
    uuid: string | null
    name: string | null
    storeable: boolean | null
    servings: number | null
    order: number | null
    recipeId: string | null
  }

  export type RecipeComponentCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    storeable: number
    servings: number
    order: number
    recipeId: number
    _all: number
  }


  export type RecipeComponentAvgAggregateInputType = {
    servings?: true
    order?: true
  }

  export type RecipeComponentSumAggregateInputType = {
    servings?: true
    order?: true
  }

  export type RecipeComponentMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    storeable?: true
    servings?: true
    order?: true
    recipeId?: true
  }

  export type RecipeComponentMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    storeable?: true
    servings?: true
    order?: true
    recipeId?: true
  }

  export type RecipeComponentCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    storeable?: true
    servings?: true
    order?: true
    recipeId?: true
    _all?: true
  }

  export type RecipeComponentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeComponent to aggregate.
     */
    where?: RecipeComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeComponents to fetch.
     */
    orderBy?: RecipeComponentOrderByWithRelationInput | RecipeComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeComponents
    **/
    _count?: true | RecipeComponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeComponentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeComponentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeComponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeComponentMaxAggregateInputType
  }

  export type GetRecipeComponentAggregateType<T extends RecipeComponentAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeComponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeComponent[P]>
      : GetScalarType<T[P], AggregateRecipeComponent[P]>
  }




  export type RecipeComponentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeComponentWhereInput
    orderBy?: RecipeComponentOrderByWithAggregationInput | RecipeComponentOrderByWithAggregationInput[]
    by: RecipeComponentScalarFieldEnum[] | RecipeComponentScalarFieldEnum
    having?: RecipeComponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeComponentCountAggregateInputType | true
    _avg?: RecipeComponentAvgAggregateInputType
    _sum?: RecipeComponentSumAggregateInputType
    _min?: RecipeComponentMinAggregateInputType
    _max?: RecipeComponentMaxAggregateInputType
  }

  export type RecipeComponentGroupByOutputType = {
    id: string
    uuid: string
    name: string
    storeable: boolean
    servings: number | null
    order: number
    recipeId: string
    _count: RecipeComponentCountAggregateOutputType | null
    _avg: RecipeComponentAvgAggregateOutputType | null
    _sum: RecipeComponentSumAggregateOutputType | null
    _min: RecipeComponentMinAggregateOutputType | null
    _max: RecipeComponentMaxAggregateOutputType | null
  }

  type GetRecipeComponentGroupByPayload<T extends RecipeComponentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeComponentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeComponentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeComponentGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeComponentGroupByOutputType[P]>
        }
      >
    >


  export type RecipeComponentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    storeable?: boolean
    servings?: boolean
    order?: boolean
    recipeId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredients?: boolean | RecipeComponent$ingredientsArgs<ExtArgs>
    instructions?: boolean | RecipeComponent$instructionsArgs<ExtArgs>
    _count?: boolean | RecipeComponentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeComponent"]>

  export type RecipeComponentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    storeable?: boolean
    servings?: boolean
    order?: boolean
    recipeId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeComponent"]>

  export type RecipeComponentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    storeable?: boolean
    servings?: boolean
    order?: boolean
    recipeId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeComponent"]>

  export type RecipeComponentSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    storeable?: boolean
    servings?: boolean
    order?: boolean
    recipeId?: boolean
  }

  export type RecipeComponentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "name" | "storeable" | "servings" | "order" | "recipeId", ExtArgs["result"]["recipeComponent"]>
  export type RecipeComponentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredients?: boolean | RecipeComponent$ingredientsArgs<ExtArgs>
    instructions?: boolean | RecipeComponent$instructionsArgs<ExtArgs>
    _count?: boolean | RecipeComponentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeComponentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type RecipeComponentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $RecipeComponentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeComponent"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      ingredients: Prisma.$RecipeIngredientPayload<ExtArgs>[]
      instructions: Prisma.$RecipeInstructionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uuid: string
      name: string
      storeable: boolean
      servings: number | null
      order: number
      recipeId: string
    }, ExtArgs["result"]["recipeComponent"]>
    composites: {}
  }

  type RecipeComponentGetPayload<S extends boolean | null | undefined | RecipeComponentDefaultArgs> = $Result.GetResult<Prisma.$RecipeComponentPayload, S>

  type RecipeComponentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeComponentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeComponentCountAggregateInputType | true
    }

  export interface RecipeComponentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeComponent'], meta: { name: 'RecipeComponent' } }
    /**
     * Find zero or one RecipeComponent that matches the filter.
     * @param {RecipeComponentFindUniqueArgs} args - Arguments to find a RecipeComponent
     * @example
     * // Get one RecipeComponent
     * const recipeComponent = await prisma.recipeComponent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeComponentFindUniqueArgs>(args: SelectSubset<T, RecipeComponentFindUniqueArgs<ExtArgs>>): Prisma__RecipeComponentClient<$Result.GetResult<Prisma.$RecipeComponentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeComponent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeComponentFindUniqueOrThrowArgs} args - Arguments to find a RecipeComponent
     * @example
     * // Get one RecipeComponent
     * const recipeComponent = await prisma.recipeComponent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeComponentFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeComponentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeComponentClient<$Result.GetResult<Prisma.$RecipeComponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeComponent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeComponentFindFirstArgs} args - Arguments to find a RecipeComponent
     * @example
     * // Get one RecipeComponent
     * const recipeComponent = await prisma.recipeComponent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeComponentFindFirstArgs>(args?: SelectSubset<T, RecipeComponentFindFirstArgs<ExtArgs>>): Prisma__RecipeComponentClient<$Result.GetResult<Prisma.$RecipeComponentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeComponent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeComponentFindFirstOrThrowArgs} args - Arguments to find a RecipeComponent
     * @example
     * // Get one RecipeComponent
     * const recipeComponent = await prisma.recipeComponent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeComponentFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeComponentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeComponentClient<$Result.GetResult<Prisma.$RecipeComponentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeComponents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeComponentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeComponents
     * const recipeComponents = await prisma.recipeComponent.findMany()
     * 
     * // Get first 10 RecipeComponents
     * const recipeComponents = await prisma.recipeComponent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeComponentWithIdOnly = await prisma.recipeComponent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeComponentFindManyArgs>(args?: SelectSubset<T, RecipeComponentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeComponent.
     * @param {RecipeComponentCreateArgs} args - Arguments to create a RecipeComponent.
     * @example
     * // Create one RecipeComponent
     * const RecipeComponent = await prisma.recipeComponent.create({
     *   data: {
     *     // ... data to create a RecipeComponent
     *   }
     * })
     * 
     */
    create<T extends RecipeComponentCreateArgs>(args: SelectSubset<T, RecipeComponentCreateArgs<ExtArgs>>): Prisma__RecipeComponentClient<$Result.GetResult<Prisma.$RecipeComponentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeComponents.
     * @param {RecipeComponentCreateManyArgs} args - Arguments to create many RecipeComponents.
     * @example
     * // Create many RecipeComponents
     * const recipeComponent = await prisma.recipeComponent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeComponentCreateManyArgs>(args?: SelectSubset<T, RecipeComponentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeComponents and returns the data saved in the database.
     * @param {RecipeComponentCreateManyAndReturnArgs} args - Arguments to create many RecipeComponents.
     * @example
     * // Create many RecipeComponents
     * const recipeComponent = await prisma.recipeComponent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeComponents and only return the `id`
     * const recipeComponentWithIdOnly = await prisma.recipeComponent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeComponentCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeComponentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeComponentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeComponent.
     * @param {RecipeComponentDeleteArgs} args - Arguments to delete one RecipeComponent.
     * @example
     * // Delete one RecipeComponent
     * const RecipeComponent = await prisma.recipeComponent.delete({
     *   where: {
     *     // ... filter to delete one RecipeComponent
     *   }
     * })
     * 
     */
    delete<T extends RecipeComponentDeleteArgs>(args: SelectSubset<T, RecipeComponentDeleteArgs<ExtArgs>>): Prisma__RecipeComponentClient<$Result.GetResult<Prisma.$RecipeComponentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeComponent.
     * @param {RecipeComponentUpdateArgs} args - Arguments to update one RecipeComponent.
     * @example
     * // Update one RecipeComponent
     * const recipeComponent = await prisma.recipeComponent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeComponentUpdateArgs>(args: SelectSubset<T, RecipeComponentUpdateArgs<ExtArgs>>): Prisma__RecipeComponentClient<$Result.GetResult<Prisma.$RecipeComponentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeComponents.
     * @param {RecipeComponentDeleteManyArgs} args - Arguments to filter RecipeComponents to delete.
     * @example
     * // Delete a few RecipeComponents
     * const { count } = await prisma.recipeComponent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeComponentDeleteManyArgs>(args?: SelectSubset<T, RecipeComponentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeComponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeComponents
     * const recipeComponent = await prisma.recipeComponent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeComponentUpdateManyArgs>(args: SelectSubset<T, RecipeComponentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeComponents and returns the data updated in the database.
     * @param {RecipeComponentUpdateManyAndReturnArgs} args - Arguments to update many RecipeComponents.
     * @example
     * // Update many RecipeComponents
     * const recipeComponent = await prisma.recipeComponent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeComponents and only return the `id`
     * const recipeComponentWithIdOnly = await prisma.recipeComponent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeComponentUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeComponentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeComponentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeComponent.
     * @param {RecipeComponentUpsertArgs} args - Arguments to update or create a RecipeComponent.
     * @example
     * // Update or create a RecipeComponent
     * const recipeComponent = await prisma.recipeComponent.upsert({
     *   create: {
     *     // ... data to create a RecipeComponent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeComponent we want to update
     *   }
     * })
     */
    upsert<T extends RecipeComponentUpsertArgs>(args: SelectSubset<T, RecipeComponentUpsertArgs<ExtArgs>>): Prisma__RecipeComponentClient<$Result.GetResult<Prisma.$RecipeComponentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeComponentCountArgs} args - Arguments to filter RecipeComponents to count.
     * @example
     * // Count the number of RecipeComponents
     * const count = await prisma.recipeComponent.count({
     *   where: {
     *     // ... the filter for the RecipeComponents we want to count
     *   }
     * })
    **/
    count<T extends RecipeComponentCountArgs>(
      args?: Subset<T, RecipeComponentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeComponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeComponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeComponentAggregateArgs>(args: Subset<T, RecipeComponentAggregateArgs>): Prisma.PrismaPromise<GetRecipeComponentAggregateType<T>>

    /**
     * Group by RecipeComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeComponentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeComponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeComponentGroupByArgs['orderBy'] }
        : { orderBy?: RecipeComponentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeComponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeComponentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeComponent model
   */
  readonly fields: RecipeComponentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeComponent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeComponentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredients<T extends RecipeComponent$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, RecipeComponent$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instructions<T extends RecipeComponent$instructionsArgs<ExtArgs> = {}>(args?: Subset<T, RecipeComponent$instructionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeInstructionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecipeComponent model
   */
  interface RecipeComponentFieldRefs {
    readonly id: FieldRef<"RecipeComponent", 'String'>
    readonly uuid: FieldRef<"RecipeComponent", 'String'>
    readonly name: FieldRef<"RecipeComponent", 'String'>
    readonly storeable: FieldRef<"RecipeComponent", 'Boolean'>
    readonly servings: FieldRef<"RecipeComponent", 'Int'>
    readonly order: FieldRef<"RecipeComponent", 'Int'>
    readonly recipeId: FieldRef<"RecipeComponent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecipeComponent findUnique
   */
  export type RecipeComponentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeComponent
     */
    select?: RecipeComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeComponent
     */
    omit?: RecipeComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeComponentInclude<ExtArgs> | null
    /**
     * Filter, which RecipeComponent to fetch.
     */
    where: RecipeComponentWhereUniqueInput
  }

  /**
   * RecipeComponent findUniqueOrThrow
   */
  export type RecipeComponentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeComponent
     */
    select?: RecipeComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeComponent
     */
    omit?: RecipeComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeComponentInclude<ExtArgs> | null
    /**
     * Filter, which RecipeComponent to fetch.
     */
    where: RecipeComponentWhereUniqueInput
  }

  /**
   * RecipeComponent findFirst
   */
  export type RecipeComponentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeComponent
     */
    select?: RecipeComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeComponent
     */
    omit?: RecipeComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeComponentInclude<ExtArgs> | null
    /**
     * Filter, which RecipeComponent to fetch.
     */
    where?: RecipeComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeComponents to fetch.
     */
    orderBy?: RecipeComponentOrderByWithRelationInput | RecipeComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeComponents.
     */
    cursor?: RecipeComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeComponents.
     */
    distinct?: RecipeComponentScalarFieldEnum | RecipeComponentScalarFieldEnum[]
  }

  /**
   * RecipeComponent findFirstOrThrow
   */
  export type RecipeComponentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeComponent
     */
    select?: RecipeComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeComponent
     */
    omit?: RecipeComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeComponentInclude<ExtArgs> | null
    /**
     * Filter, which RecipeComponent to fetch.
     */
    where?: RecipeComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeComponents to fetch.
     */
    orderBy?: RecipeComponentOrderByWithRelationInput | RecipeComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeComponents.
     */
    cursor?: RecipeComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeComponents.
     */
    distinct?: RecipeComponentScalarFieldEnum | RecipeComponentScalarFieldEnum[]
  }

  /**
   * RecipeComponent findMany
   */
  export type RecipeComponentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeComponent
     */
    select?: RecipeComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeComponent
     */
    omit?: RecipeComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeComponentInclude<ExtArgs> | null
    /**
     * Filter, which RecipeComponents to fetch.
     */
    where?: RecipeComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeComponents to fetch.
     */
    orderBy?: RecipeComponentOrderByWithRelationInput | RecipeComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeComponents.
     */
    cursor?: RecipeComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeComponents.
     */
    skip?: number
    distinct?: RecipeComponentScalarFieldEnum | RecipeComponentScalarFieldEnum[]
  }

  /**
   * RecipeComponent create
   */
  export type RecipeComponentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeComponent
     */
    select?: RecipeComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeComponent
     */
    omit?: RecipeComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeComponentInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeComponent.
     */
    data: XOR<RecipeComponentCreateInput, RecipeComponentUncheckedCreateInput>
  }

  /**
   * RecipeComponent createMany
   */
  export type RecipeComponentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeComponents.
     */
    data: RecipeComponentCreateManyInput | RecipeComponentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeComponent createManyAndReturn
   */
  export type RecipeComponentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeComponent
     */
    select?: RecipeComponentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeComponent
     */
    omit?: RecipeComponentOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeComponents.
     */
    data: RecipeComponentCreateManyInput | RecipeComponentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeComponentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeComponent update
   */
  export type RecipeComponentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeComponent
     */
    select?: RecipeComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeComponent
     */
    omit?: RecipeComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeComponentInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeComponent.
     */
    data: XOR<RecipeComponentUpdateInput, RecipeComponentUncheckedUpdateInput>
    /**
     * Choose, which RecipeComponent to update.
     */
    where: RecipeComponentWhereUniqueInput
  }

  /**
   * RecipeComponent updateMany
   */
  export type RecipeComponentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeComponents.
     */
    data: XOR<RecipeComponentUpdateManyMutationInput, RecipeComponentUncheckedUpdateManyInput>
    /**
     * Filter which RecipeComponents to update
     */
    where?: RecipeComponentWhereInput
    /**
     * Limit how many RecipeComponents to update.
     */
    limit?: number
  }

  /**
   * RecipeComponent updateManyAndReturn
   */
  export type RecipeComponentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeComponent
     */
    select?: RecipeComponentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeComponent
     */
    omit?: RecipeComponentOmit<ExtArgs> | null
    /**
     * The data used to update RecipeComponents.
     */
    data: XOR<RecipeComponentUpdateManyMutationInput, RecipeComponentUncheckedUpdateManyInput>
    /**
     * Filter which RecipeComponents to update
     */
    where?: RecipeComponentWhereInput
    /**
     * Limit how many RecipeComponents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeComponentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeComponent upsert
   */
  export type RecipeComponentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeComponent
     */
    select?: RecipeComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeComponent
     */
    omit?: RecipeComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeComponentInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeComponent to update in case it exists.
     */
    where: RecipeComponentWhereUniqueInput
    /**
     * In case the RecipeComponent found by the `where` argument doesn't exist, create a new RecipeComponent with this data.
     */
    create: XOR<RecipeComponentCreateInput, RecipeComponentUncheckedCreateInput>
    /**
     * In case the RecipeComponent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeComponentUpdateInput, RecipeComponentUncheckedUpdateInput>
  }

  /**
   * RecipeComponent delete
   */
  export type RecipeComponentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeComponent
     */
    select?: RecipeComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeComponent
     */
    omit?: RecipeComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeComponentInclude<ExtArgs> | null
    /**
     * Filter which RecipeComponent to delete.
     */
    where: RecipeComponentWhereUniqueInput
  }

  /**
   * RecipeComponent deleteMany
   */
  export type RecipeComponentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeComponents to delete
     */
    where?: RecipeComponentWhereInput
    /**
     * Limit how many RecipeComponents to delete.
     */
    limit?: number
  }

  /**
   * RecipeComponent.ingredients
   */
  export type RecipeComponent$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    cursor?: RecipeIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeComponent.instructions
   */
  export type RecipeComponent$instructionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     */
    select?: RecipeInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeInstruction
     */
    omit?: RecipeInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInstructionInclude<ExtArgs> | null
    where?: RecipeInstructionWhereInput
    orderBy?: RecipeInstructionOrderByWithRelationInput | RecipeInstructionOrderByWithRelationInput[]
    cursor?: RecipeInstructionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeInstructionScalarFieldEnum | RecipeInstructionScalarFieldEnum[]
  }

  /**
   * RecipeComponent without action
   */
  export type RecipeComponentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeComponent
     */
    select?: RecipeComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeComponent
     */
    omit?: RecipeComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeComponentInclude<ExtArgs> | null
  }


  /**
   * Model RecipeIngredient
   */

  export type AggregateRecipeIngredient = {
    _count: RecipeIngredientCountAggregateOutputType | null
    _avg: RecipeIngredientAvgAggregateOutputType | null
    _sum: RecipeIngredientSumAggregateOutputType | null
    _min: RecipeIngredientMinAggregateOutputType | null
    _max: RecipeIngredientMaxAggregateOutputType | null
  }

  export type RecipeIngredientAvgAggregateOutputType = {
    quantity: number | null
    order: number | null
  }

  export type RecipeIngredientSumAggregateOutputType = {
    quantity: number | null
    order: number | null
  }

  export type RecipeIngredientMinAggregateOutputType = {
    id: string | null
    uuid: string | null
    name: string | null
    quantity: number | null
    unit: string | null
    order: number | null
    preparation: string | null
    componentId: string | null
  }

  export type RecipeIngredientMaxAggregateOutputType = {
    id: string | null
    uuid: string | null
    name: string | null
    quantity: number | null
    unit: string | null
    order: number | null
    preparation: string | null
    componentId: string | null
  }

  export type RecipeIngredientCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    quantity: number
    unit: number
    order: number
    preparation: number
    componentId: number
    _all: number
  }


  export type RecipeIngredientAvgAggregateInputType = {
    quantity?: true
    order?: true
  }

  export type RecipeIngredientSumAggregateInputType = {
    quantity?: true
    order?: true
  }

  export type RecipeIngredientMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    quantity?: true
    unit?: true
    order?: true
    preparation?: true
    componentId?: true
  }

  export type RecipeIngredientMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    quantity?: true
    unit?: true
    order?: true
    preparation?: true
    componentId?: true
  }

  export type RecipeIngredientCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    quantity?: true
    unit?: true
    order?: true
    preparation?: true
    componentId?: true
    _all?: true
  }

  export type RecipeIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeIngredient to aggregate.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeIngredients
    **/
    _count?: true | RecipeIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeIngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeIngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeIngredientMaxAggregateInputType
  }

  export type GetRecipeIngredientAggregateType<T extends RecipeIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeIngredient[P]>
      : GetScalarType<T[P], AggregateRecipeIngredient[P]>
  }




  export type RecipeIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithAggregationInput | RecipeIngredientOrderByWithAggregationInput[]
    by: RecipeIngredientScalarFieldEnum[] | RecipeIngredientScalarFieldEnum
    having?: RecipeIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeIngredientCountAggregateInputType | true
    _avg?: RecipeIngredientAvgAggregateInputType
    _sum?: RecipeIngredientSumAggregateInputType
    _min?: RecipeIngredientMinAggregateInputType
    _max?: RecipeIngredientMaxAggregateInputType
  }

  export type RecipeIngredientGroupByOutputType = {
    id: string
    uuid: string
    name: string
    quantity: number
    unit: string
    order: number
    preparation: string | null
    componentId: string
    _count: RecipeIngredientCountAggregateOutputType | null
    _avg: RecipeIngredientAvgAggregateOutputType | null
    _sum: RecipeIngredientSumAggregateOutputType | null
    _min: RecipeIngredientMinAggregateOutputType | null
    _max: RecipeIngredientMaxAggregateOutputType | null
  }

  type GetRecipeIngredientGroupByPayload<T extends RecipeIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeIngredientGroupByOutputType[P]>
        }
      >
    >


  export type RecipeIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    order?: boolean
    preparation?: boolean
    componentId?: boolean
    component?: boolean | RecipeComponentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    order?: boolean
    preparation?: boolean
    componentId?: boolean
    component?: boolean | RecipeComponentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    order?: boolean
    preparation?: boolean
    componentId?: boolean
    component?: boolean | RecipeComponentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    order?: boolean
    preparation?: boolean
    componentId?: boolean
  }

  export type RecipeIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "name" | "quantity" | "unit" | "order" | "preparation" | "componentId", ExtArgs["result"]["recipeIngredient"]>
  export type RecipeIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    component?: boolean | RecipeComponentDefaultArgs<ExtArgs>
  }
  export type RecipeIngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    component?: boolean | RecipeComponentDefaultArgs<ExtArgs>
  }
  export type RecipeIngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    component?: boolean | RecipeComponentDefaultArgs<ExtArgs>
  }

  export type $RecipeIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeIngredient"
    objects: {
      component: Prisma.$RecipeComponentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uuid: string
      name: string
      quantity: number
      unit: string
      order: number
      preparation: string | null
      componentId: string
    }, ExtArgs["result"]["recipeIngredient"]>
    composites: {}
  }

  type RecipeIngredientGetPayload<S extends boolean | null | undefined | RecipeIngredientDefaultArgs> = $Result.GetResult<Prisma.$RecipeIngredientPayload, S>

  type RecipeIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeIngredientCountAggregateInputType | true
    }

  export interface RecipeIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeIngredient'], meta: { name: 'RecipeIngredient' } }
    /**
     * Find zero or one RecipeIngredient that matches the filter.
     * @param {RecipeIngredientFindUniqueArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeIngredientFindUniqueArgs>(args: SelectSubset<T, RecipeIngredientFindUniqueArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeIngredientFindUniqueOrThrowArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindFirstArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeIngredientFindFirstArgs>(args?: SelectSubset<T, RecipeIngredientFindFirstArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindFirstOrThrowArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredient.findMany()
     * 
     * // Get first 10 RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeIngredientFindManyArgs>(args?: SelectSubset<T, RecipeIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeIngredient.
     * @param {RecipeIngredientCreateArgs} args - Arguments to create a RecipeIngredient.
     * @example
     * // Create one RecipeIngredient
     * const RecipeIngredient = await prisma.recipeIngredient.create({
     *   data: {
     *     // ... data to create a RecipeIngredient
     *   }
     * })
     * 
     */
    create<T extends RecipeIngredientCreateArgs>(args: SelectSubset<T, RecipeIngredientCreateArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeIngredients.
     * @param {RecipeIngredientCreateManyArgs} args - Arguments to create many RecipeIngredients.
     * @example
     * // Create many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeIngredientCreateManyArgs>(args?: SelectSubset<T, RecipeIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeIngredients and returns the data saved in the database.
     * @param {RecipeIngredientCreateManyAndReturnArgs} args - Arguments to create many RecipeIngredients.
     * @example
     * // Create many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeIngredients and only return the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeIngredient.
     * @param {RecipeIngredientDeleteArgs} args - Arguments to delete one RecipeIngredient.
     * @example
     * // Delete one RecipeIngredient
     * const RecipeIngredient = await prisma.recipeIngredient.delete({
     *   where: {
     *     // ... filter to delete one RecipeIngredient
     *   }
     * })
     * 
     */
    delete<T extends RecipeIngredientDeleteArgs>(args: SelectSubset<T, RecipeIngredientDeleteArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeIngredient.
     * @param {RecipeIngredientUpdateArgs} args - Arguments to update one RecipeIngredient.
     * @example
     * // Update one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeIngredientUpdateArgs>(args: SelectSubset<T, RecipeIngredientUpdateArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeIngredients.
     * @param {RecipeIngredientDeleteManyArgs} args - Arguments to filter RecipeIngredients to delete.
     * @example
     * // Delete a few RecipeIngredients
     * const { count } = await prisma.recipeIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeIngredientDeleteManyArgs>(args?: SelectSubset<T, RecipeIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeIngredientUpdateManyArgs>(args: SelectSubset<T, RecipeIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeIngredients and returns the data updated in the database.
     * @param {RecipeIngredientUpdateManyAndReturnArgs} args - Arguments to update many RecipeIngredients.
     * @example
     * // Update many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeIngredients and only return the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeIngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeIngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeIngredient.
     * @param {RecipeIngredientUpsertArgs} args - Arguments to update or create a RecipeIngredient.
     * @example
     * // Update or create a RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.upsert({
     *   create: {
     *     // ... data to create a RecipeIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeIngredient we want to update
     *   }
     * })
     */
    upsert<T extends RecipeIngredientUpsertArgs>(args: SelectSubset<T, RecipeIngredientUpsertArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientCountArgs} args - Arguments to filter RecipeIngredients to count.
     * @example
     * // Count the number of RecipeIngredients
     * const count = await prisma.recipeIngredient.count({
     *   where: {
     *     // ... the filter for the RecipeIngredients we want to count
     *   }
     * })
    **/
    count<T extends RecipeIngredientCountArgs>(
      args?: Subset<T, RecipeIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeIngredientAggregateArgs>(args: Subset<T, RecipeIngredientAggregateArgs>): Prisma.PrismaPromise<GetRecipeIngredientAggregateType<T>>

    /**
     * Group by RecipeIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeIngredientGroupByArgs['orderBy'] }
        : { orderBy?: RecipeIngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeIngredient model
   */
  readonly fields: RecipeIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    component<T extends RecipeComponentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeComponentDefaultArgs<ExtArgs>>): Prisma__RecipeComponentClient<$Result.GetResult<Prisma.$RecipeComponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecipeIngredient model
   */
  interface RecipeIngredientFieldRefs {
    readonly id: FieldRef<"RecipeIngredient", 'String'>
    readonly uuid: FieldRef<"RecipeIngredient", 'String'>
    readonly name: FieldRef<"RecipeIngredient", 'String'>
    readonly quantity: FieldRef<"RecipeIngredient", 'Float'>
    readonly unit: FieldRef<"RecipeIngredient", 'String'>
    readonly order: FieldRef<"RecipeIngredient", 'Int'>
    readonly preparation: FieldRef<"RecipeIngredient", 'String'>
    readonly componentId: FieldRef<"RecipeIngredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecipeIngredient findUnique
   */
  export type RecipeIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient findUniqueOrThrow
   */
  export type RecipeIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient findFirst
   */
  export type RecipeIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeIngredients.
     */
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient findFirstOrThrow
   */
  export type RecipeIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeIngredients.
     */
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient findMany
   */
  export type RecipeIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredients to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient create
   */
  export type RecipeIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeIngredient.
     */
    data: XOR<RecipeIngredientCreateInput, RecipeIngredientUncheckedCreateInput>
  }

  /**
   * RecipeIngredient createMany
   */
  export type RecipeIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeIngredients.
     */
    data: RecipeIngredientCreateManyInput | RecipeIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeIngredient createManyAndReturn
   */
  export type RecipeIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeIngredients.
     */
    data: RecipeIngredientCreateManyInput | RecipeIngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeIngredient update
   */
  export type RecipeIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeIngredient.
     */
    data: XOR<RecipeIngredientUpdateInput, RecipeIngredientUncheckedUpdateInput>
    /**
     * Choose, which RecipeIngredient to update.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient updateMany
   */
  export type RecipeIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeIngredients.
     */
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyInput>
    /**
     * Filter which RecipeIngredients to update
     */
    where?: RecipeIngredientWhereInput
    /**
     * Limit how many RecipeIngredients to update.
     */
    limit?: number
  }

  /**
   * RecipeIngredient updateManyAndReturn
   */
  export type RecipeIngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * The data used to update RecipeIngredients.
     */
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyInput>
    /**
     * Filter which RecipeIngredients to update
     */
    where?: RecipeIngredientWhereInput
    /**
     * Limit how many RecipeIngredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeIngredient upsert
   */
  export type RecipeIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeIngredient to update in case it exists.
     */
    where: RecipeIngredientWhereUniqueInput
    /**
     * In case the RecipeIngredient found by the `where` argument doesn't exist, create a new RecipeIngredient with this data.
     */
    create: XOR<RecipeIngredientCreateInput, RecipeIngredientUncheckedCreateInput>
    /**
     * In case the RecipeIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeIngredientUpdateInput, RecipeIngredientUncheckedUpdateInput>
  }

  /**
   * RecipeIngredient delete
   */
  export type RecipeIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter which RecipeIngredient to delete.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient deleteMany
   */
  export type RecipeIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeIngredients to delete
     */
    where?: RecipeIngredientWhereInput
    /**
     * Limit how many RecipeIngredients to delete.
     */
    limit?: number
  }

  /**
   * RecipeIngredient without action
   */
  export type RecipeIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
  }


  /**
   * Model RecipeInstruction
   */

  export type AggregateRecipeInstruction = {
    _count: RecipeInstructionCountAggregateOutputType | null
    _avg: RecipeInstructionAvgAggregateOutputType | null
    _sum: RecipeInstructionSumAggregateOutputType | null
    _min: RecipeInstructionMinAggregateOutputType | null
    _max: RecipeInstructionMaxAggregateOutputType | null
  }

  export type RecipeInstructionAvgAggregateOutputType = {
    order: number | null
  }

  export type RecipeInstructionSumAggregateOutputType = {
    order: number | null
  }

  export type RecipeInstructionMinAggregateOutputType = {
    id: string | null
    uuid: string | null
    instruction: string | null
    order: number | null
    componentId: string | null
  }

  export type RecipeInstructionMaxAggregateOutputType = {
    id: string | null
    uuid: string | null
    instruction: string | null
    order: number | null
    componentId: string | null
  }

  export type RecipeInstructionCountAggregateOutputType = {
    id: number
    uuid: number
    instruction: number
    order: number
    componentId: number
    _all: number
  }


  export type RecipeInstructionAvgAggregateInputType = {
    order?: true
  }

  export type RecipeInstructionSumAggregateInputType = {
    order?: true
  }

  export type RecipeInstructionMinAggregateInputType = {
    id?: true
    uuid?: true
    instruction?: true
    order?: true
    componentId?: true
  }

  export type RecipeInstructionMaxAggregateInputType = {
    id?: true
    uuid?: true
    instruction?: true
    order?: true
    componentId?: true
  }

  export type RecipeInstructionCountAggregateInputType = {
    id?: true
    uuid?: true
    instruction?: true
    order?: true
    componentId?: true
    _all?: true
  }

  export type RecipeInstructionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeInstruction to aggregate.
     */
    where?: RecipeInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeInstructions to fetch.
     */
    orderBy?: RecipeInstructionOrderByWithRelationInput | RecipeInstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeInstructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeInstructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeInstructions
    **/
    _count?: true | RecipeInstructionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeInstructionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeInstructionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeInstructionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeInstructionMaxAggregateInputType
  }

  export type GetRecipeInstructionAggregateType<T extends RecipeInstructionAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeInstruction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeInstruction[P]>
      : GetScalarType<T[P], AggregateRecipeInstruction[P]>
  }




  export type RecipeInstructionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeInstructionWhereInput
    orderBy?: RecipeInstructionOrderByWithAggregationInput | RecipeInstructionOrderByWithAggregationInput[]
    by: RecipeInstructionScalarFieldEnum[] | RecipeInstructionScalarFieldEnum
    having?: RecipeInstructionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeInstructionCountAggregateInputType | true
    _avg?: RecipeInstructionAvgAggregateInputType
    _sum?: RecipeInstructionSumAggregateInputType
    _min?: RecipeInstructionMinAggregateInputType
    _max?: RecipeInstructionMaxAggregateInputType
  }

  export type RecipeInstructionGroupByOutputType = {
    id: string
    uuid: string
    instruction: string
    order: number
    componentId: string
    _count: RecipeInstructionCountAggregateOutputType | null
    _avg: RecipeInstructionAvgAggregateOutputType | null
    _sum: RecipeInstructionSumAggregateOutputType | null
    _min: RecipeInstructionMinAggregateOutputType | null
    _max: RecipeInstructionMaxAggregateOutputType | null
  }

  type GetRecipeInstructionGroupByPayload<T extends RecipeInstructionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeInstructionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeInstructionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeInstructionGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeInstructionGroupByOutputType[P]>
        }
      >
    >


  export type RecipeInstructionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    instruction?: boolean
    order?: boolean
    componentId?: boolean
    component?: boolean | RecipeComponentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeInstruction"]>

  export type RecipeInstructionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    instruction?: boolean
    order?: boolean
    componentId?: boolean
    component?: boolean | RecipeComponentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeInstruction"]>

  export type RecipeInstructionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    instruction?: boolean
    order?: boolean
    componentId?: boolean
    component?: boolean | RecipeComponentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeInstruction"]>

  export type RecipeInstructionSelectScalar = {
    id?: boolean
    uuid?: boolean
    instruction?: boolean
    order?: boolean
    componentId?: boolean
  }

  export type RecipeInstructionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "instruction" | "order" | "componentId", ExtArgs["result"]["recipeInstruction"]>
  export type RecipeInstructionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    component?: boolean | RecipeComponentDefaultArgs<ExtArgs>
  }
  export type RecipeInstructionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    component?: boolean | RecipeComponentDefaultArgs<ExtArgs>
  }
  export type RecipeInstructionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    component?: boolean | RecipeComponentDefaultArgs<ExtArgs>
  }

  export type $RecipeInstructionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeInstruction"
    objects: {
      component: Prisma.$RecipeComponentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uuid: string
      instruction: string
      order: number
      componentId: string
    }, ExtArgs["result"]["recipeInstruction"]>
    composites: {}
  }

  type RecipeInstructionGetPayload<S extends boolean | null | undefined | RecipeInstructionDefaultArgs> = $Result.GetResult<Prisma.$RecipeInstructionPayload, S>

  type RecipeInstructionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeInstructionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeInstructionCountAggregateInputType | true
    }

  export interface RecipeInstructionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeInstruction'], meta: { name: 'RecipeInstruction' } }
    /**
     * Find zero or one RecipeInstruction that matches the filter.
     * @param {RecipeInstructionFindUniqueArgs} args - Arguments to find a RecipeInstruction
     * @example
     * // Get one RecipeInstruction
     * const recipeInstruction = await prisma.recipeInstruction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeInstructionFindUniqueArgs>(args: SelectSubset<T, RecipeInstructionFindUniqueArgs<ExtArgs>>): Prisma__RecipeInstructionClient<$Result.GetResult<Prisma.$RecipeInstructionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeInstruction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeInstructionFindUniqueOrThrowArgs} args - Arguments to find a RecipeInstruction
     * @example
     * // Get one RecipeInstruction
     * const recipeInstruction = await prisma.recipeInstruction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeInstructionFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeInstructionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeInstructionClient<$Result.GetResult<Prisma.$RecipeInstructionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeInstruction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeInstructionFindFirstArgs} args - Arguments to find a RecipeInstruction
     * @example
     * // Get one RecipeInstruction
     * const recipeInstruction = await prisma.recipeInstruction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeInstructionFindFirstArgs>(args?: SelectSubset<T, RecipeInstructionFindFirstArgs<ExtArgs>>): Prisma__RecipeInstructionClient<$Result.GetResult<Prisma.$RecipeInstructionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeInstruction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeInstructionFindFirstOrThrowArgs} args - Arguments to find a RecipeInstruction
     * @example
     * // Get one RecipeInstruction
     * const recipeInstruction = await prisma.recipeInstruction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeInstructionFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeInstructionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeInstructionClient<$Result.GetResult<Prisma.$RecipeInstructionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeInstructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeInstructionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeInstructions
     * const recipeInstructions = await prisma.recipeInstruction.findMany()
     * 
     * // Get first 10 RecipeInstructions
     * const recipeInstructions = await prisma.recipeInstruction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeInstructionWithIdOnly = await prisma.recipeInstruction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeInstructionFindManyArgs>(args?: SelectSubset<T, RecipeInstructionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeInstructionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeInstruction.
     * @param {RecipeInstructionCreateArgs} args - Arguments to create a RecipeInstruction.
     * @example
     * // Create one RecipeInstruction
     * const RecipeInstruction = await prisma.recipeInstruction.create({
     *   data: {
     *     // ... data to create a RecipeInstruction
     *   }
     * })
     * 
     */
    create<T extends RecipeInstructionCreateArgs>(args: SelectSubset<T, RecipeInstructionCreateArgs<ExtArgs>>): Prisma__RecipeInstructionClient<$Result.GetResult<Prisma.$RecipeInstructionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeInstructions.
     * @param {RecipeInstructionCreateManyArgs} args - Arguments to create many RecipeInstructions.
     * @example
     * // Create many RecipeInstructions
     * const recipeInstruction = await prisma.recipeInstruction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeInstructionCreateManyArgs>(args?: SelectSubset<T, RecipeInstructionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeInstructions and returns the data saved in the database.
     * @param {RecipeInstructionCreateManyAndReturnArgs} args - Arguments to create many RecipeInstructions.
     * @example
     * // Create many RecipeInstructions
     * const recipeInstruction = await prisma.recipeInstruction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeInstructions and only return the `id`
     * const recipeInstructionWithIdOnly = await prisma.recipeInstruction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeInstructionCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeInstructionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeInstructionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeInstruction.
     * @param {RecipeInstructionDeleteArgs} args - Arguments to delete one RecipeInstruction.
     * @example
     * // Delete one RecipeInstruction
     * const RecipeInstruction = await prisma.recipeInstruction.delete({
     *   where: {
     *     // ... filter to delete one RecipeInstruction
     *   }
     * })
     * 
     */
    delete<T extends RecipeInstructionDeleteArgs>(args: SelectSubset<T, RecipeInstructionDeleteArgs<ExtArgs>>): Prisma__RecipeInstructionClient<$Result.GetResult<Prisma.$RecipeInstructionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeInstruction.
     * @param {RecipeInstructionUpdateArgs} args - Arguments to update one RecipeInstruction.
     * @example
     * // Update one RecipeInstruction
     * const recipeInstruction = await prisma.recipeInstruction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeInstructionUpdateArgs>(args: SelectSubset<T, RecipeInstructionUpdateArgs<ExtArgs>>): Prisma__RecipeInstructionClient<$Result.GetResult<Prisma.$RecipeInstructionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeInstructions.
     * @param {RecipeInstructionDeleteManyArgs} args - Arguments to filter RecipeInstructions to delete.
     * @example
     * // Delete a few RecipeInstructions
     * const { count } = await prisma.recipeInstruction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeInstructionDeleteManyArgs>(args?: SelectSubset<T, RecipeInstructionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeInstructionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeInstructions
     * const recipeInstruction = await prisma.recipeInstruction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeInstructionUpdateManyArgs>(args: SelectSubset<T, RecipeInstructionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeInstructions and returns the data updated in the database.
     * @param {RecipeInstructionUpdateManyAndReturnArgs} args - Arguments to update many RecipeInstructions.
     * @example
     * // Update many RecipeInstructions
     * const recipeInstruction = await prisma.recipeInstruction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeInstructions and only return the `id`
     * const recipeInstructionWithIdOnly = await prisma.recipeInstruction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeInstructionUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeInstructionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeInstructionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeInstruction.
     * @param {RecipeInstructionUpsertArgs} args - Arguments to update or create a RecipeInstruction.
     * @example
     * // Update or create a RecipeInstruction
     * const recipeInstruction = await prisma.recipeInstruction.upsert({
     *   create: {
     *     // ... data to create a RecipeInstruction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeInstruction we want to update
     *   }
     * })
     */
    upsert<T extends RecipeInstructionUpsertArgs>(args: SelectSubset<T, RecipeInstructionUpsertArgs<ExtArgs>>): Prisma__RecipeInstructionClient<$Result.GetResult<Prisma.$RecipeInstructionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeInstructionCountArgs} args - Arguments to filter RecipeInstructions to count.
     * @example
     * // Count the number of RecipeInstructions
     * const count = await prisma.recipeInstruction.count({
     *   where: {
     *     // ... the filter for the RecipeInstructions we want to count
     *   }
     * })
    **/
    count<T extends RecipeInstructionCountArgs>(
      args?: Subset<T, RecipeInstructionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeInstructionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeInstructionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeInstructionAggregateArgs>(args: Subset<T, RecipeInstructionAggregateArgs>): Prisma.PrismaPromise<GetRecipeInstructionAggregateType<T>>

    /**
     * Group by RecipeInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeInstructionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeInstructionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeInstructionGroupByArgs['orderBy'] }
        : { orderBy?: RecipeInstructionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeInstructionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeInstructionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeInstruction model
   */
  readonly fields: RecipeInstructionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeInstruction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeInstructionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    component<T extends RecipeComponentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeComponentDefaultArgs<ExtArgs>>): Prisma__RecipeComponentClient<$Result.GetResult<Prisma.$RecipeComponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecipeInstruction model
   */
  interface RecipeInstructionFieldRefs {
    readonly id: FieldRef<"RecipeInstruction", 'String'>
    readonly uuid: FieldRef<"RecipeInstruction", 'String'>
    readonly instruction: FieldRef<"RecipeInstruction", 'String'>
    readonly order: FieldRef<"RecipeInstruction", 'Int'>
    readonly componentId: FieldRef<"RecipeInstruction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecipeInstruction findUnique
   */
  export type RecipeInstructionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     */
    select?: RecipeInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeInstruction
     */
    omit?: RecipeInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInstructionInclude<ExtArgs> | null
    /**
     * Filter, which RecipeInstruction to fetch.
     */
    where: RecipeInstructionWhereUniqueInput
  }

  /**
   * RecipeInstruction findUniqueOrThrow
   */
  export type RecipeInstructionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     */
    select?: RecipeInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeInstruction
     */
    omit?: RecipeInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInstructionInclude<ExtArgs> | null
    /**
     * Filter, which RecipeInstruction to fetch.
     */
    where: RecipeInstructionWhereUniqueInput
  }

  /**
   * RecipeInstruction findFirst
   */
  export type RecipeInstructionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     */
    select?: RecipeInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeInstruction
     */
    omit?: RecipeInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInstructionInclude<ExtArgs> | null
    /**
     * Filter, which RecipeInstruction to fetch.
     */
    where?: RecipeInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeInstructions to fetch.
     */
    orderBy?: RecipeInstructionOrderByWithRelationInput | RecipeInstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeInstructions.
     */
    cursor?: RecipeInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeInstructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeInstructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeInstructions.
     */
    distinct?: RecipeInstructionScalarFieldEnum | RecipeInstructionScalarFieldEnum[]
  }

  /**
   * RecipeInstruction findFirstOrThrow
   */
  export type RecipeInstructionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     */
    select?: RecipeInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeInstruction
     */
    omit?: RecipeInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInstructionInclude<ExtArgs> | null
    /**
     * Filter, which RecipeInstruction to fetch.
     */
    where?: RecipeInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeInstructions to fetch.
     */
    orderBy?: RecipeInstructionOrderByWithRelationInput | RecipeInstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeInstructions.
     */
    cursor?: RecipeInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeInstructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeInstructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeInstructions.
     */
    distinct?: RecipeInstructionScalarFieldEnum | RecipeInstructionScalarFieldEnum[]
  }

  /**
   * RecipeInstruction findMany
   */
  export type RecipeInstructionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     */
    select?: RecipeInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeInstruction
     */
    omit?: RecipeInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInstructionInclude<ExtArgs> | null
    /**
     * Filter, which RecipeInstructions to fetch.
     */
    where?: RecipeInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeInstructions to fetch.
     */
    orderBy?: RecipeInstructionOrderByWithRelationInput | RecipeInstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeInstructions.
     */
    cursor?: RecipeInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeInstructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeInstructions.
     */
    skip?: number
    distinct?: RecipeInstructionScalarFieldEnum | RecipeInstructionScalarFieldEnum[]
  }

  /**
   * RecipeInstruction create
   */
  export type RecipeInstructionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     */
    select?: RecipeInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeInstruction
     */
    omit?: RecipeInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInstructionInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeInstruction.
     */
    data: XOR<RecipeInstructionCreateInput, RecipeInstructionUncheckedCreateInput>
  }

  /**
   * RecipeInstruction createMany
   */
  export type RecipeInstructionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeInstructions.
     */
    data: RecipeInstructionCreateManyInput | RecipeInstructionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeInstruction createManyAndReturn
   */
  export type RecipeInstructionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     */
    select?: RecipeInstructionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeInstruction
     */
    omit?: RecipeInstructionOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeInstructions.
     */
    data: RecipeInstructionCreateManyInput | RecipeInstructionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInstructionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeInstruction update
   */
  export type RecipeInstructionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     */
    select?: RecipeInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeInstruction
     */
    omit?: RecipeInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInstructionInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeInstruction.
     */
    data: XOR<RecipeInstructionUpdateInput, RecipeInstructionUncheckedUpdateInput>
    /**
     * Choose, which RecipeInstruction to update.
     */
    where: RecipeInstructionWhereUniqueInput
  }

  /**
   * RecipeInstruction updateMany
   */
  export type RecipeInstructionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeInstructions.
     */
    data: XOR<RecipeInstructionUpdateManyMutationInput, RecipeInstructionUncheckedUpdateManyInput>
    /**
     * Filter which RecipeInstructions to update
     */
    where?: RecipeInstructionWhereInput
    /**
     * Limit how many RecipeInstructions to update.
     */
    limit?: number
  }

  /**
   * RecipeInstruction updateManyAndReturn
   */
  export type RecipeInstructionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     */
    select?: RecipeInstructionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeInstruction
     */
    omit?: RecipeInstructionOmit<ExtArgs> | null
    /**
     * The data used to update RecipeInstructions.
     */
    data: XOR<RecipeInstructionUpdateManyMutationInput, RecipeInstructionUncheckedUpdateManyInput>
    /**
     * Filter which RecipeInstructions to update
     */
    where?: RecipeInstructionWhereInput
    /**
     * Limit how many RecipeInstructions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInstructionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeInstruction upsert
   */
  export type RecipeInstructionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     */
    select?: RecipeInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeInstruction
     */
    omit?: RecipeInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInstructionInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeInstruction to update in case it exists.
     */
    where: RecipeInstructionWhereUniqueInput
    /**
     * In case the RecipeInstruction found by the `where` argument doesn't exist, create a new RecipeInstruction with this data.
     */
    create: XOR<RecipeInstructionCreateInput, RecipeInstructionUncheckedCreateInput>
    /**
     * In case the RecipeInstruction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeInstructionUpdateInput, RecipeInstructionUncheckedUpdateInput>
  }

  /**
   * RecipeInstruction delete
   */
  export type RecipeInstructionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     */
    select?: RecipeInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeInstruction
     */
    omit?: RecipeInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInstructionInclude<ExtArgs> | null
    /**
     * Filter which RecipeInstruction to delete.
     */
    where: RecipeInstructionWhereUniqueInput
  }

  /**
   * RecipeInstruction deleteMany
   */
  export type RecipeInstructionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeInstructions to delete
     */
    where?: RecipeInstructionWhereInput
    /**
     * Limit how many RecipeInstructions to delete.
     */
    limit?: number
  }

  /**
   * RecipeInstruction without action
   */
  export type RecipeInstructionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     */
    select?: RecipeInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeInstruction
     */
    omit?: RecipeInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInstructionInclude<ExtArgs> | null
  }


  /**
   * Model UserPreference
   */

  export type AggregateUserPreference = {
    _count: UserPreferenceCountAggregateOutputType | null
    _avg: UserPreferenceAvgAggregateOutputType | null
    _sum: UserPreferenceSumAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  export type UserPreferenceAvgAggregateOutputType = {
    confidence: number | null
  }

  export type UserPreferenceSumAggregateOutputType = {
    confidence: number | null
  }

  export type UserPreferenceMinAggregateOutputType = {
    id: string | null
    category: string | null
    preference: string | null
    context: string | null
    confidence: number | null
    source: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type UserPreferenceMaxAggregateOutputType = {
    id: string | null
    category: string | null
    preference: string | null
    context: string | null
    confidence: number | null
    source: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type UserPreferenceCountAggregateOutputType = {
    id: number
    category: number
    preference: number
    context: number
    confidence: number
    source: number
    isActive: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type UserPreferenceAvgAggregateInputType = {
    confidence?: true
  }

  export type UserPreferenceSumAggregateInputType = {
    confidence?: true
  }

  export type UserPreferenceMinAggregateInputType = {
    id?: true
    category?: true
    preference?: true
    context?: true
    confidence?: true
    source?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type UserPreferenceMaxAggregateInputType = {
    id?: true
    category?: true
    preference?: true
    context?: true
    confidence?: true
    source?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type UserPreferenceCountAggregateInputType = {
    id?: true
    category?: true
    preference?: true
    context?: true
    confidence?: true
    source?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type UserPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreference to aggregate.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type GetUserPreferenceAggregateType<T extends UserPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreference[P]>
      : GetScalarType<T[P], AggregateUserPreference[P]>
  }




  export type UserPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferenceWhereInput
    orderBy?: UserPreferenceOrderByWithAggregationInput | UserPreferenceOrderByWithAggregationInput[]
    by: UserPreferenceScalarFieldEnum[] | UserPreferenceScalarFieldEnum
    having?: UserPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferenceCountAggregateInputType | true
    _avg?: UserPreferenceAvgAggregateInputType
    _sum?: UserPreferenceSumAggregateInputType
    _min?: UserPreferenceMinAggregateInputType
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type UserPreferenceGroupByOutputType = {
    id: string
    category: string
    preference: string
    context: string | null
    confidence: number
    source: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: UserPreferenceCountAggregateOutputType | null
    _avg: UserPreferenceAvgAggregateOutputType | null
    _sum: UserPreferenceSumAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  type GetUserPreferenceGroupByPayload<T extends UserPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    preference?: boolean
    context?: boolean
    confidence?: boolean
    source?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    preference?: boolean
    context?: boolean
    confidence?: boolean
    source?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    preference?: boolean
    context?: boolean
    confidence?: boolean
    source?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectScalar = {
    id?: boolean
    category?: boolean
    preference?: boolean
    context?: boolean
    confidence?: boolean
    source?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type UserPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "preference" | "context" | "confidence" | "source" | "isActive" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["userPreference"]>
  export type UserPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreference"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string
      preference: string
      context: string | null
      confidence: number
      source: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["userPreference"]>
    composites: {}
  }

  type UserPreferenceGetPayload<S extends boolean | null | undefined | UserPreferenceDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencePayload, S>

  type UserPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferenceCountAggregateInputType | true
    }

  export interface UserPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreference'], meta: { name: 'UserPreference' } }
    /**
     * Find zero or one UserPreference that matches the filter.
     * @param {UserPreferenceFindUniqueArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferenceFindUniqueArgs>(args: SelectSubset<T, UserPreferenceFindUniqueArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferenceFindFirstArgs>(args?: SelectSubset<T, UserPreferenceFindFirstArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreference.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferenceFindManyArgs>(args?: SelectSubset<T, UserPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreference.
     * @param {UserPreferenceCreateArgs} args - Arguments to create a UserPreference.
     * @example
     * // Create one UserPreference
     * const UserPreference = await prisma.userPreference.create({
     *   data: {
     *     // ... data to create a UserPreference
     *   }
     * })
     * 
     */
    create<T extends UserPreferenceCreateArgs>(args: SelectSubset<T, UserPreferenceCreateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferenceCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferenceCreateManyArgs>(args?: SelectSubset<T, UserPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreference.
     * @param {UserPreferenceDeleteArgs} args - Arguments to delete one UserPreference.
     * @example
     * // Delete one UserPreference
     * const UserPreference = await prisma.userPreference.delete({
     *   where: {
     *     // ... filter to delete one UserPreference
     *   }
     * })
     * 
     */
    delete<T extends UserPreferenceDeleteArgs>(args: SelectSubset<T, UserPreferenceDeleteArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreference.
     * @param {UserPreferenceUpdateArgs} args - Arguments to update one UserPreference.
     * @example
     * // Update one UserPreference
     * const userPreference = await prisma.userPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferenceUpdateArgs>(args: SelectSubset<T, UserPreferenceUpdateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferenceDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferenceDeleteManyArgs>(args?: SelectSubset<T, UserPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferenceUpdateManyArgs>(args: SelectSubset<T, UserPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferenceUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreference.
     * @param {UserPreferenceUpsertArgs} args - Arguments to update or create a UserPreference.
     * @example
     * // Update or create a UserPreference
     * const userPreference = await prisma.userPreference.upsert({
     *   create: {
     *     // ... data to create a UserPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferenceUpsertArgs>(args: SelectSubset<T, UserPreferenceUpsertArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreference.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferenceCountArgs>(
      args?: Subset<T, UserPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPreferenceAggregateArgs>(args: Subset<T, UserPreferenceAggregateArgs>): Prisma.PrismaPromise<GetUserPreferenceAggregateType<T>>

    /**
     * Group by UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreference model
   */
  readonly fields: UserPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPreference model
   */
  interface UserPreferenceFieldRefs {
    readonly id: FieldRef<"UserPreference", 'String'>
    readonly category: FieldRef<"UserPreference", 'String'>
    readonly preference: FieldRef<"UserPreference", 'String'>
    readonly context: FieldRef<"UserPreference", 'String'>
    readonly confidence: FieldRef<"UserPreference", 'Float'>
    readonly source: FieldRef<"UserPreference", 'String'>
    readonly isActive: FieldRef<"UserPreference", 'Boolean'>
    readonly createdAt: FieldRef<"UserPreference", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPreference", 'DateTime'>
    readonly userId: FieldRef<"UserPreference", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserPreference findUnique
   */
  export type UserPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findUniqueOrThrow
   */
  export type UserPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findFirst
   */
  export type UserPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findFirstOrThrow
   */
  export type UserPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findMany
   */
  export type UserPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference create
   */
  export type UserPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreference.
     */
    data: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
  }

  /**
   * UserPreference createMany
   */
  export type UserPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreference createManyAndReturn
   */
  export type UserPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference update
   */
  export type UserPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreference.
     */
    data: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
    /**
     * Choose, which UserPreference to update.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference updateMany
   */
  export type UserPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreference updateManyAndReturn
   */
  export type UserPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference upsert
   */
  export type UserPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreference to update in case it exists.
     */
    where: UserPreferenceWhereUniqueInput
    /**
     * In case the UserPreference found by the `where` argument doesn't exist, create a new UserPreference with this data.
     */
    create: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
    /**
     * In case the UserPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
  }

  /**
   * UserPreference delete
   */
  export type UserPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter which UserPreference to delete.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference deleteMany
   */
  export type UserPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreference without action
   */
  export type UserPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
  }


  /**
   * Model SharedRecipe
   */

  export type AggregateSharedRecipe = {
    _count: SharedRecipeCountAggregateOutputType | null
    _min: SharedRecipeMinAggregateOutputType | null
    _max: SharedRecipeMaxAggregateOutputType | null
  }

  export type SharedRecipeMinAggregateOutputType = {
    id: string | null
    shareId: string | null
    createdAt: Date | null
    expiresAt: Date | null
    recipeId: string | null
    sharedById: string | null
  }

  export type SharedRecipeMaxAggregateOutputType = {
    id: string | null
    shareId: string | null
    createdAt: Date | null
    expiresAt: Date | null
    recipeId: string | null
    sharedById: string | null
  }

  export type SharedRecipeCountAggregateOutputType = {
    id: number
    shareId: number
    createdAt: number
    expiresAt: number
    recipeId: number
    sharedById: number
    _all: number
  }


  export type SharedRecipeMinAggregateInputType = {
    id?: true
    shareId?: true
    createdAt?: true
    expiresAt?: true
    recipeId?: true
    sharedById?: true
  }

  export type SharedRecipeMaxAggregateInputType = {
    id?: true
    shareId?: true
    createdAt?: true
    expiresAt?: true
    recipeId?: true
    sharedById?: true
  }

  export type SharedRecipeCountAggregateInputType = {
    id?: true
    shareId?: true
    createdAt?: true
    expiresAt?: true
    recipeId?: true
    sharedById?: true
    _all?: true
  }

  export type SharedRecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedRecipe to aggregate.
     */
    where?: SharedRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedRecipes to fetch.
     */
    orderBy?: SharedRecipeOrderByWithRelationInput | SharedRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharedRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SharedRecipes
    **/
    _count?: true | SharedRecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharedRecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharedRecipeMaxAggregateInputType
  }

  export type GetSharedRecipeAggregateType<T extends SharedRecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateSharedRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedRecipe[P]>
      : GetScalarType<T[P], AggregateSharedRecipe[P]>
  }




  export type SharedRecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedRecipeWhereInput
    orderBy?: SharedRecipeOrderByWithAggregationInput | SharedRecipeOrderByWithAggregationInput[]
    by: SharedRecipeScalarFieldEnum[] | SharedRecipeScalarFieldEnum
    having?: SharedRecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharedRecipeCountAggregateInputType | true
    _min?: SharedRecipeMinAggregateInputType
    _max?: SharedRecipeMaxAggregateInputType
  }

  export type SharedRecipeGroupByOutputType = {
    id: string
    shareId: string
    createdAt: Date
    expiresAt: Date | null
    recipeId: string
    sharedById: string
    _count: SharedRecipeCountAggregateOutputType | null
    _min: SharedRecipeMinAggregateOutputType | null
    _max: SharedRecipeMaxAggregateOutputType | null
  }

  type GetSharedRecipeGroupByPayload<T extends SharedRecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharedRecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharedRecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedRecipeGroupByOutputType[P]>
            : GetScalarType<T[P], SharedRecipeGroupByOutputType[P]>
        }
      >
    >


  export type SharedRecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    recipeId?: boolean
    sharedById?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedRecipe"]>

  export type SharedRecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    recipeId?: boolean
    sharedById?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedRecipe"]>

  export type SharedRecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    recipeId?: boolean
    sharedById?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedRecipe"]>

  export type SharedRecipeSelectScalar = {
    id?: boolean
    shareId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    recipeId?: boolean
    sharedById?: boolean
  }

  export type SharedRecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shareId" | "createdAt" | "expiresAt" | "recipeId" | "sharedById", ExtArgs["result"]["sharedRecipe"]>
  export type SharedRecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SharedRecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SharedRecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SharedRecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SharedRecipe"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      sharedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shareId: string
      createdAt: Date
      expiresAt: Date | null
      recipeId: string
      sharedById: string
    }, ExtArgs["result"]["sharedRecipe"]>
    composites: {}
  }

  type SharedRecipeGetPayload<S extends boolean | null | undefined | SharedRecipeDefaultArgs> = $Result.GetResult<Prisma.$SharedRecipePayload, S>

  type SharedRecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SharedRecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SharedRecipeCountAggregateInputType | true
    }

  export interface SharedRecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SharedRecipe'], meta: { name: 'SharedRecipe' } }
    /**
     * Find zero or one SharedRecipe that matches the filter.
     * @param {SharedRecipeFindUniqueArgs} args - Arguments to find a SharedRecipe
     * @example
     * // Get one SharedRecipe
     * const sharedRecipe = await prisma.sharedRecipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharedRecipeFindUniqueArgs>(args: SelectSubset<T, SharedRecipeFindUniqueArgs<ExtArgs>>): Prisma__SharedRecipeClient<$Result.GetResult<Prisma.$SharedRecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SharedRecipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharedRecipeFindUniqueOrThrowArgs} args - Arguments to find a SharedRecipe
     * @example
     * // Get one SharedRecipe
     * const sharedRecipe = await prisma.sharedRecipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharedRecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, SharedRecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SharedRecipeClient<$Result.GetResult<Prisma.$SharedRecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedRecipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedRecipeFindFirstArgs} args - Arguments to find a SharedRecipe
     * @example
     * // Get one SharedRecipe
     * const sharedRecipe = await prisma.sharedRecipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharedRecipeFindFirstArgs>(args?: SelectSubset<T, SharedRecipeFindFirstArgs<ExtArgs>>): Prisma__SharedRecipeClient<$Result.GetResult<Prisma.$SharedRecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedRecipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedRecipeFindFirstOrThrowArgs} args - Arguments to find a SharedRecipe
     * @example
     * // Get one SharedRecipe
     * const sharedRecipe = await prisma.sharedRecipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharedRecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, SharedRecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SharedRecipeClient<$Result.GetResult<Prisma.$SharedRecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SharedRecipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedRecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedRecipes
     * const sharedRecipes = await prisma.sharedRecipe.findMany()
     * 
     * // Get first 10 SharedRecipes
     * const sharedRecipes = await prisma.sharedRecipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharedRecipeWithIdOnly = await prisma.sharedRecipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SharedRecipeFindManyArgs>(args?: SelectSubset<T, SharedRecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SharedRecipe.
     * @param {SharedRecipeCreateArgs} args - Arguments to create a SharedRecipe.
     * @example
     * // Create one SharedRecipe
     * const SharedRecipe = await prisma.sharedRecipe.create({
     *   data: {
     *     // ... data to create a SharedRecipe
     *   }
     * })
     * 
     */
    create<T extends SharedRecipeCreateArgs>(args: SelectSubset<T, SharedRecipeCreateArgs<ExtArgs>>): Prisma__SharedRecipeClient<$Result.GetResult<Prisma.$SharedRecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SharedRecipes.
     * @param {SharedRecipeCreateManyArgs} args - Arguments to create many SharedRecipes.
     * @example
     * // Create many SharedRecipes
     * const sharedRecipe = await prisma.sharedRecipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SharedRecipeCreateManyArgs>(args?: SelectSubset<T, SharedRecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SharedRecipes and returns the data saved in the database.
     * @param {SharedRecipeCreateManyAndReturnArgs} args - Arguments to create many SharedRecipes.
     * @example
     * // Create many SharedRecipes
     * const sharedRecipe = await prisma.sharedRecipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SharedRecipes and only return the `id`
     * const sharedRecipeWithIdOnly = await prisma.sharedRecipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SharedRecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, SharedRecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedRecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SharedRecipe.
     * @param {SharedRecipeDeleteArgs} args - Arguments to delete one SharedRecipe.
     * @example
     * // Delete one SharedRecipe
     * const SharedRecipe = await prisma.sharedRecipe.delete({
     *   where: {
     *     // ... filter to delete one SharedRecipe
     *   }
     * })
     * 
     */
    delete<T extends SharedRecipeDeleteArgs>(args: SelectSubset<T, SharedRecipeDeleteArgs<ExtArgs>>): Prisma__SharedRecipeClient<$Result.GetResult<Prisma.$SharedRecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SharedRecipe.
     * @param {SharedRecipeUpdateArgs} args - Arguments to update one SharedRecipe.
     * @example
     * // Update one SharedRecipe
     * const sharedRecipe = await prisma.sharedRecipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SharedRecipeUpdateArgs>(args: SelectSubset<T, SharedRecipeUpdateArgs<ExtArgs>>): Prisma__SharedRecipeClient<$Result.GetResult<Prisma.$SharedRecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SharedRecipes.
     * @param {SharedRecipeDeleteManyArgs} args - Arguments to filter SharedRecipes to delete.
     * @example
     * // Delete a few SharedRecipes
     * const { count } = await prisma.sharedRecipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SharedRecipeDeleteManyArgs>(args?: SelectSubset<T, SharedRecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedRecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedRecipes
     * const sharedRecipe = await prisma.sharedRecipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SharedRecipeUpdateManyArgs>(args: SelectSubset<T, SharedRecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedRecipes and returns the data updated in the database.
     * @param {SharedRecipeUpdateManyAndReturnArgs} args - Arguments to update many SharedRecipes.
     * @example
     * // Update many SharedRecipes
     * const sharedRecipe = await prisma.sharedRecipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SharedRecipes and only return the `id`
     * const sharedRecipeWithIdOnly = await prisma.sharedRecipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SharedRecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, SharedRecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedRecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SharedRecipe.
     * @param {SharedRecipeUpsertArgs} args - Arguments to update or create a SharedRecipe.
     * @example
     * // Update or create a SharedRecipe
     * const sharedRecipe = await prisma.sharedRecipe.upsert({
     *   create: {
     *     // ... data to create a SharedRecipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedRecipe we want to update
     *   }
     * })
     */
    upsert<T extends SharedRecipeUpsertArgs>(args: SelectSubset<T, SharedRecipeUpsertArgs<ExtArgs>>): Prisma__SharedRecipeClient<$Result.GetResult<Prisma.$SharedRecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SharedRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedRecipeCountArgs} args - Arguments to filter SharedRecipes to count.
     * @example
     * // Count the number of SharedRecipes
     * const count = await prisma.sharedRecipe.count({
     *   where: {
     *     // ... the filter for the SharedRecipes we want to count
     *   }
     * })
    **/
    count<T extends SharedRecipeCountArgs>(
      args?: Subset<T, SharedRecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharedRecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharedRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedRecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SharedRecipeAggregateArgs>(args: Subset<T, SharedRecipeAggregateArgs>): Prisma.PrismaPromise<GetSharedRecipeAggregateType<T>>

    /**
     * Group by SharedRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedRecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SharedRecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharedRecipeGroupByArgs['orderBy'] }
        : { orderBy?: SharedRecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SharedRecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharedRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SharedRecipe model
   */
  readonly fields: SharedRecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharedRecipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharedRecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sharedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SharedRecipe model
   */
  interface SharedRecipeFieldRefs {
    readonly id: FieldRef<"SharedRecipe", 'String'>
    readonly shareId: FieldRef<"SharedRecipe", 'String'>
    readonly createdAt: FieldRef<"SharedRecipe", 'DateTime'>
    readonly expiresAt: FieldRef<"SharedRecipe", 'DateTime'>
    readonly recipeId: FieldRef<"SharedRecipe", 'String'>
    readonly sharedById: FieldRef<"SharedRecipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SharedRecipe findUnique
   */
  export type SharedRecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedRecipe
     */
    select?: SharedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedRecipe
     */
    omit?: SharedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SharedRecipe to fetch.
     */
    where: SharedRecipeWhereUniqueInput
  }

  /**
   * SharedRecipe findUniqueOrThrow
   */
  export type SharedRecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedRecipe
     */
    select?: SharedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedRecipe
     */
    omit?: SharedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SharedRecipe to fetch.
     */
    where: SharedRecipeWhereUniqueInput
  }

  /**
   * SharedRecipe findFirst
   */
  export type SharedRecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedRecipe
     */
    select?: SharedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedRecipe
     */
    omit?: SharedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SharedRecipe to fetch.
     */
    where?: SharedRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedRecipes to fetch.
     */
    orderBy?: SharedRecipeOrderByWithRelationInput | SharedRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedRecipes.
     */
    cursor?: SharedRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedRecipes.
     */
    distinct?: SharedRecipeScalarFieldEnum | SharedRecipeScalarFieldEnum[]
  }

  /**
   * SharedRecipe findFirstOrThrow
   */
  export type SharedRecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedRecipe
     */
    select?: SharedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedRecipe
     */
    omit?: SharedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SharedRecipe to fetch.
     */
    where?: SharedRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedRecipes to fetch.
     */
    orderBy?: SharedRecipeOrderByWithRelationInput | SharedRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedRecipes.
     */
    cursor?: SharedRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedRecipes.
     */
    distinct?: SharedRecipeScalarFieldEnum | SharedRecipeScalarFieldEnum[]
  }

  /**
   * SharedRecipe findMany
   */
  export type SharedRecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedRecipe
     */
    select?: SharedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedRecipe
     */
    omit?: SharedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SharedRecipes to fetch.
     */
    where?: SharedRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedRecipes to fetch.
     */
    orderBy?: SharedRecipeOrderByWithRelationInput | SharedRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SharedRecipes.
     */
    cursor?: SharedRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedRecipes.
     */
    skip?: number
    distinct?: SharedRecipeScalarFieldEnum | SharedRecipeScalarFieldEnum[]
  }

  /**
   * SharedRecipe create
   */
  export type SharedRecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedRecipe
     */
    select?: SharedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedRecipe
     */
    omit?: SharedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedRecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a SharedRecipe.
     */
    data: XOR<SharedRecipeCreateInput, SharedRecipeUncheckedCreateInput>
  }

  /**
   * SharedRecipe createMany
   */
  export type SharedRecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SharedRecipes.
     */
    data: SharedRecipeCreateManyInput | SharedRecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SharedRecipe createManyAndReturn
   */
  export type SharedRecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedRecipe
     */
    select?: SharedRecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharedRecipe
     */
    omit?: SharedRecipeOmit<ExtArgs> | null
    /**
     * The data used to create many SharedRecipes.
     */
    data: SharedRecipeCreateManyInput | SharedRecipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedRecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SharedRecipe update
   */
  export type SharedRecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedRecipe
     */
    select?: SharedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedRecipe
     */
    omit?: SharedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedRecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a SharedRecipe.
     */
    data: XOR<SharedRecipeUpdateInput, SharedRecipeUncheckedUpdateInput>
    /**
     * Choose, which SharedRecipe to update.
     */
    where: SharedRecipeWhereUniqueInput
  }

  /**
   * SharedRecipe updateMany
   */
  export type SharedRecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SharedRecipes.
     */
    data: XOR<SharedRecipeUpdateManyMutationInput, SharedRecipeUncheckedUpdateManyInput>
    /**
     * Filter which SharedRecipes to update
     */
    where?: SharedRecipeWhereInput
    /**
     * Limit how many SharedRecipes to update.
     */
    limit?: number
  }

  /**
   * SharedRecipe updateManyAndReturn
   */
  export type SharedRecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedRecipe
     */
    select?: SharedRecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharedRecipe
     */
    omit?: SharedRecipeOmit<ExtArgs> | null
    /**
     * The data used to update SharedRecipes.
     */
    data: XOR<SharedRecipeUpdateManyMutationInput, SharedRecipeUncheckedUpdateManyInput>
    /**
     * Filter which SharedRecipes to update
     */
    where?: SharedRecipeWhereInput
    /**
     * Limit how many SharedRecipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedRecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SharedRecipe upsert
   */
  export type SharedRecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedRecipe
     */
    select?: SharedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedRecipe
     */
    omit?: SharedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedRecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the SharedRecipe to update in case it exists.
     */
    where: SharedRecipeWhereUniqueInput
    /**
     * In case the SharedRecipe found by the `where` argument doesn't exist, create a new SharedRecipe with this data.
     */
    create: XOR<SharedRecipeCreateInput, SharedRecipeUncheckedCreateInput>
    /**
     * In case the SharedRecipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharedRecipeUpdateInput, SharedRecipeUncheckedUpdateInput>
  }

  /**
   * SharedRecipe delete
   */
  export type SharedRecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedRecipe
     */
    select?: SharedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedRecipe
     */
    omit?: SharedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedRecipeInclude<ExtArgs> | null
    /**
     * Filter which SharedRecipe to delete.
     */
    where: SharedRecipeWhereUniqueInput
  }

  /**
   * SharedRecipe deleteMany
   */
  export type SharedRecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedRecipes to delete
     */
    where?: SharedRecipeWhereInput
    /**
     * Limit how many SharedRecipes to delete.
     */
    limit?: number
  }

  /**
   * SharedRecipe without action
   */
  export type SharedRecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedRecipe
     */
    select?: SharedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedRecipe
     */
    omit?: SharedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedRecipeInclude<ExtArgs> | null
  }


  /**
   * Model MealPlan
   */

  export type AggregateMealPlan = {
    _count: MealPlanCountAggregateOutputType | null
    _min: MealPlanMinAggregateOutputType | null
    _max: MealPlanMaxAggregateOutputType | null
  }

  export type MealPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type MealPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type MealPlanCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type MealPlanMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MealPlanMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MealPlanCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type MealPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlan to aggregate.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealPlans
    **/
    _count?: true | MealPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealPlanMaxAggregateInputType
  }

  export type GetMealPlanAggregateType<T extends MealPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateMealPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealPlan[P]>
      : GetScalarType<T[P], AggregateMealPlan[P]>
  }




  export type MealPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanWhereInput
    orderBy?: MealPlanOrderByWithAggregationInput | MealPlanOrderByWithAggregationInput[]
    by: MealPlanScalarFieldEnum[] | MealPlanScalarFieldEnum
    having?: MealPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealPlanCountAggregateInputType | true
    _min?: MealPlanMinAggregateInputType
    _max?: MealPlanMaxAggregateInputType
  }

  export type MealPlanGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: MealPlanCountAggregateOutputType | null
    _min: MealPlanMinAggregateOutputType | null
    _max: MealPlanMaxAggregateOutputType | null
  }

  type GetMealPlanGroupByPayload<T extends MealPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealPlanGroupByOutputType[P]>
            : GetScalarType<T[P], MealPlanGroupByOutputType[P]>
        }
      >
    >


  export type MealPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | MealPlan$itemsArgs<ExtArgs>
    _count?: boolean | MealPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type MealPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["mealPlan"]>
  export type MealPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | MealPlan$itemsArgs<ExtArgs>
    _count?: boolean | MealPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MealPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MealPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$MealPlanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["mealPlan"]>
    composites: {}
  }

  type MealPlanGetPayload<S extends boolean | null | undefined | MealPlanDefaultArgs> = $Result.GetResult<Prisma.$MealPlanPayload, S>

  type MealPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealPlanCountAggregateInputType | true
    }

  export interface MealPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealPlan'], meta: { name: 'MealPlan' } }
    /**
     * Find zero or one MealPlan that matches the filter.
     * @param {MealPlanFindUniqueArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealPlanFindUniqueArgs>(args: SelectSubset<T, MealPlanFindUniqueArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealPlanFindUniqueOrThrowArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, MealPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindFirstArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealPlanFindFirstArgs>(args?: SelectSubset<T, MealPlanFindFirstArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindFirstOrThrowArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, MealPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealPlans
     * const mealPlans = await prisma.mealPlan.findMany()
     * 
     * // Get first 10 MealPlans
     * const mealPlans = await prisma.mealPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealPlanFindManyArgs>(args?: SelectSubset<T, MealPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealPlan.
     * @param {MealPlanCreateArgs} args - Arguments to create a MealPlan.
     * @example
     * // Create one MealPlan
     * const MealPlan = await prisma.mealPlan.create({
     *   data: {
     *     // ... data to create a MealPlan
     *   }
     * })
     * 
     */
    create<T extends MealPlanCreateArgs>(args: SelectSubset<T, MealPlanCreateArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealPlans.
     * @param {MealPlanCreateManyArgs} args - Arguments to create many MealPlans.
     * @example
     * // Create many MealPlans
     * const mealPlan = await prisma.mealPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealPlanCreateManyArgs>(args?: SelectSubset<T, MealPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealPlans and returns the data saved in the database.
     * @param {MealPlanCreateManyAndReturnArgs} args - Arguments to create many MealPlans.
     * @example
     * // Create many MealPlans
     * const mealPlan = await prisma.mealPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealPlans and only return the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, MealPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealPlan.
     * @param {MealPlanDeleteArgs} args - Arguments to delete one MealPlan.
     * @example
     * // Delete one MealPlan
     * const MealPlan = await prisma.mealPlan.delete({
     *   where: {
     *     // ... filter to delete one MealPlan
     *   }
     * })
     * 
     */
    delete<T extends MealPlanDeleteArgs>(args: SelectSubset<T, MealPlanDeleteArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealPlan.
     * @param {MealPlanUpdateArgs} args - Arguments to update one MealPlan.
     * @example
     * // Update one MealPlan
     * const mealPlan = await prisma.mealPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealPlanUpdateArgs>(args: SelectSubset<T, MealPlanUpdateArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealPlans.
     * @param {MealPlanDeleteManyArgs} args - Arguments to filter MealPlans to delete.
     * @example
     * // Delete a few MealPlans
     * const { count } = await prisma.mealPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealPlanDeleteManyArgs>(args?: SelectSubset<T, MealPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealPlans
     * const mealPlan = await prisma.mealPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealPlanUpdateManyArgs>(args: SelectSubset<T, MealPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlans and returns the data updated in the database.
     * @param {MealPlanUpdateManyAndReturnArgs} args - Arguments to update many MealPlans.
     * @example
     * // Update many MealPlans
     * const mealPlan = await prisma.mealPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealPlans and only return the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, MealPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealPlan.
     * @param {MealPlanUpsertArgs} args - Arguments to update or create a MealPlan.
     * @example
     * // Update or create a MealPlan
     * const mealPlan = await prisma.mealPlan.upsert({
     *   create: {
     *     // ... data to create a MealPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealPlan we want to update
     *   }
     * })
     */
    upsert<T extends MealPlanUpsertArgs>(args: SelectSubset<T, MealPlanUpsertArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanCountArgs} args - Arguments to filter MealPlans to count.
     * @example
     * // Count the number of MealPlans
     * const count = await prisma.mealPlan.count({
     *   where: {
     *     // ... the filter for the MealPlans we want to count
     *   }
     * })
    **/
    count<T extends MealPlanCountArgs>(
      args?: Subset<T, MealPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealPlanAggregateArgs>(args: Subset<T, MealPlanAggregateArgs>): Prisma.PrismaPromise<GetMealPlanAggregateType<T>>

    /**
     * Group by MealPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealPlanGroupByArgs['orderBy'] }
        : { orderBy?: MealPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealPlan model
   */
  readonly fields: MealPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends MealPlan$itemsArgs<ExtArgs> = {}>(args?: Subset<T, MealPlan$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MealPlan model
   */
  interface MealPlanFieldRefs {
    readonly id: FieldRef<"MealPlan", 'String'>
    readonly name: FieldRef<"MealPlan", 'String'>
    readonly createdAt: FieldRef<"MealPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"MealPlan", 'DateTime'>
    readonly userId: FieldRef<"MealPlan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MealPlan findUnique
   */
  export type MealPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan findUniqueOrThrow
   */
  export type MealPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan findFirst
   */
  export type MealPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlans.
     */
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan findFirstOrThrow
   */
  export type MealPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlans.
     */
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan findMany
   */
  export type MealPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlans to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan create
   */
  export type MealPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a MealPlan.
     */
    data: XOR<MealPlanCreateInput, MealPlanUncheckedCreateInput>
  }

  /**
   * MealPlan createMany
   */
  export type MealPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealPlans.
     */
    data: MealPlanCreateManyInput | MealPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealPlan createManyAndReturn
   */
  export type MealPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * The data used to create many MealPlans.
     */
    data: MealPlanCreateManyInput | MealPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealPlan update
   */
  export type MealPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a MealPlan.
     */
    data: XOR<MealPlanUpdateInput, MealPlanUncheckedUpdateInput>
    /**
     * Choose, which MealPlan to update.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan updateMany
   */
  export type MealPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealPlans.
     */
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyInput>
    /**
     * Filter which MealPlans to update
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to update.
     */
    limit?: number
  }

  /**
   * MealPlan updateManyAndReturn
   */
  export type MealPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * The data used to update MealPlans.
     */
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyInput>
    /**
     * Filter which MealPlans to update
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealPlan upsert
   */
  export type MealPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the MealPlan to update in case it exists.
     */
    where: MealPlanWhereUniqueInput
    /**
     * In case the MealPlan found by the `where` argument doesn't exist, create a new MealPlan with this data.
     */
    create: XOR<MealPlanCreateInput, MealPlanUncheckedCreateInput>
    /**
     * In case the MealPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealPlanUpdateInput, MealPlanUncheckedUpdateInput>
  }

  /**
   * MealPlan delete
   */
  export type MealPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter which MealPlan to delete.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan deleteMany
   */
  export type MealPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlans to delete
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to delete.
     */
    limit?: number
  }

  /**
   * MealPlan.items
   */
  export type MealPlan$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    where?: MealPlanItemWhereInput
    orderBy?: MealPlanItemOrderByWithRelationInput | MealPlanItemOrderByWithRelationInput[]
    cursor?: MealPlanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealPlanItemScalarFieldEnum | MealPlanItemScalarFieldEnum[]
  }

  /**
   * MealPlan without action
   */
  export type MealPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
  }


  /**
   * Model MealPlanItem
   */

  export type AggregateMealPlanItem = {
    _count: MealPlanItemCountAggregateOutputType | null
    _avg: MealPlanItemAvgAggregateOutputType | null
    _sum: MealPlanItemSumAggregateOutputType | null
    _min: MealPlanItemMinAggregateOutputType | null
    _max: MealPlanItemMaxAggregateOutputType | null
  }

  export type MealPlanItemAvgAggregateOutputType = {
    servings: number | null
  }

  export type MealPlanItemSumAggregateOutputType = {
    servings: number | null
  }

  export type MealPlanItemMinAggregateOutputType = {
    id: string | null
    date: Date | null
    mealType: string | null
    servings: number | null
    notes: string | null
    mealPlanId: string | null
    recipeId: string | null
  }

  export type MealPlanItemMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    mealType: string | null
    servings: number | null
    notes: string | null
    mealPlanId: string | null
    recipeId: string | null
  }

  export type MealPlanItemCountAggregateOutputType = {
    id: number
    date: number
    mealType: number
    servings: number
    notes: number
    mealPlanId: number
    recipeId: number
    _all: number
  }


  export type MealPlanItemAvgAggregateInputType = {
    servings?: true
  }

  export type MealPlanItemSumAggregateInputType = {
    servings?: true
  }

  export type MealPlanItemMinAggregateInputType = {
    id?: true
    date?: true
    mealType?: true
    servings?: true
    notes?: true
    mealPlanId?: true
    recipeId?: true
  }

  export type MealPlanItemMaxAggregateInputType = {
    id?: true
    date?: true
    mealType?: true
    servings?: true
    notes?: true
    mealPlanId?: true
    recipeId?: true
  }

  export type MealPlanItemCountAggregateInputType = {
    id?: true
    date?: true
    mealType?: true
    servings?: true
    notes?: true
    mealPlanId?: true
    recipeId?: true
    _all?: true
  }

  export type MealPlanItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlanItem to aggregate.
     */
    where?: MealPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlanItems to fetch.
     */
    orderBy?: MealPlanItemOrderByWithRelationInput | MealPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealPlanItems
    **/
    _count?: true | MealPlanItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealPlanItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealPlanItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealPlanItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealPlanItemMaxAggregateInputType
  }

  export type GetMealPlanItemAggregateType<T extends MealPlanItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMealPlanItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealPlanItem[P]>
      : GetScalarType<T[P], AggregateMealPlanItem[P]>
  }




  export type MealPlanItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanItemWhereInput
    orderBy?: MealPlanItemOrderByWithAggregationInput | MealPlanItemOrderByWithAggregationInput[]
    by: MealPlanItemScalarFieldEnum[] | MealPlanItemScalarFieldEnum
    having?: MealPlanItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealPlanItemCountAggregateInputType | true
    _avg?: MealPlanItemAvgAggregateInputType
    _sum?: MealPlanItemSumAggregateInputType
    _min?: MealPlanItemMinAggregateInputType
    _max?: MealPlanItemMaxAggregateInputType
  }

  export type MealPlanItemGroupByOutputType = {
    id: string
    date: Date
    mealType: string
    servings: number
    notes: string | null
    mealPlanId: string
    recipeId: string
    _count: MealPlanItemCountAggregateOutputType | null
    _avg: MealPlanItemAvgAggregateOutputType | null
    _sum: MealPlanItemSumAggregateOutputType | null
    _min: MealPlanItemMinAggregateOutputType | null
    _max: MealPlanItemMaxAggregateOutputType | null
  }

  type GetMealPlanItemGroupByPayload<T extends MealPlanItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealPlanItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealPlanItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealPlanItemGroupByOutputType[P]>
            : GetScalarType<T[P], MealPlanItemGroupByOutputType[P]>
        }
      >
    >


  export type MealPlanItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    mealType?: boolean
    servings?: boolean
    notes?: boolean
    mealPlanId?: boolean
    recipeId?: boolean
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlanItem"]>

  export type MealPlanItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    mealType?: boolean
    servings?: boolean
    notes?: boolean
    mealPlanId?: boolean
    recipeId?: boolean
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlanItem"]>

  export type MealPlanItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    mealType?: boolean
    servings?: boolean
    notes?: boolean
    mealPlanId?: boolean
    recipeId?: boolean
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlanItem"]>

  export type MealPlanItemSelectScalar = {
    id?: boolean
    date?: boolean
    mealType?: boolean
    servings?: boolean
    notes?: boolean
    mealPlanId?: boolean
    recipeId?: boolean
  }

  export type MealPlanItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "mealType" | "servings" | "notes" | "mealPlanId" | "recipeId", ExtArgs["result"]["mealPlanItem"]>
  export type MealPlanItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type MealPlanItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type MealPlanItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealPlan?: boolean | MealPlanDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $MealPlanItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealPlanItem"
    objects: {
      mealPlan: Prisma.$MealPlanPayload<ExtArgs>
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      mealType: string
      servings: number
      notes: string | null
      mealPlanId: string
      recipeId: string
    }, ExtArgs["result"]["mealPlanItem"]>
    composites: {}
  }

  type MealPlanItemGetPayload<S extends boolean | null | undefined | MealPlanItemDefaultArgs> = $Result.GetResult<Prisma.$MealPlanItemPayload, S>

  type MealPlanItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealPlanItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealPlanItemCountAggregateInputType | true
    }

  export interface MealPlanItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealPlanItem'], meta: { name: 'MealPlanItem' } }
    /**
     * Find zero or one MealPlanItem that matches the filter.
     * @param {MealPlanItemFindUniqueArgs} args - Arguments to find a MealPlanItem
     * @example
     * // Get one MealPlanItem
     * const mealPlanItem = await prisma.mealPlanItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealPlanItemFindUniqueArgs>(args: SelectSubset<T, MealPlanItemFindUniqueArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealPlanItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealPlanItemFindUniqueOrThrowArgs} args - Arguments to find a MealPlanItem
     * @example
     * // Get one MealPlanItem
     * const mealPlanItem = await prisma.mealPlanItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealPlanItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MealPlanItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlanItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanItemFindFirstArgs} args - Arguments to find a MealPlanItem
     * @example
     * // Get one MealPlanItem
     * const mealPlanItem = await prisma.mealPlanItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealPlanItemFindFirstArgs>(args?: SelectSubset<T, MealPlanItemFindFirstArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlanItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanItemFindFirstOrThrowArgs} args - Arguments to find a MealPlanItem
     * @example
     * // Get one MealPlanItem
     * const mealPlanItem = await prisma.mealPlanItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealPlanItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MealPlanItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealPlanItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealPlanItems
     * const mealPlanItems = await prisma.mealPlanItem.findMany()
     * 
     * // Get first 10 MealPlanItems
     * const mealPlanItems = await prisma.mealPlanItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealPlanItemWithIdOnly = await prisma.mealPlanItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealPlanItemFindManyArgs>(args?: SelectSubset<T, MealPlanItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealPlanItem.
     * @param {MealPlanItemCreateArgs} args - Arguments to create a MealPlanItem.
     * @example
     * // Create one MealPlanItem
     * const MealPlanItem = await prisma.mealPlanItem.create({
     *   data: {
     *     // ... data to create a MealPlanItem
     *   }
     * })
     * 
     */
    create<T extends MealPlanItemCreateArgs>(args: SelectSubset<T, MealPlanItemCreateArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealPlanItems.
     * @param {MealPlanItemCreateManyArgs} args - Arguments to create many MealPlanItems.
     * @example
     * // Create many MealPlanItems
     * const mealPlanItem = await prisma.mealPlanItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealPlanItemCreateManyArgs>(args?: SelectSubset<T, MealPlanItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealPlanItems and returns the data saved in the database.
     * @param {MealPlanItemCreateManyAndReturnArgs} args - Arguments to create many MealPlanItems.
     * @example
     * // Create many MealPlanItems
     * const mealPlanItem = await prisma.mealPlanItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealPlanItems and only return the `id`
     * const mealPlanItemWithIdOnly = await prisma.mealPlanItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealPlanItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MealPlanItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealPlanItem.
     * @param {MealPlanItemDeleteArgs} args - Arguments to delete one MealPlanItem.
     * @example
     * // Delete one MealPlanItem
     * const MealPlanItem = await prisma.mealPlanItem.delete({
     *   where: {
     *     // ... filter to delete one MealPlanItem
     *   }
     * })
     * 
     */
    delete<T extends MealPlanItemDeleteArgs>(args: SelectSubset<T, MealPlanItemDeleteArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealPlanItem.
     * @param {MealPlanItemUpdateArgs} args - Arguments to update one MealPlanItem.
     * @example
     * // Update one MealPlanItem
     * const mealPlanItem = await prisma.mealPlanItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealPlanItemUpdateArgs>(args: SelectSubset<T, MealPlanItemUpdateArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealPlanItems.
     * @param {MealPlanItemDeleteManyArgs} args - Arguments to filter MealPlanItems to delete.
     * @example
     * // Delete a few MealPlanItems
     * const { count } = await prisma.mealPlanItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealPlanItemDeleteManyArgs>(args?: SelectSubset<T, MealPlanItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealPlanItems
     * const mealPlanItem = await prisma.mealPlanItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealPlanItemUpdateManyArgs>(args: SelectSubset<T, MealPlanItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlanItems and returns the data updated in the database.
     * @param {MealPlanItemUpdateManyAndReturnArgs} args - Arguments to update many MealPlanItems.
     * @example
     * // Update many MealPlanItems
     * const mealPlanItem = await prisma.mealPlanItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealPlanItems and only return the `id`
     * const mealPlanItemWithIdOnly = await prisma.mealPlanItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealPlanItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MealPlanItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealPlanItem.
     * @param {MealPlanItemUpsertArgs} args - Arguments to update or create a MealPlanItem.
     * @example
     * // Update or create a MealPlanItem
     * const mealPlanItem = await prisma.mealPlanItem.upsert({
     *   create: {
     *     // ... data to create a MealPlanItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealPlanItem we want to update
     *   }
     * })
     */
    upsert<T extends MealPlanItemUpsertArgs>(args: SelectSubset<T, MealPlanItemUpsertArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealPlanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanItemCountArgs} args - Arguments to filter MealPlanItems to count.
     * @example
     * // Count the number of MealPlanItems
     * const count = await prisma.mealPlanItem.count({
     *   where: {
     *     // ... the filter for the MealPlanItems we want to count
     *   }
     * })
    **/
    count<T extends MealPlanItemCountArgs>(
      args?: Subset<T, MealPlanItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealPlanItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealPlanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealPlanItemAggregateArgs>(args: Subset<T, MealPlanItemAggregateArgs>): Prisma.PrismaPromise<GetMealPlanItemAggregateType<T>>

    /**
     * Group by MealPlanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealPlanItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealPlanItemGroupByArgs['orderBy'] }
        : { orderBy?: MealPlanItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealPlanItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealPlanItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealPlanItem model
   */
  readonly fields: MealPlanItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealPlanItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealPlanItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mealPlan<T extends MealPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealPlanDefaultArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MealPlanItem model
   */
  interface MealPlanItemFieldRefs {
    readonly id: FieldRef<"MealPlanItem", 'String'>
    readonly date: FieldRef<"MealPlanItem", 'DateTime'>
    readonly mealType: FieldRef<"MealPlanItem", 'String'>
    readonly servings: FieldRef<"MealPlanItem", 'Int'>
    readonly notes: FieldRef<"MealPlanItem", 'String'>
    readonly mealPlanId: FieldRef<"MealPlanItem", 'String'>
    readonly recipeId: FieldRef<"MealPlanItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MealPlanItem findUnique
   */
  export type MealPlanItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which MealPlanItem to fetch.
     */
    where: MealPlanItemWhereUniqueInput
  }

  /**
   * MealPlanItem findUniqueOrThrow
   */
  export type MealPlanItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which MealPlanItem to fetch.
     */
    where: MealPlanItemWhereUniqueInput
  }

  /**
   * MealPlanItem findFirst
   */
  export type MealPlanItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which MealPlanItem to fetch.
     */
    where?: MealPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlanItems to fetch.
     */
    orderBy?: MealPlanItemOrderByWithRelationInput | MealPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlanItems.
     */
    cursor?: MealPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlanItems.
     */
    distinct?: MealPlanItemScalarFieldEnum | MealPlanItemScalarFieldEnum[]
  }

  /**
   * MealPlanItem findFirstOrThrow
   */
  export type MealPlanItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which MealPlanItem to fetch.
     */
    where?: MealPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlanItems to fetch.
     */
    orderBy?: MealPlanItemOrderByWithRelationInput | MealPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlanItems.
     */
    cursor?: MealPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlanItems.
     */
    distinct?: MealPlanItemScalarFieldEnum | MealPlanItemScalarFieldEnum[]
  }

  /**
   * MealPlanItem findMany
   */
  export type MealPlanItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which MealPlanItems to fetch.
     */
    where?: MealPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlanItems to fetch.
     */
    orderBy?: MealPlanItemOrderByWithRelationInput | MealPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealPlanItems.
     */
    cursor?: MealPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlanItems.
     */
    skip?: number
    distinct?: MealPlanItemScalarFieldEnum | MealPlanItemScalarFieldEnum[]
  }

  /**
   * MealPlanItem create
   */
  export type MealPlanItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MealPlanItem.
     */
    data: XOR<MealPlanItemCreateInput, MealPlanItemUncheckedCreateInput>
  }

  /**
   * MealPlanItem createMany
   */
  export type MealPlanItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealPlanItems.
     */
    data: MealPlanItemCreateManyInput | MealPlanItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealPlanItem createManyAndReturn
   */
  export type MealPlanItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * The data used to create many MealPlanItems.
     */
    data: MealPlanItemCreateManyInput | MealPlanItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealPlanItem update
   */
  export type MealPlanItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MealPlanItem.
     */
    data: XOR<MealPlanItemUpdateInput, MealPlanItemUncheckedUpdateInput>
    /**
     * Choose, which MealPlanItem to update.
     */
    where: MealPlanItemWhereUniqueInput
  }

  /**
   * MealPlanItem updateMany
   */
  export type MealPlanItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealPlanItems.
     */
    data: XOR<MealPlanItemUpdateManyMutationInput, MealPlanItemUncheckedUpdateManyInput>
    /**
     * Filter which MealPlanItems to update
     */
    where?: MealPlanItemWhereInput
    /**
     * Limit how many MealPlanItems to update.
     */
    limit?: number
  }

  /**
   * MealPlanItem updateManyAndReturn
   */
  export type MealPlanItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * The data used to update MealPlanItems.
     */
    data: XOR<MealPlanItemUpdateManyMutationInput, MealPlanItemUncheckedUpdateManyInput>
    /**
     * Filter which MealPlanItems to update
     */
    where?: MealPlanItemWhereInput
    /**
     * Limit how many MealPlanItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealPlanItem upsert
   */
  export type MealPlanItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MealPlanItem to update in case it exists.
     */
    where: MealPlanItemWhereUniqueInput
    /**
     * In case the MealPlanItem found by the `where` argument doesn't exist, create a new MealPlanItem with this data.
     */
    create: XOR<MealPlanItemCreateInput, MealPlanItemUncheckedCreateInput>
    /**
     * In case the MealPlanItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealPlanItemUpdateInput, MealPlanItemUncheckedUpdateInput>
  }

  /**
   * MealPlanItem delete
   */
  export type MealPlanItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * Filter which MealPlanItem to delete.
     */
    where: MealPlanItemWhereUniqueInput
  }

  /**
   * MealPlanItem deleteMany
   */
  export type MealPlanItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlanItems to delete
     */
    where?: MealPlanItemWhereInput
    /**
     * Limit how many MealPlanItems to delete.
     */
    limit?: number
  }

  /**
   * MealPlanItem without action
   */
  export type MealPlanItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const RecipeImageScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    key: 'key',
    imageData: 'imageData',
    mimeType: 'mimeType',
    recipeId: 'recipeId'
  };

  export type RecipeImageScalarFieldEnum = (typeof RecipeImageScalarFieldEnum)[keyof typeof RecipeImageScalarFieldEnum]


  export const RecipeComponentScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    storeable: 'storeable',
    servings: 'servings',
    order: 'order',
    recipeId: 'recipeId'
  };

  export type RecipeComponentScalarFieldEnum = (typeof RecipeComponentScalarFieldEnum)[keyof typeof RecipeComponentScalarFieldEnum]


  export const RecipeIngredientScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    quantity: 'quantity',
    unit: 'unit',
    order: 'order',
    preparation: 'preparation',
    componentId: 'componentId'
  };

  export type RecipeIngredientScalarFieldEnum = (typeof RecipeIngredientScalarFieldEnum)[keyof typeof RecipeIngredientScalarFieldEnum]


  export const RecipeInstructionScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    instruction: 'instruction',
    order: 'order',
    componentId: 'componentId'
  };

  export type RecipeInstructionScalarFieldEnum = (typeof RecipeInstructionScalarFieldEnum)[keyof typeof RecipeInstructionScalarFieldEnum]


  export const UserPreferenceScalarFieldEnum: {
    id: 'id',
    category: 'category',
    preference: 'preference',
    context: 'context',
    confidence: 'confidence',
    source: 'source',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type UserPreferenceScalarFieldEnum = (typeof UserPreferenceScalarFieldEnum)[keyof typeof UserPreferenceScalarFieldEnum]


  export const SharedRecipeScalarFieldEnum: {
    id: 'id',
    shareId: 'shareId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    recipeId: 'recipeId',
    sharedById: 'sharedById'
  };

  export type SharedRecipeScalarFieldEnum = (typeof SharedRecipeScalarFieldEnum)[keyof typeof SharedRecipeScalarFieldEnum]


  export const MealPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type MealPlanScalarFieldEnum = (typeof MealPlanScalarFieldEnum)[keyof typeof MealPlanScalarFieldEnum]


  export const MealPlanItemScalarFieldEnum: {
    id: 'id',
    date: 'date',
    mealType: 'mealType',
    servings: 'servings',
    notes: 'notes',
    mealPlanId: 'mealPlanId',
    recipeId: 'recipeId'
  };

  export type MealPlanItemScalarFieldEnum = (typeof MealPlanItemScalarFieldEnum)[keyof typeof MealPlanItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdById?: StringWithAggregatesFilter<"Post"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    recipes?: RecipeListRelationFilter
    preferences?: UserPreferenceListRelationFilter
    sharedRecipes?: SharedRecipeListRelationFilter
    mealPlans?: MealPlanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    recipes?: RecipeOrderByRelationAggregateInput
    preferences?: UserPreferenceOrderByRelationAggregateInput
    sharedRecipes?: SharedRecipeOrderByRelationAggregateInput
    mealPlans?: MealPlanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    recipes?: RecipeListRelationFilter
    preferences?: UserPreferenceListRelationFilter
    sharedRecipes?: SharedRecipeListRelationFilter
    mealPlans?: MealPlanListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: StringFilter<"Recipe"> | string
    uuid?: StringFilter<"Recipe"> | string
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
    createdById?: StringFilter<"Recipe"> | string
    images?: RecipeImageListRelationFilter
    components?: RecipeComponentListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    sharedRecipes?: SharedRecipeListRelationFilter
    mealPlanItems?: MealPlanItemListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    images?: RecipeImageOrderByRelationAggregateInput
    components?: RecipeComponentOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
    sharedRecipes?: SharedRecipeOrderByRelationAggregateInput
    mealPlanItems?: MealPlanItemOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uuid?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
    createdById?: StringFilter<"Recipe"> | string
    images?: RecipeImageListRelationFilter
    components?: RecipeComponentListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    sharedRecipes?: SharedRecipeListRelationFilter
    mealPlanItems?: MealPlanItemListRelationFilter
  }, "id" | "uuid">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recipe"> | string
    uuid?: StringWithAggregatesFilter<"Recipe"> | string
    name?: StringWithAggregatesFilter<"Recipe"> | string
    description?: StringWithAggregatesFilter<"Recipe"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    createdById?: StringWithAggregatesFilter<"Recipe"> | string
  }

  export type RecipeImageWhereInput = {
    AND?: RecipeImageWhereInput | RecipeImageWhereInput[]
    OR?: RecipeImageWhereInput[]
    NOT?: RecipeImageWhereInput | RecipeImageWhereInput[]
    id?: StringFilter<"RecipeImage"> | string
    timestamp?: BigIntFilter<"RecipeImage"> | bigint | number
    key?: StringFilter<"RecipeImage"> | string
    imageData?: StringFilter<"RecipeImage"> | string
    mimeType?: StringFilter<"RecipeImage"> | string
    recipeId?: StringFilter<"RecipeImage"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type RecipeImageOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    key?: SortOrder
    imageData?: SortOrder
    mimeType?: SortOrder
    recipeId?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
  }

  export type RecipeImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeImageWhereInput | RecipeImageWhereInput[]
    OR?: RecipeImageWhereInput[]
    NOT?: RecipeImageWhereInput | RecipeImageWhereInput[]
    timestamp?: BigIntFilter<"RecipeImage"> | bigint | number
    key?: StringFilter<"RecipeImage"> | string
    imageData?: StringFilter<"RecipeImage"> | string
    mimeType?: StringFilter<"RecipeImage"> | string
    recipeId?: StringFilter<"RecipeImage"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id">

  export type RecipeImageOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    key?: SortOrder
    imageData?: SortOrder
    mimeType?: SortOrder
    recipeId?: SortOrder
    _count?: RecipeImageCountOrderByAggregateInput
    _avg?: RecipeImageAvgOrderByAggregateInput
    _max?: RecipeImageMaxOrderByAggregateInput
    _min?: RecipeImageMinOrderByAggregateInput
    _sum?: RecipeImageSumOrderByAggregateInput
  }

  export type RecipeImageScalarWhereWithAggregatesInput = {
    AND?: RecipeImageScalarWhereWithAggregatesInput | RecipeImageScalarWhereWithAggregatesInput[]
    OR?: RecipeImageScalarWhereWithAggregatesInput[]
    NOT?: RecipeImageScalarWhereWithAggregatesInput | RecipeImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecipeImage"> | string
    timestamp?: BigIntWithAggregatesFilter<"RecipeImage"> | bigint | number
    key?: StringWithAggregatesFilter<"RecipeImage"> | string
    imageData?: StringWithAggregatesFilter<"RecipeImage"> | string
    mimeType?: StringWithAggregatesFilter<"RecipeImage"> | string
    recipeId?: StringWithAggregatesFilter<"RecipeImage"> | string
  }

  export type RecipeComponentWhereInput = {
    AND?: RecipeComponentWhereInput | RecipeComponentWhereInput[]
    OR?: RecipeComponentWhereInput[]
    NOT?: RecipeComponentWhereInput | RecipeComponentWhereInput[]
    id?: StringFilter<"RecipeComponent"> | string
    uuid?: StringFilter<"RecipeComponent"> | string
    name?: StringFilter<"RecipeComponent"> | string
    storeable?: BoolFilter<"RecipeComponent"> | boolean
    servings?: IntNullableFilter<"RecipeComponent"> | number | null
    order?: IntFilter<"RecipeComponent"> | number
    recipeId?: StringFilter<"RecipeComponent"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ingredients?: RecipeIngredientListRelationFilter
    instructions?: RecipeInstructionListRelationFilter
  }

  export type RecipeComponentOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    storeable?: SortOrder
    servings?: SortOrderInput | SortOrder
    order?: SortOrder
    recipeId?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    ingredients?: RecipeIngredientOrderByRelationAggregateInput
    instructions?: RecipeInstructionOrderByRelationAggregateInput
  }

  export type RecipeComponentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uuid?: string
    AND?: RecipeComponentWhereInput | RecipeComponentWhereInput[]
    OR?: RecipeComponentWhereInput[]
    NOT?: RecipeComponentWhereInput | RecipeComponentWhereInput[]
    name?: StringFilter<"RecipeComponent"> | string
    storeable?: BoolFilter<"RecipeComponent"> | boolean
    servings?: IntNullableFilter<"RecipeComponent"> | number | null
    order?: IntFilter<"RecipeComponent"> | number
    recipeId?: StringFilter<"RecipeComponent"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ingredients?: RecipeIngredientListRelationFilter
    instructions?: RecipeInstructionListRelationFilter
  }, "id" | "uuid">

  export type RecipeComponentOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    storeable?: SortOrder
    servings?: SortOrderInput | SortOrder
    order?: SortOrder
    recipeId?: SortOrder
    _count?: RecipeComponentCountOrderByAggregateInput
    _avg?: RecipeComponentAvgOrderByAggregateInput
    _max?: RecipeComponentMaxOrderByAggregateInput
    _min?: RecipeComponentMinOrderByAggregateInput
    _sum?: RecipeComponentSumOrderByAggregateInput
  }

  export type RecipeComponentScalarWhereWithAggregatesInput = {
    AND?: RecipeComponentScalarWhereWithAggregatesInput | RecipeComponentScalarWhereWithAggregatesInput[]
    OR?: RecipeComponentScalarWhereWithAggregatesInput[]
    NOT?: RecipeComponentScalarWhereWithAggregatesInput | RecipeComponentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecipeComponent"> | string
    uuid?: StringWithAggregatesFilter<"RecipeComponent"> | string
    name?: StringWithAggregatesFilter<"RecipeComponent"> | string
    storeable?: BoolWithAggregatesFilter<"RecipeComponent"> | boolean
    servings?: IntNullableWithAggregatesFilter<"RecipeComponent"> | number | null
    order?: IntWithAggregatesFilter<"RecipeComponent"> | number
    recipeId?: StringWithAggregatesFilter<"RecipeComponent"> | string
  }

  export type RecipeIngredientWhereInput = {
    AND?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    OR?: RecipeIngredientWhereInput[]
    NOT?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    id?: StringFilter<"RecipeIngredient"> | string
    uuid?: StringFilter<"RecipeIngredient"> | string
    name?: StringFilter<"RecipeIngredient"> | string
    quantity?: FloatFilter<"RecipeIngredient"> | number
    unit?: StringFilter<"RecipeIngredient"> | string
    order?: IntFilter<"RecipeIngredient"> | number
    preparation?: StringNullableFilter<"RecipeIngredient"> | string | null
    componentId?: StringFilter<"RecipeIngredient"> | string
    component?: XOR<RecipeComponentScalarRelationFilter, RecipeComponentWhereInput>
  }

  export type RecipeIngredientOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    order?: SortOrder
    preparation?: SortOrderInput | SortOrder
    componentId?: SortOrder
    component?: RecipeComponentOrderByWithRelationInput
  }

  export type RecipeIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uuid?: string
    AND?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    OR?: RecipeIngredientWhereInput[]
    NOT?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    name?: StringFilter<"RecipeIngredient"> | string
    quantity?: FloatFilter<"RecipeIngredient"> | number
    unit?: StringFilter<"RecipeIngredient"> | string
    order?: IntFilter<"RecipeIngredient"> | number
    preparation?: StringNullableFilter<"RecipeIngredient"> | string | null
    componentId?: StringFilter<"RecipeIngredient"> | string
    component?: XOR<RecipeComponentScalarRelationFilter, RecipeComponentWhereInput>
  }, "id" | "uuid">

  export type RecipeIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    order?: SortOrder
    preparation?: SortOrderInput | SortOrder
    componentId?: SortOrder
    _count?: RecipeIngredientCountOrderByAggregateInput
    _avg?: RecipeIngredientAvgOrderByAggregateInput
    _max?: RecipeIngredientMaxOrderByAggregateInput
    _min?: RecipeIngredientMinOrderByAggregateInput
    _sum?: RecipeIngredientSumOrderByAggregateInput
  }

  export type RecipeIngredientScalarWhereWithAggregatesInput = {
    AND?: RecipeIngredientScalarWhereWithAggregatesInput | RecipeIngredientScalarWhereWithAggregatesInput[]
    OR?: RecipeIngredientScalarWhereWithAggregatesInput[]
    NOT?: RecipeIngredientScalarWhereWithAggregatesInput | RecipeIngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecipeIngredient"> | string
    uuid?: StringWithAggregatesFilter<"RecipeIngredient"> | string
    name?: StringWithAggregatesFilter<"RecipeIngredient"> | string
    quantity?: FloatWithAggregatesFilter<"RecipeIngredient"> | number
    unit?: StringWithAggregatesFilter<"RecipeIngredient"> | string
    order?: IntWithAggregatesFilter<"RecipeIngredient"> | number
    preparation?: StringNullableWithAggregatesFilter<"RecipeIngredient"> | string | null
    componentId?: StringWithAggregatesFilter<"RecipeIngredient"> | string
  }

  export type RecipeInstructionWhereInput = {
    AND?: RecipeInstructionWhereInput | RecipeInstructionWhereInput[]
    OR?: RecipeInstructionWhereInput[]
    NOT?: RecipeInstructionWhereInput | RecipeInstructionWhereInput[]
    id?: StringFilter<"RecipeInstruction"> | string
    uuid?: StringFilter<"RecipeInstruction"> | string
    instruction?: StringFilter<"RecipeInstruction"> | string
    order?: IntFilter<"RecipeInstruction"> | number
    componentId?: StringFilter<"RecipeInstruction"> | string
    component?: XOR<RecipeComponentScalarRelationFilter, RecipeComponentWhereInput>
  }

  export type RecipeInstructionOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    instruction?: SortOrder
    order?: SortOrder
    componentId?: SortOrder
    component?: RecipeComponentOrderByWithRelationInput
  }

  export type RecipeInstructionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uuid?: string
    AND?: RecipeInstructionWhereInput | RecipeInstructionWhereInput[]
    OR?: RecipeInstructionWhereInput[]
    NOT?: RecipeInstructionWhereInput | RecipeInstructionWhereInput[]
    instruction?: StringFilter<"RecipeInstruction"> | string
    order?: IntFilter<"RecipeInstruction"> | number
    componentId?: StringFilter<"RecipeInstruction"> | string
    component?: XOR<RecipeComponentScalarRelationFilter, RecipeComponentWhereInput>
  }, "id" | "uuid">

  export type RecipeInstructionOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    instruction?: SortOrder
    order?: SortOrder
    componentId?: SortOrder
    _count?: RecipeInstructionCountOrderByAggregateInput
    _avg?: RecipeInstructionAvgOrderByAggregateInput
    _max?: RecipeInstructionMaxOrderByAggregateInput
    _min?: RecipeInstructionMinOrderByAggregateInput
    _sum?: RecipeInstructionSumOrderByAggregateInput
  }

  export type RecipeInstructionScalarWhereWithAggregatesInput = {
    AND?: RecipeInstructionScalarWhereWithAggregatesInput | RecipeInstructionScalarWhereWithAggregatesInput[]
    OR?: RecipeInstructionScalarWhereWithAggregatesInput[]
    NOT?: RecipeInstructionScalarWhereWithAggregatesInput | RecipeInstructionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecipeInstruction"> | string
    uuid?: StringWithAggregatesFilter<"RecipeInstruction"> | string
    instruction?: StringWithAggregatesFilter<"RecipeInstruction"> | string
    order?: IntWithAggregatesFilter<"RecipeInstruction"> | number
    componentId?: StringWithAggregatesFilter<"RecipeInstruction"> | string
  }

  export type UserPreferenceWhereInput = {
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    id?: StringFilter<"UserPreference"> | string
    category?: StringFilter<"UserPreference"> | string
    preference?: StringFilter<"UserPreference"> | string
    context?: StringNullableFilter<"UserPreference"> | string | null
    confidence?: FloatFilter<"UserPreference"> | number
    source?: StringFilter<"UserPreference"> | string
    isActive?: BoolFilter<"UserPreference"> | boolean
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
    userId?: StringFilter<"UserPreference"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    preference?: SortOrder
    context?: SortOrderInput | SortOrder
    confidence?: SortOrder
    source?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    category?: StringFilter<"UserPreference"> | string
    preference?: StringFilter<"UserPreference"> | string
    context?: StringNullableFilter<"UserPreference"> | string | null
    confidence?: FloatFilter<"UserPreference"> | number
    source?: StringFilter<"UserPreference"> | string
    isActive?: BoolFilter<"UserPreference"> | boolean
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
    userId?: StringFilter<"UserPreference"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    preference?: SortOrder
    context?: SortOrderInput | SortOrder
    confidence?: SortOrder
    source?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: UserPreferenceCountOrderByAggregateInput
    _avg?: UserPreferenceAvgOrderByAggregateInput
    _max?: UserPreferenceMaxOrderByAggregateInput
    _min?: UserPreferenceMinOrderByAggregateInput
    _sum?: UserPreferenceSumOrderByAggregateInput
  }

  export type UserPreferenceScalarWhereWithAggregatesInput = {
    AND?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    OR?: UserPreferenceScalarWhereWithAggregatesInput[]
    NOT?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPreference"> | string
    category?: StringWithAggregatesFilter<"UserPreference"> | string
    preference?: StringWithAggregatesFilter<"UserPreference"> | string
    context?: StringNullableWithAggregatesFilter<"UserPreference"> | string | null
    confidence?: FloatWithAggregatesFilter<"UserPreference"> | number
    source?: StringWithAggregatesFilter<"UserPreference"> | string
    isActive?: BoolWithAggregatesFilter<"UserPreference"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
    userId?: StringWithAggregatesFilter<"UserPreference"> | string
  }

  export type SharedRecipeWhereInput = {
    AND?: SharedRecipeWhereInput | SharedRecipeWhereInput[]
    OR?: SharedRecipeWhereInput[]
    NOT?: SharedRecipeWhereInput | SharedRecipeWhereInput[]
    id?: StringFilter<"SharedRecipe"> | string
    shareId?: StringFilter<"SharedRecipe"> | string
    createdAt?: DateTimeFilter<"SharedRecipe"> | Date | string
    expiresAt?: DateTimeNullableFilter<"SharedRecipe"> | Date | string | null
    recipeId?: StringFilter<"SharedRecipe"> | string
    sharedById?: StringFilter<"SharedRecipe"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    sharedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SharedRecipeOrderByWithRelationInput = {
    id?: SortOrder
    shareId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    recipeId?: SortOrder
    sharedById?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    sharedBy?: UserOrderByWithRelationInput
  }

  export type SharedRecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shareId?: string
    AND?: SharedRecipeWhereInput | SharedRecipeWhereInput[]
    OR?: SharedRecipeWhereInput[]
    NOT?: SharedRecipeWhereInput | SharedRecipeWhereInput[]
    createdAt?: DateTimeFilter<"SharedRecipe"> | Date | string
    expiresAt?: DateTimeNullableFilter<"SharedRecipe"> | Date | string | null
    recipeId?: StringFilter<"SharedRecipe"> | string
    sharedById?: StringFilter<"SharedRecipe"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    sharedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "shareId">

  export type SharedRecipeOrderByWithAggregationInput = {
    id?: SortOrder
    shareId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    recipeId?: SortOrder
    sharedById?: SortOrder
    _count?: SharedRecipeCountOrderByAggregateInput
    _max?: SharedRecipeMaxOrderByAggregateInput
    _min?: SharedRecipeMinOrderByAggregateInput
  }

  export type SharedRecipeScalarWhereWithAggregatesInput = {
    AND?: SharedRecipeScalarWhereWithAggregatesInput | SharedRecipeScalarWhereWithAggregatesInput[]
    OR?: SharedRecipeScalarWhereWithAggregatesInput[]
    NOT?: SharedRecipeScalarWhereWithAggregatesInput | SharedRecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SharedRecipe"> | string
    shareId?: StringWithAggregatesFilter<"SharedRecipe"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SharedRecipe"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"SharedRecipe"> | Date | string | null
    recipeId?: StringWithAggregatesFilter<"SharedRecipe"> | string
    sharedById?: StringWithAggregatesFilter<"SharedRecipe"> | string
  }

  export type MealPlanWhereInput = {
    AND?: MealPlanWhereInput | MealPlanWhereInput[]
    OR?: MealPlanWhereInput[]
    NOT?: MealPlanWhereInput | MealPlanWhereInput[]
    id?: StringFilter<"MealPlan"> | string
    name?: StringFilter<"MealPlan"> | string
    createdAt?: DateTimeFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MealPlan"> | Date | string
    userId?: StringFilter<"MealPlan"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: MealPlanItemListRelationFilter
  }

  export type MealPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: MealPlanItemOrderByRelationAggregateInput
  }

  export type MealPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealPlanWhereInput | MealPlanWhereInput[]
    OR?: MealPlanWhereInput[]
    NOT?: MealPlanWhereInput | MealPlanWhereInput[]
    name?: StringFilter<"MealPlan"> | string
    createdAt?: DateTimeFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MealPlan"> | Date | string
    userId?: StringFilter<"MealPlan"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: MealPlanItemListRelationFilter
  }, "id">

  export type MealPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: MealPlanCountOrderByAggregateInput
    _max?: MealPlanMaxOrderByAggregateInput
    _min?: MealPlanMinOrderByAggregateInput
  }

  export type MealPlanScalarWhereWithAggregatesInput = {
    AND?: MealPlanScalarWhereWithAggregatesInput | MealPlanScalarWhereWithAggregatesInput[]
    OR?: MealPlanScalarWhereWithAggregatesInput[]
    NOT?: MealPlanScalarWhereWithAggregatesInput | MealPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealPlan"> | string
    name?: StringWithAggregatesFilter<"MealPlan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MealPlan"> | Date | string
    userId?: StringWithAggregatesFilter<"MealPlan"> | string
  }

  export type MealPlanItemWhereInput = {
    AND?: MealPlanItemWhereInput | MealPlanItemWhereInput[]
    OR?: MealPlanItemWhereInput[]
    NOT?: MealPlanItemWhereInput | MealPlanItemWhereInput[]
    id?: StringFilter<"MealPlanItem"> | string
    date?: DateTimeFilter<"MealPlanItem"> | Date | string
    mealType?: StringFilter<"MealPlanItem"> | string
    servings?: IntFilter<"MealPlanItem"> | number
    notes?: StringNullableFilter<"MealPlanItem"> | string | null
    mealPlanId?: StringFilter<"MealPlanItem"> | string
    recipeId?: StringFilter<"MealPlanItem"> | string
    mealPlan?: XOR<MealPlanScalarRelationFilter, MealPlanWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type MealPlanItemOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    servings?: SortOrder
    notes?: SortOrderInput | SortOrder
    mealPlanId?: SortOrder
    recipeId?: SortOrder
    mealPlan?: MealPlanOrderByWithRelationInput
    recipe?: RecipeOrderByWithRelationInput
  }

  export type MealPlanItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealPlanItemWhereInput | MealPlanItemWhereInput[]
    OR?: MealPlanItemWhereInput[]
    NOT?: MealPlanItemWhereInput | MealPlanItemWhereInput[]
    date?: DateTimeFilter<"MealPlanItem"> | Date | string
    mealType?: StringFilter<"MealPlanItem"> | string
    servings?: IntFilter<"MealPlanItem"> | number
    notes?: StringNullableFilter<"MealPlanItem"> | string | null
    mealPlanId?: StringFilter<"MealPlanItem"> | string
    recipeId?: StringFilter<"MealPlanItem"> | string
    mealPlan?: XOR<MealPlanScalarRelationFilter, MealPlanWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id">

  export type MealPlanItemOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    servings?: SortOrder
    notes?: SortOrderInput | SortOrder
    mealPlanId?: SortOrder
    recipeId?: SortOrder
    _count?: MealPlanItemCountOrderByAggregateInput
    _avg?: MealPlanItemAvgOrderByAggregateInput
    _max?: MealPlanItemMaxOrderByAggregateInput
    _min?: MealPlanItemMinOrderByAggregateInput
    _sum?: MealPlanItemSumOrderByAggregateInput
  }

  export type MealPlanItemScalarWhereWithAggregatesInput = {
    AND?: MealPlanItemScalarWhereWithAggregatesInput | MealPlanItemScalarWhereWithAggregatesInput[]
    OR?: MealPlanItemScalarWhereWithAggregatesInput[]
    NOT?: MealPlanItemScalarWhereWithAggregatesInput | MealPlanItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealPlanItem"> | string
    date?: DateTimeWithAggregatesFilter<"MealPlanItem"> | Date | string
    mealType?: StringWithAggregatesFilter<"MealPlanItem"> | string
    servings?: IntWithAggregatesFilter<"MealPlanItem"> | number
    notes?: StringNullableWithAggregatesFilter<"MealPlanItem"> | string | null
    mealPlanId?: StringWithAggregatesFilter<"MealPlanItem"> | string
    recipeId?: StringWithAggregatesFilter<"MealPlanItem"> | string
  }

  export type PostCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    recipes?: RecipeCreateNestedManyWithoutCreatedByInput
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    sharedRecipes?: SharedRecipeCreateNestedManyWithoutSharedByInput
    mealPlans?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutCreatedByInput
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    sharedRecipes?: SharedRecipeUncheckedCreateNestedManyWithoutSharedByInput
    mealPlans?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    recipes?: RecipeUpdateManyWithoutCreatedByNestedInput
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    sharedRecipes?: SharedRecipeUpdateManyWithoutSharedByNestedInput
    mealPlans?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutCreatedByNestedInput
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    sharedRecipes?: SharedRecipeUncheckedUpdateManyWithoutSharedByNestedInput
    mealPlans?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeCreateInput = {
    id?: string
    uuid: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RecipeImageCreateNestedManyWithoutRecipeInput
    components?: RecipeComponentCreateNestedManyWithoutRecipeInput
    createdBy: UserCreateNestedOneWithoutRecipesInput
    sharedRecipes?: SharedRecipeCreateNestedManyWithoutRecipeInput
    mealPlanItems?: MealPlanItemCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    uuid: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    images?: RecipeImageUncheckedCreateNestedManyWithoutRecipeInput
    components?: RecipeComponentUncheckedCreateNestedManyWithoutRecipeInput
    sharedRecipes?: SharedRecipeUncheckedCreateNestedManyWithoutRecipeInput
    mealPlanItems?: MealPlanItemUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RecipeImageUpdateManyWithoutRecipeNestedInput
    components?: RecipeComponentUpdateManyWithoutRecipeNestedInput
    createdBy?: UserUpdateOneRequiredWithoutRecipesNestedInput
    sharedRecipes?: SharedRecipeUpdateManyWithoutRecipeNestedInput
    mealPlanItems?: MealPlanItemUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    images?: RecipeImageUncheckedUpdateManyWithoutRecipeNestedInput
    components?: RecipeComponentUncheckedUpdateManyWithoutRecipeNestedInput
    sharedRecipes?: SharedRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    mealPlanItems?: MealPlanItemUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: string
    uuid: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type RecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeImageCreateInput = {
    id?: string
    timestamp: bigint | number
    key: string
    imageData: string
    mimeType: string
    recipe: RecipeCreateNestedOneWithoutImagesInput
  }

  export type RecipeImageUncheckedCreateInput = {
    id?: string
    timestamp: bigint | number
    key: string
    imageData: string
    mimeType: string
    recipeId: string
  }

  export type RecipeImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    imageData?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutImagesNestedInput
  }

  export type RecipeImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    imageData?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeImageCreateManyInput = {
    id?: string
    timestamp: bigint | number
    key: string
    imageData: string
    mimeType: string
    recipeId: string
  }

  export type RecipeImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    imageData?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    imageData?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeComponentCreateInput = {
    id?: string
    uuid: string
    name: string
    storeable?: boolean
    servings?: number | null
    order?: number
    recipe: RecipeCreateNestedOneWithoutComponentsInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutComponentInput
    instructions?: RecipeInstructionCreateNestedManyWithoutComponentInput
  }

  export type RecipeComponentUncheckedCreateInput = {
    id?: string
    uuid: string
    name: string
    storeable?: boolean
    servings?: number | null
    order?: number
    recipeId: string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutComponentInput
    instructions?: RecipeInstructionUncheckedCreateNestedManyWithoutComponentInput
  }

  export type RecipeComponentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    storeable?: BoolFieldUpdateOperationsInput | boolean
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    recipe?: RecipeUpdateOneRequiredWithoutComponentsNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutComponentNestedInput
    instructions?: RecipeInstructionUpdateManyWithoutComponentNestedInput
  }

  export type RecipeComponentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    storeable?: BoolFieldUpdateOperationsInput | boolean
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    recipeId?: StringFieldUpdateOperationsInput | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutComponentNestedInput
    instructions?: RecipeInstructionUncheckedUpdateManyWithoutComponentNestedInput
  }

  export type RecipeComponentCreateManyInput = {
    id?: string
    uuid: string
    name: string
    storeable?: boolean
    servings?: number | null
    order?: number
    recipeId: string
  }

  export type RecipeComponentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    storeable?: BoolFieldUpdateOperationsInput | boolean
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeComponentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    storeable?: BoolFieldUpdateOperationsInput | boolean
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientCreateInput = {
    id?: string
    uuid: string
    name: string
    quantity: number
    unit: string
    order?: number
    preparation?: string | null
    component: RecipeComponentCreateNestedOneWithoutIngredientsInput
  }

  export type RecipeIngredientUncheckedCreateInput = {
    id?: string
    uuid: string
    name: string
    quantity: number
    unit: string
    order?: number
    preparation?: string | null
    componentId: string
  }

  export type RecipeIngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    preparation?: NullableStringFieldUpdateOperationsInput | string | null
    component?: RecipeComponentUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type RecipeIngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    preparation?: NullableStringFieldUpdateOperationsInput | string | null
    componentId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientCreateManyInput = {
    id?: string
    uuid: string
    name: string
    quantity: number
    unit: string
    order?: number
    preparation?: string | null
    componentId: string
  }

  export type RecipeIngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    preparation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeIngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    preparation?: NullableStringFieldUpdateOperationsInput | string | null
    componentId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeInstructionCreateInput = {
    id?: string
    uuid: string
    instruction: string
    order?: number
    component: RecipeComponentCreateNestedOneWithoutInstructionsInput
  }

  export type RecipeInstructionUncheckedCreateInput = {
    id?: string
    uuid: string
    instruction: string
    order?: number
    componentId: string
  }

  export type RecipeInstructionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    component?: RecipeComponentUpdateOneRequiredWithoutInstructionsNestedInput
  }

  export type RecipeInstructionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    componentId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeInstructionCreateManyInput = {
    id?: string
    uuid: string
    instruction: string
    order?: number
    componentId: string
  }

  export type RecipeInstructionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeInstructionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    componentId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferenceCreateInput = {
    id?: string
    category: string
    preference: string
    context?: string | null
    confidence?: number
    source?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferenceUncheckedCreateInput = {
    id?: string
    category: string
    preference: string
    context?: string | null
    confidence?: number
    source?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type UserPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    preference?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    preference?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferenceCreateManyInput = {
    id?: string
    category: string
    preference: string
    context?: string | null
    confidence?: number
    source?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type UserPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    preference?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    preference?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedRecipeCreateInput = {
    id?: string
    shareId?: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    recipe: RecipeCreateNestedOneWithoutSharedRecipesInput
    sharedBy: UserCreateNestedOneWithoutSharedRecipesInput
  }

  export type SharedRecipeUncheckedCreateInput = {
    id?: string
    shareId?: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    recipeId: string
    sharedById: string
  }

  export type SharedRecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipe?: RecipeUpdateOneRequiredWithoutSharedRecipesNestedInput
    sharedBy?: UserUpdateOneRequiredWithoutSharedRecipesNestedInput
  }

  export type SharedRecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipeId?: StringFieldUpdateOperationsInput | string
    sharedById?: StringFieldUpdateOperationsInput | string
  }

  export type SharedRecipeCreateManyInput = {
    id?: string
    shareId?: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    recipeId: string
    sharedById: string
  }

  export type SharedRecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SharedRecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipeId?: StringFieldUpdateOperationsInput | string
    sharedById?: StringFieldUpdateOperationsInput | string
  }

  export type MealPlanCreateInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMealPlansInput
    items?: MealPlanItemCreateNestedManyWithoutMealPlanInput
  }

  export type MealPlanUncheckedCreateInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    items?: MealPlanItemUncheckedCreateNestedManyWithoutMealPlanInput
  }

  export type MealPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealPlansNestedInput
    items?: MealPlanItemUpdateManyWithoutMealPlanNestedInput
  }

  export type MealPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    items?: MealPlanItemUncheckedUpdateManyWithoutMealPlanNestedInput
  }

  export type MealPlanCreateManyInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type MealPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MealPlanItemCreateInput = {
    id?: string
    date: Date | string
    mealType: string
    servings?: number
    notes?: string | null
    mealPlan: MealPlanCreateNestedOneWithoutItemsInput
    recipe: RecipeCreateNestedOneWithoutMealPlanItemsInput
  }

  export type MealPlanItemUncheckedCreateInput = {
    id?: string
    date: Date | string
    mealType: string
    servings?: number
    notes?: string | null
    mealPlanId: string
    recipeId: string
  }

  export type MealPlanItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: MealPlanUpdateOneRequiredWithoutItemsNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutMealPlanItemsNestedInput
  }

  export type MealPlanItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlanId?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type MealPlanItemCreateManyInput = {
    id?: string
    date: Date | string
    mealType: string
    servings?: number
    notes?: string | null
    mealPlanId: string
    recipeId: string
  }

  export type MealPlanItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealPlanItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlanId?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type RecipeListRelationFilter = {
    every?: RecipeWhereInput
    some?: RecipeWhereInput
    none?: RecipeWhereInput
  }

  export type UserPreferenceListRelationFilter = {
    every?: UserPreferenceWhereInput
    some?: UserPreferenceWhereInput
    none?: UserPreferenceWhereInput
  }

  export type SharedRecipeListRelationFilter = {
    every?: SharedRecipeWhereInput
    some?: SharedRecipeWhereInput
    none?: SharedRecipeWhereInput
  }

  export type MealPlanListRelationFilter = {
    every?: MealPlanWhereInput
    some?: MealPlanWhereInput
    none?: MealPlanWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPreferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SharedRecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type RecipeImageListRelationFilter = {
    every?: RecipeImageWhereInput
    some?: RecipeImageWhereInput
    none?: RecipeImageWhereInput
  }

  export type RecipeComponentListRelationFilter = {
    every?: RecipeComponentWhereInput
    some?: RecipeComponentWhereInput
    none?: RecipeComponentWhereInput
  }

  export type MealPlanItemListRelationFilter = {
    every?: MealPlanItemWhereInput
    some?: MealPlanItemWhereInput
    none?: MealPlanItemWhereInput
  }

  export type RecipeImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeComponentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealPlanItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type RecipeImageCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    key?: SortOrder
    imageData?: SortOrder
    mimeType?: SortOrder
    recipeId?: SortOrder
  }

  export type RecipeImageAvgOrderByAggregateInput = {
    timestamp?: SortOrder
  }

  export type RecipeImageMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    key?: SortOrder
    imageData?: SortOrder
    mimeType?: SortOrder
    recipeId?: SortOrder
  }

  export type RecipeImageMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    key?: SortOrder
    imageData?: SortOrder
    mimeType?: SortOrder
    recipeId?: SortOrder
  }

  export type RecipeImageSumOrderByAggregateInput = {
    timestamp?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RecipeIngredientListRelationFilter = {
    every?: RecipeIngredientWhereInput
    some?: RecipeIngredientWhereInput
    none?: RecipeIngredientWhereInput
  }

  export type RecipeInstructionListRelationFilter = {
    every?: RecipeInstructionWhereInput
    some?: RecipeInstructionWhereInput
    none?: RecipeInstructionWhereInput
  }

  export type RecipeIngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeInstructionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeComponentCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    storeable?: SortOrder
    servings?: SortOrder
    order?: SortOrder
    recipeId?: SortOrder
  }

  export type RecipeComponentAvgOrderByAggregateInput = {
    servings?: SortOrder
    order?: SortOrder
  }

  export type RecipeComponentMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    storeable?: SortOrder
    servings?: SortOrder
    order?: SortOrder
    recipeId?: SortOrder
  }

  export type RecipeComponentMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    storeable?: SortOrder
    servings?: SortOrder
    order?: SortOrder
    recipeId?: SortOrder
  }

  export type RecipeComponentSumOrderByAggregateInput = {
    servings?: SortOrder
    order?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RecipeComponentScalarRelationFilter = {
    is?: RecipeComponentWhereInput
    isNot?: RecipeComponentWhereInput
  }

  export type RecipeIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    order?: SortOrder
    preparation?: SortOrder
    componentId?: SortOrder
  }

  export type RecipeIngredientAvgOrderByAggregateInput = {
    quantity?: SortOrder
    order?: SortOrder
  }

  export type RecipeIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    order?: SortOrder
    preparation?: SortOrder
    componentId?: SortOrder
  }

  export type RecipeIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    order?: SortOrder
    preparation?: SortOrder
    componentId?: SortOrder
  }

  export type RecipeIngredientSumOrderByAggregateInput = {
    quantity?: SortOrder
    order?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RecipeInstructionCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    instruction?: SortOrder
    order?: SortOrder
    componentId?: SortOrder
  }

  export type RecipeInstructionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type RecipeInstructionMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    instruction?: SortOrder
    order?: SortOrder
    componentId?: SortOrder
  }

  export type RecipeInstructionMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    instruction?: SortOrder
    order?: SortOrder
    componentId?: SortOrder
  }

  export type RecipeInstructionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type UserPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    preference?: SortOrder
    context?: SortOrder
    confidence?: SortOrder
    source?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type UserPreferenceAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type UserPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    preference?: SortOrder
    context?: SortOrder
    confidence?: SortOrder
    source?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type UserPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    preference?: SortOrder
    context?: SortOrder
    confidence?: SortOrder
    source?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type UserPreferenceSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type SharedRecipeCountOrderByAggregateInput = {
    id?: SortOrder
    shareId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    recipeId?: SortOrder
    sharedById?: SortOrder
  }

  export type SharedRecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    shareId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    recipeId?: SortOrder
    sharedById?: SortOrder
  }

  export type SharedRecipeMinOrderByAggregateInput = {
    id?: SortOrder
    shareId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    recipeId?: SortOrder
    sharedById?: SortOrder
  }

  export type MealPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MealPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MealPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MealPlanScalarRelationFilter = {
    is?: MealPlanWhereInput
    isNot?: MealPlanWhereInput
  }

  export type MealPlanItemCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    servings?: SortOrder
    notes?: SortOrder
    mealPlanId?: SortOrder
    recipeId?: SortOrder
  }

  export type MealPlanItemAvgOrderByAggregateInput = {
    servings?: SortOrder
  }

  export type MealPlanItemMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    servings?: SortOrder
    notes?: SortOrder
    mealPlanId?: SortOrder
    recipeId?: SortOrder
  }

  export type MealPlanItemMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    servings?: SortOrder
    notes?: SortOrder
    mealPlanId?: SortOrder
    recipeId?: SortOrder
  }

  export type MealPlanItemSumOrderByAggregateInput = {
    servings?: SortOrder
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type RecipeCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RecipeCreateWithoutCreatedByInput, RecipeUncheckedCreateWithoutCreatedByInput> | RecipeCreateWithoutCreatedByInput[] | RecipeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutCreatedByInput | RecipeCreateOrConnectWithoutCreatedByInput[]
    createMany?: RecipeCreateManyCreatedByInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type UserPreferenceCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput> | UserPreferenceCreateWithoutUserInput[] | UserPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput | UserPreferenceCreateOrConnectWithoutUserInput[]
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
  }

  export type SharedRecipeCreateNestedManyWithoutSharedByInput = {
    create?: XOR<SharedRecipeCreateWithoutSharedByInput, SharedRecipeUncheckedCreateWithoutSharedByInput> | SharedRecipeCreateWithoutSharedByInput[] | SharedRecipeUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: SharedRecipeCreateOrConnectWithoutSharedByInput | SharedRecipeCreateOrConnectWithoutSharedByInput[]
    createMany?: SharedRecipeCreateManySharedByInputEnvelope
    connect?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
  }

  export type MealPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type RecipeUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RecipeCreateWithoutCreatedByInput, RecipeUncheckedCreateWithoutCreatedByInput> | RecipeCreateWithoutCreatedByInput[] | RecipeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutCreatedByInput | RecipeCreateOrConnectWithoutCreatedByInput[]
    createMany?: RecipeCreateManyCreatedByInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type UserPreferenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput> | UserPreferenceCreateWithoutUserInput[] | UserPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput | UserPreferenceCreateOrConnectWithoutUserInput[]
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
  }

  export type SharedRecipeUncheckedCreateNestedManyWithoutSharedByInput = {
    create?: XOR<SharedRecipeCreateWithoutSharedByInput, SharedRecipeUncheckedCreateWithoutSharedByInput> | SharedRecipeCreateWithoutSharedByInput[] | SharedRecipeUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: SharedRecipeCreateOrConnectWithoutSharedByInput | SharedRecipeCreateOrConnectWithoutSharedByInput[]
    createMany?: SharedRecipeCreateManySharedByInputEnvelope
    connect?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
  }

  export type MealPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type RecipeUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RecipeCreateWithoutCreatedByInput, RecipeUncheckedCreateWithoutCreatedByInput> | RecipeCreateWithoutCreatedByInput[] | RecipeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutCreatedByInput | RecipeCreateOrConnectWithoutCreatedByInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutCreatedByInput | RecipeUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RecipeCreateManyCreatedByInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutCreatedByInput | RecipeUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutCreatedByInput | RecipeUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type UserPreferenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput> | UserPreferenceCreateWithoutUserInput[] | UserPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput | UserPreferenceCreateOrConnectWithoutUserInput[]
    upsert?: UserPreferenceUpsertWithWhereUniqueWithoutUserInput | UserPreferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    set?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    disconnect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    delete?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    update?: UserPreferenceUpdateWithWhereUniqueWithoutUserInput | UserPreferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPreferenceUpdateManyWithWhereWithoutUserInput | UserPreferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[]
  }

  export type SharedRecipeUpdateManyWithoutSharedByNestedInput = {
    create?: XOR<SharedRecipeCreateWithoutSharedByInput, SharedRecipeUncheckedCreateWithoutSharedByInput> | SharedRecipeCreateWithoutSharedByInput[] | SharedRecipeUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: SharedRecipeCreateOrConnectWithoutSharedByInput | SharedRecipeCreateOrConnectWithoutSharedByInput[]
    upsert?: SharedRecipeUpsertWithWhereUniqueWithoutSharedByInput | SharedRecipeUpsertWithWhereUniqueWithoutSharedByInput[]
    createMany?: SharedRecipeCreateManySharedByInputEnvelope
    set?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    disconnect?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    delete?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    connect?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    update?: SharedRecipeUpdateWithWhereUniqueWithoutSharedByInput | SharedRecipeUpdateWithWhereUniqueWithoutSharedByInput[]
    updateMany?: SharedRecipeUpdateManyWithWhereWithoutSharedByInput | SharedRecipeUpdateManyWithWhereWithoutSharedByInput[]
    deleteMany?: SharedRecipeScalarWhereInput | SharedRecipeScalarWhereInput[]
  }

  export type MealPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    upsert?: MealPlanUpsertWithWhereUniqueWithoutUserInput | MealPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    set?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    disconnect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    delete?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    update?: MealPlanUpdateWithWhereUniqueWithoutUserInput | MealPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealPlanUpdateManyWithWhereWithoutUserInput | MealPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type RecipeUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RecipeCreateWithoutCreatedByInput, RecipeUncheckedCreateWithoutCreatedByInput> | RecipeCreateWithoutCreatedByInput[] | RecipeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutCreatedByInput | RecipeCreateOrConnectWithoutCreatedByInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutCreatedByInput | RecipeUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RecipeCreateManyCreatedByInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutCreatedByInput | RecipeUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutCreatedByInput | RecipeUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type UserPreferenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput> | UserPreferenceCreateWithoutUserInput[] | UserPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput | UserPreferenceCreateOrConnectWithoutUserInput[]
    upsert?: UserPreferenceUpsertWithWhereUniqueWithoutUserInput | UserPreferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    set?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    disconnect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    delete?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    update?: UserPreferenceUpdateWithWhereUniqueWithoutUserInput | UserPreferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPreferenceUpdateManyWithWhereWithoutUserInput | UserPreferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[]
  }

  export type SharedRecipeUncheckedUpdateManyWithoutSharedByNestedInput = {
    create?: XOR<SharedRecipeCreateWithoutSharedByInput, SharedRecipeUncheckedCreateWithoutSharedByInput> | SharedRecipeCreateWithoutSharedByInput[] | SharedRecipeUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: SharedRecipeCreateOrConnectWithoutSharedByInput | SharedRecipeCreateOrConnectWithoutSharedByInput[]
    upsert?: SharedRecipeUpsertWithWhereUniqueWithoutSharedByInput | SharedRecipeUpsertWithWhereUniqueWithoutSharedByInput[]
    createMany?: SharedRecipeCreateManySharedByInputEnvelope
    set?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    disconnect?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    delete?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    connect?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    update?: SharedRecipeUpdateWithWhereUniqueWithoutSharedByInput | SharedRecipeUpdateWithWhereUniqueWithoutSharedByInput[]
    updateMany?: SharedRecipeUpdateManyWithWhereWithoutSharedByInput | SharedRecipeUpdateManyWithWhereWithoutSharedByInput[]
    deleteMany?: SharedRecipeScalarWhereInput | SharedRecipeScalarWhereInput[]
  }

  export type MealPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    upsert?: MealPlanUpsertWithWhereUniqueWithoutUserInput | MealPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    set?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    disconnect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    delete?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    update?: MealPlanUpdateWithWhereUniqueWithoutUserInput | MealPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealPlanUpdateManyWithWhereWithoutUserInput | MealPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
  }

  export type RecipeImageCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeImageCreateWithoutRecipeInput, RecipeImageUncheckedCreateWithoutRecipeInput> | RecipeImageCreateWithoutRecipeInput[] | RecipeImageUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeImageCreateOrConnectWithoutRecipeInput | RecipeImageCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeImageCreateManyRecipeInputEnvelope
    connect?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
  }

  export type RecipeComponentCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeComponentCreateWithoutRecipeInput, RecipeComponentUncheckedCreateWithoutRecipeInput> | RecipeComponentCreateWithoutRecipeInput[] | RecipeComponentUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeComponentCreateOrConnectWithoutRecipeInput | RecipeComponentCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeComponentCreateManyRecipeInputEnvelope
    connect?: RecipeComponentWhereUniqueInput | RecipeComponentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutRecipesInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    connect?: UserWhereUniqueInput
  }

  export type SharedRecipeCreateNestedManyWithoutRecipeInput = {
    create?: XOR<SharedRecipeCreateWithoutRecipeInput, SharedRecipeUncheckedCreateWithoutRecipeInput> | SharedRecipeCreateWithoutRecipeInput[] | SharedRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: SharedRecipeCreateOrConnectWithoutRecipeInput | SharedRecipeCreateOrConnectWithoutRecipeInput[]
    createMany?: SharedRecipeCreateManyRecipeInputEnvelope
    connect?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
  }

  export type MealPlanItemCreateNestedManyWithoutRecipeInput = {
    create?: XOR<MealPlanItemCreateWithoutRecipeInput, MealPlanItemUncheckedCreateWithoutRecipeInput> | MealPlanItemCreateWithoutRecipeInput[] | MealPlanItemUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MealPlanItemCreateOrConnectWithoutRecipeInput | MealPlanItemCreateOrConnectWithoutRecipeInput[]
    createMany?: MealPlanItemCreateManyRecipeInputEnvelope
    connect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
  }

  export type RecipeImageUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeImageCreateWithoutRecipeInput, RecipeImageUncheckedCreateWithoutRecipeInput> | RecipeImageCreateWithoutRecipeInput[] | RecipeImageUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeImageCreateOrConnectWithoutRecipeInput | RecipeImageCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeImageCreateManyRecipeInputEnvelope
    connect?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
  }

  export type RecipeComponentUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeComponentCreateWithoutRecipeInput, RecipeComponentUncheckedCreateWithoutRecipeInput> | RecipeComponentCreateWithoutRecipeInput[] | RecipeComponentUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeComponentCreateOrConnectWithoutRecipeInput | RecipeComponentCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeComponentCreateManyRecipeInputEnvelope
    connect?: RecipeComponentWhereUniqueInput | RecipeComponentWhereUniqueInput[]
  }

  export type SharedRecipeUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<SharedRecipeCreateWithoutRecipeInput, SharedRecipeUncheckedCreateWithoutRecipeInput> | SharedRecipeCreateWithoutRecipeInput[] | SharedRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: SharedRecipeCreateOrConnectWithoutRecipeInput | SharedRecipeCreateOrConnectWithoutRecipeInput[]
    createMany?: SharedRecipeCreateManyRecipeInputEnvelope
    connect?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
  }

  export type MealPlanItemUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<MealPlanItemCreateWithoutRecipeInput, MealPlanItemUncheckedCreateWithoutRecipeInput> | MealPlanItemCreateWithoutRecipeInput[] | MealPlanItemUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MealPlanItemCreateOrConnectWithoutRecipeInput | MealPlanItemCreateOrConnectWithoutRecipeInput[]
    createMany?: MealPlanItemCreateManyRecipeInputEnvelope
    connect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
  }

  export type RecipeImageUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeImageCreateWithoutRecipeInput, RecipeImageUncheckedCreateWithoutRecipeInput> | RecipeImageCreateWithoutRecipeInput[] | RecipeImageUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeImageCreateOrConnectWithoutRecipeInput | RecipeImageCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeImageUpsertWithWhereUniqueWithoutRecipeInput | RecipeImageUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeImageCreateManyRecipeInputEnvelope
    set?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    disconnect?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    delete?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    connect?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    update?: RecipeImageUpdateWithWhereUniqueWithoutRecipeInput | RecipeImageUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeImageUpdateManyWithWhereWithoutRecipeInput | RecipeImageUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeImageScalarWhereInput | RecipeImageScalarWhereInput[]
  }

  export type RecipeComponentUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeComponentCreateWithoutRecipeInput, RecipeComponentUncheckedCreateWithoutRecipeInput> | RecipeComponentCreateWithoutRecipeInput[] | RecipeComponentUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeComponentCreateOrConnectWithoutRecipeInput | RecipeComponentCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeComponentUpsertWithWhereUniqueWithoutRecipeInput | RecipeComponentUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeComponentCreateManyRecipeInputEnvelope
    set?: RecipeComponentWhereUniqueInput | RecipeComponentWhereUniqueInput[]
    disconnect?: RecipeComponentWhereUniqueInput | RecipeComponentWhereUniqueInput[]
    delete?: RecipeComponentWhereUniqueInput | RecipeComponentWhereUniqueInput[]
    connect?: RecipeComponentWhereUniqueInput | RecipeComponentWhereUniqueInput[]
    update?: RecipeComponentUpdateWithWhereUniqueWithoutRecipeInput | RecipeComponentUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeComponentUpdateManyWithWhereWithoutRecipeInput | RecipeComponentUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeComponentScalarWhereInput | RecipeComponentScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    upsert?: UserUpsertWithoutRecipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecipesInput, UserUpdateWithoutRecipesInput>, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type SharedRecipeUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<SharedRecipeCreateWithoutRecipeInput, SharedRecipeUncheckedCreateWithoutRecipeInput> | SharedRecipeCreateWithoutRecipeInput[] | SharedRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: SharedRecipeCreateOrConnectWithoutRecipeInput | SharedRecipeCreateOrConnectWithoutRecipeInput[]
    upsert?: SharedRecipeUpsertWithWhereUniqueWithoutRecipeInput | SharedRecipeUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: SharedRecipeCreateManyRecipeInputEnvelope
    set?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    disconnect?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    delete?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    connect?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    update?: SharedRecipeUpdateWithWhereUniqueWithoutRecipeInput | SharedRecipeUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: SharedRecipeUpdateManyWithWhereWithoutRecipeInput | SharedRecipeUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: SharedRecipeScalarWhereInput | SharedRecipeScalarWhereInput[]
  }

  export type MealPlanItemUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<MealPlanItemCreateWithoutRecipeInput, MealPlanItemUncheckedCreateWithoutRecipeInput> | MealPlanItemCreateWithoutRecipeInput[] | MealPlanItemUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MealPlanItemCreateOrConnectWithoutRecipeInput | MealPlanItemCreateOrConnectWithoutRecipeInput[]
    upsert?: MealPlanItemUpsertWithWhereUniqueWithoutRecipeInput | MealPlanItemUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: MealPlanItemCreateManyRecipeInputEnvelope
    set?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    disconnect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    delete?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    connect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    update?: MealPlanItemUpdateWithWhereUniqueWithoutRecipeInput | MealPlanItemUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: MealPlanItemUpdateManyWithWhereWithoutRecipeInput | MealPlanItemUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: MealPlanItemScalarWhereInput | MealPlanItemScalarWhereInput[]
  }

  export type RecipeImageUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeImageCreateWithoutRecipeInput, RecipeImageUncheckedCreateWithoutRecipeInput> | RecipeImageCreateWithoutRecipeInput[] | RecipeImageUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeImageCreateOrConnectWithoutRecipeInput | RecipeImageCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeImageUpsertWithWhereUniqueWithoutRecipeInput | RecipeImageUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeImageCreateManyRecipeInputEnvelope
    set?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    disconnect?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    delete?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    connect?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    update?: RecipeImageUpdateWithWhereUniqueWithoutRecipeInput | RecipeImageUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeImageUpdateManyWithWhereWithoutRecipeInput | RecipeImageUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeImageScalarWhereInput | RecipeImageScalarWhereInput[]
  }

  export type RecipeComponentUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeComponentCreateWithoutRecipeInput, RecipeComponentUncheckedCreateWithoutRecipeInput> | RecipeComponentCreateWithoutRecipeInput[] | RecipeComponentUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeComponentCreateOrConnectWithoutRecipeInput | RecipeComponentCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeComponentUpsertWithWhereUniqueWithoutRecipeInput | RecipeComponentUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeComponentCreateManyRecipeInputEnvelope
    set?: RecipeComponentWhereUniqueInput | RecipeComponentWhereUniqueInput[]
    disconnect?: RecipeComponentWhereUniqueInput | RecipeComponentWhereUniqueInput[]
    delete?: RecipeComponentWhereUniqueInput | RecipeComponentWhereUniqueInput[]
    connect?: RecipeComponentWhereUniqueInput | RecipeComponentWhereUniqueInput[]
    update?: RecipeComponentUpdateWithWhereUniqueWithoutRecipeInput | RecipeComponentUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeComponentUpdateManyWithWhereWithoutRecipeInput | RecipeComponentUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeComponentScalarWhereInput | RecipeComponentScalarWhereInput[]
  }

  export type SharedRecipeUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<SharedRecipeCreateWithoutRecipeInput, SharedRecipeUncheckedCreateWithoutRecipeInput> | SharedRecipeCreateWithoutRecipeInput[] | SharedRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: SharedRecipeCreateOrConnectWithoutRecipeInput | SharedRecipeCreateOrConnectWithoutRecipeInput[]
    upsert?: SharedRecipeUpsertWithWhereUniqueWithoutRecipeInput | SharedRecipeUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: SharedRecipeCreateManyRecipeInputEnvelope
    set?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    disconnect?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    delete?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    connect?: SharedRecipeWhereUniqueInput | SharedRecipeWhereUniqueInput[]
    update?: SharedRecipeUpdateWithWhereUniqueWithoutRecipeInput | SharedRecipeUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: SharedRecipeUpdateManyWithWhereWithoutRecipeInput | SharedRecipeUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: SharedRecipeScalarWhereInput | SharedRecipeScalarWhereInput[]
  }

  export type MealPlanItemUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<MealPlanItemCreateWithoutRecipeInput, MealPlanItemUncheckedCreateWithoutRecipeInput> | MealPlanItemCreateWithoutRecipeInput[] | MealPlanItemUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MealPlanItemCreateOrConnectWithoutRecipeInput | MealPlanItemCreateOrConnectWithoutRecipeInput[]
    upsert?: MealPlanItemUpsertWithWhereUniqueWithoutRecipeInput | MealPlanItemUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: MealPlanItemCreateManyRecipeInputEnvelope
    set?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    disconnect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    delete?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    connect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    update?: MealPlanItemUpdateWithWhereUniqueWithoutRecipeInput | MealPlanItemUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: MealPlanItemUpdateManyWithWhereWithoutRecipeInput | MealPlanItemUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: MealPlanItemScalarWhereInput | MealPlanItemScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutImagesInput = {
    create?: XOR<RecipeCreateWithoutImagesInput, RecipeUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutImagesInput
    connect?: RecipeWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type RecipeUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<RecipeCreateWithoutImagesInput, RecipeUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutImagesInput
    upsert?: RecipeUpsertWithoutImagesInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutImagesInput, RecipeUpdateWithoutImagesInput>, RecipeUncheckedUpdateWithoutImagesInput>
  }

  export type RecipeCreateNestedOneWithoutComponentsInput = {
    create?: XOR<RecipeCreateWithoutComponentsInput, RecipeUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutComponentsInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeIngredientCreateNestedManyWithoutComponentInput = {
    create?: XOR<RecipeIngredientCreateWithoutComponentInput, RecipeIngredientUncheckedCreateWithoutComponentInput> | RecipeIngredientCreateWithoutComponentInput[] | RecipeIngredientUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutComponentInput | RecipeIngredientCreateOrConnectWithoutComponentInput[]
    createMany?: RecipeIngredientCreateManyComponentInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type RecipeInstructionCreateNestedManyWithoutComponentInput = {
    create?: XOR<RecipeInstructionCreateWithoutComponentInput, RecipeInstructionUncheckedCreateWithoutComponentInput> | RecipeInstructionCreateWithoutComponentInput[] | RecipeInstructionUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: RecipeInstructionCreateOrConnectWithoutComponentInput | RecipeInstructionCreateOrConnectWithoutComponentInput[]
    createMany?: RecipeInstructionCreateManyComponentInputEnvelope
    connect?: RecipeInstructionWhereUniqueInput | RecipeInstructionWhereUniqueInput[]
  }

  export type RecipeIngredientUncheckedCreateNestedManyWithoutComponentInput = {
    create?: XOR<RecipeIngredientCreateWithoutComponentInput, RecipeIngredientUncheckedCreateWithoutComponentInput> | RecipeIngredientCreateWithoutComponentInput[] | RecipeIngredientUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutComponentInput | RecipeIngredientCreateOrConnectWithoutComponentInput[]
    createMany?: RecipeIngredientCreateManyComponentInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type RecipeInstructionUncheckedCreateNestedManyWithoutComponentInput = {
    create?: XOR<RecipeInstructionCreateWithoutComponentInput, RecipeInstructionUncheckedCreateWithoutComponentInput> | RecipeInstructionCreateWithoutComponentInput[] | RecipeInstructionUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: RecipeInstructionCreateOrConnectWithoutComponentInput | RecipeInstructionCreateOrConnectWithoutComponentInput[]
    createMany?: RecipeInstructionCreateManyComponentInputEnvelope
    connect?: RecipeInstructionWhereUniqueInput | RecipeInstructionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RecipeUpdateOneRequiredWithoutComponentsNestedInput = {
    create?: XOR<RecipeCreateWithoutComponentsInput, RecipeUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutComponentsInput
    upsert?: RecipeUpsertWithoutComponentsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutComponentsInput, RecipeUpdateWithoutComponentsInput>, RecipeUncheckedUpdateWithoutComponentsInput>
  }

  export type RecipeIngredientUpdateManyWithoutComponentNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutComponentInput, RecipeIngredientUncheckedCreateWithoutComponentInput> | RecipeIngredientCreateWithoutComponentInput[] | RecipeIngredientUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutComponentInput | RecipeIngredientCreateOrConnectWithoutComponentInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutComponentInput | RecipeIngredientUpsertWithWhereUniqueWithoutComponentInput[]
    createMany?: RecipeIngredientCreateManyComponentInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutComponentInput | RecipeIngredientUpdateWithWhereUniqueWithoutComponentInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutComponentInput | RecipeIngredientUpdateManyWithWhereWithoutComponentInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type RecipeInstructionUpdateManyWithoutComponentNestedInput = {
    create?: XOR<RecipeInstructionCreateWithoutComponentInput, RecipeInstructionUncheckedCreateWithoutComponentInput> | RecipeInstructionCreateWithoutComponentInput[] | RecipeInstructionUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: RecipeInstructionCreateOrConnectWithoutComponentInput | RecipeInstructionCreateOrConnectWithoutComponentInput[]
    upsert?: RecipeInstructionUpsertWithWhereUniqueWithoutComponentInput | RecipeInstructionUpsertWithWhereUniqueWithoutComponentInput[]
    createMany?: RecipeInstructionCreateManyComponentInputEnvelope
    set?: RecipeInstructionWhereUniqueInput | RecipeInstructionWhereUniqueInput[]
    disconnect?: RecipeInstructionWhereUniqueInput | RecipeInstructionWhereUniqueInput[]
    delete?: RecipeInstructionWhereUniqueInput | RecipeInstructionWhereUniqueInput[]
    connect?: RecipeInstructionWhereUniqueInput | RecipeInstructionWhereUniqueInput[]
    update?: RecipeInstructionUpdateWithWhereUniqueWithoutComponentInput | RecipeInstructionUpdateWithWhereUniqueWithoutComponentInput[]
    updateMany?: RecipeInstructionUpdateManyWithWhereWithoutComponentInput | RecipeInstructionUpdateManyWithWhereWithoutComponentInput[]
    deleteMany?: RecipeInstructionScalarWhereInput | RecipeInstructionScalarWhereInput[]
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutComponentNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutComponentInput, RecipeIngredientUncheckedCreateWithoutComponentInput> | RecipeIngredientCreateWithoutComponentInput[] | RecipeIngredientUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutComponentInput | RecipeIngredientCreateOrConnectWithoutComponentInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutComponentInput | RecipeIngredientUpsertWithWhereUniqueWithoutComponentInput[]
    createMany?: RecipeIngredientCreateManyComponentInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutComponentInput | RecipeIngredientUpdateWithWhereUniqueWithoutComponentInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutComponentInput | RecipeIngredientUpdateManyWithWhereWithoutComponentInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type RecipeInstructionUncheckedUpdateManyWithoutComponentNestedInput = {
    create?: XOR<RecipeInstructionCreateWithoutComponentInput, RecipeInstructionUncheckedCreateWithoutComponentInput> | RecipeInstructionCreateWithoutComponentInput[] | RecipeInstructionUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: RecipeInstructionCreateOrConnectWithoutComponentInput | RecipeInstructionCreateOrConnectWithoutComponentInput[]
    upsert?: RecipeInstructionUpsertWithWhereUniqueWithoutComponentInput | RecipeInstructionUpsertWithWhereUniqueWithoutComponentInput[]
    createMany?: RecipeInstructionCreateManyComponentInputEnvelope
    set?: RecipeInstructionWhereUniqueInput | RecipeInstructionWhereUniqueInput[]
    disconnect?: RecipeInstructionWhereUniqueInput | RecipeInstructionWhereUniqueInput[]
    delete?: RecipeInstructionWhereUniqueInput | RecipeInstructionWhereUniqueInput[]
    connect?: RecipeInstructionWhereUniqueInput | RecipeInstructionWhereUniqueInput[]
    update?: RecipeInstructionUpdateWithWhereUniqueWithoutComponentInput | RecipeInstructionUpdateWithWhereUniqueWithoutComponentInput[]
    updateMany?: RecipeInstructionUpdateManyWithWhereWithoutComponentInput | RecipeInstructionUpdateManyWithWhereWithoutComponentInput[]
    deleteMany?: RecipeInstructionScalarWhereInput | RecipeInstructionScalarWhereInput[]
  }

  export type RecipeComponentCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<RecipeComponentCreateWithoutIngredientsInput, RecipeComponentUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeComponentCreateOrConnectWithoutIngredientsInput
    connect?: RecipeComponentWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipeComponentUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<RecipeComponentCreateWithoutIngredientsInput, RecipeComponentUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeComponentCreateOrConnectWithoutIngredientsInput
    upsert?: RecipeComponentUpsertWithoutIngredientsInput
    connect?: RecipeComponentWhereUniqueInput
    update?: XOR<XOR<RecipeComponentUpdateToOneWithWhereWithoutIngredientsInput, RecipeComponentUpdateWithoutIngredientsInput>, RecipeComponentUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeComponentCreateNestedOneWithoutInstructionsInput = {
    create?: XOR<RecipeComponentCreateWithoutInstructionsInput, RecipeComponentUncheckedCreateWithoutInstructionsInput>
    connectOrCreate?: RecipeComponentCreateOrConnectWithoutInstructionsInput
    connect?: RecipeComponentWhereUniqueInput
  }

  export type RecipeComponentUpdateOneRequiredWithoutInstructionsNestedInput = {
    create?: XOR<RecipeComponentCreateWithoutInstructionsInput, RecipeComponentUncheckedCreateWithoutInstructionsInput>
    connectOrCreate?: RecipeComponentCreateOrConnectWithoutInstructionsInput
    upsert?: RecipeComponentUpsertWithoutInstructionsInput
    connect?: RecipeComponentWhereUniqueInput
    update?: XOR<XOR<RecipeComponentUpdateToOneWithWhereWithoutInstructionsInput, RecipeComponentUpdateWithoutInstructionsInput>, RecipeComponentUncheckedUpdateWithoutInstructionsInput>
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type RecipeCreateNestedOneWithoutSharedRecipesInput = {
    create?: XOR<RecipeCreateWithoutSharedRecipesInput, RecipeUncheckedCreateWithoutSharedRecipesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutSharedRecipesInput
    connect?: RecipeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSharedRecipesInput = {
    create?: XOR<UserCreateWithoutSharedRecipesInput, UserUncheckedCreateWithoutSharedRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedRecipesInput
    connect?: UserWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutSharedRecipesNestedInput = {
    create?: XOR<RecipeCreateWithoutSharedRecipesInput, RecipeUncheckedCreateWithoutSharedRecipesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutSharedRecipesInput
    upsert?: RecipeUpsertWithoutSharedRecipesInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutSharedRecipesInput, RecipeUpdateWithoutSharedRecipesInput>, RecipeUncheckedUpdateWithoutSharedRecipesInput>
  }

  export type UserUpdateOneRequiredWithoutSharedRecipesNestedInput = {
    create?: XOR<UserCreateWithoutSharedRecipesInput, UserUncheckedCreateWithoutSharedRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedRecipesInput
    upsert?: UserUpsertWithoutSharedRecipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharedRecipesInput, UserUpdateWithoutSharedRecipesInput>, UserUncheckedUpdateWithoutSharedRecipesInput>
  }

  export type UserCreateNestedOneWithoutMealPlansInput = {
    create?: XOR<UserCreateWithoutMealPlansInput, UserUncheckedCreateWithoutMealPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealPlansInput
    connect?: UserWhereUniqueInput
  }

  export type MealPlanItemCreateNestedManyWithoutMealPlanInput = {
    create?: XOR<MealPlanItemCreateWithoutMealPlanInput, MealPlanItemUncheckedCreateWithoutMealPlanInput> | MealPlanItemCreateWithoutMealPlanInput[] | MealPlanItemUncheckedCreateWithoutMealPlanInput[]
    connectOrCreate?: MealPlanItemCreateOrConnectWithoutMealPlanInput | MealPlanItemCreateOrConnectWithoutMealPlanInput[]
    createMany?: MealPlanItemCreateManyMealPlanInputEnvelope
    connect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
  }

  export type MealPlanItemUncheckedCreateNestedManyWithoutMealPlanInput = {
    create?: XOR<MealPlanItemCreateWithoutMealPlanInput, MealPlanItemUncheckedCreateWithoutMealPlanInput> | MealPlanItemCreateWithoutMealPlanInput[] | MealPlanItemUncheckedCreateWithoutMealPlanInput[]
    connectOrCreate?: MealPlanItemCreateOrConnectWithoutMealPlanInput | MealPlanItemCreateOrConnectWithoutMealPlanInput[]
    createMany?: MealPlanItemCreateManyMealPlanInputEnvelope
    connect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMealPlansNestedInput = {
    create?: XOR<UserCreateWithoutMealPlansInput, UserUncheckedCreateWithoutMealPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealPlansInput
    upsert?: UserUpsertWithoutMealPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMealPlansInput, UserUpdateWithoutMealPlansInput>, UserUncheckedUpdateWithoutMealPlansInput>
  }

  export type MealPlanItemUpdateManyWithoutMealPlanNestedInput = {
    create?: XOR<MealPlanItemCreateWithoutMealPlanInput, MealPlanItemUncheckedCreateWithoutMealPlanInput> | MealPlanItemCreateWithoutMealPlanInput[] | MealPlanItemUncheckedCreateWithoutMealPlanInput[]
    connectOrCreate?: MealPlanItemCreateOrConnectWithoutMealPlanInput | MealPlanItemCreateOrConnectWithoutMealPlanInput[]
    upsert?: MealPlanItemUpsertWithWhereUniqueWithoutMealPlanInput | MealPlanItemUpsertWithWhereUniqueWithoutMealPlanInput[]
    createMany?: MealPlanItemCreateManyMealPlanInputEnvelope
    set?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    disconnect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    delete?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    connect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    update?: MealPlanItemUpdateWithWhereUniqueWithoutMealPlanInput | MealPlanItemUpdateWithWhereUniqueWithoutMealPlanInput[]
    updateMany?: MealPlanItemUpdateManyWithWhereWithoutMealPlanInput | MealPlanItemUpdateManyWithWhereWithoutMealPlanInput[]
    deleteMany?: MealPlanItemScalarWhereInput | MealPlanItemScalarWhereInput[]
  }

  export type MealPlanItemUncheckedUpdateManyWithoutMealPlanNestedInput = {
    create?: XOR<MealPlanItemCreateWithoutMealPlanInput, MealPlanItemUncheckedCreateWithoutMealPlanInput> | MealPlanItemCreateWithoutMealPlanInput[] | MealPlanItemUncheckedCreateWithoutMealPlanInput[]
    connectOrCreate?: MealPlanItemCreateOrConnectWithoutMealPlanInput | MealPlanItemCreateOrConnectWithoutMealPlanInput[]
    upsert?: MealPlanItemUpsertWithWhereUniqueWithoutMealPlanInput | MealPlanItemUpsertWithWhereUniqueWithoutMealPlanInput[]
    createMany?: MealPlanItemCreateManyMealPlanInputEnvelope
    set?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    disconnect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    delete?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    connect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    update?: MealPlanItemUpdateWithWhereUniqueWithoutMealPlanInput | MealPlanItemUpdateWithWhereUniqueWithoutMealPlanInput[]
    updateMany?: MealPlanItemUpdateManyWithWhereWithoutMealPlanInput | MealPlanItemUpdateManyWithWhereWithoutMealPlanInput[]
    deleteMany?: MealPlanItemScalarWhereInput | MealPlanItemScalarWhereInput[]
  }

  export type MealPlanCreateNestedOneWithoutItemsInput = {
    create?: XOR<MealPlanCreateWithoutItemsInput, MealPlanUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MealPlanCreateOrConnectWithoutItemsInput
    connect?: MealPlanWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutMealPlanItemsInput = {
    create?: XOR<RecipeCreateWithoutMealPlanItemsInput, RecipeUncheckedCreateWithoutMealPlanItemsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutMealPlanItemsInput
    connect?: RecipeWhereUniqueInput
  }

  export type MealPlanUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<MealPlanCreateWithoutItemsInput, MealPlanUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MealPlanCreateOrConnectWithoutItemsInput
    upsert?: MealPlanUpsertWithoutItemsInput
    connect?: MealPlanWhereUniqueInput
    update?: XOR<XOR<MealPlanUpdateToOneWithWhereWithoutItemsInput, MealPlanUpdateWithoutItemsInput>, MealPlanUncheckedUpdateWithoutItemsInput>
  }

  export type RecipeUpdateOneRequiredWithoutMealPlanItemsNestedInput = {
    create?: XOR<RecipeCreateWithoutMealPlanItemsInput, RecipeUncheckedCreateWithoutMealPlanItemsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutMealPlanItemsInput
    upsert?: RecipeUpsertWithoutMealPlanItemsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutMealPlanItemsInput, RecipeUpdateWithoutMealPlanItemsInput>, RecipeUncheckedUpdateWithoutMealPlanItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    recipes?: RecipeCreateNestedManyWithoutCreatedByInput
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    sharedRecipes?: SharedRecipeCreateNestedManyWithoutSharedByInput
    mealPlans?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutCreatedByInput
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    sharedRecipes?: SharedRecipeUncheckedCreateNestedManyWithoutSharedByInput
    mealPlans?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    recipes?: RecipeUpdateManyWithoutCreatedByNestedInput
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    sharedRecipes?: SharedRecipeUpdateManyWithoutSharedByNestedInput
    mealPlans?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutCreatedByNestedInput
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    sharedRecipes?: SharedRecipeUncheckedUpdateManyWithoutSharedByNestedInput
    mealPlans?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    recipes?: RecipeCreateNestedManyWithoutCreatedByInput
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    sharedRecipes?: SharedRecipeCreateNestedManyWithoutSharedByInput
    mealPlans?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutCreatedByInput
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    sharedRecipes?: SharedRecipeUncheckedCreateNestedManyWithoutSharedByInput
    mealPlans?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    recipes?: RecipeUpdateManyWithoutCreatedByNestedInput
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    sharedRecipes?: SharedRecipeUpdateManyWithoutSharedByNestedInput
    mealPlans?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutCreatedByNestedInput
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    sharedRecipes?: SharedRecipeUncheckedUpdateManyWithoutSharedByNestedInput
    mealPlans?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    recipes?: RecipeCreateNestedManyWithoutCreatedByInput
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    sharedRecipes?: SharedRecipeCreateNestedManyWithoutSharedByInput
    mealPlans?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutCreatedByInput
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    sharedRecipes?: SharedRecipeUncheckedCreateNestedManyWithoutSharedByInput
    mealPlans?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    recipes?: RecipeUpdateManyWithoutCreatedByNestedInput
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    sharedRecipes?: SharedRecipeUpdateManyWithoutSharedByNestedInput
    mealPlans?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutCreatedByNestedInput
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    sharedRecipes?: SharedRecipeUncheckedUpdateManyWithoutSharedByNestedInput
    mealPlans?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCreatedByInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostCreateManyCreatedByInputEnvelope = {
    data: PostCreateManyCreatedByInput | PostCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type RecipeCreateWithoutCreatedByInput = {
    id?: string
    uuid: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RecipeImageCreateNestedManyWithoutRecipeInput
    components?: RecipeComponentCreateNestedManyWithoutRecipeInput
    sharedRecipes?: SharedRecipeCreateNestedManyWithoutRecipeInput
    mealPlanItems?: MealPlanItemCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutCreatedByInput = {
    id?: string
    uuid: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RecipeImageUncheckedCreateNestedManyWithoutRecipeInput
    components?: RecipeComponentUncheckedCreateNestedManyWithoutRecipeInput
    sharedRecipes?: SharedRecipeUncheckedCreateNestedManyWithoutRecipeInput
    mealPlanItems?: MealPlanItemUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutCreatedByInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutCreatedByInput, RecipeUncheckedCreateWithoutCreatedByInput>
  }

  export type RecipeCreateManyCreatedByInputEnvelope = {
    data: RecipeCreateManyCreatedByInput | RecipeCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferenceCreateWithoutUserInput = {
    id?: string
    category: string
    preference: string
    context?: string | null
    confidence?: number
    source?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUncheckedCreateWithoutUserInput = {
    id?: string
    category: string
    preference: string
    context?: string | null
    confidence?: number
    source?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceCreateOrConnectWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  }

  export type UserPreferenceCreateManyUserInputEnvelope = {
    data: UserPreferenceCreateManyUserInput | UserPreferenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SharedRecipeCreateWithoutSharedByInput = {
    id?: string
    shareId?: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    recipe: RecipeCreateNestedOneWithoutSharedRecipesInput
  }

  export type SharedRecipeUncheckedCreateWithoutSharedByInput = {
    id?: string
    shareId?: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    recipeId: string
  }

  export type SharedRecipeCreateOrConnectWithoutSharedByInput = {
    where: SharedRecipeWhereUniqueInput
    create: XOR<SharedRecipeCreateWithoutSharedByInput, SharedRecipeUncheckedCreateWithoutSharedByInput>
  }

  export type SharedRecipeCreateManySharedByInputEnvelope = {
    data: SharedRecipeCreateManySharedByInput | SharedRecipeCreateManySharedByInput[]
    skipDuplicates?: boolean
  }

  export type MealPlanCreateWithoutUserInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: MealPlanItemCreateNestedManyWithoutMealPlanInput
  }

  export type MealPlanUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: MealPlanItemUncheckedCreateNestedManyWithoutMealPlanInput
  }

  export type MealPlanCreateOrConnectWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    create: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput>
  }

  export type MealPlanCreateManyUserInputEnvelope = {
    data: MealPlanCreateManyUserInput | MealPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
  }

  export type RecipeUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutCreatedByInput, RecipeUncheckedUpdateWithoutCreatedByInput>
    create: XOR<RecipeCreateWithoutCreatedByInput, RecipeUncheckedCreateWithoutCreatedByInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutCreatedByInput, RecipeUncheckedUpdateWithoutCreatedByInput>
  }

  export type RecipeUpdateManyWithWhereWithoutCreatedByInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type RecipeScalarWhereInput = {
    AND?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    OR?: RecipeScalarWhereInput[]
    NOT?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    id?: StringFilter<"Recipe"> | string
    uuid?: StringFilter<"Recipe"> | string
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
    createdById?: StringFilter<"Recipe"> | string
  }

  export type UserPreferenceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    update: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  }

  export type UserPreferenceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    data: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferenceUpdateManyWithWhereWithoutUserInput = {
    where: UserPreferenceScalarWhereInput
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPreferenceScalarWhereInput = {
    AND?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[]
    OR?: UserPreferenceScalarWhereInput[]
    NOT?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[]
    id?: StringFilter<"UserPreference"> | string
    category?: StringFilter<"UserPreference"> | string
    preference?: StringFilter<"UserPreference"> | string
    context?: StringNullableFilter<"UserPreference"> | string | null
    confidence?: FloatFilter<"UserPreference"> | number
    source?: StringFilter<"UserPreference"> | string
    isActive?: BoolFilter<"UserPreference"> | boolean
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
    userId?: StringFilter<"UserPreference"> | string
  }

  export type SharedRecipeUpsertWithWhereUniqueWithoutSharedByInput = {
    where: SharedRecipeWhereUniqueInput
    update: XOR<SharedRecipeUpdateWithoutSharedByInput, SharedRecipeUncheckedUpdateWithoutSharedByInput>
    create: XOR<SharedRecipeCreateWithoutSharedByInput, SharedRecipeUncheckedCreateWithoutSharedByInput>
  }

  export type SharedRecipeUpdateWithWhereUniqueWithoutSharedByInput = {
    where: SharedRecipeWhereUniqueInput
    data: XOR<SharedRecipeUpdateWithoutSharedByInput, SharedRecipeUncheckedUpdateWithoutSharedByInput>
  }

  export type SharedRecipeUpdateManyWithWhereWithoutSharedByInput = {
    where: SharedRecipeScalarWhereInput
    data: XOR<SharedRecipeUpdateManyMutationInput, SharedRecipeUncheckedUpdateManyWithoutSharedByInput>
  }

  export type SharedRecipeScalarWhereInput = {
    AND?: SharedRecipeScalarWhereInput | SharedRecipeScalarWhereInput[]
    OR?: SharedRecipeScalarWhereInput[]
    NOT?: SharedRecipeScalarWhereInput | SharedRecipeScalarWhereInput[]
    id?: StringFilter<"SharedRecipe"> | string
    shareId?: StringFilter<"SharedRecipe"> | string
    createdAt?: DateTimeFilter<"SharedRecipe"> | Date | string
    expiresAt?: DateTimeNullableFilter<"SharedRecipe"> | Date | string | null
    recipeId?: StringFilter<"SharedRecipe"> | string
    sharedById?: StringFilter<"SharedRecipe"> | string
  }

  export type MealPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    update: XOR<MealPlanUpdateWithoutUserInput, MealPlanUncheckedUpdateWithoutUserInput>
    create: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput>
  }

  export type MealPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    data: XOR<MealPlanUpdateWithoutUserInput, MealPlanUncheckedUpdateWithoutUserInput>
  }

  export type MealPlanUpdateManyWithWhereWithoutUserInput = {
    where: MealPlanScalarWhereInput
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type MealPlanScalarWhereInput = {
    AND?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
    OR?: MealPlanScalarWhereInput[]
    NOT?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
    id?: StringFilter<"MealPlan"> | string
    name?: StringFilter<"MealPlan"> | string
    createdAt?: DateTimeFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MealPlan"> | Date | string
    userId?: StringFilter<"MealPlan"> | string
  }

  export type RecipeImageCreateWithoutRecipeInput = {
    id?: string
    timestamp: bigint | number
    key: string
    imageData: string
    mimeType: string
  }

  export type RecipeImageUncheckedCreateWithoutRecipeInput = {
    id?: string
    timestamp: bigint | number
    key: string
    imageData: string
    mimeType: string
  }

  export type RecipeImageCreateOrConnectWithoutRecipeInput = {
    where: RecipeImageWhereUniqueInput
    create: XOR<RecipeImageCreateWithoutRecipeInput, RecipeImageUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeImageCreateManyRecipeInputEnvelope = {
    data: RecipeImageCreateManyRecipeInput | RecipeImageCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type RecipeComponentCreateWithoutRecipeInput = {
    id?: string
    uuid: string
    name: string
    storeable?: boolean
    servings?: number | null
    order?: number
    ingredients?: RecipeIngredientCreateNestedManyWithoutComponentInput
    instructions?: RecipeInstructionCreateNestedManyWithoutComponentInput
  }

  export type RecipeComponentUncheckedCreateWithoutRecipeInput = {
    id?: string
    uuid: string
    name: string
    storeable?: boolean
    servings?: number | null
    order?: number
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutComponentInput
    instructions?: RecipeInstructionUncheckedCreateNestedManyWithoutComponentInput
  }

  export type RecipeComponentCreateOrConnectWithoutRecipeInput = {
    where: RecipeComponentWhereUniqueInput
    create: XOR<RecipeComponentCreateWithoutRecipeInput, RecipeComponentUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeComponentCreateManyRecipeInputEnvelope = {
    data: RecipeComponentCreateManyRecipeInput | RecipeComponentCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRecipesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    sharedRecipes?: SharedRecipeCreateNestedManyWithoutSharedByInput
    mealPlans?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecipesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    sharedRecipes?: SharedRecipeUncheckedCreateNestedManyWithoutSharedByInput
    mealPlans?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
  }

  export type SharedRecipeCreateWithoutRecipeInput = {
    id?: string
    shareId?: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    sharedBy: UserCreateNestedOneWithoutSharedRecipesInput
  }

  export type SharedRecipeUncheckedCreateWithoutRecipeInput = {
    id?: string
    shareId?: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    sharedById: string
  }

  export type SharedRecipeCreateOrConnectWithoutRecipeInput = {
    where: SharedRecipeWhereUniqueInput
    create: XOR<SharedRecipeCreateWithoutRecipeInput, SharedRecipeUncheckedCreateWithoutRecipeInput>
  }

  export type SharedRecipeCreateManyRecipeInputEnvelope = {
    data: SharedRecipeCreateManyRecipeInput | SharedRecipeCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type MealPlanItemCreateWithoutRecipeInput = {
    id?: string
    date: Date | string
    mealType: string
    servings?: number
    notes?: string | null
    mealPlan: MealPlanCreateNestedOneWithoutItemsInput
  }

  export type MealPlanItemUncheckedCreateWithoutRecipeInput = {
    id?: string
    date: Date | string
    mealType: string
    servings?: number
    notes?: string | null
    mealPlanId: string
  }

  export type MealPlanItemCreateOrConnectWithoutRecipeInput = {
    where: MealPlanItemWhereUniqueInput
    create: XOR<MealPlanItemCreateWithoutRecipeInput, MealPlanItemUncheckedCreateWithoutRecipeInput>
  }

  export type MealPlanItemCreateManyRecipeInputEnvelope = {
    data: MealPlanItemCreateManyRecipeInput | MealPlanItemCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type RecipeImageUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeImageWhereUniqueInput
    update: XOR<RecipeImageUpdateWithoutRecipeInput, RecipeImageUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeImageCreateWithoutRecipeInput, RecipeImageUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeImageUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeImageWhereUniqueInput
    data: XOR<RecipeImageUpdateWithoutRecipeInput, RecipeImageUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeImageUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeImageScalarWhereInput
    data: XOR<RecipeImageUpdateManyMutationInput, RecipeImageUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeImageScalarWhereInput = {
    AND?: RecipeImageScalarWhereInput | RecipeImageScalarWhereInput[]
    OR?: RecipeImageScalarWhereInput[]
    NOT?: RecipeImageScalarWhereInput | RecipeImageScalarWhereInput[]
    id?: StringFilter<"RecipeImage"> | string
    timestamp?: BigIntFilter<"RecipeImage"> | bigint | number
    key?: StringFilter<"RecipeImage"> | string
    imageData?: StringFilter<"RecipeImage"> | string
    mimeType?: StringFilter<"RecipeImage"> | string
    recipeId?: StringFilter<"RecipeImage"> | string
  }

  export type RecipeComponentUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeComponentWhereUniqueInput
    update: XOR<RecipeComponentUpdateWithoutRecipeInput, RecipeComponentUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeComponentCreateWithoutRecipeInput, RecipeComponentUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeComponentUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeComponentWhereUniqueInput
    data: XOR<RecipeComponentUpdateWithoutRecipeInput, RecipeComponentUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeComponentUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeComponentScalarWhereInput
    data: XOR<RecipeComponentUpdateManyMutationInput, RecipeComponentUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeComponentScalarWhereInput = {
    AND?: RecipeComponentScalarWhereInput | RecipeComponentScalarWhereInput[]
    OR?: RecipeComponentScalarWhereInput[]
    NOT?: RecipeComponentScalarWhereInput | RecipeComponentScalarWhereInput[]
    id?: StringFilter<"RecipeComponent"> | string
    uuid?: StringFilter<"RecipeComponent"> | string
    name?: StringFilter<"RecipeComponent"> | string
    storeable?: BoolFilter<"RecipeComponent"> | boolean
    servings?: IntNullableFilter<"RecipeComponent"> | number | null
    order?: IntFilter<"RecipeComponent"> | number
    recipeId?: StringFilter<"RecipeComponent"> | string
  }

  export type UserUpsertWithoutRecipesInput = {
    update: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type UserUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    sharedRecipes?: SharedRecipeUpdateManyWithoutSharedByNestedInput
    mealPlans?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    sharedRecipes?: SharedRecipeUncheckedUpdateManyWithoutSharedByNestedInput
    mealPlans?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SharedRecipeUpsertWithWhereUniqueWithoutRecipeInput = {
    where: SharedRecipeWhereUniqueInput
    update: XOR<SharedRecipeUpdateWithoutRecipeInput, SharedRecipeUncheckedUpdateWithoutRecipeInput>
    create: XOR<SharedRecipeCreateWithoutRecipeInput, SharedRecipeUncheckedCreateWithoutRecipeInput>
  }

  export type SharedRecipeUpdateWithWhereUniqueWithoutRecipeInput = {
    where: SharedRecipeWhereUniqueInput
    data: XOR<SharedRecipeUpdateWithoutRecipeInput, SharedRecipeUncheckedUpdateWithoutRecipeInput>
  }

  export type SharedRecipeUpdateManyWithWhereWithoutRecipeInput = {
    where: SharedRecipeScalarWhereInput
    data: XOR<SharedRecipeUpdateManyMutationInput, SharedRecipeUncheckedUpdateManyWithoutRecipeInput>
  }

  export type MealPlanItemUpsertWithWhereUniqueWithoutRecipeInput = {
    where: MealPlanItemWhereUniqueInput
    update: XOR<MealPlanItemUpdateWithoutRecipeInput, MealPlanItemUncheckedUpdateWithoutRecipeInput>
    create: XOR<MealPlanItemCreateWithoutRecipeInput, MealPlanItemUncheckedCreateWithoutRecipeInput>
  }

  export type MealPlanItemUpdateWithWhereUniqueWithoutRecipeInput = {
    where: MealPlanItemWhereUniqueInput
    data: XOR<MealPlanItemUpdateWithoutRecipeInput, MealPlanItemUncheckedUpdateWithoutRecipeInput>
  }

  export type MealPlanItemUpdateManyWithWhereWithoutRecipeInput = {
    where: MealPlanItemScalarWhereInput
    data: XOR<MealPlanItemUpdateManyMutationInput, MealPlanItemUncheckedUpdateManyWithoutRecipeInput>
  }

  export type MealPlanItemScalarWhereInput = {
    AND?: MealPlanItemScalarWhereInput | MealPlanItemScalarWhereInput[]
    OR?: MealPlanItemScalarWhereInput[]
    NOT?: MealPlanItemScalarWhereInput | MealPlanItemScalarWhereInput[]
    id?: StringFilter<"MealPlanItem"> | string
    date?: DateTimeFilter<"MealPlanItem"> | Date | string
    mealType?: StringFilter<"MealPlanItem"> | string
    servings?: IntFilter<"MealPlanItem"> | number
    notes?: StringNullableFilter<"MealPlanItem"> | string | null
    mealPlanId?: StringFilter<"MealPlanItem"> | string
    recipeId?: StringFilter<"MealPlanItem"> | string
  }

  export type RecipeCreateWithoutImagesInput = {
    id?: string
    uuid: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: RecipeComponentCreateNestedManyWithoutRecipeInput
    createdBy: UserCreateNestedOneWithoutRecipesInput
    sharedRecipes?: SharedRecipeCreateNestedManyWithoutRecipeInput
    mealPlanItems?: MealPlanItemCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutImagesInput = {
    id?: string
    uuid: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    components?: RecipeComponentUncheckedCreateNestedManyWithoutRecipeInput
    sharedRecipes?: SharedRecipeUncheckedCreateNestedManyWithoutRecipeInput
    mealPlanItems?: MealPlanItemUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutImagesInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutImagesInput, RecipeUncheckedCreateWithoutImagesInput>
  }

  export type RecipeUpsertWithoutImagesInput = {
    update: XOR<RecipeUpdateWithoutImagesInput, RecipeUncheckedUpdateWithoutImagesInput>
    create: XOR<RecipeCreateWithoutImagesInput, RecipeUncheckedCreateWithoutImagesInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutImagesInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutImagesInput, RecipeUncheckedUpdateWithoutImagesInput>
  }

  export type RecipeUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: RecipeComponentUpdateManyWithoutRecipeNestedInput
    createdBy?: UserUpdateOneRequiredWithoutRecipesNestedInput
    sharedRecipes?: SharedRecipeUpdateManyWithoutRecipeNestedInput
    mealPlanItems?: MealPlanItemUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    components?: RecipeComponentUncheckedUpdateManyWithoutRecipeNestedInput
    sharedRecipes?: SharedRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    mealPlanItems?: MealPlanItemUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateWithoutComponentsInput = {
    id?: string
    uuid: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RecipeImageCreateNestedManyWithoutRecipeInput
    createdBy: UserCreateNestedOneWithoutRecipesInput
    sharedRecipes?: SharedRecipeCreateNestedManyWithoutRecipeInput
    mealPlanItems?: MealPlanItemCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutComponentsInput = {
    id?: string
    uuid: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    images?: RecipeImageUncheckedCreateNestedManyWithoutRecipeInput
    sharedRecipes?: SharedRecipeUncheckedCreateNestedManyWithoutRecipeInput
    mealPlanItems?: MealPlanItemUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutComponentsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutComponentsInput, RecipeUncheckedCreateWithoutComponentsInput>
  }

  export type RecipeIngredientCreateWithoutComponentInput = {
    id?: string
    uuid: string
    name: string
    quantity: number
    unit: string
    order?: number
    preparation?: string | null
  }

  export type RecipeIngredientUncheckedCreateWithoutComponentInput = {
    id?: string
    uuid: string
    name: string
    quantity: number
    unit: string
    order?: number
    preparation?: string | null
  }

  export type RecipeIngredientCreateOrConnectWithoutComponentInput = {
    where: RecipeIngredientWhereUniqueInput
    create: XOR<RecipeIngredientCreateWithoutComponentInput, RecipeIngredientUncheckedCreateWithoutComponentInput>
  }

  export type RecipeIngredientCreateManyComponentInputEnvelope = {
    data: RecipeIngredientCreateManyComponentInput | RecipeIngredientCreateManyComponentInput[]
    skipDuplicates?: boolean
  }

  export type RecipeInstructionCreateWithoutComponentInput = {
    id?: string
    uuid: string
    instruction: string
    order?: number
  }

  export type RecipeInstructionUncheckedCreateWithoutComponentInput = {
    id?: string
    uuid: string
    instruction: string
    order?: number
  }

  export type RecipeInstructionCreateOrConnectWithoutComponentInput = {
    where: RecipeInstructionWhereUniqueInput
    create: XOR<RecipeInstructionCreateWithoutComponentInput, RecipeInstructionUncheckedCreateWithoutComponentInput>
  }

  export type RecipeInstructionCreateManyComponentInputEnvelope = {
    data: RecipeInstructionCreateManyComponentInput | RecipeInstructionCreateManyComponentInput[]
    skipDuplicates?: boolean
  }

  export type RecipeUpsertWithoutComponentsInput = {
    update: XOR<RecipeUpdateWithoutComponentsInput, RecipeUncheckedUpdateWithoutComponentsInput>
    create: XOR<RecipeCreateWithoutComponentsInput, RecipeUncheckedCreateWithoutComponentsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutComponentsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutComponentsInput, RecipeUncheckedUpdateWithoutComponentsInput>
  }

  export type RecipeUpdateWithoutComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RecipeImageUpdateManyWithoutRecipeNestedInput
    createdBy?: UserUpdateOneRequiredWithoutRecipesNestedInput
    sharedRecipes?: SharedRecipeUpdateManyWithoutRecipeNestedInput
    mealPlanItems?: MealPlanItemUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    images?: RecipeImageUncheckedUpdateManyWithoutRecipeNestedInput
    sharedRecipes?: SharedRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    mealPlanItems?: MealPlanItemUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeIngredientUpsertWithWhereUniqueWithoutComponentInput = {
    where: RecipeIngredientWhereUniqueInput
    update: XOR<RecipeIngredientUpdateWithoutComponentInput, RecipeIngredientUncheckedUpdateWithoutComponentInput>
    create: XOR<RecipeIngredientCreateWithoutComponentInput, RecipeIngredientUncheckedCreateWithoutComponentInput>
  }

  export type RecipeIngredientUpdateWithWhereUniqueWithoutComponentInput = {
    where: RecipeIngredientWhereUniqueInput
    data: XOR<RecipeIngredientUpdateWithoutComponentInput, RecipeIngredientUncheckedUpdateWithoutComponentInput>
  }

  export type RecipeIngredientUpdateManyWithWhereWithoutComponentInput = {
    where: RecipeIngredientScalarWhereInput
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyWithoutComponentInput>
  }

  export type RecipeIngredientScalarWhereInput = {
    AND?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
    OR?: RecipeIngredientScalarWhereInput[]
    NOT?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
    id?: StringFilter<"RecipeIngredient"> | string
    uuid?: StringFilter<"RecipeIngredient"> | string
    name?: StringFilter<"RecipeIngredient"> | string
    quantity?: FloatFilter<"RecipeIngredient"> | number
    unit?: StringFilter<"RecipeIngredient"> | string
    order?: IntFilter<"RecipeIngredient"> | number
    preparation?: StringNullableFilter<"RecipeIngredient"> | string | null
    componentId?: StringFilter<"RecipeIngredient"> | string
  }

  export type RecipeInstructionUpsertWithWhereUniqueWithoutComponentInput = {
    where: RecipeInstructionWhereUniqueInput
    update: XOR<RecipeInstructionUpdateWithoutComponentInput, RecipeInstructionUncheckedUpdateWithoutComponentInput>
    create: XOR<RecipeInstructionCreateWithoutComponentInput, RecipeInstructionUncheckedCreateWithoutComponentInput>
  }

  export type RecipeInstructionUpdateWithWhereUniqueWithoutComponentInput = {
    where: RecipeInstructionWhereUniqueInput
    data: XOR<RecipeInstructionUpdateWithoutComponentInput, RecipeInstructionUncheckedUpdateWithoutComponentInput>
  }

  export type RecipeInstructionUpdateManyWithWhereWithoutComponentInput = {
    where: RecipeInstructionScalarWhereInput
    data: XOR<RecipeInstructionUpdateManyMutationInput, RecipeInstructionUncheckedUpdateManyWithoutComponentInput>
  }

  export type RecipeInstructionScalarWhereInput = {
    AND?: RecipeInstructionScalarWhereInput | RecipeInstructionScalarWhereInput[]
    OR?: RecipeInstructionScalarWhereInput[]
    NOT?: RecipeInstructionScalarWhereInput | RecipeInstructionScalarWhereInput[]
    id?: StringFilter<"RecipeInstruction"> | string
    uuid?: StringFilter<"RecipeInstruction"> | string
    instruction?: StringFilter<"RecipeInstruction"> | string
    order?: IntFilter<"RecipeInstruction"> | number
    componentId?: StringFilter<"RecipeInstruction"> | string
  }

  export type RecipeComponentCreateWithoutIngredientsInput = {
    id?: string
    uuid: string
    name: string
    storeable?: boolean
    servings?: number | null
    order?: number
    recipe: RecipeCreateNestedOneWithoutComponentsInput
    instructions?: RecipeInstructionCreateNestedManyWithoutComponentInput
  }

  export type RecipeComponentUncheckedCreateWithoutIngredientsInput = {
    id?: string
    uuid: string
    name: string
    storeable?: boolean
    servings?: number | null
    order?: number
    recipeId: string
    instructions?: RecipeInstructionUncheckedCreateNestedManyWithoutComponentInput
  }

  export type RecipeComponentCreateOrConnectWithoutIngredientsInput = {
    where: RecipeComponentWhereUniqueInput
    create: XOR<RecipeComponentCreateWithoutIngredientsInput, RecipeComponentUncheckedCreateWithoutIngredientsInput>
  }

  export type RecipeComponentUpsertWithoutIngredientsInput = {
    update: XOR<RecipeComponentUpdateWithoutIngredientsInput, RecipeComponentUncheckedUpdateWithoutIngredientsInput>
    create: XOR<RecipeComponentCreateWithoutIngredientsInput, RecipeComponentUncheckedCreateWithoutIngredientsInput>
    where?: RecipeComponentWhereInput
  }

  export type RecipeComponentUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: RecipeComponentWhereInput
    data: XOR<RecipeComponentUpdateWithoutIngredientsInput, RecipeComponentUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeComponentUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    storeable?: BoolFieldUpdateOperationsInput | boolean
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    recipe?: RecipeUpdateOneRequiredWithoutComponentsNestedInput
    instructions?: RecipeInstructionUpdateManyWithoutComponentNestedInput
  }

  export type RecipeComponentUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    storeable?: BoolFieldUpdateOperationsInput | boolean
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    recipeId?: StringFieldUpdateOperationsInput | string
    instructions?: RecipeInstructionUncheckedUpdateManyWithoutComponentNestedInput
  }

  export type RecipeComponentCreateWithoutInstructionsInput = {
    id?: string
    uuid: string
    name: string
    storeable?: boolean
    servings?: number | null
    order?: number
    recipe: RecipeCreateNestedOneWithoutComponentsInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutComponentInput
  }

  export type RecipeComponentUncheckedCreateWithoutInstructionsInput = {
    id?: string
    uuid: string
    name: string
    storeable?: boolean
    servings?: number | null
    order?: number
    recipeId: string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutComponentInput
  }

  export type RecipeComponentCreateOrConnectWithoutInstructionsInput = {
    where: RecipeComponentWhereUniqueInput
    create: XOR<RecipeComponentCreateWithoutInstructionsInput, RecipeComponentUncheckedCreateWithoutInstructionsInput>
  }

  export type RecipeComponentUpsertWithoutInstructionsInput = {
    update: XOR<RecipeComponentUpdateWithoutInstructionsInput, RecipeComponentUncheckedUpdateWithoutInstructionsInput>
    create: XOR<RecipeComponentCreateWithoutInstructionsInput, RecipeComponentUncheckedCreateWithoutInstructionsInput>
    where?: RecipeComponentWhereInput
  }

  export type RecipeComponentUpdateToOneWithWhereWithoutInstructionsInput = {
    where?: RecipeComponentWhereInput
    data: XOR<RecipeComponentUpdateWithoutInstructionsInput, RecipeComponentUncheckedUpdateWithoutInstructionsInput>
  }

  export type RecipeComponentUpdateWithoutInstructionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    storeable?: BoolFieldUpdateOperationsInput | boolean
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    recipe?: RecipeUpdateOneRequiredWithoutComponentsNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutComponentNestedInput
  }

  export type RecipeComponentUncheckedUpdateWithoutInstructionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    storeable?: BoolFieldUpdateOperationsInput | boolean
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    recipeId?: StringFieldUpdateOperationsInput | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutComponentNestedInput
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    recipes?: RecipeCreateNestedManyWithoutCreatedByInput
    sharedRecipes?: SharedRecipeCreateNestedManyWithoutSharedByInput
    mealPlans?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutCreatedByInput
    sharedRecipes?: SharedRecipeUncheckedCreateNestedManyWithoutSharedByInput
    mealPlans?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    recipes?: RecipeUpdateManyWithoutCreatedByNestedInput
    sharedRecipes?: SharedRecipeUpdateManyWithoutSharedByNestedInput
    mealPlans?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutCreatedByNestedInput
    sharedRecipes?: SharedRecipeUncheckedUpdateManyWithoutSharedByNestedInput
    mealPlans?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RecipeCreateWithoutSharedRecipesInput = {
    id?: string
    uuid: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RecipeImageCreateNestedManyWithoutRecipeInput
    components?: RecipeComponentCreateNestedManyWithoutRecipeInput
    createdBy: UserCreateNestedOneWithoutRecipesInput
    mealPlanItems?: MealPlanItemCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutSharedRecipesInput = {
    id?: string
    uuid: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    images?: RecipeImageUncheckedCreateNestedManyWithoutRecipeInput
    components?: RecipeComponentUncheckedCreateNestedManyWithoutRecipeInput
    mealPlanItems?: MealPlanItemUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutSharedRecipesInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutSharedRecipesInput, RecipeUncheckedCreateWithoutSharedRecipesInput>
  }

  export type UserCreateWithoutSharedRecipesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    recipes?: RecipeCreateNestedManyWithoutCreatedByInput
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    mealPlans?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSharedRecipesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutCreatedByInput
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    mealPlans?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSharedRecipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedRecipesInput, UserUncheckedCreateWithoutSharedRecipesInput>
  }

  export type RecipeUpsertWithoutSharedRecipesInput = {
    update: XOR<RecipeUpdateWithoutSharedRecipesInput, RecipeUncheckedUpdateWithoutSharedRecipesInput>
    create: XOR<RecipeCreateWithoutSharedRecipesInput, RecipeUncheckedCreateWithoutSharedRecipesInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutSharedRecipesInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutSharedRecipesInput, RecipeUncheckedUpdateWithoutSharedRecipesInput>
  }

  export type RecipeUpdateWithoutSharedRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RecipeImageUpdateManyWithoutRecipeNestedInput
    components?: RecipeComponentUpdateManyWithoutRecipeNestedInput
    createdBy?: UserUpdateOneRequiredWithoutRecipesNestedInput
    mealPlanItems?: MealPlanItemUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutSharedRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    images?: RecipeImageUncheckedUpdateManyWithoutRecipeNestedInput
    components?: RecipeComponentUncheckedUpdateManyWithoutRecipeNestedInput
    mealPlanItems?: MealPlanItemUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type UserUpsertWithoutSharedRecipesInput = {
    update: XOR<UserUpdateWithoutSharedRecipesInput, UserUncheckedUpdateWithoutSharedRecipesInput>
    create: XOR<UserCreateWithoutSharedRecipesInput, UserUncheckedCreateWithoutSharedRecipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharedRecipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharedRecipesInput, UserUncheckedUpdateWithoutSharedRecipesInput>
  }

  export type UserUpdateWithoutSharedRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    recipes?: RecipeUpdateManyWithoutCreatedByNestedInput
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    mealPlans?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutCreatedByNestedInput
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    mealPlans?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMealPlansInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    recipes?: RecipeCreateNestedManyWithoutCreatedByInput
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    sharedRecipes?: SharedRecipeCreateNestedManyWithoutSharedByInput
  }

  export type UserUncheckedCreateWithoutMealPlansInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutCreatedByInput
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    sharedRecipes?: SharedRecipeUncheckedCreateNestedManyWithoutSharedByInput
  }

  export type UserCreateOrConnectWithoutMealPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMealPlansInput, UserUncheckedCreateWithoutMealPlansInput>
  }

  export type MealPlanItemCreateWithoutMealPlanInput = {
    id?: string
    date: Date | string
    mealType: string
    servings?: number
    notes?: string | null
    recipe: RecipeCreateNestedOneWithoutMealPlanItemsInput
  }

  export type MealPlanItemUncheckedCreateWithoutMealPlanInput = {
    id?: string
    date: Date | string
    mealType: string
    servings?: number
    notes?: string | null
    recipeId: string
  }

  export type MealPlanItemCreateOrConnectWithoutMealPlanInput = {
    where: MealPlanItemWhereUniqueInput
    create: XOR<MealPlanItemCreateWithoutMealPlanInput, MealPlanItemUncheckedCreateWithoutMealPlanInput>
  }

  export type MealPlanItemCreateManyMealPlanInputEnvelope = {
    data: MealPlanItemCreateManyMealPlanInput | MealPlanItemCreateManyMealPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMealPlansInput = {
    update: XOR<UserUpdateWithoutMealPlansInput, UserUncheckedUpdateWithoutMealPlansInput>
    create: XOR<UserCreateWithoutMealPlansInput, UserUncheckedCreateWithoutMealPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMealPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMealPlansInput, UserUncheckedUpdateWithoutMealPlansInput>
  }

  export type UserUpdateWithoutMealPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    recipes?: RecipeUpdateManyWithoutCreatedByNestedInput
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    sharedRecipes?: SharedRecipeUpdateManyWithoutSharedByNestedInput
  }

  export type UserUncheckedUpdateWithoutMealPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutCreatedByNestedInput
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    sharedRecipes?: SharedRecipeUncheckedUpdateManyWithoutSharedByNestedInput
  }

  export type MealPlanItemUpsertWithWhereUniqueWithoutMealPlanInput = {
    where: MealPlanItemWhereUniqueInput
    update: XOR<MealPlanItemUpdateWithoutMealPlanInput, MealPlanItemUncheckedUpdateWithoutMealPlanInput>
    create: XOR<MealPlanItemCreateWithoutMealPlanInput, MealPlanItemUncheckedCreateWithoutMealPlanInput>
  }

  export type MealPlanItemUpdateWithWhereUniqueWithoutMealPlanInput = {
    where: MealPlanItemWhereUniqueInput
    data: XOR<MealPlanItemUpdateWithoutMealPlanInput, MealPlanItemUncheckedUpdateWithoutMealPlanInput>
  }

  export type MealPlanItemUpdateManyWithWhereWithoutMealPlanInput = {
    where: MealPlanItemScalarWhereInput
    data: XOR<MealPlanItemUpdateManyMutationInput, MealPlanItemUncheckedUpdateManyWithoutMealPlanInput>
  }

  export type MealPlanCreateWithoutItemsInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMealPlansInput
  }

  export type MealPlanUncheckedCreateWithoutItemsInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type MealPlanCreateOrConnectWithoutItemsInput = {
    where: MealPlanWhereUniqueInput
    create: XOR<MealPlanCreateWithoutItemsInput, MealPlanUncheckedCreateWithoutItemsInput>
  }

  export type RecipeCreateWithoutMealPlanItemsInput = {
    id?: string
    uuid: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RecipeImageCreateNestedManyWithoutRecipeInput
    components?: RecipeComponentCreateNestedManyWithoutRecipeInput
    createdBy: UserCreateNestedOneWithoutRecipesInput
    sharedRecipes?: SharedRecipeCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutMealPlanItemsInput = {
    id?: string
    uuid: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    images?: RecipeImageUncheckedCreateNestedManyWithoutRecipeInput
    components?: RecipeComponentUncheckedCreateNestedManyWithoutRecipeInput
    sharedRecipes?: SharedRecipeUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutMealPlanItemsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutMealPlanItemsInput, RecipeUncheckedCreateWithoutMealPlanItemsInput>
  }

  export type MealPlanUpsertWithoutItemsInput = {
    update: XOR<MealPlanUpdateWithoutItemsInput, MealPlanUncheckedUpdateWithoutItemsInput>
    create: XOR<MealPlanCreateWithoutItemsInput, MealPlanUncheckedCreateWithoutItemsInput>
    where?: MealPlanWhereInput
  }

  export type MealPlanUpdateToOneWithWhereWithoutItemsInput = {
    where?: MealPlanWhereInput
    data: XOR<MealPlanUpdateWithoutItemsInput, MealPlanUncheckedUpdateWithoutItemsInput>
  }

  export type MealPlanUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealPlansNestedInput
  }

  export type MealPlanUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUpsertWithoutMealPlanItemsInput = {
    update: XOR<RecipeUpdateWithoutMealPlanItemsInput, RecipeUncheckedUpdateWithoutMealPlanItemsInput>
    create: XOR<RecipeCreateWithoutMealPlanItemsInput, RecipeUncheckedCreateWithoutMealPlanItemsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutMealPlanItemsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutMealPlanItemsInput, RecipeUncheckedUpdateWithoutMealPlanItemsInput>
  }

  export type RecipeUpdateWithoutMealPlanItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RecipeImageUpdateManyWithoutRecipeNestedInput
    components?: RecipeComponentUpdateManyWithoutRecipeNestedInput
    createdBy?: UserUpdateOneRequiredWithoutRecipesNestedInput
    sharedRecipes?: SharedRecipeUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutMealPlanItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    images?: RecipeImageUncheckedUpdateManyWithoutRecipeNestedInput
    components?: RecipeComponentUncheckedUpdateManyWithoutRecipeNestedInput
    sharedRecipes?: SharedRecipeUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PostCreateManyCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeCreateManyCreatedByInput = {
    id?: string
    uuid: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceCreateManyUserInput = {
    id?: string
    category: string
    preference: string
    context?: string | null
    confidence?: number
    source?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharedRecipeCreateManySharedByInput = {
    id?: string
    shareId?: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    recipeId: string
  }

  export type MealPlanCreateManyUserInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RecipeImageUpdateManyWithoutRecipeNestedInput
    components?: RecipeComponentUpdateManyWithoutRecipeNestedInput
    sharedRecipes?: SharedRecipeUpdateManyWithoutRecipeNestedInput
    mealPlanItems?: MealPlanItemUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RecipeImageUncheckedUpdateManyWithoutRecipeNestedInput
    components?: RecipeComponentUncheckedUpdateManyWithoutRecipeNestedInput
    sharedRecipes?: SharedRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    mealPlanItems?: MealPlanItemUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    preference?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    preference?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    preference?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedRecipeUpdateWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipe?: RecipeUpdateOneRequiredWithoutSharedRecipesNestedInput
  }

  export type SharedRecipeUncheckedUpdateWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedRecipeUncheckedUpdateManyWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type MealPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: MealPlanItemUpdateManyWithoutMealPlanNestedInput
  }

  export type MealPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: MealPlanItemUncheckedUpdateManyWithoutMealPlanNestedInput
  }

  export type MealPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeImageCreateManyRecipeInput = {
    id?: string
    timestamp: bigint | number
    key: string
    imageData: string
    mimeType: string
  }

  export type RecipeComponentCreateManyRecipeInput = {
    id?: string
    uuid: string
    name: string
    storeable?: boolean
    servings?: number | null
    order?: number
  }

  export type SharedRecipeCreateManyRecipeInput = {
    id?: string
    shareId?: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    sharedById: string
  }

  export type MealPlanItemCreateManyRecipeInput = {
    id?: string
    date: Date | string
    mealType: string
    servings?: number
    notes?: string | null
    mealPlanId: string
  }

  export type RecipeImageUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    imageData?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeImageUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    imageData?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeImageUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    imageData?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeComponentUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    storeable?: BoolFieldUpdateOperationsInput | boolean
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    ingredients?: RecipeIngredientUpdateManyWithoutComponentNestedInput
    instructions?: RecipeInstructionUpdateManyWithoutComponentNestedInput
  }

  export type RecipeComponentUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    storeable?: BoolFieldUpdateOperationsInput | boolean
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutComponentNestedInput
    instructions?: RecipeInstructionUncheckedUpdateManyWithoutComponentNestedInput
  }

  export type RecipeComponentUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    storeable?: BoolFieldUpdateOperationsInput | boolean
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SharedRecipeUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedBy?: UserUpdateOneRequiredWithoutSharedRecipesNestedInput
  }

  export type SharedRecipeUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedById?: StringFieldUpdateOperationsInput | string
  }

  export type SharedRecipeUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedById?: StringFieldUpdateOperationsInput | string
  }

  export type MealPlanItemUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: MealPlanUpdateOneRequiredWithoutItemsNestedInput
  }

  export type MealPlanItemUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlanId?: StringFieldUpdateOperationsInput | string
  }

  export type MealPlanItemUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlanId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientCreateManyComponentInput = {
    id?: string
    uuid: string
    name: string
    quantity: number
    unit: string
    order?: number
    preparation?: string | null
  }

  export type RecipeInstructionCreateManyComponentInput = {
    id?: string
    uuid: string
    instruction: string
    order?: number
  }

  export type RecipeIngredientUpdateWithoutComponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    preparation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeIngredientUncheckedUpdateWithoutComponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    preparation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutComponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    preparation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeInstructionUpdateWithoutComponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeInstructionUncheckedUpdateWithoutComponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeInstructionUncheckedUpdateManyWithoutComponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type MealPlanItemCreateManyMealPlanInput = {
    id?: string
    date: Date | string
    mealType: string
    servings?: number
    notes?: string | null
    recipeId: string
  }

  export type MealPlanItemUpdateWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recipe?: RecipeUpdateOneRequiredWithoutMealPlanItemsNestedInput
  }

  export type MealPlanItemUncheckedUpdateWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type MealPlanItemUncheckedUpdateManyWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recipeId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}