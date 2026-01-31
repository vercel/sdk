# SeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyTwo } from "@vercel/sdk/models/userevent.js";

let value: SeventyTwo = {
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
| `action`                                                                 | [models.UserEventPayload72Action](../models/usereventpayload72action.md) | :heavy_minus_sign:                                                       | N/A                                                                      |