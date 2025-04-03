# Eighty

The payload of the event, if requested.

## Example Usage

```typescript
import { Eighty } from "@vercel/sdk/models/userevent.js";

let value: Eighty = {
  projectName: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `projectName`                                                  | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `optionsAllowlist`                                             | [models.OptionsAllowlist](../models/optionsallowlist.md)       | :heavy_minus_sign:                                             | N/A                                                            |
| `oldOptionsAllowlist`                                          | [models.OldOptionsAllowlist](../models/oldoptionsallowlist.md) | :heavy_minus_sign:                                             | N/A                                                            |