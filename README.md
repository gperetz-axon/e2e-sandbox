# e2e-sandbox

The target repo for Captain v1.5's "real tier" end-to-end runs. Cursor cloud
agents open PRs against it, and Captain's CI worker fixes red CI here. It is
kept tiny on purpose: one function, one test file, one CI job.

## Layout

- `src/greet.ts`: `greet(name)` returns `Hello, <name>!`.
- `src/greet.test.ts`: the tests (`node:test` and `node:assert/strict`).
- `.github/workflows/ci.yml`: one job, `test`, on every pull request and on
  push to `main`. Captain reads the check named `test`.

No dependencies. Node 24 runs the TypeScript directly (type stripping).

## Run the tests

```sh
npm test
```

Needs Node 24 or later. There is nothing to install.

## How to turn CI red and green

- Red: in `src/greet.test.ts`, change an expected string, for example
  `"Hello, World!"` to `"Hi, World!"`. The `test` check fails.
- Green: revert that line. The `test` check passes.

## Rules for workers

- Keep PRs small: a one-line change is the normal size here.
- `main` must stay green. Break CI only on a branch or PR, never on `main`.
