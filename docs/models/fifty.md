# Fifty

The payload of the event, if requested.

## Example Usage

```typescript
import { Fifty } from "@vercel/sdk/models/userevent.js";

let value: Fifty = {
  provider: "github-custom-host",
  login: "Lavinia.Gibson",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `provider`                               | [models.Provider](../models/provider.md) | :heavy_check_mark:                       | N/A                                      |
| `login`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      |