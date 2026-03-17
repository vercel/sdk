# OneHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinety } from "@vercel/sdk/models/payloadbranchmatcher.js";

let value: OneHundredAndNinety = {
  projectName: "<value>",
  consent: "refused",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `projectName`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `consent`                              | [models.Consent](../models/consent.md) | :heavy_check_mark:                     | N/A                                    |