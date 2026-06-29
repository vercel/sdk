# WebAnalytics

## Overview

### Available Operations

* [aggregatePageviews](#aggregatepageviews) - Aggregates page views
* [aggregateEvents](#aggregateevents) - Aggregates custom events
* [countPageviews](#countpageviews) - Counts page views
* [countEvents](#countevents) - Counts custom events

## aggregatePageviews

Counts pageviews on a project, within the requested date range. Results are either aggregated or broken down over time. Results can additionally be broken down by one dimension, and filtered by multiple dimensions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="aggregatePageviews" method="get" path="/v1/query/web-analytics/visits/aggregate" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.webAnalytics.aggregatePageviews({
    projectId: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    by: [
      "day",
      "country",
    ],
    since: "2024-09-01T00:00:00.000Z",
    until: "2024-09-08T00:00:00.000Z",
    limit: 3,
    filter: "requestPath eq '/docs'",
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
import { webAnalyticsAggregatePageviews } from "@vercel/sdk/funcs/webAnalyticsAggregatePageviews.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await webAnalyticsAggregatePageviews(vercel, {
    projectId: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    by: [
      "day",
      "country",
    ],
    since: "2024-09-01T00:00:00.000Z",
    until: "2024-09-08T00:00:00.000Z",
    limit: 3,
    filter: "requestPath eq '/docs'",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webAnalyticsAggregatePageviews failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AggregatePageviewsRequest](../../models/aggregatepageviewsrequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AggregatePageviewsResponseBody](../../models/aggregatepageviewsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## aggregateEvents

Counts custom events on a project, within the requested date range. Results are either aggregated or broken down over time. Results can additionally be broken down by one dimension, and filtered by multiple dimensions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="aggregateEvents" method="get" path="/v1/query/web-analytics/events/aggregate" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.webAnalytics.aggregateEvents({
    projectId: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    by: [
      "day",
      "eventName",
    ],
    since: "2024-09-01T00:00:00.000Z",
    until: "2024-09-08T00:00:00.000Z",
    limit: 3,
    filter: "eventData/plan eq 'pro'",
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
import { webAnalyticsAggregateEvents } from "@vercel/sdk/funcs/webAnalyticsAggregateEvents.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await webAnalyticsAggregateEvents(vercel, {
    projectId: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    by: [
      "day",
      "eventName",
    ],
    since: "2024-09-01T00:00:00.000Z",
    until: "2024-09-08T00:00:00.000Z",
    limit: 3,
    filter: "eventData/plan eq 'pro'",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webAnalyticsAggregateEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AggregateEventsRequest](../../models/aggregateeventsrequest.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AggregateEventsResponseBody](../../models/aggregateeventsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## countPageviews

Counts the number of page views on a project (production only), since Web Analytics was enabled. Results can be filtered on supported dimensions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="countPageviews" method="get" path="/v1/query/web-analytics/visits/count" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.webAnalytics.countPageviews({
    projectId: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    since: "2024-09-01T00:00:00.000Z",
    until: "2024-09-08T00:00:00.000Z",
    filter: "route eq '/home'",
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
import { webAnalyticsCountPageviews } from "@vercel/sdk/funcs/webAnalyticsCountPageviews.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await webAnalyticsCountPageviews(vercel, {
    projectId: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    since: "2024-09-01T00:00:00.000Z",
    until: "2024-09-08T00:00:00.000Z",
    filter: "route eq '/home'",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webAnalyticsCountPageviews failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CountPageviewsRequest](../../models/countpageviewsrequest.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountPageviewsResponseBody](../../models/countpageviewsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## countEvents

Counts the number of custom events on a project (production only), since Web Analytics was enabled. Results can be filtered on supported dimensions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="countEvents" method="get" path="/v1/query/web-analytics/events/count" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.webAnalytics.countEvents({
    projectId: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    since: "2024-09-01T00:00:00.000Z",
    until: "2024-09-08T00:00:00.000Z",
    filter: "eventName eq 'signup'",
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
import { webAnalyticsCountEvents } from "@vercel/sdk/funcs/webAnalyticsCountEvents.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await webAnalyticsCountEvents(vercel, {
    projectId: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    since: "2024-09-01T00:00:00.000Z",
    until: "2024-09-08T00:00:00.000Z",
    filter: "eventName eq 'signup'",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webAnalyticsCountEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CountEventsRequest](../../models/counteventsrequest.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountEventsResponseBody](../../models/counteventsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |