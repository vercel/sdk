# Three

The payload of the event, if requested.

## Example Usage

```typescript
import { Three } from "@vercel/sdk/models/userevent.js";

let value: Three = {
  action: "updated",
  id: "<id>",
  name: "<value>",
  projectId: "<id>",
  slug: "<value>",
  state: "Illinois",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `action`                                                             | [models.UserEventPayloadAction](../models/usereventpayloadaction.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `projectId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `projectName`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `slug`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `state`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |