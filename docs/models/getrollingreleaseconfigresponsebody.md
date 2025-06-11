# GetRollingReleaseConfigResponseBody

## Example Usage

```typescript
import { GetRollingReleaseConfigResponseBody } from "@vercel/sdk/models/getrollingreleaseconfigop.js";

let value: GetRollingReleaseConfigResponseBody = {
  rollingRelease: {
    target: "production",
    stages: [
      {
        targetPercentage: 25,
        requireApproval: false,
        duration: 600,
      },
    ],
    canaryResponseHeader: false,
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `rollingRelease`                                                                                        | [models.GetRollingReleaseConfigRollingRelease](../models/getrollingreleaseconfigrollingrelease.md)      | :heavy_check_mark:                                                                                      | Project-level rolling release configuration that defines how deployments should be gradually rolled out |