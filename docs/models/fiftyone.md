# FiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyOne } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: FiftyOne = {
  enabled: false,
  mode: "enforce",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `enabled`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `mode`                                                               | [models.UserEventPayload51Mode](../models/usereventpayload51mode.md) | :heavy_check_mark:                                                   | N/A                                                                  |