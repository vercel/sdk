# SixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyOne } from "@vercel/sdk/models/userevent.js";

let value: SixtyOne = {
  projectId: "<id>",
  rulesetName: "<value>",
  active: true,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `projectId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rulesetName`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `active`                                                             | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `action`                                                             | [models.UserEventPayloadAction](../models/usereventpayloadaction.md) | :heavy_minus_sign:                                                   | N/A                                                                  |