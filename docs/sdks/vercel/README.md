# Vercel SDK

## Overview

Vercel SDK: The [`@vercel/sdk`](https://www.npmjs.com/package/@vercel/sdk) is a type-safe Typescript SDK that allows you to access the resources and methods of the Vercel REST API. Learn how to [install it](https://vercel.com/docs/rest-api/sdk#installing-vercel-sdk) and [authenticate](https://vercel.com/docs/rest-api/sdk#authentication) with a Vercel access token.

### Available Operations

* [getV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlans](#getv1integrationsintegrationintegrationidorslugproductsproductidorslugplans)

## getV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlans

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v1/integrations/integration/{integrationIdOrSlug}/products/{productIdOrSlug}/plans" method="get" path="/v1/integrations/integration/{integrationIdOrSlug}/products/{productIdOrSlug}/plans" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.getV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlans({
    integrationIdOrSlug: "<value>",
    productIdOrSlug: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { getV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlans } from "@vercel/sdk/funcs/getV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlans.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await getV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlans(vercel, {
    integrationIdOrSlug: "<value>",
    productIdOrSlug: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("getV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlans failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                       | Type                                                                                                                                                                                            | Required                                                                                                                                                                                        | Description                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                       | [models.GetV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlansRequest](../../models/getv1integrationsintegrationintegrationidorslugproductsproductidorslugplansrequest.md) | :heavy_check_mark:                                                                                                                                                                              | The request object to use for the request.                                                                                                                                                      |
| `options`                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                         | :heavy_minus_sign:                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                  |
| `options.retries`                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                |

### Response

**Promise\<[models.GetV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlansResponseBody](../../models/getv1integrationsintegrationintegrationidorslugproductsproductidorslugplansresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |