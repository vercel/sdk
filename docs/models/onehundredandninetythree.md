# OneHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyThree } from "@vercel/sdk/models/usereventpayload161next.js";

let value: OneHundredAndNinetyThree = {
  projectName: "<value>",
  consent: "granted",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `projectName`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `consent`                              | [models.Consent](../models/consent.md) | :heavy_check_mark:                     | N/A                                    |