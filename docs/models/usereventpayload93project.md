# UserEventPayload93Project

## Example Usage

```typescript
import { UserEventPayload93Project } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayload93Project = {
  id: "<id>",
  staticIps: {
    enabled: true,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `id`                                       | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `staticIps`                                | [models.StaticIps](../models/staticips.md) | :heavy_check_mark:                         | N/A                                        |