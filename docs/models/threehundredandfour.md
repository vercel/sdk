# ThreeHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFour } from "@vercel/sdk/models/payloadenvironment.js";

let value: ThreeHundredAndFour = {
  provider: "google",
  login: "Ethyl.Fisher",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `provider`                               | [models.Provider](../models/provider.md) | :heavy_check_mark:                       | N/A                                      |
| `login`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      |