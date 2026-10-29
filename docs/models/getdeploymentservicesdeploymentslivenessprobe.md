# GetDeploymentServicesDeploymentsLivenessProbe

A Kubernetes-style HTTP liveness probe.

## Example Usage

```typescript
import { GetDeploymentServicesDeploymentsLivenessProbe } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: GetDeploymentServicesDeploymentsLivenessProbe = {
  httpGet: {
    port: 2303.87,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `failureThreshold`                                                                                     | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `httpGet`                                                                                              | [models.GetDeploymentServicesDeploymentsHttpGet](../models/getdeploymentservicesdeploymentshttpget.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `initialDelaySeconds`                                                                                  | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `periodSeconds`                                                                                        | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `successThreshold`                                                                                     | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `timeoutSeconds`                                                                                       | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |