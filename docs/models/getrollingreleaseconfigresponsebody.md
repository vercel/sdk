# GetRollingReleaseConfigResponseBody

## Example Usage

```typescript
import { GetRollingReleaseConfigResponseBody } from "@vercel/sdk/models/getrollingreleaseconfigop.js";

let value: GetRollingReleaseConfigResponseBody = {
  rollingRelease: {
    canaryResponseHeader: false,
    gate: {
      action: "pause",
      checks: [],
      dryRun: true,
      enabled: false,
      failureThreshold: 3,
      windowSize: 5,
    },
    stages: [
      {
        duration: 600,
        linearShift: false,
        requireApproval: false,
        targetPercentage: 25,
      },
    ],
    target: "production",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `rollingRelease`                                                                                        | [models.GetRollingReleaseConfigRollingRelease](../models/getrollingreleaseconfigrollingrelease.md)      | :heavy_check_mark:                                                                                      | Project-level rolling release configuration that defines how deployments should be gradually rolled out |