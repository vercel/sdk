# ResponseBodyLambdas

A partial representation of a Build used by the deployment endpoint.

## Example Usage

```typescript
import { ResponseBodyLambdas } from "@vercel/sdk/models/responsebodyorigin.js";

let value: ResponseBodyLambdas = {
  id: "<id>",
  output: [],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `createdAt`                                                                                                                          | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `readyState`                                                                                                                         | [models.GetDeploymentResponseBodyDeploymentsResponseReadyState](../models/getdeploymentresponsebodydeploymentsresponsereadystate.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `entrypoint`                                                                                                                         | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `readyStateAt`                                                                                                                       | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `output`                                                                                                                             | [models.GetDeploymentResponseBodyOutput](../models/getdeploymentresponsebodyoutput.md)[]                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |