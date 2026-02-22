# UserEventPayload130Project

## Example Usage

```typescript
import { UserEventPayload130Project } from "@vercel/sdk/models/projectanalytics.js";

let value: UserEventPayload130Project = {
  staticIps: {
    enabled: false,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `id`                                       | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `staticIps`                                | [models.StaticIps](../models/staticips.md) | :heavy_check_mark:                         | N/A                                        |