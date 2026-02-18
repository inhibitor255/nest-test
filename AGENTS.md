# NestJS Learning Journey

This document tracks the steps and concepts learned during the NestJS training.

## Step 1: The Core Triad (Module, Controller, Service)

### What
The fundamental building blocks of a NestJS application.
- **Module**: A class annotated with `@Module()`. It organizes the application structure.
- **Controller**: A class annotated with `@Controller()`. It handles incoming requests and returns responses.
- **Service**: A class annotated with `@Injectable()`. It handles business logic and data access.

### How
1.  Create a Service to handle logic.
2.  Create a Controller to define routes and call the Service.
3.  Create a Module to bundle the Controller and Service.
4.  Import the Feature Module into the Root Module (`AppModule`).

### Why
-   **Separation of Concerns**: Keeps HTTP logic separate from business logic.
-   **Dependency Injection**: NestJS manages class instances, making testing and refactoring easier.
-   **Modularity**: Features are encapsulated, making the app scalable.

### When
-   Use this structure for **every** distinct feature or domain in your application (e.g., Users, Auth, Products).

## Step 2: Data Transfer Objects (DTOs) and Validation

### What
-   **DTO (Data Transfer Object)**: A simple class that defines the shape of data being sent over the network (e.g., in a POST request body).
-   **Validation**: Ensuring that the data received matches the expected format (e.g., email is actually an email).

### How
1.  Install validation libraries: `pnpm add class-validator class-transformer`.
2.  Enable global validation in `main.ts`: `app.useGlobalPipes(new ValidationPipe());`.
3.  Create a DTO class (e.g., `create-user.dto.ts`).
4.  Add validation decorators (e.g., `@IsString()`, `@IsEmail()`) to the DTO properties.
5.  Use the DTO as the type for the controller method parameter (e.g., `@Body() createUserDto: CreateUserDto`).

### Why
-   **Type Safety**: Ensures your application receives the data it expects.
-   **Security**: Prevents malicious or malformed data from entering your system.
-   **Clean Code**: Separates validation logic from business logic.

### When
-   Use DTOs for **every** request that contains a body (POST, PUT, PATCH) or complex query parameters.

### CLI Commands
-   `nest generate class users/dto/create-user.dto --no-spec`: Generates a basic class file.
    -   **Why**: Quickly creates the file in the correct directory.
    -   **Note**: The CLI doesn't automatically add validation decorators; you must add them manually.

## Step 3: Database Integration (TypeORM & Entities)

### What
-   **ORM (Object-Relational Mapping)**: A technique to convert data between incompatible type systems (TypeScript objects <-> SQL tables).
-   **Entity**: A class that maps to a database table.
-   **Repository**: An abstraction layer to interact with the database (find, save, delete).

### How
1.  Install dependencies: `pnpm add @nestjs/typeorm typeorm pg`. (Switched to PostgreSQL).
2.  Configure `TypeOrmModule.forRoot()` in `AppModule`.
3.  Create an Entity class (e.g., `user.entity.ts`) with `@Entity()` and `@Column()` decorators.
4.  Register the Entity in the Feature Module using `TypeOrmModule.forFeature([User])`.
5.  Inject the `Repository` into the Service using `@InjectRepository(User)`.

### Why
-   **Persistence**: Data persists across server restarts.
-   **Abstraction**: You write TypeScript, TypeORM writes the SQL.
-   **Maintainability**: Database schema is defined in code (Code-First approach).

### When
-   Use whenever your application needs to store and retrieve persistent data.

### CLI Commands
-   `nest generate class users/entities/user.entity --no-spec`: Generates the entity class file.
    -   **Convention**: Entities usually live in an `entities` folder within the module.

## Step 4: Database Migrations (TypeORM)

### What
-   **Migration**: A file that contains SQL instructions to update the database schema (e.g., create table, add column).
-   **DataSource**: A configuration object used by the TypeORM CLI to run migrations.

### How
1.  Install `ts-node` globally or locally to run TypeScript migration files.
2.  Create a `typeorm.config.ts` (or similar) file in the root to configure the DataSource.
3.  Update `package.json` scripts to include migration commands.
4.  Run `npm run migration:generate -- src/migrations/InitialMigration` to create a migration file based on your entities.
5.  Run `npm run migration:run` to apply the changes to the database.

### Why
-   **Version Control**: Database changes are tracked in git, just like code.
-   **Consistency**: Ensures all environments (dev, staging, prod) have the same database schema.
-   **Safety**: Allows you to roll back changes if something goes wrong (`migration:revert`).

### When
-   Use migrations for **production-ready** applications.
-   **Note**: In development, `synchronize: true` is often used for speed, but it should **never** be used in production as it can cause data loss.

## Step 5: Configuration & Environment Variables

### What
-   **Environment Variables**: Key-value pairs configured outside the application (e.g., DB passwords, API keys).
-   **ConfigModule**: A NestJS module that loads these variables and makes them available via a service.

### How
1.  Install dependency: `pnpm add @nestjs/config`.
2.  Create a `.env` file in the root directory (add to `.gitignore`!).
3.  Import `ConfigModule.forRoot()` in `AppModule`.
4.  Use `ConfigService` to access variables, or use `process.env` in configuration objects.

### Why
-   **Security**: Secrets are not hardcoded in the codebase.
-   **Flexibility**: The same code can run in different environments (Dev, Test, Prod) just by changing the config.
-   **Convention**: The standard way to handle configuration in modern apps (The Twelve-Factor App).

### When
-   **ALWAYS**. Never hardcode credentials or environment-specific settings.

## Step 6: Dependency Injection (DI) & Providers

### What
-   **Dependency Injection (DI)**: A design pattern where a class asks for dependencies from external sources rather than creating them itself.
-   **Provider**: Any class annotated with `@Injectable()` that can be managed by the NestJS IoC (Inversion of Control) container.
-   **IoC Container**: The NestJS runtime system that creates, manages, and injects dependencies.

### How
1.  **Define a Provider**: Create a class (e.g., `UsersService`) and add `@Injectable()`.
2.  **Register the Provider**: Add the class to the `providers` array in a `@Module()`.
3.  **Inject the Provider**: Add it to the `constructor` of the class that needs it (e.g., `UsersController`).
    ```typescript
    constructor(private readonly usersService: UsersService) {}
    ```

### Why
-   **Decoupling**: Classes don't need to know how to create their dependencies.
-   **Testability**: You can easily swap real services with mock implementations during testing.
-   **Singleton**: By default, NestJS creates a single instance of each provider and shares it across the application (efficient memory usage).

### When
-   **ALWAYS**. This is the core mechanism of NestJS. Use it for services, repositories, helpers, factories, etc.

### Advanced Concepts
-   **Custom Providers**: You can use `useClass`, `useValue`, or `useFactory` to customize how a dependency is provided.
    -   *Example*: Injecting a simple configuration object or a mock service for testing.
-   **Scope**: You can change the scope from Singleton (default) to Request (new instance per request) or Transient (new instance per injection).

## Step 7: Middleware & Interceptors

### What
-   **Middleware**: A function that runs *before* the route handler. It has access to the request and response objects.
-   **Interceptor**: A class that wraps the request/response stream. It can run logic *before* and *after* the route handler.

### How
1.  **Create Middleware**: Implement `NestMiddleware` interface.
    ```typescript
    use(req: Request, res: Response, next: NextFunction) { ... next(); }
    ```
2.  **Register Middleware**: In `AppModule` (or any module), implement `NestModule` and configure the consumer.
3.  **Create Interceptor**: Implement `NestInterceptor` interface.
    ```typescript
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>
    ```
4.  **Register Interceptor**: Use `@UseInterceptors()` on a controller/method, or globally in `main.ts`.

### Why
-   **Middleware**: Great for low-level tasks like logging, authentication headers, or body parsing. (Express-style).
-   **Interceptors**: Great for transforming the response (e.g., wrapping data in a standard format) or measuring execution time. (AOP-style).

### When
-   Use **Middleware** for raw request processing.
-   Use **Interceptors** for manipulating the data flow (in/out) or adding extra logic around the handler.

### CLI Commands
-   `nest generate middleware common/middleware/logger`: Generates a middleware.
-   `nest generate interceptor common/interceptors/logging`: Generates an interceptor.
