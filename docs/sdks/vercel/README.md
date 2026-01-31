# Vercel SDK

## Overview

Vercel REST API & SDK: The [`@vercel/sdk`](https://www.npmjs.com/package/@vercel/sdk) is a type-safe Typescript SDK that allows you to access the resources and methods of the Vercel REST API. Learn how to [install it](https://vercel.com/docs/rest-api/sdk#installing-vercel-sdk) and [authenticate](https://vercel.com/docs/rest-api/sdk#authentication) with a Vercel access token.

### Available Operations

* [patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescription](#patchv1projectsprojectidrollbackdeploymentidupdatedescription) - Updates the description for a rollback

## patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescription

Updates the reason for a rollback, without changing the rollback status itself.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v1/projects/{projectId}/rollback/{deploymentId}/update-description" method="patch" path="/v1/projects/{projectId}/rollback/{deploymentId}/update-description" -->
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  await vercel.patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescription({
    projectId: "<id>",
    deploymentId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "@vercel/sdk/core.js";
import { patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescription } from "@vercel/sdk/funcs/patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescription.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore();

async function run() {
  const res = await patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescription(vercel, {
    projectId: "<id>",
    deploymentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescription failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequest](../../models/patchv1projectsprojectidrollbackdeploymentidupdatedescriptionrequest.md)            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |