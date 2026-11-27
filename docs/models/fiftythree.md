# FiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyThree } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: FiftyThree = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `failureMode`                                  | [models.FailureMode](../models/failuremode.md) | :heavy_minus_sign:                             | N/A                                            |
| `mode`                                         | [models.PayloadMode](../models/payloadmode.md) | :heavy_minus_sign:                             | N/A                                            |
| `rolloutPercent`                               | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `timeoutMs`                                    | *number*                                       | :heavy_minus_sign:                             | N/A                                            |