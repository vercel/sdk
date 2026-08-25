# Connect

## Overview

### Available Operations

* [createConnector](#createconnector) - Create a connector

## createConnector

Create a connector and optionally link it to a project. Use `type` with complete provider data, or use `service` with `connectionMethod` so Connect can supply the type, endpoints, templates, and defaults. Production project OIDC tokens may create OAuth connectors, plus credential-less API key connectors whose credentials are supplied per user. OIDC-created connectors are automatically linked within the deployment token's eligible project environments.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createConnector" method="post" path="/v1/connect/connectors" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.connect.createConnector({
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
import { connectCreateConnector } from "@vercel/sdk/funcs/connectCreateConnector.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await connectCreateConnector(vercel, {
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectCreateConnector failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateConnectorRequest](../../models/createconnectorrequest.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateConnectorResponse](../../models/createconnectorresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| models.ConnectError               | 400, 401, 403, 404, 409, 410, 422 | application/json                  |
| models.ConnectError               | 500, 502                          | application/json                  |
| models.SDKError                   | 4XX, 5XX                          | \*/\*                             |