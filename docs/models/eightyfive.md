# EightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFive } from "@vercel/sdk/models/userevent.js";

let value: EightyFive = {
  projectName: "<value>",
  action: "disabled",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload85Action](../models/usereventpayload85action.md) | :heavy_check_mark:                                                       | N/A                                                                      |