# UserEventPayload360Project

## Example Usage

```typescript
import { UserEventPayload360Project } from "@vercel/sdk/models/consent.js";

let value: UserEventPayload360Project = {
  staticIps: {
    enabled: true,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `id`                                       | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `staticIps`                                | [models.StaticIps](../models/staticips.md) | :heavy_check_mark:                         | N/A                                        |