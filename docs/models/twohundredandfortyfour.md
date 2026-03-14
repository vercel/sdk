# TwoHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyFour } from "@vercel/sdk/models/usereventfactors1.js";

let value: TwoHundredAndFortyFour = {
  previousRole: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `directoryType`                                | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `updatedUser`                                  | [models.UpdatedUser](../models/updateduser.md) | :heavy_minus_sign:                             | N/A                                            |
| `role`                                         | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `previousRole`                                 | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `updatedUid`                                   | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `origin`                                       | *string*                                       | :heavy_minus_sign:                             | N/A                                            |