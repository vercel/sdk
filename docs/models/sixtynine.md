# SixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyNine } from "@vercel/sdk/models/userevent.js";

let value: SixtyNine = {
  projectId: "<id>",
  rulesetName: "<value>",
  active: true,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `rulesetName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `active`                                                                 | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload69Action](../models/usereventpayload69action.md) | :heavy_minus_sign:                                                       | N/A                                                                      |