# NinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyOne } from "@vercel/sdk/models/userevent.js";

let value: NinetyOne = {
  projectId: "<id>",
  projectName: "<value>",
  action: "enabled",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload91Action](../models/usereventpayload91action.md) | :heavy_check_mark:                                                       | N/A                                                                      |