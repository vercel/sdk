# OneHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyOne } from "@vercel/sdk/models/analyticsusage.js";

let value: OneHundredAndFortyOne = {
  configurations: [],
  ownerId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `configurations`                                       | [models.Configurations](../models/configurations.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `ownerId`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |