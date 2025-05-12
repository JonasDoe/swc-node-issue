# Demonstration of the `'test failed'` issue
Tested with `node@v22.15.0` on Windows 11:
- Running `npm run unit:swc-node` will run a test where everything is successful, but an error gets reported afterward.
- Running `npm run unit:ts-node` will run a test where everything is successful and not report an error afterward.

Here's what's logged when running `npm run unit:swc-node`:
```
> swc-node@1.0.0 test:unit
> node --import @swc-node/register/esm-register --test src/**/*.test.ts

▶ MyClass
  ✔ should not return an error after the assertion (0.5425ms)
✔ MyClass (1.2323ms)
✖ src\myClass.test.ts (522.186ms)
ℹ tests 2
ℹ suites 1
ℹ pass 1
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 529.063

✖ failing tests:

test at src\myClass.test.ts:1:1
✖ src\myClass.test.ts (522.186ms)
  'test failed'
```