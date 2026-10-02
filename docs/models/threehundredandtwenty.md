# ThreeHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwenty } from "@vercel/sdk/models/twohundredandninetyfive.js";

let value: ThreeHundredAndTwenty = {
  consent: "granted",
  projectName: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `consent`                              | [models.Consent](../models/consent.md) | :heavy_check_mark:                     | N/A                                    |
| `projectId`                            | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `projectName`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |