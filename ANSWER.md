# NestJS Answers Workbook (Step 1 to Step 10)

Use this file to submit your answers for each step.
Write in your own words and update checkboxes as you progress.

---

## Step 1

Q1:  Mainly to organize a feature and wire up its controller(s), provider(s) (service), and DI dependencies.
Q2:  Request/response handling (HTTP logic) should stay in the controller, while business logic should stay in the service.
Q3:  Loose coupling makes the app easier to maintain, test, and extend.
Q4:  Create `products.controller.ts`, `products.service.ts`, and `products.module.ts` (usually in `src/products/*`), then import `ProductsModule` into `AppModule`.

Progress:
- [X] Read concept
- [X] Answered questions
- [X] Built small feature skeleton
- [X] Can explain the triad without notes

Notes:
- Good separation of concerns in your answers.
- Remember: if a provider is needed in another module, export it from the feature module.

---

## Step 2

Q1:  
Q2:  
Q3:  
Q4:  

Progress:
- [ ] Read concept
- [ ] Answered questions
- [ ] Enabled validation flow
- [ ] Created one DTO with validation rules

Notes:
- Focus on runtime safety: TypeScript types are not enough for incoming requests.
- When practicing, use `ValidationPipe` options like `whitelist` and `forbidNonWhitelisted`.

---

## Step 3

Q1:  
Q2:  
Q3:  
Q4:  

Progress:
- [ ] Read concept
- [ ] Answered questions
- [ ] Created one entity model
- [ ] Connected service to repository

Notes:
- Keep entity fields aligned with real DB constraints (type, nullable, unique).
- Use repository methods (`find`, `findOne`, `save`, `remove`) before writing custom queries.

---

## Step 4

Q1:  
Q2:  
Q3:  
Q4:  

Progress:
- [ ] Read concept
- [ ] Answered questions
- [ ] Generated one migration file
- [ ] Applied migration successfully

Notes:
- Treat migrations as source of truth for schema changes in shared environments.
- Always review generated SQL logic before running migration in non-local environments.

---

## Step 5

Q1:  
Q2:  
Q3:  
Q4:  

Progress:
- [ ] Read concept
- [ ] Answered questions
- [ ] Added environment variables correctly
- [ ] Verified config is loaded in app startup

Notes:
- Keep secrets only in env files or secret managers, never in code.
- Maintain a `.env.example` with required keys (without real values).

---

## Step 6

Q1:  
Q2:  
Q3:  
Q4:  

Progress:
- [ ] Read concept
- [ ] Answered questions
- [ ] Registered and injected at least one provider
- [ ] Understood when to use custom providers

Notes:
- Constructor injection is the default and clearest DI style in Nest.
- Use custom provider tokens when you want to swap implementations cleanly.

---

## Step 7

Q1:  
Q2:  
Q3:  
Q4:  

Progress:
- [ ] Read concept
- [ ] Answered questions
- [ ] Added one middleware
- [ ] Added one interceptor

Notes:
- Middleware is best for request-level concerns (headers, logging, auth pre-checks).
- Interceptors are best for cross-cutting flow (response mapping, timing, wrapping output).

---

## Step 8

Q1:  
Q2:  
Q3:  
Q4:  

Progress:
- [ ] Read concept
- [ ] Answered questions
- [ ] Wrote one service unit test
- [ ] Wrote one controller unit test

Notes:
- Keep tests small: one behavior per test case.
- Mock external dependencies so tests stay deterministic and fast.

---

## Step 9

Q1:  
Q2:  
Q3:  
Q4:  

Progress:
- [ ] Read concept
- [ ] Answered questions
- [ ] Added error response standardization
- [ ] Confirmed consistent error shape across endpoints

Notes:
- Standardize error payload shape so frontend handling stays simple.
- Avoid exposing internal stack or sensitive details in production error responses.

---

## Step 10

Q1:  
Q2:  
Q3:  
Q4:  

Progress:
- [ ] Read concept
- [ ] Answered questions
- [ ] Applied one guard to protected route(s)
- [ ] Validated allowed vs denied request behavior

Notes:
- Guards decide access before controller logic executes.
- Combine authentication guards with role/permission guards when needed.

---

## Overall Progress

- [x] Step 1 completed
- [ ] Step 2 completed
- [ ] Step 3 completed
- [ ] Step 4 completed
- [ ] Step 5 completed
- [ ] Step 6 completed
- [ ] Step 7 completed
- [ ] Step 8 completed
- [ ] Step 9 completed
- [ ] Step 10 completed
