# FiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyTwo } from "@vercel/sdk/models/twentythree.js";

let value: FiftyTwo = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `failureMode`                                  | [models.FailureMode](../models/failuremode.md) | :heavy_minus_sign:                             | N/A                                            |
| `mode`                                         | [models.PayloadMode](../models/payloadmode.md) | :heavy_minus_sign:                             | N/A                                            |
| `rolloutPercent`                               | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `timeoutMs`                                    | *number*                                       | :heavy_minus_sign:                             | N/A                                            |