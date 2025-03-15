# OneHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSix } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSix = {
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