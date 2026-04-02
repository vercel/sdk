# OneHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixteen } from "@vercel/sdk/models/payloadviewpreference.js";

let value: OneHundredAndSixteen = {
  configurations: [],
  ownerId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `configurations`                                       | [models.Configurations](../models/configurations.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `ownerId`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |