# CreateEventRequestBody

## Example Usage

```typescript
import { CreateEventRequestBody } from "@vercel/sdk/models/createeventop.js";

let value: CreateEventRequestBody = {
  event: {
    type: "resource.updated",
    resourceId: "<id>",
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `event`                   | *models.CreateEventEvent* | :heavy_check_mark:        | N/A                       |