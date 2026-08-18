# TwoHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyNine } from "@vercel/sdk/models/twohundredandfiftynine.js";

let value: TwoHundredAndEightyNine = {
  projectName: "<value>",
  consent: "granted",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `projectId`                            | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `projectName`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `consent`                              | [models.Consent](../models/consent.md) | :heavy_check_mark:                     | N/A                                    |