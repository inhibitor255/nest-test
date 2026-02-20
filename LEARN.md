# NestJS Learning Lessons and Progress

This file tracks your lesson prompts and learning progress for the 10-step NestJS journey from `AGENTS.md`.

## How to use this file

- Answer the questions for each step in your own words.
- Use the hints only when you get stuck.
- Update the progress checklist after each step.
- Add your own notes under each step as you learn.

---

## Step 1 Lesson: Module, Controller, Service

### Questions
1. What is the main responsibility of a `Module` in NestJS?
2. What should stay inside a `Controller`, and what should stay inside a `Service`?
3. Why is it useful to keep HTTP logic separate from business logic?
4. If you add a new feature (for example, `products`), which 3 files/classes do you create first?

### Hints
- Think about structure first, not implementation details.
- Controller handles request/response flow.
- Service contains reusable business rules.
- Module wires providers and controllers together.

### Progress
- [ ] Read concept
- [ ] Answered questions
- [ ] Built small feature skeleton
- [ ] Can explain the triad without notes

### Notes
- 

---

## Step 2 Lesson: DTOs and Validation

### Questions
1. Why do DTOs exist even when TypeScript types already exist?
2. What problem does `ValidationPipe` solve at runtime?
3. Which kinds of endpoints should always use DTOs?
4. What could go wrong if request data is not validated?

### Hints
- TypeScript helps at compile time, validation protects runtime input.
- DTOs define contract between client and server.
- Focus on `POST`, `PUT`, `PATCH`, and complex query input.
- Think security, consistency, and error clarity.

### Progress
- [ ] Read concept
- [ ] Answered questions
- [ ] Enabled validation flow
- [ ] Created one DTO with validation rules

### Notes
- 

---

## Step 3 Lesson: TypeORM, Entities, Repository

### Questions
1. How is an `Entity` related to a database table?
2. What does a `Repository` abstract away for you?
3. Why register entities in the feature module?
4. What are benefits of code-first schema design?

### Hints
- Entity class shape mirrors table structure.
- Repository offers common data operations without raw SQL.
- Feature module registration enables dependency injection.
- Think maintainability and readability.

### Progress
- [ ] Read concept
- [ ] Answered questions
- [ ] Created one entity model
- [ ] Connected service to repository

### Notes
- 

---

## Step 4 Lesson: Migrations

### Questions
1. Why are migrations safer than relying on auto-sync in production?
2. What role does a `DataSource` config play in migrations?
3. When should you generate a migration?
4. What risks are reduced by version-controlled schema changes?

### Hints
- Migrations provide repeatable, explicit schema history.
- DataSource gives CLI the DB and entity metadata context.
- Generate migration after intentional schema change.
- Think team consistency and rollback safety.

### Progress
- [ ] Read concept
- [ ] Answered questions
- [ ] Generated one migration file
- [ ] Applied migration successfully

### Notes
- 

---

## Step 5 Lesson: Configuration and Environment Variables

### Questions
1. Why should secrets never be hardcoded?
2. What does `ConfigModule` give you over direct `process.env` usage?
3. Which values are environment-dependent in a Nest app?
4. How does environment-based config support deployment flexibility?

### Hints
- Separate code from runtime settings.
- Prefer centralized access and defaults.
- Think DB credentials, ports, API keys, mode flags.
- Same codebase, different environments.

### Progress
- [ ] Read concept
- [ ] Answered questions
- [ ] Added environment variables correctly
- [ ] Verified config is loaded in app startup

### Notes
- 

---

## Step 6 Lesson: Dependency Injection and Providers

### Questions
1. What problem does dependency injection solve?
2. Why is constructor injection preferred in NestJS?
3. What is the difference between creating an object manually and asking Nest to inject it?
4. When would custom providers (`useClass`, `useValue`, `useFactory`) be helpful?

### Hints
- DI reduces tight coupling.
- Constructor injection makes dependencies explicit.
- Nest manages lifecycle and reuse.
- Custom providers are useful for swapping implementations.

### Progress
- [ ] Read concept
- [ ] Answered questions
- [ ] Registered and injected at least one provider
- [ ] Understood when to use custom providers

### Notes
- 

---

## Step 7 Lesson: Middleware and Interceptors

### Questions
1. What is the lifecycle difference between middleware and interceptors?
2. Which tool is better for request logging at raw HTTP level?
3. Which tool is better for response transformation?
4. When should you apply them globally versus per-controller/per-route?

### Hints
- Middleware runs before route handlers, closer to Express layer.
- Interceptors wrap execution before and after handlers.
- Use middleware for low-level request processing.
- Use interceptors for cross-cutting app behavior.

### Progress
- [ ] Read concept
- [ ] Answered questions
- [ ] Added one middleware
- [ ] Added one interceptor

### Notes
- 

---

## Step 8 Lesson: Unit Testing with Jest

### Questions
1. What is the goal of a unit test in NestJS services?
2. Why should dependencies be mocked in unit tests?
3. What makes a unit test reliable and easy to maintain?
4. How do tests help safe refactoring?

### Hints
- Test one behavior at a time.
- Mock external systems (database, network, cache).
- Keep arrange/act/assert clear.
- Good tests detect behavior regression, not implementation detail changes.

### Progress
- [ ] Read concept
- [ ] Answered questions
- [ ] Wrote one service unit test
- [ ] Wrote one controller unit test

### Notes
- 

---

## Step 9 Lesson: Exception Filters

### Questions
1. What does an exception filter improve in API responses?
2. Why might a global filter be preferred for consistency?
3. What kind of data is useful to include in standardized error responses?
4. Which errors should be transformed versus passed through?

### Hints
- Think client experience and debugging clarity.
- Global filter enforces one error shape everywhere.
- Common fields: status, message, timestamp, path.
- Avoid leaking sensitive internal details.

### Progress
- [ ] Read concept
- [ ] Answered questions
- [ ] Added error response standardization
- [ ] Confirmed consistent error shape across endpoints

### Notes
- 

---

## Step 10 Lesson: Guards and Authentication

### Questions
1. What decision does a guard make in request handling?
2. How are authentication and authorization different?
3. Why keep access control outside controller business logic?
4. When should a guard be route-scoped vs global?

### Hints
- Guard answers: “Can this request proceed?”
- Authentication = identity, authorization = permission.
- Separation improves maintainability and readability.
- Scope depends on whether protection is universal or feature-specific.

### Progress
- [ ] Read concept
- [ ] Answered questions
- [ ] Applied one guard to protected route(s)
- [ ] Validated allowed vs denied request behavior

### Notes
- 

---

## Overall Progress Tracker

- [ ] Step 1 completed
- [ ] Step 2 completed
- [ ] Step 3 completed
- [ ] Step 4 completed
- [ ] Step 5 completed
- [ ] Step 6 completed
- [ ] Step 7 completed
- [ ] Step 8 completed
- [ ] Step 9 completed
- [ ] Step 10 completed

### Learning Reflection

1. Which step felt easiest and why?
2. Which step felt hardest and why?
3. Which topic do you want to revisit next?

### Last Updated

- Date: 2026-02-20
