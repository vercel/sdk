# FortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyFive } from "@vercel/sdk/models/usereventpayload26apikey.js";

let value: FortyFive = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `rule`                                         | [models.PayloadRule](../models/payloadrule.md) | :heavy_check_mark:                             | N/A                                            |