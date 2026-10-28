# CancelDeploymentServicesLivenessProbe

A Kubernetes-style HTTP liveness probe.

## Example Usage

```typescript
import { CancelDeploymentServicesLivenessProbe } from "@vercel/sdk/models/servicesdestination.js";

let value: CancelDeploymentServicesLivenessProbe = {
  httpGet: {
    port: 1184.03,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `failureThreshold`                                                                     | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `httpGet`                                                                              | [models.CancelDeploymentServicesHttpGet](../models/canceldeploymentserviceshttpget.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `initialDelaySeconds`                                                                  | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `periodSeconds`                                                                        | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `successThreshold`                                                                     | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `timeoutSeconds`                                                                       | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |