# ThreeHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyNine } from "@vercel/sdk/models/threehundredandtwentyfive.js";

let value: ThreeHundredAndSixtyNine = {
  consent: "refused",
  projectName: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `consent`                              | [models.Consent](../models/consent.md) | :heavy_check_mark:                     | N/A                                    |
| `projectId`                            | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `projectName`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |