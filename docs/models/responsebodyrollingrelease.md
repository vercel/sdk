# ResponseBodyRollingRelease

## Example Usage

```typescript
import { ResponseBodyRollingRelease } from "@vercel/sdk/models/updaterollingreleaseconfigop.js";

let value: ResponseBodyRollingRelease = {
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

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `stages`                                                       | [models.ResponseBodyStages](../models/responsebodystages.md)[] | :heavy_minus_sign:                                             | N/A                                                            |