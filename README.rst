Based on
https://blog.angular-university.io/typescript-2-type-system-how-do-type-definitions-work-in-npm-when-to-use-types-and-why-what-are-compiler-opt-in-types/
and
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

Use ts-node https://github.com/TypeStrong/ts-node
.. code:: sh
   npm install --save-dev ts-node@6.0.2
   npm install --save-dev typescript@2.8.3

Now we can do:
.. code:: sh
   ./node_modules/ts-node/dist/bin.js greeter.ts

Now follow the next guide. At least do:
.. code:: sh
   npm install --save uuid@3.2.1

We need this version so we can run the adjusted example:
.. code:: javascript
   import { v4 as uuid } from 'uuid';
   console.log(uuid());

Now we can do
.. code:: sh
   ./node_modules/ts-node/dist/bin.js naive_test.ts
   ./node_modules/ts-node/dist/bin.js commonjs_test.ts #fails
