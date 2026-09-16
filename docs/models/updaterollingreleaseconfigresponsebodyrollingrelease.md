# UpdateRollingReleaseConfigResponseBodyRollingRelease

## Example Usage

```typescript
import { UpdateRollingReleaseConfigResponseBodyRollingRelease } from "@vercel/sdk/models/updaterollingreleaseconfigop.js";

let value: UpdateRollingReleaseConfigResponseBodyRollingRelease = {
  stages: [
    {
      duration: 600,
      linearShift: false,
      requireApproval: false,
      targetPercentage: 25,
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `stages`                                                                                                           | [models.UpdateRollingReleaseConfigResponseBodyStages](../models/updaterollingreleaseconfigresponsebodystages.md)[] | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |