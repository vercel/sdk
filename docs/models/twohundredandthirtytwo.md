# TwoHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyTwo } from "@vercel/sdk/models/twohundredandthirty.js";

let value: TwoHundredAndThirtyTwo = {
  projectId: "<id>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `projectId`                                  | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `reasonCode`                                 | [models.ReasonCode](../models/reasoncode.md) | :heavy_minus_sign:                           | N/A                                          |