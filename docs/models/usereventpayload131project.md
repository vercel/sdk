# UserEventPayload131Project

## Example Usage

```typescript
import { UserEventPayload131Project } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayload131Project = {
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