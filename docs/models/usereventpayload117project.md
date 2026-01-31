# UserEventPayload117Project

## Example Usage

```typescript
import { UserEventPayload117Project } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayload117Project = {
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