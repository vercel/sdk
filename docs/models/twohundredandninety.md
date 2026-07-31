# TwoHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinety } from "@vercel/sdk/models/aws.js";

let value: TwoHundredAndNinety = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 2000.02,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload290Next](../models/usereventpayload290next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload290Previous](../models/usereventpayload290previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |