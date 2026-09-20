# GetDeploymentResponseBodyLambdas

A partial representation of a Build used by the deployment endpoint.

## Example Usage

```typescript
import { GetDeploymentResponseBodyLambdas } from "@vercel/sdk/models/getdeploymentmaxdurationdeployments2.js";

let value: GetDeploymentResponseBodyLambdas = {
  id: "<id>",
  output: [
    {
      functionName: "<value>",
      path: "/usr/libdata",
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                                          | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `entrypoint`                                                                                                                         | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `readyState`                                                                                                                         | [models.GetDeploymentResponseBodyDeploymentsResponseReadyState](../models/getdeploymentresponsebodydeploymentsresponsereadystate.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `readyStateAt`                                                                                                                       | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `output`                                                                                                                             | [models.ResponseBodyOutput](../models/responsebodyoutput.md)[]                                                                       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |