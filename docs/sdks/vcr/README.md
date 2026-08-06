# Vcr

## Overview

### Available Operations

* [createRepository](#createrepository) - Create a repository
* [listRepositories](#listrepositories) - List repositories
* [getRepository](#getrepository) - Get a repository
* [deleteRepository](#deleterepository) - Delete a repository
* [listRepositoryImages](#listrepositoryimages) - List repository images
* [addRepositoryPermission](#addrepositorypermission) - Add a repository permission
* [removeRepositoryPermission](#removerepositorypermission) - Remove a repository permission
* [listRepositoryPermissions](#listrepositorypermissions) - List repository permissions
* [clearRepositoryPermissions](#clearrepositorypermissions) - Clear all repository permissions
* [listRepositoryTags](#listrepositorytags) - List repository tags
* [getRepositoryTag](#getrepositorytag) - Get a repository tag
* [getRepositoryImage](#getrepositoryimage) - Get a repository image
* [deleteRepositoryImage](#deleterepositoryimage) - Delete a repository image
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

## createRepository

Create a container registry repository for a project.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createRepository" method="post" path="/v1/vcr/repository" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vcr.createRepository({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      projectId: "<id>",
      name: "nginx",
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
import { vcrCreateRepository } from "@vercel/sdk/funcs/vcrCreateRepository.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vcrCreateRepository(vercel, {
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      projectId: "<id>",
      name: "nginx",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrCreateRepository failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateRepositoryRequest](../../models/createrepositoryrequest.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateRepositoryResponseBody](../../models/createrepositoryresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## listRepositories

List container registry repositories for a project.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listRepositories" method="get" path="/v1/vcr/repository" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vcr.listRepositories({
    projectId: "<id>",
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
import { vcrListRepositories } from "@vercel/sdk/funcs/vcrListRepositories.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vcrListRepositories(vercel, {
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrListRepositories failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ListRepositoriesRequest](../../models/listrepositoriesrequest.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VcrRepositoryList](../../models/vcrrepositorylist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## getRepository

Fetch a container registry repository for a project by ID or name.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRepository" method="get" path="/v1/vcr/repository/{idOrName}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vcr.getRepository({
    projectId: "<id>",
    idOrName: "<value>",
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
import { vcrGetRepository } from "@vercel/sdk/funcs/vcrGetRepository.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vcrGetRepository(vercel, {
    projectId: "<id>",
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrGetRepository failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetRepositoryRequest](../../models/getrepositoryrequest.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetRepositoryResponseBody](../../models/getrepositoryresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## deleteRepository

Schedule a repository for deletion. The repository is marked so it disappears from list/get immediately; subscriber-vcr reclaims every image (manifests, blobs, tags and rows) and finally deletes the repository row asynchronously via the VcrRepositoryRemoved event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteRepository" method="delete" path="/v1/vcr/repository/{idOrName}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vcr.deleteRepository({
    projectId: "<id>",
    idOrName: "<value>",
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
import { vcrDeleteRepository } from "@vercel/sdk/funcs/vcrDeleteRepository.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vcrDeleteRepository(vercel, {
    projectId: "<id>",
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrDeleteRepository failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DeleteRepositoryRequest](../../models/deleterepositoryrequest.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## listRepositoryImages

List images for a container registry repository, including their tags.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listRepositoryImages" method="get" path="/v1/vcr/repository/{idOrName}/images" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vcr.listRepositoryImages({
    projectId: "<id>",
    idOrName: "<value>",
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
import { vcrListRepositoryImages } from "@vercel/sdk/funcs/vcrListRepositoryImages.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vcrListRepositoryImages(vercel, {
    projectId: "<id>",
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrListRepositoryImages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ListRepositoryImagesRequest](../../models/listrepositoryimagesrequest.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VcrImageList](../../models/vcrimagelist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## addRepositoryPermission

Grant a team access to a VCR repository. Sharing applies to the whole repository.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addRepositoryPermission" method="post" path="/v1/vcr/repository/{idOrName}/permissions" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vcr.addRepositoryPermission({
    projectId: "<id>",
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      teamId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
      teamSlug: "my-team",
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
import { vcrAddRepositoryPermission } from "@vercel/sdk/funcs/vcrAddRepositoryPermission.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vcrAddRepositoryPermission(vercel, {
    projectId: "<id>",
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      teamId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
      teamSlug: "my-team",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrAddRepositoryPermission failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AddRepositoryPermissionRequest](../../models/addrepositorypermissionrequest.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AddRepositoryPermissionResponseBody](../../models/addrepositorypermissionresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## removeRepositoryPermission

Revoke a team's access to a VCR repository.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeRepositoryPermission" method="delete" path="/v1/vcr/repository/{idOrName}/permissions" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vcr.removeRepositoryPermission({
    projectId: "<id>",
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      teamId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
      teamSlug: "my-team",
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
import { vcrRemoveRepositoryPermission } from "@vercel/sdk/funcs/vcrRemoveRepositoryPermission.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vcrRemoveRepositoryPermission(vercel, {
    projectId: "<id>",
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      teamId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
      teamSlug: "my-team",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrRemoveRepositoryPermission failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.RemoveRepositoryPermissionRequest](../../models/removerepositorypermissionrequest.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## listRepositoryPermissions

List the teams a VCR repository is shared with.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listRepositoryPermissions" method="get" path="/v1/vcr/repository/{idOrName}/permissions" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vcr.listRepositoryPermissions({
    projectId: "<id>",
    idOrName: "<value>",
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
import { vcrListRepositoryPermissions } from "@vercel/sdk/funcs/vcrListRepositoryPermissions.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vcrListRepositoryPermissions(vercel, {
    projectId: "<id>",
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrListRepositoryPermissions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ListRepositoryPermissionsRequest](../../models/listrepositorypermissionsrequest.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VcrRepositoryPermissionList](../../models/vcrrepositorypermissionlist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## clearRepositoryPermissions

Revoke every team's access to a VCR repository. Clearing an unshared repository is a no-op.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="clearRepositoryPermissions" method="delete" path="/v1/vcr/repository/{idOrName}/permissions/all" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vcr.clearRepositoryPermissions({
    projectId: "<id>",
    idOrName: "<value>",
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
import { vcrClearRepositoryPermissions } from "@vercel/sdk/funcs/vcrClearRepositoryPermissions.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vcrClearRepositoryPermissions(vercel, {
    projectId: "<id>",
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrClearRepositoryPermissions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ClearRepositoryPermissionsRequest](../../models/clearrepositorypermissionsrequest.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## listRepositoryTags

List a repository's tags.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listRepositoryTags" method="get" path="/v1/vcr/repository/{idOrName}/tags" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vcr.listRepositoryTags({
    projectId: "<id>",
    idOrName: "<value>",
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
import { vcrListRepositoryTags } from "@vercel/sdk/funcs/vcrListRepositoryTags.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vcrListRepositoryTags(vercel, {
    projectId: "<id>",
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrListRepositoryTags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ListRepositoryTagsRequest](../../models/listrepositorytagsrequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListRepositoryTagsResponseBody](../../models/listrepositorytagsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## getRepositoryTag

Fetch a single tag from a repository, including the backing image's metadata and VHS-readiness status.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRepositoryTag" method="get" path="/v1/vcr/repository/{idOrName}/tags/{tag}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vcr.getRepositoryTag({
    projectId: "<id>",
    idOrName: "<value>",
    tag: "<value>",
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
import { vcrGetRepositoryTag } from "@vercel/sdk/funcs/vcrGetRepositoryTag.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vcrGetRepositoryTag(vercel, {
    projectId: "<id>",
    idOrName: "<value>",
    tag: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrGetRepositoryTag failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetRepositoryTagRequest](../../models/getrepositorytagrequest.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetRepositoryTagResponseBody](../../models/getrepositorytagresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## getRepositoryImage

Fetch an individual image from a repository, including its tags and Dockerfile history entries with discriminated layer details for UI rendering. The image may be addressed by its internal id (`image_...`) or by its manifest digest (`sha256:...`).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRepositoryImage" method="get" path="/v1/vcr/repository/{idOrName}/images/{imageIdOrDigest}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vcr.getRepositoryImage({
    projectId: "<id>",
    idOrName: "<value>",
    imageIdOrDigest: "<value>",
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
import { vcrGetRepositoryImage } from "@vercel/sdk/funcs/vcrGetRepositoryImage.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vcrGetRepositoryImage(vercel, {
    projectId: "<id>",
    idOrName: "<value>",
    imageIdOrDigest: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrGetRepositoryImage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetRepositoryImageRequest](../../models/getrepositoryimagerequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetRepositoryImageResponseBody](../../models/getrepositoryimageresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## deleteRepositoryImage

Schedule an image for deletion. The image is marked so it disappears from list/get immediately; subscriber-vcr reclaims the manifest, blobs, tags and row asynchronously via the VcrManifestRemoved event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteRepositoryImage" method="delete" path="/v1/vcr/repository/{idOrName}/images/{imageId}" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.vcr.deleteRepositoryImage({
    projectId: "<id>",
    idOrName: "<value>",
    imageId: "<id>",
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
import { vcrDeleteRepositoryImage } from "@vercel/sdk/funcs/vcrDeleteRepositoryImage.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vcrDeleteRepositoryImage(vercel, {
    projectId: "<id>",
    idOrName: "<value>",
    imageId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrDeleteRepositoryImage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DeleteRepositoryImageRequest](../../models/deleterepositoryimagerequest.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

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
  const result = await vercel.vcr.getRoot();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { vcrGetRoot } from "@vercel/sdk/funcs/vcrGetRoot.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await vcrGetRoot(vercel);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrGetRoot failed:", res.error);
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
  const result = await vercel.vcr.headByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest({
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
import { vcrHeadByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest } from "@vercel/sdk/funcs/vcrHeadByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await vcrHeadByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    digest: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrHeadByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest failed:", res.error);
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
  await vercel.vcr.getByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest({
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
import { vcrGetByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest } from "@vercel/sdk/funcs/vcrGetByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await vcrGetByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    digest: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("vcrGetByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest failed:", res.error);
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
  await vercel.vcr.deleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest({
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
import { vcrDeleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest } from "@vercel/sdk/funcs/vcrDeleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await vcrDeleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    digest: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("vcrDeleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigest failed:", res.error);
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
  const result = await vercel.vcr.getByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid({
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
import { vcrGetByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid } from "@vercel/sdk/funcs/vcrGetByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await vcrGetByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    uuid: "0123456789abcdef0123456789abcdef01234567",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrGetByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid failed:", res.error);
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
  const result = await vercel.vcr.deleteByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid({
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
import { vcrDeleteByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid } from "@vercel/sdk/funcs/vcrDeleteByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await vcrDeleteByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    uuid: "0123456789abcdef0123456789abcdef01234567",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrDeleteByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid failed:", res.error);
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
  const result = await vercel.vcr.updateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid({
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
import { vcrUpdateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid } from "@vercel/sdk/funcs/vcrUpdateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await vcrUpdateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    uuid: "0123456789abcdef0123456789abcdef01234567",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrUpdateByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid failed:", res.error);
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
  const result = await vercel.vcr.replaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid({
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
import { vcrReplaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid } from "@vercel/sdk/funcs/vcrReplaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await vcrReplaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid(vercel, {
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
    console.log("vcrReplaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuid failed:", res.error);
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
  const result = await vercel.vcr.createByTeamSlugByProjectSlugByRepositoryNameBlobsUploads({
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
import { vcrCreateByTeamSlugByProjectSlugByRepositoryNameBlobsUploads } from "@vercel/sdk/funcs/vcrCreateByTeamSlugByProjectSlugByRepositoryNameBlobsUploads.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await vcrCreateByTeamSlugByProjectSlugByRepositoryNameBlobsUploads(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrCreateByTeamSlugByProjectSlugByRepositoryNameBlobsUploads failed:", res.error);
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
  const result = await vercel.vcr.replaceByTeamSlugByProjectSlugByRepositoryNameManifestsByReference({
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
import { vcrReplaceByTeamSlugByProjectSlugByRepositoryNameManifestsByReference } from "@vercel/sdk/funcs/vcrReplaceByTeamSlugByProjectSlugByRepositoryNameManifestsByReference.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await vcrReplaceByTeamSlugByProjectSlugByRepositoryNameManifestsByReference(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    reference: "latest",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrReplaceByTeamSlugByProjectSlugByRepositoryNameManifestsByReference failed:", res.error);
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
  const result = await vercel.vcr.headByTeamSlugByProjectSlugByRepositoryNameManifestsByReference({
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
import { vcrHeadByTeamSlugByProjectSlugByRepositoryNameManifestsByReference } from "@vercel/sdk/funcs/vcrHeadByTeamSlugByProjectSlugByRepositoryNameManifestsByReference.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await vcrHeadByTeamSlugByProjectSlugByRepositoryNameManifestsByReference(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    reference: "latest",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrHeadByTeamSlugByProjectSlugByRepositoryNameManifestsByReference failed:", res.error);
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
  await vercel.vcr.getByTeamSlugByProjectSlugByRepositoryNameManifestsByReference({
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
import { vcrGetByTeamSlugByProjectSlugByRepositoryNameManifestsByReference } from "@vercel/sdk/funcs/vcrGetByTeamSlugByProjectSlugByRepositoryNameManifestsByReference.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await vcrGetByTeamSlugByProjectSlugByRepositoryNameManifestsByReference(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    reference: "latest",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("vcrGetByTeamSlugByProjectSlugByRepositoryNameManifestsByReference failed:", res.error);
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
  const result = await vercel.vcr.deleteByTeamSlugByProjectSlugByRepositoryNameManifestsByReference({
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
import { vcrDeleteByTeamSlugByProjectSlugByRepositoryNameManifestsByReference } from "@vercel/sdk/funcs/vcrDeleteByTeamSlugByProjectSlugByRepositoryNameManifestsByReference.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await vcrDeleteByTeamSlugByProjectSlugByRepositoryNameManifestsByReference(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    reference: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrDeleteByTeamSlugByProjectSlugByRepositoryNameManifestsByReference failed:", res.error);
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
  const result = await vercel.vcr.getByTeamSlugByProjectSlugByRepositoryNameTagsList({
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
import { vcrGetByTeamSlugByProjectSlugByRepositoryNameTagsList } from "@vercel/sdk/funcs/vcrGetByTeamSlugByProjectSlugByRepositoryNameTagsList.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await vcrGetByTeamSlugByProjectSlugByRepositoryNameTagsList(vercel, {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vcrGetByTeamSlugByProjectSlugByRepositoryNameTagsList failed:", res.error);
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