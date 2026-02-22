# EightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyOne } from "@vercel/sdk/models/oldteam.js";

let value: EightyOne = {
  projectId: "<id>",
  rulesetName: "<value>",
  active: false,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `rulesetName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `active`                                                                 | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload81Action](../models/usereventpayload81action.md) | :heavy_minus_sign:                                                       | N/A                                                                      |