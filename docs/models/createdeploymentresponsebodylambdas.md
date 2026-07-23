# CreateDeploymentResponseBodyLambdas

A partial representation of a Build used by the deployment endpoint.

## Example Usage

```typescript
import { CreateDeploymentResponseBodyLambdas } from "@vercel/sdk/models/createdeploymentvaluedeploymentsresponse2.js";

let value: CreateDeploymentResponseBodyLambdas = {
  id: "<id>",
  output: [
    {
      path: "/selinux",
      functionName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `createdAt`                                                                                                                                | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `readyState`                                                                                                                               | [models.CreateDeploymentResponseBodyDeploymentsResponseReadyState](../models/createdeploymentresponsebodydeploymentsresponsereadystate.md) | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `entrypoint`                                                                                                                               | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `readyStateAt`                                                                                                                             | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `output`                                                                                                                                   | [models.CreateDeploymentResponseBodyOutput](../models/createdeploymentresponsebodyoutput.md)[]                                             | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |