# FortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyFive } from "@vercel/sdk/models/userevent.js";

let value: FortyFive = {
  provider: "github-custom-host",
  login: "Karli76",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `provider`                               | [models.Provider](../models/provider.md) | :heavy_check_mark:                       | N/A                                      |
| `login`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      |