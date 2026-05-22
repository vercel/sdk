# ThreeHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeven } from "@vercel/sdk/models/payloadenvironment.js";

let value: ThreeHundredAndSeven = {
  provider: "gitlab",
  login: "Annabell75",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `provider`                               | [models.Provider](../models/provider.md) | :heavy_check_mark:                       | N/A                                      |
| `login`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      |