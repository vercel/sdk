# UpdateRollingReleaseConfigResponseBodyRollingRelease

## Example Usage

```typescript
import { UpdateRollingReleaseConfigResponseBodyRollingRelease } from "@vercel/sdk/models/updaterollingreleaseconfigop.js";

let value: UpdateRollingReleaseConfigResponseBodyRollingRelease = {
  stages: [
    {
      targetPercentage: 25,
      requireApproval: false,
      duration: 600,
      linearShift: false,
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `stages`                                                                                                           | [models.UpdateRollingReleaseConfigResponseBodyStages](../models/updaterollingreleaseconfigresponsebodystages.md)[] | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |