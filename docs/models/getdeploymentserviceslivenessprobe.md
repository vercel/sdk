# GetDeploymentServicesLivenessProbe

A Kubernetes-style HTTP liveness probe.

## Example Usage

```typescript
import { GetDeploymentServicesLivenessProbe } from "@vercel/sdk/models/getdeploymentservicesdeploymentsbindings.js";

let value: GetDeploymentServicesLivenessProbe = {
  httpGet: {
    port: 5552.55,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `failureThreshold`                                                               | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `httpGet`                                                                        | [models.GetDeploymentServicesHttpGet](../models/getdeploymentserviceshttpget.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `initialDelaySeconds`                                                            | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `periodSeconds`                                                                  | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `successThreshold`                                                               | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `timeoutSeconds`                                                                 | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |