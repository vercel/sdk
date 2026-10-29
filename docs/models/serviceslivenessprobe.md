# ServicesLivenessProbe

A Kubernetes-style HTTP liveness probe.

## Example Usage

```typescript
import { ServicesLivenessProbe } from "@vercel/sdk/models/canceldeploymentresponsebody.js";

let value: ServicesLivenessProbe = {
  httpGet: {
    port: 8418.75,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `failureThreshold`                                     | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `httpGet`                                              | [models.ServicesHttpGet](../models/serviceshttpget.md) | :heavy_check_mark:                                     | N/A                                                    |
| `initialDelaySeconds`                                  | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `periodSeconds`                                        | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `successThreshold`                                     | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `timeoutSeconds`                                       | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |