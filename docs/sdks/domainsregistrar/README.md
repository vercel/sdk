# DomainsRegistrar
(*domainsRegistrar*)

## Overview

### Available Operations

* [getSupportedTlds](#getsupportedtlds) - Get a list of TLDs supported by Vercel
* [getTldPrice](#gettldprice) - Get price data for a specific TLD
* [getDomainAvailability](#getdomainavailability) - Get availability for a specific domain
* [getDomainPrice](#getdomainprice) - Get price data for a specific domain
* [getBulkAvailability](#getbulkavailability) - Get availability for multiple domains
* [getDomainAuthCode](#getdomainauthcode) - Get the auth code for a domain
* [buySingleDomain](#buysingledomain) - Buy a domain
* [buyDomains](#buydomains) - Buy multiple domains at once
* [transferInDomain](#transferindomain) - Transfer a domain in from another registrar
* [getDomainTransferIn](#getdomaintransferin) - Get the transfer status for a domain
* [renewDomain](#renewdomain) - Renew a domain
* [updateDomainAutoRenew](#updatedomainautorenew) - Update the auto-renew setting for a domain
* [updateDomainNameservers](#updatedomainnameservers) - Update the nameservers for a domain
* [getContactInfoSchema](#getcontactinfoschema) - Get the schema for the tld-specific contact information for a domain
* [getOrder](#getorder) - Get information about a domain order by its ID

## getSupportedTlds

Get supported TLDs

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSupportedTlds" method="get" path="/v1/registrar/tlds/supported" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.getSupportedTlds();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { domainsRegistrarGetSupportedTlds } from "@vercel/sdk/funcs/domainsRegistrarGetSupportedTlds.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarGetSupportedTlds(vercel);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsRegistrarGetSupportedTlds failed:", res.error);
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

**Promise\<[string[]](../../models/.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getTldPrice

Get TLD price data

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTldPrice" method="get" path="/v1/registrar/tlds/{tld}/price" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.getTldPrice({
    tld: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { domainsRegistrarGetTldPrice } from "@vercel/sdk/funcs/domainsRegistrarGetTldPrice.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarGetTldPrice(vercel, {
    tld: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsRegistrarGetTldPrice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetTldPriceRequest](../../models/gettldpricerequest.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetTldPriceResponseBody](../../models/gettldpriceresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getDomainAvailability

Get availability for a specific domain

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDomainAvailability" method="get" path="/v1/registrar/domains/{domain}/availability" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.getDomainAvailability({
    domain: "hungry-birdbath.info",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { domainsRegistrarGetDomainAvailability } from "@vercel/sdk/funcs/domainsRegistrarGetDomainAvailability.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarGetDomainAvailability(vercel, {
    domain: "hungry-birdbath.info",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsRegistrarGetDomainAvailability failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetDomainAvailabilityRequest](../../models/getdomainavailabilityrequest.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetDomainAvailabilityResponseBody](../../models/getdomainavailabilityresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getDomainPrice

Get price data for a specific domain

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDomainPrice" method="get" path="/v1/registrar/domains/{domain}/price" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.getDomainPrice({
    domain: "excited-dwell.org",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { domainsRegistrarGetDomainPrice } from "@vercel/sdk/funcs/domainsRegistrarGetDomainPrice.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarGetDomainPrice(vercel, {
    domain: "excited-dwell.org",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsRegistrarGetDomainPrice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetDomainPriceRequest](../../models/getdomainpricerequest.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetDomainPriceResponseBody](../../models/getdomainpriceresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getBulkAvailability

Get availability for multiple domains

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBulkAvailability" method="post" path="/v1/registrar/domains/availability" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.getBulkAvailability({
    domains: [
      "<value 1>",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { domainsRegistrarGetBulkAvailability } from "@vercel/sdk/funcs/domainsRegistrarGetBulkAvailability.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarGetBulkAvailability(vercel, {
    domains: [
      "<value 1>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsRegistrarGetBulkAvailability failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetBulkAvailabilityRequestBody](../../models/getbulkavailabilityrequestbody.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetBulkAvailabilityResponseBody](../../models/getbulkavailabilityresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getDomainAuthCode

Get the auth code for a domain

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDomainAuthCode" method="get" path="/v1/registrar/domains/{domain}/auth-code" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.getDomainAuthCode({
    domain: "ruddy-coil.org",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { domainsRegistrarGetDomainAuthCode } from "@vercel/sdk/funcs/domainsRegistrarGetDomainAuthCode.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarGetDomainAuthCode(vercel, {
    domain: "ruddy-coil.org",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsRegistrarGetDomainAuthCode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetDomainAuthCodeRequest](../../models/getdomainauthcoderequest.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetDomainAuthCodeResponseBody](../../models/getdomainauthcoderesponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.Forbidden             | 403                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## buySingleDomain

Buy a domain

### Example Usage

<!-- UsageSnippet language="typescript" operationID="buySingleDomain" method="post" path="/v1/registrar/domains/{domain}/buy" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.buySingleDomain({
    domain: "metallic-simple.com",
    requestBody: {
      autoRenew: false,
      years: 7602.67,
      expectedPrice: 7390.34,
      contactInformation: {
        firstName: "Lexie",
        lastName: "Lemke",
        email: "Lionel21@gmail.com",
        phone: "550.220.6330 x258",
        address1: "<value>",
        city: "Spencerport",
        state: "West Virginia",
        zip: "46432",
        country: "Sweden",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { domainsRegistrarBuySingleDomain } from "@vercel/sdk/funcs/domainsRegistrarBuySingleDomain.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarBuySingleDomain(vercel, {
    domain: "metallic-simple.com",
    requestBody: {
      autoRenew: false,
      years: 7602.67,
      expectedPrice: 7390.34,
      contactInformation: {
        firstName: "Lexie",
        lastName: "Lemke",
        email: "Lionel21@gmail.com",
        phone: "550.220.6330 x258",
        address1: "<value>",
        city: "Spencerport",
        state: "West Virginia",
        zip: "46432",
        country: "Sweden",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsRegistrarBuySingleDomain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.BuySingleDomainRequest](../../models/buysingledomainrequest.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BuySingleDomainResponseBody](../../models/buysingledomainresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.Forbidden             | 403                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## buyDomains

Buy multiple domains

### Example Usage

<!-- UsageSnippet language="typescript" operationID="buyDomains" method="post" path="/v1/registrar/domains/buy" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.buyDomains({
    domains: [],
    contactInformation: {
      firstName: "Leonie",
      lastName: "Johnston",
      email: "Anna_Fisher13@hotmail.com",
      phone: "(688) 699-0656",
      address1: "<value>",
      city: "Rennerland",
      state: "New Jersey",
      zip: "70054",
      country: "Peru",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { domainsRegistrarBuyDomains } from "@vercel/sdk/funcs/domainsRegistrarBuyDomains.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarBuyDomains(vercel, {
    domains: [],
    contactInformation: {
      firstName: "Leonie",
      lastName: "Johnston",
      email: "Anna_Fisher13@hotmail.com",
      phone: "(688) 699-0656",
      address1: "<value>",
      city: "Rennerland",
      state: "New Jersey",
      zip: "70054",
      country: "Peru",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsRegistrarBuyDomains failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.BuyDomainsRequestBody](../../models/buydomainsrequestbody.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BuyDomainsResponseBody](../../models/buydomainsresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.Forbidden             | 403                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## transferInDomain

Transfer-in a domain

### Example Usage

<!-- UsageSnippet language="typescript" operationID="transferInDomain" method="post" path="/v1/registrar/domains/{domain}/transfer" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.transferInDomain({
    domain: "silky-fund.org",
    requestBody: {
      authCode: "<value>",
      autoRenew: true,
      years: 298.08,
      expectedPrice: 5092.5,
      contactInformation: {
        firstName: "Gabrielle",
        lastName: "Hackett",
        email: "Keshawn99@yahoo.com",
        phone: "(758) 385-1802 x13762",
        address1: "<value>",
        city: "Pattiestead",
        state: "Idaho",
        zip: "64653-9022",
        country: "Bolivia",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { domainsRegistrarTransferInDomain } from "@vercel/sdk/funcs/domainsRegistrarTransferInDomain.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarTransferInDomain(vercel, {
    domain: "silky-fund.org",
    requestBody: {
      authCode: "<value>",
      autoRenew: true,
      years: 298.08,
      expectedPrice: 5092.5,
      contactInformation: {
        firstName: "Gabrielle",
        lastName: "Hackett",
        email: "Keshawn99@yahoo.com",
        phone: "(758) 385-1802 x13762",
        address1: "<value>",
        city: "Pattiestead",
        state: "Idaho",
        zip: "64653-9022",
        country: "Bolivia",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsRegistrarTransferInDomain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.TransferInDomainRequest](../../models/transferindomainrequest.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransferInDomainResponseBody](../../models/transferindomainresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.Forbidden             | 403                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getDomainTransferIn

Get a domain's transfer status

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDomainTransferIn" method="get" path="/v1/registrar/domains/{domain}/transfer" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.getDomainTransferIn({
    domain: "unsung-antelope.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { domainsRegistrarGetDomainTransferIn } from "@vercel/sdk/funcs/domainsRegistrarGetDomainTransferIn.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarGetDomainTransferIn(vercel, {
    domain: "unsung-antelope.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsRegistrarGetDomainTransferIn failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetDomainTransferInRequest](../../models/getdomaintransferinrequest.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetDomainTransferInResponseBody](../../models/getdomaintransferinresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.Forbidden             | 403                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## renewDomain

Renew a domain

### Example Usage

<!-- UsageSnippet language="typescript" operationID="renewDomain" method="post" path="/v1/registrar/domains/{domain}/renew" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.renewDomain({
    domain: "scaly-daughter.biz",
    requestBody: {
      years: 1981.72,
      expectedPrice: 7096.16,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { domainsRegistrarRenewDomain } from "@vercel/sdk/funcs/domainsRegistrarRenewDomain.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarRenewDomain(vercel, {
    domain: "scaly-daughter.biz",
    requestBody: {
      years: 1981.72,
      expectedPrice: 7096.16,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsRegistrarRenewDomain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.RenewDomainRequest](../../models/renewdomainrequest.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RenewDomainResponseBody](../../models/renewdomainresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.Forbidden             | 403                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## updateDomainAutoRenew

Update auto-renew for a domain

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDomainAutoRenew" method="patch" path="/v1/registrar/domains/{domain}/auto-renew" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.domainsRegistrar.updateDomainAutoRenew({
    domain: "worthwhile-dwell.net",
    requestBody: {
      autoRenew: true,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { domainsRegistrarUpdateDomainAutoRenew } from "@vercel/sdk/funcs/domainsRegistrarUpdateDomainAutoRenew.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarUpdateDomainAutoRenew(vercel, {
    domain: "worthwhile-dwell.net",
    requestBody: {
      autoRenew: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("domainsRegistrarUpdateDomainAutoRenew failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.UpdateDomainAutoRenewRequest](../../models/updatedomainautorenewrequest.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
| models.Forbidden             | 403                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## updateDomainNameservers

Update nameservers for a domain

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDomainNameservers" method="patch" path="/v1/registrar/domains/{domain}/nameservers" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.domainsRegistrar.updateDomainNameservers({
    domain: "unique-formula.biz",
    requestBody: {
      nameservers: [
        "<value 1>",
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
import { domainsRegistrarUpdateDomainNameservers } from "@vercel/sdk/funcs/domainsRegistrarUpdateDomainNameservers.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarUpdateDomainNameservers(vercel, {
    domain: "unique-formula.biz",
    requestBody: {
      nameservers: [
        "<value 1>",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("domainsRegistrarUpdateDomainNameservers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.UpdateDomainNameserversRequest](../../models/updatedomainnameserversrequest.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
| models.Forbidden             | 403                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getContactInfoSchema

Get contact info schema

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getContactInfoSchema" method="get" path="/v1/registrar/domains/{domain}/contact-info/schema" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.getContactInfoSchema({
    domain: "tricky-issue.name",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { domainsRegistrarGetContactInfoSchema } from "@vercel/sdk/funcs/domainsRegistrarGetContactInfoSchema.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarGetContactInfoSchema(vercel, {
    domain: "tricky-issue.name",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsRegistrarGetContactInfoSchema failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetContactInfoSchemaRequest](../../models/getcontactinfoschemarequest.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetContactInfoSchemaResponseBody](../../models/getcontactinfoschemaresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getOrder

Get a domain order

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getOrder" method="get" path="/v1/registrar/orders/{orderId}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domainsRegistrar.getOrder({
    orderId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { domainsRegistrarGetOrder } from "@vercel/sdk/funcs/domainsRegistrarGetOrder.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await domainsRegistrarGetOrder(vercel, {
    orderId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsRegistrarGetOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetOrderRequest](../../models/getorderrequest.md)                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetOrderResponseBody](../../models/getorderresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.VercelBadRequestError | 400                          | application/json             |
| models.VercelForbiddenError  | 401                          | application/json             |
| models.Forbidden             | 403                          | application/json             |
| models.VercelNotFoundError   | 404                          | application/json             |
| models.VercelRateLimitError  | 429                          | application/json             |
| models.Unauthorized          | 500                          | application/json             |
| models.NotAuthorizedForScope | 500                          | application/json             |
| models.InternalServerError   | 500                          | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |