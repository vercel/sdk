# OneHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyThree } from "@vercel/sdk/models/onehundredandfifteen.js";

let value: OneHundredAndThirtyThree = {
  projectId: "<id>",
  restore: false,
  configVersion: 3063.9,
  configChangeCount: 8222.4,
  configChanges: [
    {},
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `projectId`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `projectName`                                        | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `restore`                                            | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `configVersion`                                      | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `configChangeCount`                                  | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `configChanges`                                      | [models.ConfigChanges](../models/configchanges.md)[] | :heavy_check_mark:                                   | N/A                                                  |