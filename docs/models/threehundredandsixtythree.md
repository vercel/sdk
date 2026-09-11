# ThreeHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyThree } from "@vercel/sdk/models/usereventpayload339budget.js";

let value: ThreeHundredAndSixtyThree = {
  environment: "preview",
  enabled: "off-force",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `environment`                                                                  | [models.UserEventPayloadEnvironment](../models/usereventpayloadenvironment.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `enabled`                                                                      | [models.Enabled](../models/enabled.md)                                         | :heavy_check_mark:                                                             | N/A                                                                            |