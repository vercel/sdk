# Previous

Automatic code review settings

## Example Usage

```typescript
import { Previous } from "@vercel/sdk/models/userevent.js";

let value: Previous = {
  enabled: false,
  scope: "all",
  includeDrafts: false,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `enabled`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | Whether automatic code reviews are enabled                         |
| `scope`                                                            | [models.UserEventPayloadScope](../models/usereventpayloadscope.md) | :heavy_check_mark:                                                 | Which repository visibilities get automatic reviews                |
| `includeDrafts`                                                    | *boolean*                                                          | :heavy_check_mark:                                                 | Whether to include draft pull requests in automatic reviews        |