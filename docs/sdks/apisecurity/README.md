# ApiSecurity

## Overview

### Available Operations

* [getSecurityFirewallConfig](#getsecurityfirewallconfig) - Returns activated WAF config
* [deleteSecurityFirewallConfigByConfigVersion](#deletesecurityfirewallconfigbyconfigversion) - Returns activated WAF config
* [createSecurityFirewallConfigByConfigVersionActivate](#createsecurityfirewallconfigbyconfigversionactivate) - Returns activated WAF config

## getSecurityFirewallConfig

Lists WAF configs for a project

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSecurityFirewallConfig" method="get" path="/v1/security/firewall/config" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.apiSecurity.getSecurityFirewallConfig();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { apiSecurityGetSecurityFirewallConfig } from "@vercel/sdk/funcs/apiSecurityGetSecurityFirewallConfig.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await apiSecurityGetSecurityFirewallConfig(vercel);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiSecurityGetSecurityFirewallConfig failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetSecurityFirewallConfigResponseBody](../../models/getsecurityfirewallconfigresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## deleteSecurityFirewallConfigByConfigVersion

Promotes a draft WAF config to an active config

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteSecurityFirewallConfigByConfigVersion" method="delete" path="/v1/security/firewall/config/{configVersion}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.apiSecurity.deleteSecurityFirewallConfigByConfigVersion({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    configVersion: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { apiSecurityDeleteSecurityFirewallConfigByConfigVersion } from "@vercel/sdk/funcs/apiSecurityDeleteSecurityFirewallConfigByConfigVersion.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await apiSecurityDeleteSecurityFirewallConfigByConfigVersion(vercel, {
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    configVersion: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiSecurityDeleteSecurityFirewallConfigByConfigVersion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DeleteSecurityFirewallConfigByConfigVersionRequest](../../models/deletesecurityfirewallconfigbyconfigversionrequest.md)                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DeleteSecurityFirewallConfigByConfigVersionResponseBody](../../models/deletesecurityfirewallconfigbyconfigversionresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## createSecurityFirewallConfigByConfigVersionActivate

Promotes a draft WAF config to an active config

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createSecurityFirewallConfigByConfigVersionActivate" method="post" path="/v1/security/firewall/config/{configVersion}/activate" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.apiSecurity.createSecurityFirewallConfigByConfigVersionActivate({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    configVersion: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { apiSecurityCreateSecurityFirewallConfigByConfigVersionActivate } from "@vercel/sdk/funcs/apiSecurityCreateSecurityFirewallConfigByConfigVersionActivate.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await apiSecurityCreateSecurityFirewallConfigByConfigVersionActivate(vercel, {
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    configVersion: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiSecurityCreateSecurityFirewallConfigByConfigVersionActivate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateSecurityFirewallConfigByConfigVersionActivateRequest](../../models/createsecurityfirewallconfigbyconfigversionactivaterequest.md)                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateSecurityFirewallConfigByConfigVersionActivateResponseBody](../../models/createsecurityfirewallconfigbyconfigversionactivateresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |