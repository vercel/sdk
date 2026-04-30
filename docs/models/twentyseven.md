# TwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentySeven } from "@vercel/sdk/models/newteam.js";

let value: TwentySeven = {
  projectName: "<value>",
  alias: "<value>",
  action: "created",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `alias`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload27Action](../models/usereventpayload27action.md) | :heavy_check_mark:                                                       | N/A                                                                      |