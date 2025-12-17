# Vercel SDK

## Overview

Vercel SDK: The [`@vercel/sdk`](https://www.npmjs.com/package/@vercel/sdk) is a type-safe Typescript SDK that allows you to access the resources and methods of the Vercel REST API. Learn how to [install it](https://vercel.com/docs/rest-api/sdk#installing-vercel-sdk) and [authenticate](https://vercel.com/docs/rest-api/sdk#authentication) with a Vercel access token.

### Available Operations

* [putV1BulkRedirects](#putv1bulkredirects)
* [getV1BulkRedirects](#getv1bulkredirects) - Get the version history for a project's bulk redirects
* [deleteV1BulkRedirects](#deletev1bulkredirects) - Deletes the provided redirects from the latest version of the projects' bulk redirects. Stages a new change with the new redirects and returns the alias for the new version in the response.
* [patchV1BulkRedirects](#patchv1bulkredirects) - Edits a single redirect identified by its source path. Stages a new change with the modified redirect and returns the alias for the new version in the response.
* [postV1BulkRedirectsRestore](#postv1bulkredirectsrestore) - Restores the provided redirects in the staging version to the value in the production version. If no production version exists, removes the redirects from staging.
* [getV1BulkRedirectsVersions](#getv1bulkredirectsversions) - Get the version history for a project's bulk redirects
* [postV1BulkRedirectsVersions](#postv1bulkredirectsversions) - Update a version by promoting staging to production or restoring a previous production version

## putV1BulkRedirects

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/v1/bulk-redirects" method="put" path="/v1/bulk-redirects" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.putV1BulkRedirects();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { putV1BulkRedirects } from "@vercel/sdk/funcs/putV1BulkRedirects.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await putV1BulkRedirects(vercel);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("putV1BulkRedirects failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PutV1BulkRedirectsRequestBody](../../models/putv1bulkredirectsrequestbody.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PutV1BulkRedirectsResponseBody](../../models/putv1bulkredirectsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## getV1BulkRedirects

Get the version history for a project's bulk redirects

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v1/bulk-redirects" method="get" path="/v1/bulk-redirects" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.getV1BulkRedirects({
    projectId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { getV1BulkRedirects } from "@vercel/sdk/funcs/getV1BulkRedirects.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await getV1BulkRedirects(vercel, {
    projectId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("getV1BulkRedirects failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetV1BulkRedirectsRequest](../../models/getv1bulkredirectsrequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetV1BulkRedirectsResponseBody](../../models/getv1bulkredirectsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## deleteV1BulkRedirects

Deletes the provided redirects from the latest version of the projects' bulk redirects. Stages a new change with the new redirects and returns the alias for the new version in the response.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v1/bulk-redirects" method="delete" path="/v1/bulk-redirects" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.deleteV1BulkRedirects({
    projectId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { deleteV1BulkRedirects } from "@vercel/sdk/funcs/deleteV1BulkRedirects.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await deleteV1BulkRedirects(vercel, {
    projectId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deleteV1BulkRedirects failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DeleteV1BulkRedirectsRequest](../../models/deletev1bulkredirectsrequest.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DeleteV1BulkRedirectsResponseBody](../../models/deletev1bulkredirectsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## patchV1BulkRedirects

Edits a single redirect identified by its source path. Stages a new change with the modified redirect and returns the alias for the new version in the response.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v1/bulk-redirects" method="patch" path="/v1/bulk-redirects" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.patchV1BulkRedirects({
    projectId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { patchV1BulkRedirects } from "@vercel/sdk/funcs/patchV1BulkRedirects.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await patchV1BulkRedirects(vercel, {
    projectId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("patchV1BulkRedirects failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PatchV1BulkRedirectsRequest](../../models/patchv1bulkredirectsrequest.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PatchV1BulkRedirectsResponseBody](../../models/patchv1bulkredirectsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## postV1BulkRedirectsRestore

Restores the provided redirects in the staging version to the value in the production version. If no production version exists, removes the redirects from staging.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v1/bulk-redirects/restore" method="post" path="/v1/bulk-redirects/restore" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.postV1BulkRedirectsRestore({
    projectId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { postV1BulkRedirectsRestore } from "@vercel/sdk/funcs/postV1BulkRedirectsRestore.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await postV1BulkRedirectsRestore(vercel, {
    projectId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("postV1BulkRedirectsRestore failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PostV1BulkRedirectsRestoreRequest](../../models/postv1bulkredirectsrestorerequest.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostV1BulkRedirectsRestoreResponseBody](../../models/postv1bulkredirectsrestoreresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## getV1BulkRedirectsVersions

Get the version history for a project's bulk redirects

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v1/bulk-redirects/versions" method="get" path="/v1/bulk-redirects/versions" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.getV1BulkRedirectsVersions({
    projectId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { getV1BulkRedirectsVersions } from "@vercel/sdk/funcs/getV1BulkRedirectsVersions.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await getV1BulkRedirectsVersions(vercel, {
    projectId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("getV1BulkRedirectsVersions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetV1BulkRedirectsVersionsRequest](../../models/getv1bulkredirectsversionsrequest.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetV1BulkRedirectsVersionsResponseBody](../../models/getv1bulkredirectsversionsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## postV1BulkRedirectsVersions

Update a version by promoting staging to production or restoring a previous production version

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v1/bulk-redirects/versions" method="post" path="/v1/bulk-redirects/versions" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.postV1BulkRedirectsVersions({
    projectId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { postV1BulkRedirectsVersions } from "@vercel/sdk/funcs/postV1BulkRedirectsVersions.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await postV1BulkRedirectsVersions(vercel, {
    projectId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("postV1BulkRedirectsVersions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PostV1BulkRedirectsVersionsRequest](../../models/postv1bulkredirectsversionsrequest.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostV1BulkRedirectsVersionsResponseBody](../../models/postv1bulkredirectsversionsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |