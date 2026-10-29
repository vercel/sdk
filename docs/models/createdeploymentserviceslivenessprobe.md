# CreateDeploymentServicesLivenessProbe

A Kubernetes-style HTTP liveness probe.

## Example Usage

```typescript
import { CreateDeploymentServicesLivenessProbe } from "@vercel/sdk/models/createdeploymentresponsebodyduration.js";

let value: CreateDeploymentServicesLivenessProbe = {
  httpGet: {
    port: 2181.43,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `failureThreshold`                                                                     | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `httpGet`                                                                              | [models.CreateDeploymentServicesHttpGet](../models/createdeploymentserviceshttpget.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `initialDelaySeconds`                                                                  | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `periodSeconds`                                                                        | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `successThreshold`                                                                     | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `timeoutSeconds`                                                                       | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |