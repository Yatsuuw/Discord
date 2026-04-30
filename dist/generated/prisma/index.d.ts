
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model anime_translates
 * 
 */
export type anime_translates = $Result.DefaultSelection<Prisma.$anime_translatesPayload>
/**
 * Model manga_translates
 * 
 */
export type manga_translates = $Result.DefaultSelection<Prisma.$manga_translatesPayload>
/**
 * Model servers
 * 
 */
export type servers = $Result.DefaultSelection<Prisma.$serversPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Anime_translates
 * const anime_translates = await prisma.anime_translates.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Anime_translates
   * const anime_translates = await prisma.anime_translates.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.anime_translates`: Exposes CRUD operations for the **anime_translates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anime_translates
    * const anime_translates = await prisma.anime_translates.findMany()
    * ```
    */
  get anime_translates(): Prisma.anime_translatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manga_translates`: Exposes CRUD operations for the **manga_translates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manga_translates
    * const manga_translates = await prisma.manga_translates.findMany()
    * ```
    */
  get manga_translates(): Prisma.manga_translatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servers`: Exposes CRUD operations for the **servers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers
    * const servers = await prisma.servers.findMany()
    * ```
    */
  get servers(): Prisma.serversDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    anime_translates: 'anime_translates',
    manga_translates: 'manga_translates',
    servers: 'servers',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "anime_translates" | "manga_translates" | "servers" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      anime_translates: {
        payload: Prisma.$anime_translatesPayload<ExtArgs>
        fields: Prisma.anime_translatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.anime_translatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anime_translatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.anime_translatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anime_translatesPayload>
          }
          findFirst: {
            args: Prisma.anime_translatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anime_translatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.anime_translatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anime_translatesPayload>
          }
          findMany: {
            args: Prisma.anime_translatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anime_translatesPayload>[]
          }
          create: {
            args: Prisma.anime_translatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anime_translatesPayload>
          }
          createMany: {
            args: Prisma.anime_translatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.anime_translatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anime_translatesPayload>
          }
          update: {
            args: Prisma.anime_translatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anime_translatesPayload>
          }
          deleteMany: {
            args: Prisma.anime_translatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.anime_translatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.anime_translatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anime_translatesPayload>
          }
          aggregate: {
            args: Prisma.Anime_translatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnime_translates>
          }
          groupBy: {
            args: Prisma.anime_translatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Anime_translatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.anime_translatesCountArgs<ExtArgs>
            result: $Utils.Optional<Anime_translatesCountAggregateOutputType> | number
          }
        }
      }
      manga_translates: {
        payload: Prisma.$manga_translatesPayload<ExtArgs>
        fields: Prisma.manga_translatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.manga_translatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manga_translatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.manga_translatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manga_translatesPayload>
          }
          findFirst: {
            args: Prisma.manga_translatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manga_translatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.manga_translatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manga_translatesPayload>
          }
          findMany: {
            args: Prisma.manga_translatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manga_translatesPayload>[]
          }
          create: {
            args: Prisma.manga_translatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manga_translatesPayload>
          }
          createMany: {
            args: Prisma.manga_translatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.manga_translatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manga_translatesPayload>
          }
          update: {
            args: Prisma.manga_translatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manga_translatesPayload>
          }
          deleteMany: {
            args: Prisma.manga_translatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.manga_translatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.manga_translatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manga_translatesPayload>
          }
          aggregate: {
            args: Prisma.Manga_translatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManga_translates>
          }
          groupBy: {
            args: Prisma.manga_translatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Manga_translatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.manga_translatesCountArgs<ExtArgs>
            result: $Utils.Optional<Manga_translatesCountAggregateOutputType> | number
          }
        }
      }
      servers: {
        payload: Prisma.$serversPayload<ExtArgs>
        fields: Prisma.serversFieldRefs
        operations: {
          findUnique: {
            args: Prisma.serversFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.serversFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          findFirst: {
            args: Prisma.serversFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.serversFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          findMany: {
            args: Prisma.serversFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>[]
          }
          create: {
            args: Prisma.serversCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          createMany: {
            args: Prisma.serversCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.serversDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          update: {
            args: Prisma.serversUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          deleteMany: {
            args: Prisma.serversDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.serversUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.serversUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          aggregate: {
            args: Prisma.ServersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServers>
          }
          groupBy: {
            args: Prisma.serversGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServersGroupByOutputType>[]
          }
          count: {
            args: Prisma.serversCountArgs<ExtArgs>
            result: $Utils.Optional<ServersCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    anime_translates?: anime_translatesOmit
    manga_translates?: manga_translatesOmit
    servers?: serversOmit
    users?: usersOmit
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
   * Models
   */

  /**
   * Model anime_translates
   */

  export type AggregateAnime_translates = {
    _count: Anime_translatesCountAggregateOutputType | null
    _min: Anime_translatesMinAggregateOutputType | null
    _max: Anime_translatesMaxAggregateOutputType | null
  }

  export type Anime_translatesMinAggregateOutputType = {
    anime: string | null
    language: string | null
  }

  export type Anime_translatesMaxAggregateOutputType = {
    anime: string | null
    language: string | null
  }

  export type Anime_translatesCountAggregateOutputType = {
    anime: number
    language: number
    _all: number
  }


  export type Anime_translatesMinAggregateInputType = {
    anime?: true
    language?: true
  }

  export type Anime_translatesMaxAggregateInputType = {
    anime?: true
    language?: true
  }

  export type Anime_translatesCountAggregateInputType = {
    anime?: true
    language?: true
    _all?: true
  }

  export type Anime_translatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which anime_translates to aggregate.
     */
    where?: anime_translatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of anime_translates to fetch.
     */
    orderBy?: anime_translatesOrderByWithRelationInput | anime_translatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: anime_translatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` anime_translates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` anime_translates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned anime_translates
    **/
    _count?: true | Anime_translatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Anime_translatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Anime_translatesMaxAggregateInputType
  }

  export type GetAnime_translatesAggregateType<T extends Anime_translatesAggregateArgs> = {
        [P in keyof T & keyof AggregateAnime_translates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnime_translates[P]>
      : GetScalarType<T[P], AggregateAnime_translates[P]>
  }




  export type anime_translatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: anime_translatesWhereInput
    orderBy?: anime_translatesOrderByWithAggregationInput | anime_translatesOrderByWithAggregationInput[]
    by: Anime_translatesScalarFieldEnum[] | Anime_translatesScalarFieldEnum
    having?: anime_translatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Anime_translatesCountAggregateInputType | true
    _min?: Anime_translatesMinAggregateInputType
    _max?: Anime_translatesMaxAggregateInputType
  }

  export type Anime_translatesGroupByOutputType = {
    anime: string
    language: string
    _count: Anime_translatesCountAggregateOutputType | null
    _min: Anime_translatesMinAggregateOutputType | null
    _max: Anime_translatesMaxAggregateOutputType | null
  }

  type GetAnime_translatesGroupByPayload<T extends anime_translatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Anime_translatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Anime_translatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Anime_translatesGroupByOutputType[P]>
            : GetScalarType<T[P], Anime_translatesGroupByOutputType[P]>
        }
      >
    >


  export type anime_translatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    anime?: boolean
    language?: boolean
  }, ExtArgs["result"]["anime_translates"]>



  export type anime_translatesSelectScalar = {
    anime?: boolean
    language?: boolean
  }

  export type anime_translatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"anime" | "language", ExtArgs["result"]["anime_translates"]>

  export type $anime_translatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "anime_translates"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      anime: string
      language: string
    }, ExtArgs["result"]["anime_translates"]>
    composites: {}
  }

  type anime_translatesGetPayload<S extends boolean | null | undefined | anime_translatesDefaultArgs> = $Result.GetResult<Prisma.$anime_translatesPayload, S>

  type anime_translatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<anime_translatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Anime_translatesCountAggregateInputType | true
    }

  export interface anime_translatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['anime_translates'], meta: { name: 'anime_translates' } }
    /**
     * Find zero or one Anime_translates that matches the filter.
     * @param {anime_translatesFindUniqueArgs} args - Arguments to find a Anime_translates
     * @example
     * // Get one Anime_translates
     * const anime_translates = await prisma.anime_translates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends anime_translatesFindUniqueArgs>(args: SelectSubset<T, anime_translatesFindUniqueArgs<ExtArgs>>): Prisma__anime_translatesClient<$Result.GetResult<Prisma.$anime_translatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Anime_translates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {anime_translatesFindUniqueOrThrowArgs} args - Arguments to find a Anime_translates
     * @example
     * // Get one Anime_translates
     * const anime_translates = await prisma.anime_translates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends anime_translatesFindUniqueOrThrowArgs>(args: SelectSubset<T, anime_translatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__anime_translatesClient<$Result.GetResult<Prisma.$anime_translatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anime_translates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {anime_translatesFindFirstArgs} args - Arguments to find a Anime_translates
     * @example
     * // Get one Anime_translates
     * const anime_translates = await prisma.anime_translates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends anime_translatesFindFirstArgs>(args?: SelectSubset<T, anime_translatesFindFirstArgs<ExtArgs>>): Prisma__anime_translatesClient<$Result.GetResult<Prisma.$anime_translatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anime_translates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {anime_translatesFindFirstOrThrowArgs} args - Arguments to find a Anime_translates
     * @example
     * // Get one Anime_translates
     * const anime_translates = await prisma.anime_translates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends anime_translatesFindFirstOrThrowArgs>(args?: SelectSubset<T, anime_translatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__anime_translatesClient<$Result.GetResult<Prisma.$anime_translatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Anime_translates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {anime_translatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anime_translates
     * const anime_translates = await prisma.anime_translates.findMany()
     * 
     * // Get first 10 Anime_translates
     * const anime_translates = await prisma.anime_translates.findMany({ take: 10 })
     * 
     * // Only select the `anime`
     * const anime_translatesWithAnimeOnly = await prisma.anime_translates.findMany({ select: { anime: true } })
     * 
     */
    findMany<T extends anime_translatesFindManyArgs>(args?: SelectSubset<T, anime_translatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$anime_translatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Anime_translates.
     * @param {anime_translatesCreateArgs} args - Arguments to create a Anime_translates.
     * @example
     * // Create one Anime_translates
     * const Anime_translates = await prisma.anime_translates.create({
     *   data: {
     *     // ... data to create a Anime_translates
     *   }
     * })
     * 
     */
    create<T extends anime_translatesCreateArgs>(args: SelectSubset<T, anime_translatesCreateArgs<ExtArgs>>): Prisma__anime_translatesClient<$Result.GetResult<Prisma.$anime_translatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Anime_translates.
     * @param {anime_translatesCreateManyArgs} args - Arguments to create many Anime_translates.
     * @example
     * // Create many Anime_translates
     * const anime_translates = await prisma.anime_translates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends anime_translatesCreateManyArgs>(args?: SelectSubset<T, anime_translatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Anime_translates.
     * @param {anime_translatesDeleteArgs} args - Arguments to delete one Anime_translates.
     * @example
     * // Delete one Anime_translates
     * const Anime_translates = await prisma.anime_translates.delete({
     *   where: {
     *     // ... filter to delete one Anime_translates
     *   }
     * })
     * 
     */
    delete<T extends anime_translatesDeleteArgs>(args: SelectSubset<T, anime_translatesDeleteArgs<ExtArgs>>): Prisma__anime_translatesClient<$Result.GetResult<Prisma.$anime_translatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Anime_translates.
     * @param {anime_translatesUpdateArgs} args - Arguments to update one Anime_translates.
     * @example
     * // Update one Anime_translates
     * const anime_translates = await prisma.anime_translates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends anime_translatesUpdateArgs>(args: SelectSubset<T, anime_translatesUpdateArgs<ExtArgs>>): Prisma__anime_translatesClient<$Result.GetResult<Prisma.$anime_translatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Anime_translates.
     * @param {anime_translatesDeleteManyArgs} args - Arguments to filter Anime_translates to delete.
     * @example
     * // Delete a few Anime_translates
     * const { count } = await prisma.anime_translates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends anime_translatesDeleteManyArgs>(args?: SelectSubset<T, anime_translatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anime_translates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {anime_translatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anime_translates
     * const anime_translates = await prisma.anime_translates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends anime_translatesUpdateManyArgs>(args: SelectSubset<T, anime_translatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Anime_translates.
     * @param {anime_translatesUpsertArgs} args - Arguments to update or create a Anime_translates.
     * @example
     * // Update or create a Anime_translates
     * const anime_translates = await prisma.anime_translates.upsert({
     *   create: {
     *     // ... data to create a Anime_translates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anime_translates we want to update
     *   }
     * })
     */
    upsert<T extends anime_translatesUpsertArgs>(args: SelectSubset<T, anime_translatesUpsertArgs<ExtArgs>>): Prisma__anime_translatesClient<$Result.GetResult<Prisma.$anime_translatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Anime_translates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {anime_translatesCountArgs} args - Arguments to filter Anime_translates to count.
     * @example
     * // Count the number of Anime_translates
     * const count = await prisma.anime_translates.count({
     *   where: {
     *     // ... the filter for the Anime_translates we want to count
     *   }
     * })
    **/
    count<T extends anime_translatesCountArgs>(
      args?: Subset<T, anime_translatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Anime_translatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anime_translates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Anime_translatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Anime_translatesAggregateArgs>(args: Subset<T, Anime_translatesAggregateArgs>): Prisma.PrismaPromise<GetAnime_translatesAggregateType<T>>

    /**
     * Group by Anime_translates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {anime_translatesGroupByArgs} args - Group by arguments.
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
      T extends anime_translatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: anime_translatesGroupByArgs['orderBy'] }
        : { orderBy?: anime_translatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, anime_translatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnime_translatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the anime_translates model
   */
  readonly fields: anime_translatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for anime_translates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__anime_translatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the anime_translates model
   */
  interface anime_translatesFieldRefs {
    readonly anime: FieldRef<"anime_translates", 'String'>
    readonly language: FieldRef<"anime_translates", 'String'>
  }
    

  // Custom InputTypes
  /**
   * anime_translates findUnique
   */
  export type anime_translatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime_translates
     */
    select?: anime_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime_translates
     */
    omit?: anime_translatesOmit<ExtArgs> | null
    /**
     * Filter, which anime_translates to fetch.
     */
    where: anime_translatesWhereUniqueInput
  }

  /**
   * anime_translates findUniqueOrThrow
   */
  export type anime_translatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime_translates
     */
    select?: anime_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime_translates
     */
    omit?: anime_translatesOmit<ExtArgs> | null
    /**
     * Filter, which anime_translates to fetch.
     */
    where: anime_translatesWhereUniqueInput
  }

  /**
   * anime_translates findFirst
   */
  export type anime_translatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime_translates
     */
    select?: anime_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime_translates
     */
    omit?: anime_translatesOmit<ExtArgs> | null
    /**
     * Filter, which anime_translates to fetch.
     */
    where?: anime_translatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of anime_translates to fetch.
     */
    orderBy?: anime_translatesOrderByWithRelationInput | anime_translatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for anime_translates.
     */
    cursor?: anime_translatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` anime_translates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` anime_translates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of anime_translates.
     */
    distinct?: Anime_translatesScalarFieldEnum | Anime_translatesScalarFieldEnum[]
  }

  /**
   * anime_translates findFirstOrThrow
   */
  export type anime_translatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime_translates
     */
    select?: anime_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime_translates
     */
    omit?: anime_translatesOmit<ExtArgs> | null
    /**
     * Filter, which anime_translates to fetch.
     */
    where?: anime_translatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of anime_translates to fetch.
     */
    orderBy?: anime_translatesOrderByWithRelationInput | anime_translatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for anime_translates.
     */
    cursor?: anime_translatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` anime_translates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` anime_translates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of anime_translates.
     */
    distinct?: Anime_translatesScalarFieldEnum | Anime_translatesScalarFieldEnum[]
  }

  /**
   * anime_translates findMany
   */
  export type anime_translatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime_translates
     */
    select?: anime_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime_translates
     */
    omit?: anime_translatesOmit<ExtArgs> | null
    /**
     * Filter, which anime_translates to fetch.
     */
    where?: anime_translatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of anime_translates to fetch.
     */
    orderBy?: anime_translatesOrderByWithRelationInput | anime_translatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing anime_translates.
     */
    cursor?: anime_translatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` anime_translates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` anime_translates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of anime_translates.
     */
    distinct?: Anime_translatesScalarFieldEnum | Anime_translatesScalarFieldEnum[]
  }

  /**
   * anime_translates create
   */
  export type anime_translatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime_translates
     */
    select?: anime_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime_translates
     */
    omit?: anime_translatesOmit<ExtArgs> | null
    /**
     * The data needed to create a anime_translates.
     */
    data: XOR<anime_translatesCreateInput, anime_translatesUncheckedCreateInput>
  }

  /**
   * anime_translates createMany
   */
  export type anime_translatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many anime_translates.
     */
    data: anime_translatesCreateManyInput | anime_translatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * anime_translates update
   */
  export type anime_translatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime_translates
     */
    select?: anime_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime_translates
     */
    omit?: anime_translatesOmit<ExtArgs> | null
    /**
     * The data needed to update a anime_translates.
     */
    data: XOR<anime_translatesUpdateInput, anime_translatesUncheckedUpdateInput>
    /**
     * Choose, which anime_translates to update.
     */
    where: anime_translatesWhereUniqueInput
  }

  /**
   * anime_translates updateMany
   */
  export type anime_translatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update anime_translates.
     */
    data: XOR<anime_translatesUpdateManyMutationInput, anime_translatesUncheckedUpdateManyInput>
    /**
     * Filter which anime_translates to update
     */
    where?: anime_translatesWhereInput
    /**
     * Limit how many anime_translates to update.
     */
    limit?: number
  }

  /**
   * anime_translates upsert
   */
  export type anime_translatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime_translates
     */
    select?: anime_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime_translates
     */
    omit?: anime_translatesOmit<ExtArgs> | null
    /**
     * The filter to search for the anime_translates to update in case it exists.
     */
    where: anime_translatesWhereUniqueInput
    /**
     * In case the anime_translates found by the `where` argument doesn't exist, create a new anime_translates with this data.
     */
    create: XOR<anime_translatesCreateInput, anime_translatesUncheckedCreateInput>
    /**
     * In case the anime_translates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<anime_translatesUpdateInput, anime_translatesUncheckedUpdateInput>
  }

  /**
   * anime_translates delete
   */
  export type anime_translatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime_translates
     */
    select?: anime_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime_translates
     */
    omit?: anime_translatesOmit<ExtArgs> | null
    /**
     * Filter which anime_translates to delete.
     */
    where: anime_translatesWhereUniqueInput
  }

  /**
   * anime_translates deleteMany
   */
  export type anime_translatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which anime_translates to delete
     */
    where?: anime_translatesWhereInput
    /**
     * Limit how many anime_translates to delete.
     */
    limit?: number
  }

  /**
   * anime_translates without action
   */
  export type anime_translatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime_translates
     */
    select?: anime_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime_translates
     */
    omit?: anime_translatesOmit<ExtArgs> | null
  }


  /**
   * Model manga_translates
   */

  export type AggregateManga_translates = {
    _count: Manga_translatesCountAggregateOutputType | null
    _min: Manga_translatesMinAggregateOutputType | null
    _max: Manga_translatesMaxAggregateOutputType | null
  }

  export type Manga_translatesMinAggregateOutputType = {
    manga: string | null
    language: string | null
  }

  export type Manga_translatesMaxAggregateOutputType = {
    manga: string | null
    language: string | null
  }

  export type Manga_translatesCountAggregateOutputType = {
    manga: number
    language: number
    _all: number
  }


  export type Manga_translatesMinAggregateInputType = {
    manga?: true
    language?: true
  }

  export type Manga_translatesMaxAggregateInputType = {
    manga?: true
    language?: true
  }

  export type Manga_translatesCountAggregateInputType = {
    manga?: true
    language?: true
    _all?: true
  }

  export type Manga_translatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which manga_translates to aggregate.
     */
    where?: manga_translatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manga_translates to fetch.
     */
    orderBy?: manga_translatesOrderByWithRelationInput | manga_translatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: manga_translatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manga_translates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manga_translates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned manga_translates
    **/
    _count?: true | Manga_translatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Manga_translatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Manga_translatesMaxAggregateInputType
  }

  export type GetManga_translatesAggregateType<T extends Manga_translatesAggregateArgs> = {
        [P in keyof T & keyof AggregateManga_translates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManga_translates[P]>
      : GetScalarType<T[P], AggregateManga_translates[P]>
  }




  export type manga_translatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: manga_translatesWhereInput
    orderBy?: manga_translatesOrderByWithAggregationInput | manga_translatesOrderByWithAggregationInput[]
    by: Manga_translatesScalarFieldEnum[] | Manga_translatesScalarFieldEnum
    having?: manga_translatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Manga_translatesCountAggregateInputType | true
    _min?: Manga_translatesMinAggregateInputType
    _max?: Manga_translatesMaxAggregateInputType
  }

  export type Manga_translatesGroupByOutputType = {
    manga: string
    language: string
    _count: Manga_translatesCountAggregateOutputType | null
    _min: Manga_translatesMinAggregateOutputType | null
    _max: Manga_translatesMaxAggregateOutputType | null
  }

  type GetManga_translatesGroupByPayload<T extends manga_translatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Manga_translatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Manga_translatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Manga_translatesGroupByOutputType[P]>
            : GetScalarType<T[P], Manga_translatesGroupByOutputType[P]>
        }
      >
    >


  export type manga_translatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    manga?: boolean
    language?: boolean
  }, ExtArgs["result"]["manga_translates"]>



  export type manga_translatesSelectScalar = {
    manga?: boolean
    language?: boolean
  }

  export type manga_translatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"manga" | "language", ExtArgs["result"]["manga_translates"]>

  export type $manga_translatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "manga_translates"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      manga: string
      language: string
    }, ExtArgs["result"]["manga_translates"]>
    composites: {}
  }

  type manga_translatesGetPayload<S extends boolean | null | undefined | manga_translatesDefaultArgs> = $Result.GetResult<Prisma.$manga_translatesPayload, S>

  type manga_translatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<manga_translatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Manga_translatesCountAggregateInputType | true
    }

  export interface manga_translatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['manga_translates'], meta: { name: 'manga_translates' } }
    /**
     * Find zero or one Manga_translates that matches the filter.
     * @param {manga_translatesFindUniqueArgs} args - Arguments to find a Manga_translates
     * @example
     * // Get one Manga_translates
     * const manga_translates = await prisma.manga_translates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends manga_translatesFindUniqueArgs>(args: SelectSubset<T, manga_translatesFindUniqueArgs<ExtArgs>>): Prisma__manga_translatesClient<$Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manga_translates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {manga_translatesFindUniqueOrThrowArgs} args - Arguments to find a Manga_translates
     * @example
     * // Get one Manga_translates
     * const manga_translates = await prisma.manga_translates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends manga_translatesFindUniqueOrThrowArgs>(args: SelectSubset<T, manga_translatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__manga_translatesClient<$Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manga_translates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manga_translatesFindFirstArgs} args - Arguments to find a Manga_translates
     * @example
     * // Get one Manga_translates
     * const manga_translates = await prisma.manga_translates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends manga_translatesFindFirstArgs>(args?: SelectSubset<T, manga_translatesFindFirstArgs<ExtArgs>>): Prisma__manga_translatesClient<$Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manga_translates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manga_translatesFindFirstOrThrowArgs} args - Arguments to find a Manga_translates
     * @example
     * // Get one Manga_translates
     * const manga_translates = await prisma.manga_translates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends manga_translatesFindFirstOrThrowArgs>(args?: SelectSubset<T, manga_translatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__manga_translatesClient<$Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Manga_translates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manga_translatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manga_translates
     * const manga_translates = await prisma.manga_translates.findMany()
     * 
     * // Get first 10 Manga_translates
     * const manga_translates = await prisma.manga_translates.findMany({ take: 10 })
     * 
     * // Only select the `manga`
     * const manga_translatesWithMangaOnly = await prisma.manga_translates.findMany({ select: { manga: true } })
     * 
     */
    findMany<T extends manga_translatesFindManyArgs>(args?: SelectSubset<T, manga_translatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manga_translates.
     * @param {manga_translatesCreateArgs} args - Arguments to create a Manga_translates.
     * @example
     * // Create one Manga_translates
     * const Manga_translates = await prisma.manga_translates.create({
     *   data: {
     *     // ... data to create a Manga_translates
     *   }
     * })
     * 
     */
    create<T extends manga_translatesCreateArgs>(args: SelectSubset<T, manga_translatesCreateArgs<ExtArgs>>): Prisma__manga_translatesClient<$Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Manga_translates.
     * @param {manga_translatesCreateManyArgs} args - Arguments to create many Manga_translates.
     * @example
     * // Create many Manga_translates
     * const manga_translates = await prisma.manga_translates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends manga_translatesCreateManyArgs>(args?: SelectSubset<T, manga_translatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Manga_translates.
     * @param {manga_translatesDeleteArgs} args - Arguments to delete one Manga_translates.
     * @example
     * // Delete one Manga_translates
     * const Manga_translates = await prisma.manga_translates.delete({
     *   where: {
     *     // ... filter to delete one Manga_translates
     *   }
     * })
     * 
     */
    delete<T extends manga_translatesDeleteArgs>(args: SelectSubset<T, manga_translatesDeleteArgs<ExtArgs>>): Prisma__manga_translatesClient<$Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manga_translates.
     * @param {manga_translatesUpdateArgs} args - Arguments to update one Manga_translates.
     * @example
     * // Update one Manga_translates
     * const manga_translates = await prisma.manga_translates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends manga_translatesUpdateArgs>(args: SelectSubset<T, manga_translatesUpdateArgs<ExtArgs>>): Prisma__manga_translatesClient<$Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Manga_translates.
     * @param {manga_translatesDeleteManyArgs} args - Arguments to filter Manga_translates to delete.
     * @example
     * // Delete a few Manga_translates
     * const { count } = await prisma.manga_translates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends manga_translatesDeleteManyArgs>(args?: SelectSubset<T, manga_translatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manga_translates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manga_translatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manga_translates
     * const manga_translates = await prisma.manga_translates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends manga_translatesUpdateManyArgs>(args: SelectSubset<T, manga_translatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Manga_translates.
     * @param {manga_translatesUpsertArgs} args - Arguments to update or create a Manga_translates.
     * @example
     * // Update or create a Manga_translates
     * const manga_translates = await prisma.manga_translates.upsert({
     *   create: {
     *     // ... data to create a Manga_translates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manga_translates we want to update
     *   }
     * })
     */
    upsert<T extends manga_translatesUpsertArgs>(args: SelectSubset<T, manga_translatesUpsertArgs<ExtArgs>>): Prisma__manga_translatesClient<$Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Manga_translates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manga_translatesCountArgs} args - Arguments to filter Manga_translates to count.
     * @example
     * // Count the number of Manga_translates
     * const count = await prisma.manga_translates.count({
     *   where: {
     *     // ... the filter for the Manga_translates we want to count
     *   }
     * })
    **/
    count<T extends manga_translatesCountArgs>(
      args?: Subset<T, manga_translatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Manga_translatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manga_translates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Manga_translatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Manga_translatesAggregateArgs>(args: Subset<T, Manga_translatesAggregateArgs>): Prisma.PrismaPromise<GetManga_translatesAggregateType<T>>

    /**
     * Group by Manga_translates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manga_translatesGroupByArgs} args - Group by arguments.
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
      T extends manga_translatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: manga_translatesGroupByArgs['orderBy'] }
        : { orderBy?: manga_translatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, manga_translatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManga_translatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the manga_translates model
   */
  readonly fields: manga_translatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for manga_translates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__manga_translatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the manga_translates model
   */
  interface manga_translatesFieldRefs {
    readonly manga: FieldRef<"manga_translates", 'String'>
    readonly language: FieldRef<"manga_translates", 'String'>
  }
    

  // Custom InputTypes
  /**
   * manga_translates findUnique
   */
  export type manga_translatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: manga_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: manga_translatesOmit<ExtArgs> | null
    /**
     * Filter, which manga_translates to fetch.
     */
    where: manga_translatesWhereUniqueInput
  }

  /**
   * manga_translates findUniqueOrThrow
   */
  export type manga_translatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: manga_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: manga_translatesOmit<ExtArgs> | null
    /**
     * Filter, which manga_translates to fetch.
     */
    where: manga_translatesWhereUniqueInput
  }

  /**
   * manga_translates findFirst
   */
  export type manga_translatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: manga_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: manga_translatesOmit<ExtArgs> | null
    /**
     * Filter, which manga_translates to fetch.
     */
    where?: manga_translatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manga_translates to fetch.
     */
    orderBy?: manga_translatesOrderByWithRelationInput | manga_translatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for manga_translates.
     */
    cursor?: manga_translatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manga_translates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manga_translates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of manga_translates.
     */
    distinct?: Manga_translatesScalarFieldEnum | Manga_translatesScalarFieldEnum[]
  }

  /**
   * manga_translates findFirstOrThrow
   */
  export type manga_translatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: manga_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: manga_translatesOmit<ExtArgs> | null
    /**
     * Filter, which manga_translates to fetch.
     */
    where?: manga_translatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manga_translates to fetch.
     */
    orderBy?: manga_translatesOrderByWithRelationInput | manga_translatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for manga_translates.
     */
    cursor?: manga_translatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manga_translates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manga_translates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of manga_translates.
     */
    distinct?: Manga_translatesScalarFieldEnum | Manga_translatesScalarFieldEnum[]
  }

  /**
   * manga_translates findMany
   */
  export type manga_translatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: manga_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: manga_translatesOmit<ExtArgs> | null
    /**
     * Filter, which manga_translates to fetch.
     */
    where?: manga_translatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manga_translates to fetch.
     */
    orderBy?: manga_translatesOrderByWithRelationInput | manga_translatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing manga_translates.
     */
    cursor?: manga_translatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manga_translates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manga_translates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of manga_translates.
     */
    distinct?: Manga_translatesScalarFieldEnum | Manga_translatesScalarFieldEnum[]
  }

  /**
   * manga_translates create
   */
  export type manga_translatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: manga_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: manga_translatesOmit<ExtArgs> | null
    /**
     * The data needed to create a manga_translates.
     */
    data: XOR<manga_translatesCreateInput, manga_translatesUncheckedCreateInput>
  }

  /**
   * manga_translates createMany
   */
  export type manga_translatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many manga_translates.
     */
    data: manga_translatesCreateManyInput | manga_translatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * manga_translates update
   */
  export type manga_translatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: manga_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: manga_translatesOmit<ExtArgs> | null
    /**
     * The data needed to update a manga_translates.
     */
    data: XOR<manga_translatesUpdateInput, manga_translatesUncheckedUpdateInput>
    /**
     * Choose, which manga_translates to update.
     */
    where: manga_translatesWhereUniqueInput
  }

  /**
   * manga_translates updateMany
   */
  export type manga_translatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update manga_translates.
     */
    data: XOR<manga_translatesUpdateManyMutationInput, manga_translatesUncheckedUpdateManyInput>
    /**
     * Filter which manga_translates to update
     */
    where?: manga_translatesWhereInput
    /**
     * Limit how many manga_translates to update.
     */
    limit?: number
  }

  /**
   * manga_translates upsert
   */
  export type manga_translatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: manga_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: manga_translatesOmit<ExtArgs> | null
    /**
     * The filter to search for the manga_translates to update in case it exists.
     */
    where: manga_translatesWhereUniqueInput
    /**
     * In case the manga_translates found by the `where` argument doesn't exist, create a new manga_translates with this data.
     */
    create: XOR<manga_translatesCreateInput, manga_translatesUncheckedCreateInput>
    /**
     * In case the manga_translates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<manga_translatesUpdateInput, manga_translatesUncheckedUpdateInput>
  }

  /**
   * manga_translates delete
   */
  export type manga_translatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: manga_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: manga_translatesOmit<ExtArgs> | null
    /**
     * Filter which manga_translates to delete.
     */
    where: manga_translatesWhereUniqueInput
  }

  /**
   * manga_translates deleteMany
   */
  export type manga_translatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which manga_translates to delete
     */
    where?: manga_translatesWhereInput
    /**
     * Limit how many manga_translates to delete.
     */
    limit?: number
  }

  /**
   * manga_translates without action
   */
  export type manga_translatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: manga_translatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: manga_translatesOmit<ExtArgs> | null
  }


  /**
   * Model servers
   */

  export type AggregateServers = {
    _count: ServersCountAggregateOutputType | null
    _min: ServersMinAggregateOutputType | null
    _max: ServersMaxAggregateOutputType | null
  }

  export type ServersMinAggregateOutputType = {
    id: string | null
    owner: string | null
  }

  export type ServersMaxAggregateOutputType = {
    id: string | null
    owner: string | null
  }

  export type ServersCountAggregateOutputType = {
    id: number
    owner: number
    _all: number
  }


  export type ServersMinAggregateInputType = {
    id?: true
    owner?: true
  }

  export type ServersMaxAggregateInputType = {
    id?: true
    owner?: true
  }

  export type ServersCountAggregateInputType = {
    id?: true
    owner?: true
    _all?: true
  }

  export type ServersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servers to aggregate.
     */
    where?: serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers to fetch.
     */
    orderBy?: serversOrderByWithRelationInput | serversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servers
    **/
    _count?: true | ServersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServersMaxAggregateInputType
  }

  export type GetServersAggregateType<T extends ServersAggregateArgs> = {
        [P in keyof T & keyof AggregateServers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServers[P]>
      : GetScalarType<T[P], AggregateServers[P]>
  }




  export type serversGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serversWhereInput
    orderBy?: serversOrderByWithAggregationInput | serversOrderByWithAggregationInput[]
    by: ServersScalarFieldEnum[] | ServersScalarFieldEnum
    having?: serversScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServersCountAggregateInputType | true
    _min?: ServersMinAggregateInputType
    _max?: ServersMaxAggregateInputType
  }

  export type ServersGroupByOutputType = {
    id: string
    owner: string
    _count: ServersCountAggregateOutputType | null
    _min: ServersMinAggregateOutputType | null
    _max: ServersMaxAggregateOutputType | null
  }

  type GetServersGroupByPayload<T extends serversGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServersGroupByOutputType[P]>
            : GetScalarType<T[P], ServersGroupByOutputType[P]>
        }
      >
    >


  export type serversSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
  }, ExtArgs["result"]["servers"]>



  export type serversSelectScalar = {
    id?: boolean
    owner?: boolean
  }

  export type serversOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner", ExtArgs["result"]["servers"]>

  export type $serversPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner: string
    }, ExtArgs["result"]["servers"]>
    composites: {}
  }

  type serversGetPayload<S extends boolean | null | undefined | serversDefaultArgs> = $Result.GetResult<Prisma.$serversPayload, S>

  type serversCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<serversFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServersCountAggregateInputType | true
    }

  export interface serversDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servers'], meta: { name: 'servers' } }
    /**
     * Find zero or one Servers that matches the filter.
     * @param {serversFindUniqueArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends serversFindUniqueArgs>(args: SelectSubset<T, serversFindUniqueArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {serversFindUniqueOrThrowArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends serversFindUniqueOrThrowArgs>(args: SelectSubset<T, serversFindUniqueOrThrowArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversFindFirstArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends serversFindFirstArgs>(args?: SelectSubset<T, serversFindFirstArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversFindFirstOrThrowArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends serversFindFirstOrThrowArgs>(args?: SelectSubset<T, serversFindFirstOrThrowArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers
     * const servers = await prisma.servers.findMany()
     * 
     * // Get first 10 Servers
     * const servers = await prisma.servers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serversWithIdOnly = await prisma.servers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends serversFindManyArgs>(args?: SelectSubset<T, serversFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servers.
     * @param {serversCreateArgs} args - Arguments to create a Servers.
     * @example
     * // Create one Servers
     * const Servers = await prisma.servers.create({
     *   data: {
     *     // ... data to create a Servers
     *   }
     * })
     * 
     */
    create<T extends serversCreateArgs>(args: SelectSubset<T, serversCreateArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servers.
     * @param {serversCreateManyArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const servers = await prisma.servers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends serversCreateManyArgs>(args?: SelectSubset<T, serversCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servers.
     * @param {serversDeleteArgs} args - Arguments to delete one Servers.
     * @example
     * // Delete one Servers
     * const Servers = await prisma.servers.delete({
     *   where: {
     *     // ... filter to delete one Servers
     *   }
     * })
     * 
     */
    delete<T extends serversDeleteArgs>(args: SelectSubset<T, serversDeleteArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servers.
     * @param {serversUpdateArgs} args - Arguments to update one Servers.
     * @example
     * // Update one Servers
     * const servers = await prisma.servers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends serversUpdateArgs>(args: SelectSubset<T, serversUpdateArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servers.
     * @param {serversDeleteManyArgs} args - Arguments to filter Servers to delete.
     * @example
     * // Delete a few Servers
     * const { count } = await prisma.servers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends serversDeleteManyArgs>(args?: SelectSubset<T, serversDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers
     * const servers = await prisma.servers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends serversUpdateManyArgs>(args: SelectSubset<T, serversUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servers.
     * @param {serversUpsertArgs} args - Arguments to update or create a Servers.
     * @example
     * // Update or create a Servers
     * const servers = await prisma.servers.upsert({
     *   create: {
     *     // ... data to create a Servers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servers we want to update
     *   }
     * })
     */
    upsert<T extends serversUpsertArgs>(args: SelectSubset<T, serversUpsertArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversCountArgs} args - Arguments to filter Servers to count.
     * @example
     * // Count the number of Servers
     * const count = await prisma.servers.count({
     *   where: {
     *     // ... the filter for the Servers we want to count
     *   }
     * })
    **/
    count<T extends serversCountArgs>(
      args?: Subset<T, serversCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServersAggregateArgs>(args: Subset<T, ServersAggregateArgs>): Prisma.PrismaPromise<GetServersAggregateType<T>>

    /**
     * Group by Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversGroupByArgs} args - Group by arguments.
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
      T extends serversGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: serversGroupByArgs['orderBy'] }
        : { orderBy?: serversGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, serversGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servers model
   */
  readonly fields: serversFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__serversClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the servers model
   */
  interface serversFieldRefs {
    readonly id: FieldRef<"servers", 'String'>
    readonly owner: FieldRef<"servers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * servers findUnique
   */
  export type serversFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where: serversWhereUniqueInput
  }

  /**
   * servers findUniqueOrThrow
   */
  export type serversFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where: serversWhereUniqueInput
  }

  /**
   * servers findFirst
   */
  export type serversFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where?: serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers to fetch.
     */
    orderBy?: serversOrderByWithRelationInput | serversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servers.
     */
    cursor?: serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servers.
     */
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * servers findFirstOrThrow
   */
  export type serversFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where?: serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers to fetch.
     */
    orderBy?: serversOrderByWithRelationInput | serversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servers.
     */
    cursor?: serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servers.
     */
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * servers findMany
   */
  export type serversFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where?: serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers to fetch.
     */
    orderBy?: serversOrderByWithRelationInput | serversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servers.
     */
    cursor?: serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servers.
     */
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * servers create
   */
  export type serversCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * The data needed to create a servers.
     */
    data: XOR<serversCreateInput, serversUncheckedCreateInput>
  }

  /**
   * servers createMany
   */
  export type serversCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servers.
     */
    data: serversCreateManyInput | serversCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servers update
   */
  export type serversUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * The data needed to update a servers.
     */
    data: XOR<serversUpdateInput, serversUncheckedUpdateInput>
    /**
     * Choose, which servers to update.
     */
    where: serversWhereUniqueInput
  }

  /**
   * servers updateMany
   */
  export type serversUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servers.
     */
    data: XOR<serversUpdateManyMutationInput, serversUncheckedUpdateManyInput>
    /**
     * Filter which servers to update
     */
    where?: serversWhereInput
    /**
     * Limit how many servers to update.
     */
    limit?: number
  }

  /**
   * servers upsert
   */
  export type serversUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * The filter to search for the servers to update in case it exists.
     */
    where: serversWhereUniqueInput
    /**
     * In case the servers found by the `where` argument doesn't exist, create a new servers with this data.
     */
    create: XOR<serversCreateInput, serversUncheckedCreateInput>
    /**
     * In case the servers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serversUpdateInput, serversUncheckedUpdateInput>
  }

  /**
   * servers delete
   */
  export type serversDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Filter which servers to delete.
     */
    where: serversWhereUniqueInput
  }

  /**
   * servers deleteMany
   */
  export type serversDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servers to delete
     */
    where?: serversWhereInput
    /**
     * Limit how many servers to delete.
     */
    limit?: number
  }

  /**
   * servers without action
   */
  export type serversDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user: string | null
    mal_username: string | null
    al_username: string | null
    mangacollec: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user: string | null
    mal_username: string | null
    al_username: string | null
    mangacollec: string | null
  }

  export type UsersCountAggregateOutputType = {
    user: number
    mal_username: number
    al_username: number
    mangacollec: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user?: true
    mal_username?: true
    al_username?: true
    mangacollec?: true
  }

  export type UsersMaxAggregateInputType = {
    user?: true
    mal_username?: true
    al_username?: true
    mangacollec?: true
  }

  export type UsersCountAggregateInputType = {
    user?: true
    mal_username?: true
    al_username?: true
    mangacollec?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user: string
    mal_username: string | null
    al_username: string | null
    mangacollec: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user?: boolean
    mal_username?: boolean
    al_username?: boolean
    mangacollec?: boolean
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    user?: boolean
    mal_username?: boolean
    al_username?: boolean
    mangacollec?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user" | "mal_username" | "al_username" | "mangacollec", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      user: string
      mal_username: string | null
      al_username: string | null
      mangacollec: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user`
     * const usersWithUserOnly = await prisma.users.findMany({ select: { user: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user: FieldRef<"users", 'String'>
    readonly mal_username: FieldRef<"users", 'String'>
    readonly al_username: FieldRef<"users", 'String'>
    readonly mangacollec: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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


  export const Anime_translatesScalarFieldEnum: {
    anime: 'anime',
    language: 'language'
  };

  export type Anime_translatesScalarFieldEnum = (typeof Anime_translatesScalarFieldEnum)[keyof typeof Anime_translatesScalarFieldEnum]


  export const Manga_translatesScalarFieldEnum: {
    manga: 'manga',
    language: 'language'
  };

  export type Manga_translatesScalarFieldEnum = (typeof Manga_translatesScalarFieldEnum)[keyof typeof Manga_translatesScalarFieldEnum]


  export const ServersScalarFieldEnum: {
    id: 'id',
    owner: 'owner'
  };

  export type ServersScalarFieldEnum = (typeof ServersScalarFieldEnum)[keyof typeof ServersScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user: 'user',
    mal_username: 'mal_username',
    al_username: 'al_username',
    mangacollec: 'mangacollec'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const anime_translatesOrderByRelevanceFieldEnum: {
    anime: 'anime',
    language: 'language'
  };

  export type anime_translatesOrderByRelevanceFieldEnum = (typeof anime_translatesOrderByRelevanceFieldEnum)[keyof typeof anime_translatesOrderByRelevanceFieldEnum]


  export const manga_translatesOrderByRelevanceFieldEnum: {
    manga: 'manga',
    language: 'language'
  };

  export type manga_translatesOrderByRelevanceFieldEnum = (typeof manga_translatesOrderByRelevanceFieldEnum)[keyof typeof manga_translatesOrderByRelevanceFieldEnum]


  export const serversOrderByRelevanceFieldEnum: {
    id: 'id',
    owner: 'owner'
  };

  export type serversOrderByRelevanceFieldEnum = (typeof serversOrderByRelevanceFieldEnum)[keyof typeof serversOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const usersOrderByRelevanceFieldEnum: {
    user: 'user',
    mal_username: 'mal_username',
    al_username: 'al_username',
    mangacollec: 'mangacollec'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type anime_translatesWhereInput = {
    AND?: anime_translatesWhereInput | anime_translatesWhereInput[]
    OR?: anime_translatesWhereInput[]
    NOT?: anime_translatesWhereInput | anime_translatesWhereInput[]
    anime?: StringFilter<"anime_translates"> | string
    language?: StringFilter<"anime_translates"> | string
  }

  export type anime_translatesOrderByWithRelationInput = {
    anime?: SortOrder
    language?: SortOrder
    _relevance?: anime_translatesOrderByRelevanceInput
  }

  export type anime_translatesWhereUniqueInput = Prisma.AtLeast<{
    anime_language?: anime_translatesAnimeLanguageCompoundUniqueInput
    AND?: anime_translatesWhereInput | anime_translatesWhereInput[]
    OR?: anime_translatesWhereInput[]
    NOT?: anime_translatesWhereInput | anime_translatesWhereInput[]
    anime?: StringFilter<"anime_translates"> | string
    language?: StringFilter<"anime_translates"> | string
  }, "anime_language">

  export type anime_translatesOrderByWithAggregationInput = {
    anime?: SortOrder
    language?: SortOrder
    _count?: anime_translatesCountOrderByAggregateInput
    _max?: anime_translatesMaxOrderByAggregateInput
    _min?: anime_translatesMinOrderByAggregateInput
  }

  export type anime_translatesScalarWhereWithAggregatesInput = {
    AND?: anime_translatesScalarWhereWithAggregatesInput | anime_translatesScalarWhereWithAggregatesInput[]
    OR?: anime_translatesScalarWhereWithAggregatesInput[]
    NOT?: anime_translatesScalarWhereWithAggregatesInput | anime_translatesScalarWhereWithAggregatesInput[]
    anime?: StringWithAggregatesFilter<"anime_translates"> | string
    language?: StringWithAggregatesFilter<"anime_translates"> | string
  }

  export type manga_translatesWhereInput = {
    AND?: manga_translatesWhereInput | manga_translatesWhereInput[]
    OR?: manga_translatesWhereInput[]
    NOT?: manga_translatesWhereInput | manga_translatesWhereInput[]
    manga?: StringFilter<"manga_translates"> | string
    language?: StringFilter<"manga_translates"> | string
  }

  export type manga_translatesOrderByWithRelationInput = {
    manga?: SortOrder
    language?: SortOrder
    _relevance?: manga_translatesOrderByRelevanceInput
  }

  export type manga_translatesWhereUniqueInput = Prisma.AtLeast<{
    manga_language?: manga_translatesMangaLanguageCompoundUniqueInput
    AND?: manga_translatesWhereInput | manga_translatesWhereInput[]
    OR?: manga_translatesWhereInput[]
    NOT?: manga_translatesWhereInput | manga_translatesWhereInput[]
    manga?: StringFilter<"manga_translates"> | string
    language?: StringFilter<"manga_translates"> | string
  }, "manga_language">

  export type manga_translatesOrderByWithAggregationInput = {
    manga?: SortOrder
    language?: SortOrder
    _count?: manga_translatesCountOrderByAggregateInput
    _max?: manga_translatesMaxOrderByAggregateInput
    _min?: manga_translatesMinOrderByAggregateInput
  }

  export type manga_translatesScalarWhereWithAggregatesInput = {
    AND?: manga_translatesScalarWhereWithAggregatesInput | manga_translatesScalarWhereWithAggregatesInput[]
    OR?: manga_translatesScalarWhereWithAggregatesInput[]
    NOT?: manga_translatesScalarWhereWithAggregatesInput | manga_translatesScalarWhereWithAggregatesInput[]
    manga?: StringWithAggregatesFilter<"manga_translates"> | string
    language?: StringWithAggregatesFilter<"manga_translates"> | string
  }

  export type serversWhereInput = {
    AND?: serversWhereInput | serversWhereInput[]
    OR?: serversWhereInput[]
    NOT?: serversWhereInput | serversWhereInput[]
    id?: StringFilter<"servers"> | string
    owner?: StringFilter<"servers"> | string
  }

  export type serversOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    _relevance?: serversOrderByRelevanceInput
  }

  export type serversWhereUniqueInput = Prisma.AtLeast<{
    id_owner?: serversIdOwnerCompoundUniqueInput
    AND?: serversWhereInput | serversWhereInput[]
    OR?: serversWhereInput[]
    NOT?: serversWhereInput | serversWhereInput[]
    id?: StringFilter<"servers"> | string
    owner?: StringFilter<"servers"> | string
  }, "id_owner">

  export type serversOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    _count?: serversCountOrderByAggregateInput
    _max?: serversMaxOrderByAggregateInput
    _min?: serversMinOrderByAggregateInput
  }

  export type serversScalarWhereWithAggregatesInput = {
    AND?: serversScalarWhereWithAggregatesInput | serversScalarWhereWithAggregatesInput[]
    OR?: serversScalarWhereWithAggregatesInput[]
    NOT?: serversScalarWhereWithAggregatesInput | serversScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"servers"> | string
    owner?: StringWithAggregatesFilter<"servers"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user?: StringFilter<"users"> | string
    mal_username?: StringNullableFilter<"users"> | string | null
    al_username?: StringNullableFilter<"users"> | string | null
    mangacollec?: StringNullableFilter<"users"> | string | null
  }

  export type usersOrderByWithRelationInput = {
    user?: SortOrder
    mal_username?: SortOrderInput | SortOrder
    al_username?: SortOrderInput | SortOrder
    mangacollec?: SortOrderInput | SortOrder
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    mal_username?: StringNullableFilter<"users"> | string | null
    al_username?: StringNullableFilter<"users"> | string | null
    mangacollec?: StringNullableFilter<"users"> | string | null
  }, "user">

  export type usersOrderByWithAggregationInput = {
    user?: SortOrder
    mal_username?: SortOrderInput | SortOrder
    al_username?: SortOrderInput | SortOrder
    mangacollec?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user?: StringWithAggregatesFilter<"users"> | string
    mal_username?: StringNullableWithAggregatesFilter<"users"> | string | null
    al_username?: StringNullableWithAggregatesFilter<"users"> | string | null
    mangacollec?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type anime_translatesCreateInput = {
    anime: string
    language: string
  }

  export type anime_translatesUncheckedCreateInput = {
    anime: string
    language: string
  }

  export type anime_translatesUpdateInput = {
    anime?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type anime_translatesUncheckedUpdateInput = {
    anime?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type anime_translatesCreateManyInput = {
    anime: string
    language: string
  }

  export type anime_translatesUpdateManyMutationInput = {
    anime?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type anime_translatesUncheckedUpdateManyInput = {
    anime?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type manga_translatesCreateInput = {
    manga: string
    language: string
  }

  export type manga_translatesUncheckedCreateInput = {
    manga: string
    language: string
  }

  export type manga_translatesUpdateInput = {
    manga?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type manga_translatesUncheckedUpdateInput = {
    manga?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type manga_translatesCreateManyInput = {
    manga: string
    language: string
  }

  export type manga_translatesUpdateManyMutationInput = {
    manga?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type manga_translatesUncheckedUpdateManyInput = {
    manga?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type serversCreateInput = {
    id: string
    owner: string
  }

  export type serversUncheckedCreateInput = {
    id: string
    owner: string
  }

  export type serversUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
  }

  export type serversUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
  }

  export type serversCreateManyInput = {
    id: string
    owner: string
  }

  export type serversUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
  }

  export type serversUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    user: string
    mal_username?: string | null
    al_username?: string | null
    mangacollec?: string | null
  }

  export type usersUncheckedCreateInput = {
    user: string
    mal_username?: string | null
    al_username?: string | null
    mangacollec?: string | null
  }

  export type usersUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    mal_username?: NullableStringFieldUpdateOperationsInput | string | null
    al_username?: NullableStringFieldUpdateOperationsInput | string | null
    mangacollec?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    mal_username?: NullableStringFieldUpdateOperationsInput | string | null
    al_username?: NullableStringFieldUpdateOperationsInput | string | null
    mangacollec?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateManyInput = {
    user: string
    mal_username?: string | null
    al_username?: string | null
    mangacollec?: string | null
  }

  export type usersUpdateManyMutationInput = {
    user?: StringFieldUpdateOperationsInput | string
    mal_username?: NullableStringFieldUpdateOperationsInput | string | null
    al_username?: NullableStringFieldUpdateOperationsInput | string | null
    mangacollec?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    user?: StringFieldUpdateOperationsInput | string
    mal_username?: NullableStringFieldUpdateOperationsInput | string | null
    al_username?: NullableStringFieldUpdateOperationsInput | string | null
    mangacollec?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type anime_translatesOrderByRelevanceInput = {
    fields: anime_translatesOrderByRelevanceFieldEnum | anime_translatesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type anime_translatesAnimeLanguageCompoundUniqueInput = {
    anime: string
    language: string
  }

  export type anime_translatesCountOrderByAggregateInput = {
    anime?: SortOrder
    language?: SortOrder
  }

  export type anime_translatesMaxOrderByAggregateInput = {
    anime?: SortOrder
    language?: SortOrder
  }

  export type anime_translatesMinOrderByAggregateInput = {
    anime?: SortOrder
    language?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type manga_translatesOrderByRelevanceInput = {
    fields: manga_translatesOrderByRelevanceFieldEnum | manga_translatesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type manga_translatesMangaLanguageCompoundUniqueInput = {
    manga: string
    language: string
  }

  export type manga_translatesCountOrderByAggregateInput = {
    manga?: SortOrder
    language?: SortOrder
  }

  export type manga_translatesMaxOrderByAggregateInput = {
    manga?: SortOrder
    language?: SortOrder
  }

  export type manga_translatesMinOrderByAggregateInput = {
    manga?: SortOrder
    language?: SortOrder
  }

  export type serversOrderByRelevanceInput = {
    fields: serversOrderByRelevanceFieldEnum | serversOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type serversIdOwnerCompoundUniqueInput = {
    id: string
    owner: string
  }

  export type serversCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type serversMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type serversMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    user?: SortOrder
    mal_username?: SortOrder
    al_username?: SortOrder
    mangacollec?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user?: SortOrder
    mal_username?: SortOrder
    al_username?: SortOrder
    mangacollec?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user?: SortOrder
    mal_username?: SortOrder
    al_username?: SortOrder
    mangacollec?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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