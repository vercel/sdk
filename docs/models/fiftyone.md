# FiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyOne } from "@vercel/sdk/models/userevent.js";

let value: FiftyOne = {
  provider: "google",
  login: "Elijah_OConner",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `provider`                               | [models.Provider](../models/provider.md) | :heavy_check_mark:                       | N/A                                      |
| `login`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      |