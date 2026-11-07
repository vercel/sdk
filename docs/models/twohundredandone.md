# TwoHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndOne } from "@vercel/sdk/models/payloadinitiator.js";

let value: TwoHundredAndOne = {
  configurations: [],
  ownerId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `configurations`                                       | [models.Configurations](../models/configurations.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `ownerId`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |