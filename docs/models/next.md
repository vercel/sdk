# Next

Automatic code review settings

## Example Usage

```typescript
import { Next } from "@vercel/sdk/models/userevent.js";

let value: Next = {
  enabled: true,
  scope: "private",
  includeDrafts: false,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `enabled`                                                   | *boolean*                                                   | :heavy_check_mark:                                          | Whether automatic code reviews are enabled                  |
| `scope`                                                     | [models.PayloadScope](../models/payloadscope.md)            | :heavy_check_mark:                                          | Which repository visibilities get automatic reviews         |
| `includeDrafts`                                             | *boolean*                                                   | :heavy_check_mark:                                          | Whether to include draft pull requests in automatic reviews |