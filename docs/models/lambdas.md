# Lambdas

A partial representation of a Build used by the deployment endpoint.

## Example Usage

```typescript
import { Lambdas } from "@vercel/sdk/models/canceldeploymentservicesdeploymentsfunctions.js";

let value: Lambdas = {
  id: "<id>",
  output: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `readyState`                                                                 | [models.CancelDeploymentReadyState](../models/canceldeploymentreadystate.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `entrypoint`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `readyStateAt`                                                               | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `output`                                                                     | [models.CancelDeploymentOutput](../models/canceldeploymentoutput.md)[]       | :heavy_check_mark:                                                           | N/A                                                                          |