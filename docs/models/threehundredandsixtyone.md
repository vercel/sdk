# ThreeHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyOne } from "@vercel/sdk/models/threehundredandfifteen.js";

let value: ThreeHundredAndSixtyOne = {
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