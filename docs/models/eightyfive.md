# EightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFive } from "@vercel/sdk/models/userevent.js";

let value: EightyFive = {
  projectName: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `projectName`                                                  | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `optionsAllowlist`                                             | [models.OptionsAllowlist](../models/optionsallowlist.md)       | :heavy_minus_sign:                                             | N/A                                                            |
| `oldOptionsAllowlist`                                          | [models.OldOptionsAllowlist](../models/oldoptionsallowlist.md) | :heavy_minus_sign:                                             | N/A                                                            |