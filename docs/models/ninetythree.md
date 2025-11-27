# NinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyThree } from "@vercel/sdk/models/userevent.js";

let value: NinetyThree = {
  projectName: "<value>",
  action: "enabled",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload93Action](../models/usereventpayload93action.md) | :heavy_check_mark:                                                       | N/A                                                                      |