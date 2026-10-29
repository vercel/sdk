# CreateDeploymentServicesDeploymentsLivenessProbe

A Kubernetes-style HTTP liveness probe.

## Example Usage

```typescript
import { CreateDeploymentServicesDeploymentsLivenessProbe } from "@vercel/sdk/models/createdeploymentmissingdeploymentsresponse200type.js";

let value: CreateDeploymentServicesDeploymentsLivenessProbe = {
  httpGet: {
    port: 7446.99,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `failureThreshold`                                                                                           | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `httpGet`                                                                                                    | [models.CreateDeploymentServicesDeploymentsHttpGet](../models/createdeploymentservicesdeploymentshttpget.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `initialDelaySeconds`                                                                                        | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `periodSeconds`                                                                                              | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `successThreshold`                                                                                           | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `timeoutSeconds`                                                                                             | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |