# Ten

The payload of the event, if requested.

## Example Usage

```typescript
import { Ten } from "@vercel/sdk/models/userevent.js";

let value: Ten = {
  teamId: "<id>",
  resourceId: "<id>",
  fromPlan: "hobby",
  toPlan: "pro",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `teamId`                                 | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `resourceId`                             | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `fromPlan`                               | [models.FromPlan](../models/fromplan.md) | :heavy_check_mark:                       | N/A                                      |
| `toPlan`                                 | [models.ToPlan](../models/toplan.md)     | :heavy_check_mark:                       | N/A                                      |