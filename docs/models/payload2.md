# Payload2

The payload of the event, if requested.

## Example Usage

```typescript
import { Payload2 } from "@vercel/sdk/models/userevent.js";

let value: Payload2 = {
  action: "created",
  id: "<id>",
  slug: "<value>",
  projectId: "<id>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `action`                             | [models.Action](../models/action.md) | :heavy_check_mark:                   | N/A                                  |
| `id`                                 | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `slug`                               | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `projectId`                          | *string*                             | :heavy_check_mark:                   | N/A                                  |