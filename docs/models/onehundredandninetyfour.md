# OneHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyFour } from "@vercel/sdk/models/usereventpayload162next.js";

let value: OneHundredAndNinetyFour = {
  projectName: "<value>",
  consent: "granted",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `projectName`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `consent`                              | [models.Consent](../models/consent.md) | :heavy_check_mark:                     | N/A                                    |