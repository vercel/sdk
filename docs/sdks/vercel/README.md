# Vercel SDK

## Overview

Vercel REST API & SDK: The [`@vercel/sdk`](https://www.npmjs.com/package/@vercel/sdk) is a type-safe Typescript SDK that allows you to access the resources and methods of the Vercel REST API. Learn how to [install it](https://vercel.com/docs/rest-api/sdk#installing-vercel-sdk) and [authenticate](https://vercel.com/docs/rest-api/sdk#authentication) with a Vercel access token.

### Available Operations

* [replaceDomainsByDomainRecords](#replacedomainsbydomainrecords)
* [getDomainsRecordsByRecordId](#getdomainsrecordsbyrecordid)
* [createApiKeys](#createapikeys)
* [createObservabilityQuery](#createobservabilityquery)
* [getObservabilitySchema](#getobservabilityschema)
* [getObservabilitySchemaByMetricId](#getobservabilityschemabymetricid)
* [createSpeedInsightsToggle](#createspeedinsightstoggle)
* [getStorageStoresById](#getstoragestoresbyid)
* [createStorageStoresBlob](#createstoragestoresblob)
* [deleteStorageStoresBlobById](#deletestoragestoresblobbyid)
* [getRoot](#getroot) - GET /v2/ Docker Registry v2 version check. Returns a 401 challenge when no credentials are provided, prompting the Docker client to send auth. With valid credentials, returns 200 so the client can proceed.
* [headByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest](#headbyteamslugbyprojectslugbyrepositorynameblobsbydigest) - HEAD /v2/:teamSlug/:projectSlug/:repositoryName/blobs/:digest Check whether a blob exists. Used by the Docker client before pushing a layer to avoid re-uploading content that already exists.
* [getByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest](#getbyteamslugbyprojectslugbyrepositorynameblobsbydigest) - GET /v2/:teamSlug/:projectSlug/:repositoryName/blobs/:digest Fetch a blob by digest.
* [deleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest](#deletebyteamslugbyprojectslugbyrepositorynameblobsbydigest) - DELETE /v2/:teamSlug/:projectSlug/:repositoryName/blobs/:digest Blob deletion is intentionally not supported. Matches the behaviour of most public registries.
* [getByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid](#getbyteamslugbyprojectslugbyrepositorynameblobsuploadsbyuuid) - GET /v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/:uuid Query the status of an in-progress blob upload. Used by clients to resume a partial upload after an interruption.
* [deleteByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid](#deletebyteamslugbyprojectslugbyrepositorynameblobsuploadsbyuuid) - DELETE /v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/:uuid Cancel an in-flight blob upload. Aborts the underlying S3 multipart upload (if one was started) and discards the session.
* [updateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid](#updatebyteamslugbyprojectslugbyrepositorynameblobsuploadsbyuuid) - PATCH /v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/:uuid Upload a chunk of blob data. The request body is streamed directly to S3 as a multipart upload part while hashing incrementally. The client may call this multiple times for chunked uploads.
* [replaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid](#replacebyteamslugbyprojectslugbyrepositorynameblobsuploadsbyuuid) - PUT /v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/:uuid?digest=<digest> Complete the blob upload. This may include a final chunk of data in the request body (monolithic upload) or just finalize a previous chunked upload.
* [createByTeamSlugByProjectSlugByRepositoryNameBlobsUploads](#createbyteamslugbyprojectslugbyrepositorynameblobsuploads) - POST /v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/[?mount=<digest>&from=<repo>] Initiate a blob upload. Returns a UUID in the Location header that the client uses for subsequent PATCH (chunk) and PUT (complete) requests.
* [replaceByTeamSlugByProjectSlugByRepositoryNameManifestsByReference](#replacebyteamslugbyprojectslugbyrepositorynamemanifestsbyreference) - PUT /v2/:teamSlug/:projectSlug/:repositoryName/manifests/:reference Upload an image manifest. The digest is computed from the body and returned in the Docker-Content-Digest header.
* [headByTeamSlugByProjectSlugByRepositoryNameManifestsByReference](#headbyteamslugbyprojectslugbyrepositorynamemanifestsbyreference) - HEAD /v2/:teamSlug/:projectSlug/:repositoryName/manifests/:reference Check whether a manifest exists. Used by Docker client during push to determine if a manifest (or config blob referenced by digest) is already present.
* [getByTeamSlugByProjectSlugByRepositoryNameManifestsByReference](#getbyteamslugbyprojectslugbyrepositorynamemanifestsbyreference) - GET /v2/:teamSlug/:projectSlug/:repositoryName/manifests/:reference Fetch a manifest by tag or digest.
* [deleteByTeamSlugByProjectSlugByRepositoryNameManifestsByReference](#deletebyteamslugbyprojectslugbyrepositorynamemanifestsbyreference) - DELETE /v2/:teamSlug/:projectSlug/:repositoryName/manifests/:reference Reference must be a digest.
* [getByTeamSlugByProjectSlugByRepositoryNameTagsList](#getbyteamslugbyprojectslugbyrepositorynametagslist) - GET /v2/:teamSlug/:projectSlug/:repositoryName/tags/list List the tags in a repository.
* [createWebInsightsToggle](#createwebinsightstoggle)

## replaceDomainsByDomainRecords

### Example Usage

<!-- UsageSnippet language="typescript" operationID="replaceDomainsByDomainRecords" method="put" path="/domains/{domain}/records" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.replaceDomainsByDomainRecords({
    domain: "example.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { replaceDomainsByDomainRecords } from "@vercel/sdk/funcs/replaceDomainsByDomainRecords.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await replaceDomainsByDomainRecords(vercel, {
    domain: "example.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("replaceDomainsByDomainRecords failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ReplaceDomainsByDomainRecordsRequest](../../models/replacedomainsbydomainrecordsrequest.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ReplaceDomainsByDomainRecordsResponseBody](../../models/replacedomainsbydomainrecordsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## getDomainsRecordsByRecordId

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDomainsRecordsByRecordId" method="get" path="/domains/records/{recordId}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.getDomainsRecordsByRecordId({
    recordId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { getDomainsRecordsByRecordId } from "@vercel/sdk/funcs/getDomainsRecordsByRecordId.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await getDomainsRecordsByRecordId(vercel, {
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("getDomainsRecordsByRecordId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetDomainsRecordsByRecordIdRequest](../../models/getdomainsrecordsbyrecordidrequest.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetDomainsRecordsByRecordIdResponseBody](../../models/getdomainsrecordsbyrecordidresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## createApiKeys

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createApiKeys" method="post" path="/api-keys" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.createApiKeys({
    purpose: "<value>",
    projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    name: "API Key for App 123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { createApiKeys } from "@vercel/sdk/funcs/createApiKeys.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await createApiKeys(vercel, {
    purpose: "<value>",
    projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    name: "API Key for App 123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createApiKeys failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateApiKeysRequestBody](../../models/createapikeysrequestbody.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateApiKeysResponseBody](../../models/createapikeysresponsebody.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| models.CreateApiKeysResponseResponseBody    | 401                                         | application/json                            |
| models.CreateApiKeysResponse403ResponseBody | 403                                         | application/json                            |
| models.CreateApiKeysResponse429ResponseBody | 429                                         | application/json                            |
| models.CreateApiKeysResponse500ResponseBody | 500                                         | application/json                            |
| models.SDKError                             | 4XX, 5XX                                    | \*/\*                                       |

## createObservabilityQuery

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createObservabilityQuery" method="post" path="/v2/observability/query" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.createObservabilityQuery();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { createObservabilityQuery } from "@vercel/sdk/funcs/createObservabilityQuery.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await createObservabilityQuery(vercel);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createObservabilityQuery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateObservabilityQueryRequestBody](../../models/createobservabilityqueryrequestbody.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateObservabilityQueryResponseBody](../../models/createobservabilityqueryresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## getObservabilitySchema

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getObservabilitySchema" method="get" path="/v2/observability/schema" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.getObservabilitySchema();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { getObservabilitySchema } from "@vercel/sdk/funcs/getObservabilitySchema.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await getObservabilitySchema(vercel);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("getObservabilitySchema failed:", res.error);
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

**Promise\<[models.GetObservabilitySchemaResponseBody](../../models/getobservabilityschemaresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## getObservabilitySchemaByMetricId

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getObservabilitySchemaByMetricId" method="get" path="/v2/observability/schema/{metricId}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.getObservabilitySchemaByMetricId({
    metricId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { getObservabilitySchemaByMetricId } from "@vercel/sdk/funcs/getObservabilitySchemaByMetricId.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await getObservabilitySchemaByMetricId(vercel, {
    metricId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("getObservabilitySchemaByMetricId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetObservabilitySchemaByMetricIdRequest](../../models/getobservabilityschemabymetricidrequest.md)                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ResponseBody[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## createSpeedInsightsToggle

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createSpeedInsightsToggle" method="post" path="/speed-insights/toggle" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.createSpeedInsightsToggle({
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
import { createSpeedInsightsToggle } from "@vercel/sdk/funcs/createSpeedInsightsToggle.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await createSpeedInsightsToggle(vercel, {
    projectId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createSpeedInsightsToggle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateSpeedInsightsToggleRequest](../../models/createspeedinsightstogglerequest.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateSpeedInsightsToggleResponseBody](../../models/createspeedinsightstoggleresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## getStorageStoresById

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getStorageStoresById" method="get" path="/storage/stores/{id}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.getStorageStoresById({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { getStorageStoresById } from "@vercel/sdk/funcs/getStorageStoresById.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await getStorageStoresById(vercel, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("getStorageStoresById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetStorageStoresByIdRequest](../../models/getstoragestoresbyidrequest.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetStorageStoresByIdResponseBody](../../models/getstoragestoresbyidresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## createStorageStoresBlob

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createStorageStoresBlob" method="post" path="/storage/stores/blob" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.createStorageStoresBlob();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { createStorageStoresBlob } from "@vercel/sdk/funcs/createStorageStoresBlob.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await createStorageStoresBlob(vercel);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createStorageStoresBlob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateStorageStoresBlobRequestBody](../../models/createstoragestoresblobrequestbody.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateStorageStoresBlobResponseBody](../../models/createstoragestoresblobresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## deleteStorageStoresBlobById

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteStorageStoresBlobById" method="delete" path="/storage/stores/blob/{id}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.deleteStorageStoresBlobById({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { deleteStorageStoresBlobById } from "@vercel/sdk/funcs/deleteStorageStoresBlobById.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await deleteStorageStoresBlobById(vercel, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deleteStorageStoresBlobById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DeleteStorageStoresBlobByIdRequest](../../models/deletestoragestoresblobbyidrequest.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DeleteStorageStoresBlobByIdResponseBody](../../models/deletestoragestoresblobbyidresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## getRoot

GET /v2/ Docker Registry v2 version check. Returns a 401 challenge when no credentials are provided, prompting the Docker client to send auth. With valid credentials, returns 200 so the client can proceed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRoot" method="get" path="/v2/" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.getRoot();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { getRoot } from "@vercel/sdk/funcs/getRoot.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await getRoot(vercel);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("getRoot failed:", res.error);
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

**Promise\<[models.GetRootResponseBody](../../models/getrootresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## headByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest

HEAD /v2/:teamSlug/:projectSlug/:repositoryName/blobs/:digest Check whether a blob exists. Used by the Docker client before pushing a layer to avoid re-uploading content that already exists.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="headByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest" method="head" path="/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/{digest}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.headByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest({
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    digest: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { headByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest } from "@vercel/sdk/funcs/headByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await headByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    digest: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("headByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.HeadByTeamSlugByProjectSlugByRepositoryNameBlobsByDigestRequest](../../models/headbyteamslugbyprojectslugbyrepositorynameblobsbydigestrequest.md)                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## getByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest

GET /v2/:teamSlug/:projectSlug/:repositoryName/blobs/:digest Fetch a blob by digest.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest" method="get" path="/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/{digest}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  await vercel.getByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest({
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    digest: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { getByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest } from "@vercel/sdk/funcs/getByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await getByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    digest: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("getByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetByTeamSlugByProjectSlugByRepositoryNameBlobsByDigestRequest](../../models/getbyteamslugbyprojectslugbyrepositorynameblobsbydigestrequest.md)                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## deleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest

DELETE /v2/:teamSlug/:projectSlug/:repositoryName/blobs/:digest Blob deletion is intentionally not supported. Matches the behaviour of most public registries.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest" method="delete" path="/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/{digest}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  await vercel.deleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest({
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    digest: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { deleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest } from "@vercel/sdk/funcs/deleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await deleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    digest: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("deleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DeleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigestRequest](../../models/deletebyteamslugbyprojectslugbyrepositorynameblobsbydigestrequest.md)                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## getByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid

GET /v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/:uuid Query the status of an in-progress blob upload. Used by clients to resume a partial upload after an interruption.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid" method="get" path="/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.getByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid({
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    uuid: "0123456789abcdef0123456789abcdef01234567",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { getByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid } from "@vercel/sdk/funcs/getByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await getByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    uuid: "0123456789abcdef0123456789abcdef01234567",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("getByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuidRequest](../../models/getbyteamslugbyprojectslugbyrepositorynameblobsuploadsbyuuidrequest.md)              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## deleteByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid

DELETE /v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/:uuid Cancel an in-flight blob upload. Aborts the underlying S3 multipart upload (if one was started) and discards the session.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid" method="delete" path="/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.deleteByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid({
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    uuid: "0123456789abcdef0123456789abcdef01234567",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { deleteByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid } from "@vercel/sdk/funcs/deleteByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await deleteByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    uuid: "0123456789abcdef0123456789abcdef01234567",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deleteByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DeleteByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuidRequest](../../models/deletebyteamslugbyprojectslugbyrepositorynameblobsuploadsbyuuidrequest.md)        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## updateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid

PATCH /v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/:uuid Upload a chunk of blob data. The request body is streamed directly to S3 as a multipart upload part while hashing incrementally. The client may call this multiple times for chunked uploads.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid" method="patch" path="/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.updateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid({
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    uuid: "0123456789abcdef0123456789abcdef01234567",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { updateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid } from "@vercel/sdk/funcs/updateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await updateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    uuid: "0123456789abcdef0123456789abcdef01234567",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("updateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.UpdateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuidRequest](../../models/updatebyteamslugbyprojectslugbyrepositorynameblobsuploadsbyuuidrequest.md)        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## replaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid

PUT /v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/:uuid?digest=<digest> Complete the blob upload. This may include a final chunk of data in the request body (monolithic upload) or just finalize a previous chunked upload.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="replaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid" method="put" path="/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.replaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid({
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    uuid: "0123456789abcdef0123456789abcdef01234567",
    digest: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { replaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid } from "@vercel/sdk/funcs/replaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await replaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    uuid: "0123456789abcdef0123456789abcdef01234567",
    digest: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("replaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ReplaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuidRequest](../../models/replacebyteamslugbyprojectslugbyrepositorynameblobsuploadsbyuuidrequest.md)      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## createByTeamSlugByProjectSlugByRepositoryNameBlobsUploads

POST /v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/[?mount=<digest>&from=<repo>] Initiate a blob upload. Returns a UUID in the Location header that the client uses for subsequent PATCH (chunk) and PUT (complete) requests.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createByTeamSlugByProjectSlugByRepositoryNameBlobsUploads" method="post" path="/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.createByTeamSlugByProjectSlugByRepositoryNameBlobsUploads({
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { createByTeamSlugByProjectSlugByRepositoryNameBlobsUploads } from "@vercel/sdk/funcs/createByTeamSlugByProjectSlugByRepositoryNameBlobsUploads.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await createByTeamSlugByProjectSlugByRepositoryNameBlobsUploads(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createByTeamSlugByProjectSlugByRepositoryNameBlobsUploads failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsRequest](../../models/createbyteamslugbyprojectslugbyrepositorynameblobsuploadsrequest.md)                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## replaceByTeamSlugByProjectSlugByRepositoryNameManifestsByReference

PUT /v2/:teamSlug/:projectSlug/:repositoryName/manifests/:reference Upload an image manifest. The digest is computed from the body and returned in the Docker-Content-Digest header.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="replaceByTeamSlugByProjectSlugByRepositoryNameManifestsByReference" method="put" path="/v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.replaceByTeamSlugByProjectSlugByRepositoryNameManifestsByReference({
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    reference: "latest",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { replaceByTeamSlugByProjectSlugByRepositoryNameManifestsByReference } from "@vercel/sdk/funcs/replaceByTeamSlugByProjectSlugByRepositoryNameManifestsByReference.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await replaceByTeamSlugByProjectSlugByRepositoryNameManifestsByReference(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    reference: "latest",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("replaceByTeamSlugByProjectSlugByRepositoryNameManifestsByReference failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ReplaceByTeamSlugByProjectSlugByRepositoryNameManifestsByReferenceRequest](../../models/replacebyteamslugbyprojectslugbyrepositorynamemanifestsbyreferencerequest.md)  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## headByTeamSlugByProjectSlugByRepositoryNameManifestsByReference

HEAD /v2/:teamSlug/:projectSlug/:repositoryName/manifests/:reference Check whether a manifest exists. Used by Docker client during push to determine if a manifest (or config blob referenced by digest) is already present.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="headByTeamSlugByProjectSlugByRepositoryNameManifestsByReference" method="head" path="/v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.headByTeamSlugByProjectSlugByRepositoryNameManifestsByReference({
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    reference: "latest",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { headByTeamSlugByProjectSlugByRepositoryNameManifestsByReference } from "@vercel/sdk/funcs/headByTeamSlugByProjectSlugByRepositoryNameManifestsByReference.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await headByTeamSlugByProjectSlugByRepositoryNameManifestsByReference(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    reference: "latest",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("headByTeamSlugByProjectSlugByRepositoryNameManifestsByReference failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.HeadByTeamSlugByProjectSlugByRepositoryNameManifestsByReferenceRequest](../../models/headbyteamslugbyprojectslugbyrepositorynamemanifestsbyreferencerequest.md)        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## getByTeamSlugByProjectSlugByRepositoryNameManifestsByReference

GET /v2/:teamSlug/:projectSlug/:repositoryName/manifests/:reference Fetch a manifest by tag or digest.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getByTeamSlugByProjectSlugByRepositoryNameManifestsByReference" method="get" path="/v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  await vercel.getByTeamSlugByProjectSlugByRepositoryNameManifestsByReference({
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    reference: "latest",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { getByTeamSlugByProjectSlugByRepositoryNameManifestsByReference } from "@vercel/sdk/funcs/getByTeamSlugByProjectSlugByRepositoryNameManifestsByReference.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await getByTeamSlugByProjectSlugByRepositoryNameManifestsByReference(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    reference: "latest",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("getByTeamSlugByProjectSlugByRepositoryNameManifestsByReference failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetByTeamSlugByProjectSlugByRepositoryNameManifestsByReferenceRequest](../../models/getbyteamslugbyprojectslugbyrepositorynamemanifestsbyreferencerequest.md)          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## deleteByTeamSlugByProjectSlugByRepositoryNameManifestsByReference

DELETE /v2/:teamSlug/:projectSlug/:repositoryName/manifests/:reference Reference must be a digest.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteByTeamSlugByProjectSlugByRepositoryNameManifestsByReference" method="delete" path="/v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.deleteByTeamSlugByProjectSlugByRepositoryNameManifestsByReference({
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    reference: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { deleteByTeamSlugByProjectSlugByRepositoryNameManifestsByReference } from "@vercel/sdk/funcs/deleteByTeamSlugByProjectSlugByRepositoryNameManifestsByReference.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await deleteByTeamSlugByProjectSlugByRepositoryNameManifestsByReference(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    reference: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deleteByTeamSlugByProjectSlugByRepositoryNameManifestsByReference failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DeleteByTeamSlugByProjectSlugByRepositoryNameManifestsByReferenceRequest](../../models/deletebyteamslugbyprojectslugbyrepositorynamemanifestsbyreferencerequest.md)    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## getByTeamSlugByProjectSlugByRepositoryNameTagsList

GET /v2/:teamSlug/:projectSlug/:repositoryName/tags/list List the tags in a repository.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getByTeamSlugByProjectSlugByRepositoryNameTagsList" method="get" path="/v2/{teamSlug}/{projectSlug}/{repositoryName}/tags/list" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.getByTeamSlugByProjectSlugByRepositoryNameTagsList({
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { getByTeamSlugByProjectSlugByRepositoryNameTagsList } from "@vercel/sdk/funcs/getByTeamSlugByProjectSlugByRepositoryNameTagsList.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await getByTeamSlugByProjectSlugByRepositoryNameTagsList(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("getByTeamSlugByProjectSlugByRepositoryNameTagsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetByTeamSlugByProjectSlugByRepositoryNameTagsListRequest](../../models/getbyteamslugbyprojectslugbyrepositorynametagslistrequest.md)                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetByTeamSlugByProjectSlugByRepositoryNameTagsListResponseBody](../../models/getbyteamslugbyprojectslugbyrepositorynametagslistresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## createWebInsightsToggle

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createWebInsightsToggle" method="post" path="/web/insights/toggle" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.createWebInsightsToggle({
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
import { createWebInsightsToggle } from "@vercel/sdk/funcs/createWebInsightsToggle.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await createWebInsightsToggle(vercel, {
    projectId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createWebInsightsToggle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateWebInsightsToggleRequest](../../models/createwebinsightstogglerequest.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateWebInsightsToggleResponseBody](../../models/createwebinsightstoggleresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |