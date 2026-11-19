# Destinations

## Example Usage

```typescript
import { Destinations } from "@vercel/sdk/models/payloadoutcome.js";

let value: Destinations = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `email`                                          | *true*                                           | :heavy_minus_sign:                               | N/A                                              |
| `inApp`                                          | *true*                                           | :heavy_minus_sign:                               | N/A                                              |
| `push`                                           | *true*                                           | :heavy_minus_sign:                               | N/A                                              |
| `slack`                                          | [models.Slack](../models/slack.md)[]             | :heavy_minus_sign:                               | N/A                                              |
| `unavailable`                                    | [models.Unavailable](../models/unavailable.md)[] | :heavy_minus_sign:                               | N/A                                              |
| `webhooks`                                       | [models.Webhooks](../models/webhooks.md)[]       | :heavy_minus_sign:                               | N/A                                              |