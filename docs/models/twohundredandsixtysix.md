# TwoHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtySix } from "@vercel/sdk/models/payloaddsyncmode.js";

let value: TwoHundredAndSixtySix = {
  next: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: false,
    enforcePercentage: 3840.37,
    mode: "<value>",
    newResourceBlockingPolicy: "allow",
  },
  previous: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: false,
    enforcePercentage: 6437.28,
    mode: "<value>",
    newResourceBlockingPolicy: "block",
  },
  projectId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload266Next](../models/usereventpayload266next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload266Previous](../models/usereventpayload266previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |