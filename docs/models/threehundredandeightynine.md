# ThreeHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyNine } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: ThreeHundredAndEightyNine = {
  enabled: "on",
  environment: "preview",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | [models.Enabled](../models/enabled.md)                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `environment`                                                                  | [models.UserEventPayloadEnvironment](../models/usereventpayloadenvironment.md) | :heavy_check_mark:                                                             | N/A                                                                            |