# TwoHundredAndNinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetySeven } from "@vercel/sdk/models/usereventpayloadgitprovider.js";

let value: TwoHundredAndNinetySeven = {
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `oldOptionsAllowlist`                                          | [models.OldOptionsAllowlist](../models/oldoptionsallowlist.md) | :heavy_minus_sign:                                             | N/A                                                            |
| `optionsAllowlist`                                             | [models.OptionsAllowlist](../models/optionsallowlist.md)       | :heavy_minus_sign:                                             | N/A                                                            |
| `projectId`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `projectName`                                                  | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |