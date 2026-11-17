# Five

The payload of the event, if requested.

## Example Usage

```typescript
import { Five } from "@vercel/sdk/models/usereventprincipaltype.js";

let value: Five = {
  action: "updated",
  id: "<id>",
  name: "<value>",
  projectId: "<id>",
  slug: "<value>",
  state: "Nebraska",
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