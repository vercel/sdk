# Marketplace
(*marketplace*)

## Overview

### Available Operations

* [getAccountInfo](#getaccountinfo) - Get Account Information
* [getMember](#getmember) - Get Member Information
* [createEvent](#createevent) - Create Event
* [submitBillingData](#submitbillingdata) - Submit Billing Data
* [submitInvoice](#submitinvoice) - Submit Invoice
* [getInvoice](#getinvoice) - Get Invoice
* [updateInvoice](#updateinvoice) - Invoice Actions
* [submitPrepaymentBalances](#submitprepaymentbalances) - Submit Prepayment Balances
* [updateResourceSecrets](#updateresourcesecrets) - Update Resource Secrets (Deprecated)
* [updateResourceSecretsById](#updateresourcesecretsbyid) - Update Resource Secrets
* [importResource](#importresource) - Import Resource
* [exchangeSsoToken](#exchangessotoken) - SSO Token Exchange
* [queryExperimentationItems](#queryexperimentationitems) - Query experimentation items
* [createInstallationIntegrationConfiguration](#createinstallationintegrationconfiguration) - Create one or multiple experimentation items
* [updateInstallationIntegrationConfiguration](#updateinstallationintegrationconfiguration) - Patch an existing experimentation item
* [deleteInstallationIntegrationConfiguration](#deleteinstallationintegrationconfiguration) - Delete an existing experimentation item
* [createInstallationIntegrationEdgeConfig](#createinstallationintegrationedgeconfig) - Get the data of a user-provided Edge Config
* [updateInstallationIntegrationEdgeConfig](#updateinstallationintegrationedgeconfig) - Push data into a user-provided Edge Config

## getAccountInfo

Fetches the best account or user’s contact info

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.getAccountInfo({
    integrationConfigurationId: "<id>",
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
import { marketplaceGetAccountInfo } from "@vercel/sdk/funcs/marketplaceGetAccountInfo.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceGetAccountInfo(vercel, {
    integrationConfigurationId: "<id>",
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
| `request`                                                                                                                                                                      | [models.GetAccountInfoRequest](../../models/getaccountinforequest.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetAccountInfoResponseBody](../../models/getaccountinforesponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getMember

Returns the member role and other information for a given member ID ("user_id" claim in the SSO OIDC token).

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.getMember({
    integrationConfigurationId: "<id>",
    memberId: "<id>",
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
import { marketplaceGetMember } from "@vercel/sdk/funcs/marketplaceGetMember.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceGetMember(vercel, {
    integrationConfigurationId: "<id>",
    memberId: "<id>",
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
| `request`                                                                                                                                                                      | [models.GetMemberRequest](../../models/getmemberrequest.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetMemberResponseBody](../../models/getmemberresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## createEvent

Partner notifies Vercel of any changes made to an Installation or a Resource. Vercel is expected to use `list-resources` and other read APIs to get the new state.<br/> <br/> `resource.updated` event should be dispatched when any state of a resource linked to Vercel is modified by the partner.<br/> `installation.updated` event should be dispatched when an installation's billing plan is changed via the provider instead of Vercel.<br/> <br/> Resource update use cases: <br/> <br/> - The user renames a database in the partner’s application. The partner should dispatch a `resource.updated` event to notify Vercel to update the resource in Vercel’s datastores.<br/> - A resource has been suspended due to a lack of use. The partner should dispatch a `resource.updated` event to notify Vercel to update the resource's status in Vercel's datastores.<br/>

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.createEvent({
    integrationConfigurationId: "<id>",
    requestBody: {
      event: {
        type: "installation.updated",
      },
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { marketplaceCreateEvent } from "@vercel/sdk/funcs/marketplaceCreateEvent.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceCreateEvent(vercel, {
    integrationConfigurationId: "<id>",
    requestBody: {
      event: {
        type: "installation.updated",
      },
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateEventRequest](../../models/createeventrequest.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## submitBillingData

Sends the billing and usage data. The partner should do this at least once a day and ideally once per hour. <br/> Use the `credentials.access_token` we provided in the [Upsert Installation](#upsert-installation) body to authorize this request.

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.submitBillingData({
    integrationConfigurationId: "<id>",
    requestBody: {
      timestamp: new Date("2025-09-29T02:38:01.476Z"),
      eod: new Date("2023-12-28T23:46:57.523Z"),
      period: {
        start: new Date("2023-06-25T19:04:50.518Z"),
        end: new Date("2024-10-17T01:18:36.230Z"),
      },
      billing: {
        items: [
          {
            billingPlanId: "<id>",
            name: "<value>",
            price: "511.92",
            quantity: 328.54,
            units: "<value>",
            total: "<value>",
          },
          {
            billingPlanId: "<id>",
            name: "<value>",
            price: "4.49",
            quantity: 3113.17,
            units: "<value>",
            total: "<value>",
          },
          {
            billingPlanId: "<id>",
            name: "<value>",
            price: "896.30",
            quantity: 8536.32,
            units: "<value>",
            total: "<value>",
          },
        ],
      },
      usage: [
        {
          resourceId: "<id>",
          name: "<value>",
          type: "rate",
          units: "<value>",
          dayValue: 9439.22,
          periodValue: 6958.71,
        },
        {
          resourceId: "<id>",
          name: "<value>",
          type: "total",
          units: "<value>",
          dayValue: 9892.22,
          periodValue: 4749.62,
        },
        {
          resourceId: "<id>",
          name: "<value>",
          type: "rate",
          units: "<value>",
          dayValue: 7119.53,
          periodValue: 6310.47,
        },
      ],
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { marketplaceSubmitBillingData } from "@vercel/sdk/funcs/marketplaceSubmitBillingData.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceSubmitBillingData(vercel, {
    integrationConfigurationId: "<id>",
    requestBody: {
      timestamp: new Date("2025-09-29T02:38:01.476Z"),
      eod: new Date("2023-12-28T23:46:57.523Z"),
      period: {
        start: new Date("2023-06-25T19:04:50.518Z"),
        end: new Date("2024-10-17T01:18:36.230Z"),
      },
      billing: {
        items: [
          {
            billingPlanId: "<id>",
            name: "<value>",
            price: "511.92",
            quantity: 328.54,
            units: "<value>",
            total: "<value>",
          },
          {
            billingPlanId: "<id>",
            name: "<value>",
            price: "4.49",
            quantity: 3113.17,
            units: "<value>",
            total: "<value>",
          },
          {
            billingPlanId: "<id>",
            name: "<value>",
            price: "896.30",
            quantity: 8536.32,
            units: "<value>",
            total: "<value>",
          },
        ],
      },
      usage: [
        {
          resourceId: "<id>",
          name: "<value>",
          type: "rate",
          units: "<value>",
          dayValue: 9439.22,
          periodValue: 6958.71,
        },
        {
          resourceId: "<id>",
          name: "<value>",
          type: "total",
          units: "<value>",
          dayValue: 9892.22,
          periodValue: 4749.62,
        },
        {
          resourceId: "<id>",
          name: "<value>",
          type: "rate",
          units: "<value>",
          dayValue: 7119.53,
          periodValue: 6310.47,
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SubmitBillingDataRequest](../../models/submitbillingdatarequest.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## submitInvoice

This endpoint allows the partner to submit an invoice to Vercel. The invoice is created in Vercel's billing system and sent to the customer. Depending on the type of billing plan, the invoice can be sent at a time of signup, at the start of the billing period, or at the end of the billing period.<br/> <br/> Use the `credentials.access_token` we provided in the [Upsert Installation](#upsert-installation) body to authorize this request. <br/> There are several limitations to the invoice submission:<br/> <br/> 1. A resource can only be billed once per the billing period and the billing plan.<br/> 2. The billing plan used to bill the resource must have been active for this resource during the billing period.<br/> 3. The billing plan used must be a subscription plan.<br/> 4. The interim usage data must be sent hourly for all types of subscriptions. See [Send subscription billing and usage data](#send-subscription-billing-and-usage-data) API on how to send interim billing and usage data.<br/>

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.submitInvoice({
    integrationConfigurationId: "<id>",
    requestBody: {
      invoiceDate: new Date("2023-06-05T08:54:16.353Z"),
      period: {
        start: new Date("2023-07-26T14:15:15.601Z"),
        end: new Date("2025-10-08T09:35:48.520Z"),
      },
      items: [
        {
          billingPlanId: "<id>",
          name: "<value>",
          price: "905.89",
          quantity: 1684.76,
          units: "<value>",
          total: "<value>",
        },
        {
          billingPlanId: "<id>",
          name: "<value>",
          price: "84.05",
          quantity: 9130.95,
          units: "<value>",
          total: "<value>",
        },
      ],
    },
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
import { marketplaceSubmitInvoice } from "@vercel/sdk/funcs/marketplaceSubmitInvoice.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceSubmitInvoice(vercel, {
    integrationConfigurationId: "<id>",
    requestBody: {
      invoiceDate: new Date("2023-06-05T08:54:16.353Z"),
      period: {
        start: new Date("2023-07-26T14:15:15.601Z"),
        end: new Date("2025-10-08T09:35:48.520Z"),
      },
      items: [
        {
          billingPlanId: "<id>",
          name: "<value>",
          price: "905.89",
          quantity: 1684.76,
          units: "<value>",
          total: "<value>",
        },
        {
          billingPlanId: "<id>",
          name: "<value>",
          price: "84.05",
          quantity: 9130.95,
          units: "<value>",
          total: "<value>",
        },
      ],
    },
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
| `request`                                                                                                                                                                      | [models.SubmitInvoiceRequest](../../models/submitinvoicerequest.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SubmitInvoiceResponseBody](../../models/submitinvoiceresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getInvoice

Get Invoice details and status for a given invoice ID.<br/> <br/> See Billing Events with Webhooks documentation on how to receive invoice events. This endpoint is used to retrieve the invoice details.

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.getInvoice({
    integrationConfigurationId: "<id>",
    invoiceId: "<id>",
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
import { marketplaceGetInvoice } from "@vercel/sdk/funcs/marketplaceGetInvoice.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceGetInvoice(vercel, {
    integrationConfigurationId: "<id>",
    invoiceId: "<id>",
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
| `request`                                                                                                                                                                      | [models.GetInvoiceRequest](../../models/getinvoicerequest.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetInvoiceResponseBody](../../models/getinvoiceresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## updateInvoice

This endpoint allows the partner to request a refund for an invoice to Vercel. The invoice is created using the [Submit Invoice API](#submit-invoice-api).

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.updateInvoice({
    integrationConfigurationId: "<id>",
    invoiceId: "<id>",
    requestBody: {
      action: "refund",
      reason: "<value>",
      total: "<value>",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { marketplaceUpdateInvoice } from "@vercel/sdk/funcs/marketplaceUpdateInvoice.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceUpdateInvoice(vercel, {
    integrationConfigurationId: "<id>",
    invoiceId: "<id>",
    requestBody: {
      action: "refund",
      reason: "<value>",
      total: "<value>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.UpdateInvoiceRequest](../../models/updateinvoicerequest.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## submitPrepaymentBalances

Sends the prepayment balances. The partner should do this at least once a day and ideally once per hour. <br/> Use the `credentials.access_token` we provided in the [Upsert Installation](#upsert-installation) body to authorize this request.

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.submitPrepaymentBalances({
    integrationConfigurationId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { marketplaceSubmitPrepaymentBalances } from "@vercel/sdk/funcs/marketplaceSubmitPrepaymentBalances.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceSubmitPrepaymentBalances(vercel, {
    integrationConfigurationId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SubmitPrepaymentBalancesRequest](../../models/submitprepaymentbalancesrequest.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## updateResourceSecrets

This endpoint is deprecated and replaced with the endpoint [Update Resource Secrets](#update-resource-secrets). <br/> This endpoint updates the secrets of a resource. If a resource has projects connected, the connected secrets are updated with the new secrets. The old secrets may still be used by existing connected projects because they are not automatically redeployed. Redeployment is a manual action and must be completed by the user. All new project connections will use the new secrets.<br/> <br/> Use cases for this endpoint:<br/> <br/> - Resetting the credentials of a database in the partner. If the user requests the credentials to be updated in the partner’s application, the partner post the new set of secrets to Vercel, the user should redeploy their application and the expire the old credentials.<br/>

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.updateResourceSecrets({
    integrationConfigurationId: "<id>",
    integrationProductIdOrSlug: "<value>",
    resourceId: "<id>",
    requestBody: {
      secrets: [

      ],
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { marketplaceUpdateResourceSecrets } from "@vercel/sdk/funcs/marketplaceUpdateResourceSecrets.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceUpdateResourceSecrets(vercel, {
    integrationConfigurationId: "<id>",
    integrationProductIdOrSlug: "<value>",
    resourceId: "<id>",
    requestBody: {
      secrets: [
  
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.UpdateResourceSecretsRequest](../../models/updateresourcesecretsrequest.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## updateResourceSecretsById

This endpoint updates the secrets of a resource. If a resource has projects connected, the connected secrets are updated with the new secrets. The old secrets may still be used by existing connected projects because they are not automatically redeployed. Redeployment is a manual action and must be completed by the user. All new project connections will use the new secrets.<br/> <br/> Use cases for this endpoint:<br/> <br/> - Resetting the credentials of a database in the partner. If the user requests the credentials to be updated in the partner’s application, the partner post the new set of secrets to Vercel, the user should redeploy their application and the expire the old credentials.<br/>

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.updateResourceSecretsById({
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { marketplaceUpdateResourceSecretsById } from "@vercel/sdk/funcs/marketplaceUpdateResourceSecretsById.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceUpdateResourceSecretsById(vercel, {
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.UpdateResourceSecretsByIdRequest](../../models/updateresourcesecretsbyidrequest.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## importResource

This endpoint imports (upserts) a resource to Vercel's installation. This may be needed if resources can be independently created on the partner's side and need to be synchronized to Vercel.

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.importResource({
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
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
import { marketplaceImportResource } from "@vercel/sdk/funcs/marketplaceImportResource.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceImportResource(vercel, {
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
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
| `request`                                                                                                                                                                      | [models.ImportResourceRequest](../../models/importresourcerequest.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ImportResourceResponseBody](../../models/importresourceresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## exchangeSsoToken

During the autorization process, Vercel sends the user to the provider [redirectLoginUrl](https://vercel.com/docs/integrations/create-integration/submit-integration#redirect-login-url), that includes the OAuth authorization `code` parameter. The provider then calls the SSO Token Exchange endpoint with the sent code and receives the OIDC token. They log the user in based on this token and redirects the user back to the Vercel account using deep-link parameters included the redirectLoginUrl. This is used to verify the identity of the user during the [**Open in Provider** flow](https://vercel.com/docs/integrations/marketplace-flows#open-in-provider-button-flow). Providers should not persist the returned `id_token` in a database since the token will expire.

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.marketplace.exchangeSsoToken({
    code: "<value>",
    clientId: "<id>",
    clientSecret: "<value>",
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
import { marketplaceExchangeSsoToken } from "@vercel/sdk/funcs/marketplaceExchangeSsoToken.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await marketplaceExchangeSsoToken(vercel, {
    code: "<value>",
    clientId: "<id>",
    clientSecret: "<value>",
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
| `request`                                                                                                                                                                      | [models.ExchangeSsoTokenRequestBody](../../models/exchangessotokenrequestbody.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ExchangeSsoTokenResponseBody](../../models/exchangessotokenresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## queryExperimentationItems

Queries flags, experiments under a Marketplace resource.

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.queryExperimentationItems({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { marketplaceQueryExperimentationItems } from "@vercel/sdk/funcs/marketplaceQueryExperimentationItems.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceQueryExperimentationItems(vercel, {});

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
| `request`                                                                                                                                                                      | [models.QueryExperimentationItemsRequest](../../models/queryexperimentationitemsrequest.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.QueryExperimentationItemsResponseBody](../../models/queryexperimentationitemsresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## createInstallationIntegrationConfiguration

Create one or multiple experimentation items

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.createInstallationIntegrationConfiguration({
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { marketplaceCreateInstallationIntegrationConfiguration } from "@vercel/sdk/funcs/marketplaceCreateInstallationIntegrationConfiguration.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceCreateInstallationIntegrationConfiguration(vercel, {
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                         | Type                                                                                                                                                                                                              | Required                                                                                                                                                                                                          | Description                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                         | [models.PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequest](../../models/postv1installationsintegrationconfigurationidresourcesresourceidexperimentationitemsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                | The request object to use for the request.                                                                                                                                                                        |
| `options`                                                                                                                                                                                                         | RequestOptions                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                    |
| `options.retries`                                                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                  |

### Response

**Promise\<void\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## updateInstallationIntegrationConfiguration

Patch an existing experimentation item

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.updateInstallationIntegrationConfiguration({
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
    itemId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { marketplaceUpdateInstallationIntegrationConfiguration } from "@vercel/sdk/funcs/marketplaceUpdateInstallationIntegrationConfiguration.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceUpdateInstallationIntegrationConfiguration(vercel, {
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
    itemId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                       | [models.PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest](../../models/patchv1installationsintegrationconfigurationidresourcesresourceidexperimentationitemsitemidrequest.md) | :heavy_check_mark:                                                                                                                                                                                                              | The request object to use for the request.                                                                                                                                                                                      |
| `options`                                                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                  |
| `options.retries`                                                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                |

### Response

**Promise\<void\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## deleteInstallationIntegrationConfiguration

Delete an existing experimentation item

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.deleteInstallationIntegrationConfiguration({
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
    itemId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { marketplaceDeleteInstallationIntegrationConfiguration } from "@vercel/sdk/funcs/marketplaceDeleteInstallationIntegrationConfiguration.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceDeleteInstallationIntegrationConfiguration(vercel, {
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
    itemId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                         | [models.DeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest](../../models/deletev1installationsintegrationconfigurationidresourcesresourceidexperimentationitemsitemidrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                | The request object to use for the request.                                                                                                                                                                                        |
| `options`                                                                                                                                                                                                                         | RequestOptions                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                    |
| `options.retries`                                                                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                  |

### Response

**Promise\<void\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## createInstallationIntegrationEdgeConfig

When the user enabled Edge Config syncing, then this endpoint can be used by the partner to fetch the contents of the Edge Config.

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.createInstallationIntegrationEdgeConfig({
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
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
import { marketplaceCreateInstallationIntegrationEdgeConfig } from "@vercel/sdk/funcs/marketplaceCreateInstallationIntegrationEdgeConfig.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceCreateInstallationIntegrationEdgeConfig(vercel, {
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
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

| Parameter                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                   | [models.HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest](../../models/headv1installationsintegrationconfigurationidresourcesresourceidexperimentationedgeconfigrequest.md) | :heavy_check_mark:                                                                                                                                                                                                          | The request object to use for the request.                                                                                                                                                                                  |
| `options`                                                                                                                                                                                                                   | RequestOptions                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                              |
| `options.retries`                                                                                                                                                                                                           | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                          | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                            |

### Response

**Promise\<[models.HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody](../../models/headv1installationsintegrationconfigurationidresourcesresourceidexperimentationedgeconfigresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## updateInstallationIntegrationEdgeConfig

When the user enabled Edge Config syncing, then this endpoint can be used by the partner to push their configuration data into the relevant Edge Config.

### Example Usage

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.updateInstallationIntegrationEdgeConfig({
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
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
import { marketplaceUpdateInstallationIntegrationEdgeConfig } from "@vercel/sdk/funcs/marketplaceUpdateInstallationIntegrationEdgeConfig.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketplaceUpdateInstallationIntegrationEdgeConfig(vercel, {
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
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

| Parameter                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                 | [models.PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest](../../models/putv1installationsintegrationconfigurationidresourcesresourceidexperimentationedgeconfigrequest.md) | :heavy_check_mark:                                                                                                                                                                                                        | The request object to use for the request.                                                                                                                                                                                |
| `options`                                                                                                                                                                                                                 | RequestOptions                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                        | Used to set various options for making HTTP requests.                                                                                                                                                                     |
| `options.fetchOptions`                                                                                                                                                                                                    | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                        | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                            |
| `options.retries`                                                                                                                                                                                                         | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                        | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                          |

### Response

**Promise\<[models.PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody](../../models/putv1installationsintegrationconfigurationidresourcesresourceidexperimentationedgeconfigresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |