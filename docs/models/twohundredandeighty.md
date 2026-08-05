# TwoHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEighty } from "@vercel/sdk/models/envid2.js";

let value: TwoHundredAndEighty = {
  projectId: "<id>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `projectId`                                  | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `reasonCode`                                 | [models.ReasonCode](../models/reasoncode.md) | :heavy_minus_sign:                           | N/A                                          |