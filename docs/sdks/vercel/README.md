# Vercel SDK

## Overview

Vercel SDK: The [`@vercel/sdk`](https://www.npmjs.com/package/@vercel/sdk) is a type-safe Typescript SDK that allows you to access the resources and methods of the Vercel REST API. Learn how to [install it](https://vercel.com/docs/rest-api/sdk#installing-vercel-sdk) and [authenticate](https://vercel.com/docs/rest-api/sdk#authentication) with a Vercel access token.

### Available Operations

* [patchAliasesIdProtectionBypass](#patchaliasesidprotectionbypass) - Update the protection bypass for the alias (used for user access & comment access for deployments). Used as shareable links and user scoped access for Vercel Authentication and also to allow external (logged in) people to comment on previews for Preview Comments (next-live-mode).

## patchAliasesIdProtectionBypass

Update the protection bypass for the alias (used for user access & comment access for deployments). Used as shareable links and user scoped access for Vercel Authentication and also to allow external (logged in) people to comment on previews for Preview Comments (next-live-mode).

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.patchAliasesIdProtectionBypass({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { patchAliasesIdProtectionBypass } from "@vercel/sdk/funcs/patchAliasesIdProtectionBypass.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await patchAliasesIdProtectionBypass(vercel, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PatchAliasesIdProtectionBypassRequest](../../models/patchaliasesidprotectionbypassrequest.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |