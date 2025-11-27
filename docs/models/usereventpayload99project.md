# UserEventPayload99Project

## Example Usage

```typescript
import { UserEventPayload99Project } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayload99Project = {
  id: "<id>",
  staticIps: {
    enabled: false,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `id`                                       | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `staticIps`                                | [models.StaticIps](../models/staticips.md) | :heavy_check_mark:                         | N/A                                        |