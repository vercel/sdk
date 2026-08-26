# Payload3

The payload of the event, if requested.

## Example Usage

```typescript
import { Payload3 } from "@vercel/sdk/models/userevent.js";

let value: Payload3 = {
  action: "transitioned",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  state: "Hawaii",
  projectId: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `action`                                                             | [models.UserEventPayloadAction](../models/usereventpayloadaction.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `slug`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `state`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `projectId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `projectName`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |