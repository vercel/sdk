# Fifty

The payload of the event, if requested.

## Example Usage

```typescript
import { Fifty } from "@vercel/sdk/models/usereventpayload25provider.js";

let value: Fifty = {
  enabled: true,
  mode: "shadow",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `enabled`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `mode`                                                               | [models.UserEventPayload50Mode](../models/usereventpayload50mode.md) | :heavy_check_mark:                                                   | N/A                                                                  |