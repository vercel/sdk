# VercelCi

## Overview

### Available Operations

* [listVercelCiInvocations](#listvercelciinvocations) - List invocations for a team, optionally filtered by repository and invocation metadata
* [listVercelCiInvocationAttempts](#listvercelciinvocationattempts) - List all attempts for an invocation
* [getVercelCiInvocationTree](#getvercelciinvocationtree) - Get an invocation with its jobs and tasks
* [getVercelCiInvocation](#getvercelciinvocation) - Get a specific invocation attempt
* [retryVercelCiInvocation](#retryvercelciinvocation) - Retry a terminal Vercel CI invocation attempt
* [listVercelCiJobDefinitions](#listvercelcijobdefinitions) - List job definitions for an invocation attempt
* [getVercelCiJobDefinition](#getvercelcijobdefinition) - Get a specific job definition
* [listVercelCiJobRuns](#listvercelcijobruns) - List all runs for a job definition
* [getVercelCiJobRun](#getvercelcijobrun) - Get a specific job run attempt
* [listVercelCiTaskDefinitions](#listvercelcitaskdefinitions) - List all task definitions for a job run
* [listVercelCiTaskRuns](#listvercelcitaskruns) - List task runs for a job run
* [getVercelCiInvocationLogs](#getvercelciinvocationlogs) - Get log lines for an invocation attempt
* [getVercelCiTaskLogs](#getvercelcitasklogs) - Get log lines for the tasks of an invocation attempt
* [getVercelCiJobRunLogs](#getvercelcijobrunlogs) - Get log lines for a specific job run attempt
* [getVercelCiTaskRunLogs](#getvercelcitaskrunlogs) - Get log lines for a specific task run attempt

## listVercelCiInvocations

List Invocations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listVercelCiInvocations" method="get" path="/v2/vercel-ci/invocations" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.listVercelCiInvocations({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiListVercelCiInvocations } from "@vercel/sdk/funcs/vercelCiListVercelCiInvocations.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiListVercelCiInvocations(vercel, {
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiListVercelCiInvocations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ListVercelCiInvocationsRequest](../../models/listvercelciinvocationsrequest.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListVercelCiInvocationsResponseBody](../../models/listvercelciinvocationsresponsebody.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| models.ListVercelCiInvocationsVercelCiResponseBody            | 401                                                           | application/json                                              |
| models.ListVercelCiInvocationsVercelCiResponseResponseBody    | 403                                                           | application/json                                              |
| models.ListVercelCiInvocationsVercelCiResponse429ResponseBody | 429                                                           | application/json                                              |
| models.ListVercelCiInvocationsVercelCiResponse500ResponseBody | 500                                                           | application/json                                              |
| models.SDKError                                               | 4XX, 5XX                                                      | \*/\*                                                         |

## listVercelCiInvocationAttempts

List Invocation Attempts

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listVercelCiInvocationAttempts" method="get" path="/v1/vercel-ci/invocations/{invocationId}/attempts" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.listVercelCiInvocationAttempts({
    invocationId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiListVercelCiInvocationAttempts } from "@vercel/sdk/funcs/vercelCiListVercelCiInvocationAttempts.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiListVercelCiInvocationAttempts(vercel, {
    invocationId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiListVercelCiInvocationAttempts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ListVercelCiInvocationAttemptsRequest](../../models/listvercelciinvocationattemptsrequest.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListVercelCiInvocationAttemptsResponseBody](../../models/listvercelciinvocationattemptsresponsebody.md)\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| models.ListVercelCiInvocationAttemptsVercelCiResponseBody            | 401                                                                  | application/json                                                     |
| models.ListVercelCiInvocationAttemptsVercelCiResponseResponseBody    | 403                                                                  | application/json                                                     |
| models.ListVercelCiInvocationAttemptsVercelCiResponse429ResponseBody | 429                                                                  | application/json                                                     |
| models.ListVercelCiInvocationAttemptsVercelCiResponse500ResponseBody | 500                                                                  | application/json                                                     |
| models.SDKError                                                      | 4XX, 5XX                                                             | \*/\*                                                                |

## getVercelCiInvocationTree

Returns an invocation attempt together with every job definition, its latest job run, and the task definitions and active task runs of that job run. Defaults to the latest attempt when `attempt` is omitted. With `follow=1` the response is a newline-delimited JSON stream: a `{"type":"tree", ...}` event with the full tree is sent immediately and again whenever it changes, and a final `{"type":"end","reason":...}` event is sent when the attempt finishes (`completed`) or the stream reaches its maximum duration (`timeout`), after which clients should reconnect.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getVercelCiInvocationTree" method="get" path="/v1/vercel-ci/invocations/{invocationId}/tree" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.getVercelCiInvocationTree({
    invocationId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiGetVercelCiInvocationTree } from "@vercel/sdk/funcs/vercelCiGetVercelCiInvocationTree.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiGetVercelCiInvocationTree(vercel, {
    invocationId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiGetVercelCiInvocationTree failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetVercelCiInvocationTreeRequest](../../models/getvercelciinvocationtreerequest.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetVercelCiInvocationTreeResponseBody](../../models/getvercelciinvocationtreeresponsebody.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| models.GetVercelCiInvocationTreeVercelCiResponseBody            | 401                                                             | application/json                                                |
| models.GetVercelCiInvocationTreeVercelCiResponseResponseBody    | 403                                                             | application/json                                                |
| models.GetVercelCiInvocationTreeVercelCiResponse429ResponseBody | 429                                                             | application/json                                                |
| models.GetVercelCiInvocationTreeVercelCiResponse500ResponseBody | 500                                                             | application/json                                                |
| models.SDKError                                                 | 4XX, 5XX                                                        | \*/\*                                                           |

## getVercelCiInvocation

Get Invocation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getVercelCiInvocation" method="get" path="/v1/vercel-ci/invocations/{invocationId}/attempts/{attempt}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.getVercelCiInvocation({
    invocationId: "<id>",
    attempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiGetVercelCiInvocation } from "@vercel/sdk/funcs/vercelCiGetVercelCiInvocation.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiGetVercelCiInvocation(vercel, {
    invocationId: "<id>",
    attempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiGetVercelCiInvocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetVercelCiInvocationRequest](../../models/getvercelciinvocationrequest.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetVercelCiInvocationResponseBody](../../models/getvercelciinvocationresponsebody.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| models.GetVercelCiInvocationVercelCiResponseBody            | 401                                                         | application/json                                            |
| models.GetVercelCiInvocationVercelCiResponseResponseBody    | 403                                                         | application/json                                            |
| models.GetVercelCiInvocationVercelCiResponse429ResponseBody | 429                                                         | application/json                                            |
| models.GetVercelCiInvocationVercelCiResponse500ResponseBody | 500                                                         | application/json                                            |
| models.SDKError                                             | 4XX, 5XX                                                    | \*/\*                                                       |

## retryVercelCiInvocation

Retry Invocation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="retryVercelCiInvocation" method="post" path="/v1/vercel-ci/invocations/{invocationId}/attempts/{attempt}/retry" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.retryVercelCiInvocation({
    invocationId: "<id>",
    attempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiRetryVercelCiInvocation } from "@vercel/sdk/funcs/vercelCiRetryVercelCiInvocation.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiRetryVercelCiInvocation(vercel, {
    invocationId: "<id>",
    attempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiRetryVercelCiInvocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.RetryVercelCiInvocationRequest](../../models/retryvercelciinvocationrequest.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RetryVercelCiInvocationResponseBody](../../models/retryvercelciinvocationresponsebody.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| models.RetryVercelCiInvocationVercelCiResponseBody            | 401                                                           | application/json                                              |
| models.RetryVercelCiInvocationVercelCiResponseResponseBody    | 403                                                           | application/json                                              |
| models.RetryVercelCiInvocationVercelCiResponse429ResponseBody | 429                                                           | application/json                                              |
| models.RetryVercelCiInvocationVercelCiResponse500ResponseBody | 500                                                           | application/json                                              |
| models.SDKError                                               | 4XX, 5XX                                                      | \*/\*                                                         |

## listVercelCiJobDefinitions

List Job Definitions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listVercelCiJobDefinitions" method="get" path="/v1/vercel-ci/invocations/{invocationId}/attempts/{attempt}/job-definitions" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.listVercelCiJobDefinitions({
    invocationId: "<id>",
    attempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiListVercelCiJobDefinitions } from "@vercel/sdk/funcs/vercelCiListVercelCiJobDefinitions.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiListVercelCiJobDefinitions(vercel, {
    invocationId: "<id>",
    attempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiListVercelCiJobDefinitions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ListVercelCiJobDefinitionsRequest](../../models/listvercelcijobdefinitionsrequest.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListVercelCiJobDefinitionsResponseBody](../../models/listvercelcijobdefinitionsresponsebody.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| models.ListVercelCiJobDefinitionsVercelCiResponseBody            | 401                                                              | application/json                                                 |
| models.ListVercelCiJobDefinitionsVercelCiResponseResponseBody    | 403                                                              | application/json                                                 |
| models.ListVercelCiJobDefinitionsVercelCiResponse429ResponseBody | 429                                                              | application/json                                                 |
| models.ListVercelCiJobDefinitionsVercelCiResponse500ResponseBody | 500                                                              | application/json                                                 |
| models.SDKError                                                  | 4XX, 5XX                                                         | \*/\*                                                            |

## getVercelCiJobDefinition

Get Job Definition

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getVercelCiJobDefinition" method="get" path="/v1/vercel-ci/invocations/{invocationId}/attempts/{attempt}/job-definitions/{jobDefinitionId}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.getVercelCiJobDefinition({
    invocationId: "<id>",
    attempt: "<value>",
    jobDefinitionId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiGetVercelCiJobDefinition } from "@vercel/sdk/funcs/vercelCiGetVercelCiJobDefinition.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiGetVercelCiJobDefinition(vercel, {
    invocationId: "<id>",
    attempt: "<value>",
    jobDefinitionId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiGetVercelCiJobDefinition failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetVercelCiJobDefinitionRequest](../../models/getvercelcijobdefinitionrequest.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetVercelCiJobDefinitionResponseBody](../../models/getvercelcijobdefinitionresponsebody.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| models.GetVercelCiJobDefinitionVercelCiResponseBody            | 401                                                            | application/json                                               |
| models.GetVercelCiJobDefinitionVercelCiResponseResponseBody    | 403                                                            | application/json                                               |
| models.GetVercelCiJobDefinitionVercelCiResponse429ResponseBody | 429                                                            | application/json                                               |
| models.GetVercelCiJobDefinitionVercelCiResponse500ResponseBody | 500                                                            | application/json                                               |
| models.SDKError                                                | 4XX, 5XX                                                       | \*/\*                                                          |

## listVercelCiJobRuns

List Job Runs

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listVercelCiJobRuns" method="get" path="/v1/vercel-ci/invocations/{invocationId}/attempts/{attempt}/job-definitions/{jobDefinitionId}/runs" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.listVercelCiJobRuns({
    invocationId: "<id>",
    attempt: "<value>",
    jobDefinitionId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiListVercelCiJobRuns } from "@vercel/sdk/funcs/vercelCiListVercelCiJobRuns.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiListVercelCiJobRuns(vercel, {
    invocationId: "<id>",
    attempt: "<value>",
    jobDefinitionId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiListVercelCiJobRuns failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ListVercelCiJobRunsRequest](../../models/listvercelcijobrunsrequest.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListVercelCiJobRunsResponseBody](../../models/listvercelcijobrunsresponsebody.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| models.ListVercelCiJobRunsVercelCiResponseBody            | 401                                                       | application/json                                          |
| models.ListVercelCiJobRunsVercelCiResponseResponseBody    | 403                                                       | application/json                                          |
| models.ListVercelCiJobRunsVercelCiResponse429ResponseBody | 429                                                       | application/json                                          |
| models.ListVercelCiJobRunsVercelCiResponse500ResponseBody | 500                                                       | application/json                                          |
| models.SDKError                                           | 4XX, 5XX                                                  | \*/\*                                                     |

## getVercelCiJobRun

Get Job Run

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getVercelCiJobRun" method="get" path="/v1/vercel-ci/invocations/{invocationId}/attempts/{attempt}/job-definitions/{jobDefinitionId}/runs/{runAttempt}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.getVercelCiJobRun({
    invocationId: "<id>",
    attempt: "<value>",
    jobDefinitionId: "<id>",
    runAttempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiGetVercelCiJobRun } from "@vercel/sdk/funcs/vercelCiGetVercelCiJobRun.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiGetVercelCiJobRun(vercel, {
    invocationId: "<id>",
    attempt: "<value>",
    jobDefinitionId: "<id>",
    runAttempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiGetVercelCiJobRun failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetVercelCiJobRunRequest](../../models/getvercelcijobrunrequest.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetVercelCiJobRunResponseBody](../../models/getvercelcijobrunresponsebody.md)\>**

### Errors

| Error Type                                              | Status Code                                             | Content Type                                            |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| models.GetVercelCiJobRunVercelCiResponseBody            | 401                                                     | application/json                                        |
| models.GetVercelCiJobRunVercelCiResponseResponseBody    | 403                                                     | application/json                                        |
| models.GetVercelCiJobRunVercelCiResponse429ResponseBody | 429                                                     | application/json                                        |
| models.GetVercelCiJobRunVercelCiResponse500ResponseBody | 500                                                     | application/json                                        |
| models.SDKError                                         | 4XX, 5XX                                                | \*/\*                                                   |

## listVercelCiTaskDefinitions

List Task Definitions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listVercelCiTaskDefinitions" method="get" path="/v1/vercel-ci/invocations/{invocationId}/attempts/{attempt}/job-definitions/{jobDefinitionId}/runs/{runAttempt}/task-definitions" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.listVercelCiTaskDefinitions({
    invocationId: "<id>",
    attempt: "<value>",
    jobDefinitionId: "<id>",
    runAttempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiListVercelCiTaskDefinitions } from "@vercel/sdk/funcs/vercelCiListVercelCiTaskDefinitions.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiListVercelCiTaskDefinitions(vercel, {
    invocationId: "<id>",
    attempt: "<value>",
    jobDefinitionId: "<id>",
    runAttempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiListVercelCiTaskDefinitions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ListVercelCiTaskDefinitionsRequest](../../models/listvercelcitaskdefinitionsrequest.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListVercelCiTaskDefinitionsResponseBody](../../models/listvercelcitaskdefinitionsresponsebody.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| models.ListVercelCiTaskDefinitionsVercelCiResponseBody            | 401                                                               | application/json                                                  |
| models.ListVercelCiTaskDefinitionsVercelCiResponseResponseBody    | 403                                                               | application/json                                                  |
| models.ListVercelCiTaskDefinitionsVercelCiResponse429ResponseBody | 429                                                               | application/json                                                  |
| models.ListVercelCiTaskDefinitionsVercelCiResponse500ResponseBody | 500                                                               | application/json                                                  |
| models.SDKError                                                   | 4XX, 5XX                                                          | \*/\*                                                             |

## listVercelCiTaskRuns

List Task Runs

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listVercelCiTaskRuns" method="get" path="/v1/vercel-ci/invocations/{invocationId}/attempts/{attempt}/job-definitions/{jobDefinitionId}/runs/{runAttempt}/task-runs" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.listVercelCiTaskRuns({
    invocationId: "<id>",
    attempt: "<value>",
    jobDefinitionId: "<id>",
    runAttempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiListVercelCiTaskRuns } from "@vercel/sdk/funcs/vercelCiListVercelCiTaskRuns.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiListVercelCiTaskRuns(vercel, {
    invocationId: "<id>",
    attempt: "<value>",
    jobDefinitionId: "<id>",
    runAttempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiListVercelCiTaskRuns failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ListVercelCiTaskRunsRequest](../../models/listvercelcitaskrunsrequest.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListVercelCiTaskRunsResponseBody](../../models/listvercelcitaskrunsresponsebody.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| models.ListVercelCiTaskRunsVercelCiResponseBody            | 401                                                        | application/json                                           |
| models.ListVercelCiTaskRunsVercelCiResponseResponseBody    | 403                                                        | application/json                                           |
| models.ListVercelCiTaskRunsVercelCiResponse429ResponseBody | 429                                                        | application/json                                           |
| models.ListVercelCiTaskRunsVercelCiResponse500ResponseBody | 500                                                        | application/json                                           |
| models.SDKError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## getVercelCiInvocationLogs

Get Invocation Logs

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getVercelCiInvocationLogs" method="get" path="/v1/vercel-ci/invocations/{invocationId}/attempts/{attempt}/logs" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.getVercelCiInvocationLogs({
    invocationId: "<id>",
    attempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiGetVercelCiInvocationLogs } from "@vercel/sdk/funcs/vercelCiGetVercelCiInvocationLogs.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiGetVercelCiInvocationLogs(vercel, {
    invocationId: "<id>",
    attempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiGetVercelCiInvocationLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetVercelCiInvocationLogsRequest](../../models/getvercelciinvocationlogsrequest.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetVercelCiInvocationLogsResponseBody](../../models/getvercelciinvocationlogsresponsebody.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| models.GetVercelCiInvocationLogsVercelCiResponseBody            | 401                                                             | application/json                                                |
| models.GetVercelCiInvocationLogsVercelCiResponseResponseBody    | 403                                                             | application/json                                                |
| models.GetVercelCiInvocationLogsVercelCiResponse429ResponseBody | 429                                                             | application/json                                                |
| models.GetVercelCiInvocationLogsVercelCiResponse500ResponseBody | 500                                                             | application/json                                                |
| models.SDKError                                                 | 4XX, 5XX                                                        | \*/\*                                                           |

## getVercelCiTaskLogs

Returns log lines for the tasks of an invocation attempt in a single request, grouped by task. Tasks can be narrowed by name and by conclusion, for example `conclusion=failed` to fetch only the logs of failed tasks.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getVercelCiTaskLogs" method="get" path="/v1/vercel-ci/invocations/{invocationId}/attempts/{attempt}/task-logs" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.getVercelCiTaskLogs({
    invocationId: "<id>",
    attempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiGetVercelCiTaskLogs } from "@vercel/sdk/funcs/vercelCiGetVercelCiTaskLogs.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiGetVercelCiTaskLogs(vercel, {
    invocationId: "<id>",
    attempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiGetVercelCiTaskLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetVercelCiTaskLogsRequest](../../models/getvercelcitasklogsrequest.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetVercelCiTaskLogsResponseBody](../../models/getvercelcitasklogsresponsebody.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| models.GetVercelCiTaskLogsVercelCiResponseBody            | 401                                                       | application/json                                          |
| models.GetVercelCiTaskLogsVercelCiResponseResponseBody    | 403                                                       | application/json                                          |
| models.GetVercelCiTaskLogsVercelCiResponse429ResponseBody | 429                                                       | application/json                                          |
| models.GetVercelCiTaskLogsVercelCiResponse500ResponseBody | 500                                                       | application/json                                          |
| models.SDKError                                           | 4XX, 5XX                                                  | \*/\*                                                     |

## getVercelCiJobRunLogs

Get Job Run Logs

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getVercelCiJobRunLogs" method="get" path="/v1/vercel-ci/invocations/{invocationId}/attempts/{attempt}/job-definitions/{jobDefinitionId}/runs/{runAttempt}/logs" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.getVercelCiJobRunLogs({
    invocationId: "<id>",
    attempt: "<value>",
    jobDefinitionId: "<id>",
    runAttempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiGetVercelCiJobRunLogs } from "@vercel/sdk/funcs/vercelCiGetVercelCiJobRunLogs.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiGetVercelCiJobRunLogs(vercel, {
    invocationId: "<id>",
    attempt: "<value>",
    jobDefinitionId: "<id>",
    runAttempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiGetVercelCiJobRunLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetVercelCiJobRunLogsRequest](../../models/getvercelcijobrunlogsrequest.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetVercelCiJobRunLogsResponseBody](../../models/getvercelcijobrunlogsresponsebody.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| models.GetVercelCiJobRunLogsVercelCiResponseBody            | 401                                                         | application/json                                            |
| models.GetVercelCiJobRunLogsVercelCiResponseResponseBody    | 403                                                         | application/json                                            |
| models.GetVercelCiJobRunLogsVercelCiResponse429ResponseBody | 429                                                         | application/json                                            |
| models.GetVercelCiJobRunLogsVercelCiResponse500ResponseBody | 500                                                         | application/json                                            |
| models.SDKError                                             | 4XX, 5XX                                                    | \*/\*                                                       |

## getVercelCiTaskRunLogs

Get Task Run Logs With `follow=1` the response is a newline-delimited JSON stream of log lines that ends once the task run has finished and its logs are flushed, or when the stream reaches its maximum duration.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getVercelCiTaskRunLogs" method="get" path="/v1/vercel-ci/invocations/{invocationId}/attempts/{attempt}/job-definitions/{jobDefinitionId}/runs/{runAttempt}/task-definitions/{taskDefinitionId}/runs/{taskRunAttempt}/logs" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vercelCi.getVercelCiTaskRunLogs({
    invocationId: "<id>",
    attempt: "<value>",
    jobDefinitionId: "<id>",
    runAttempt: "<value>",
    taskDefinitionId: "<id>",
    taskRunAttempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vercelCiGetVercelCiTaskRunLogs } from "@vercel/sdk/funcs/vercelCiGetVercelCiTaskRunLogs.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vercelCiGetVercelCiTaskRunLogs(vercel, {
    invocationId: "<id>",
    attempt: "<value>",
    jobDefinitionId: "<id>",
    runAttempt: "<value>",
    taskDefinitionId: "<id>",
    taskRunAttempt: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vercelCiGetVercelCiTaskRunLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetVercelCiTaskRunLogsRequest](../../models/getvercelcitaskrunlogsrequest.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetVercelCiTaskRunLogsResponseBody](../../models/getvercelcitaskrunlogsresponsebody.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| models.GetVercelCiTaskRunLogsVercelCiResponseBody            | 401                                                          | application/json                                             |
| models.GetVercelCiTaskRunLogsVercelCiResponseResponseBody    | 403                                                          | application/json                                             |
| models.GetVercelCiTaskRunLogsVercelCiResponse429ResponseBody | 429                                                          | application/json                                             |
| models.GetVercelCiTaskRunLogsVercelCiResponse500ResponseBody | 500                                                          | application/json                                             |
| models.SDKError                                              | 4XX, 5XX                                                     | \*/\*                                                        |