# LivenessProbe

## Example Usage

```typescript
import { LivenessProbe } from "@vercel/sdk/models/getprojectboxesop.js";

let value: LivenessProbe = {
  httpGet: {
    path: "/etc/periodic",
    port: 1816.88,
    scheme: "HTTP",
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `failureThreshold`                     | *number*                               | :heavy_minus_sign:                     | N/A                                    |
| `httpGet`                              | [models.HttpGet](../models/httpget.md) | :heavy_check_mark:                     | N/A                                    |
| `initialDelaySeconds`                  | *number*                               | :heavy_minus_sign:                     | N/A                                    |
| `periodSeconds`                        | *number*                               | :heavy_minus_sign:                     | N/A                                    |
| `successThreshold`                     | *number*                               | :heavy_minus_sign:                     | N/A                                    |
| `timeoutSeconds`                       | *number*                               | :heavy_minus_sign:                     | N/A                                    |