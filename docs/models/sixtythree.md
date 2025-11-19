# SixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyThree } from "@vercel/sdk/models/userevent.js";

let value: SixtyThree = {
  projectId: "<id>",
  rulesetName: "<value>",
  active: false,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `projectId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rulesetName`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `active`                                                             | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `action`                                                             | [models.UserEventPayloadAction](../models/usereventpayloadaction.md) | :heavy_minus_sign:                                                   | N/A                                                                  |