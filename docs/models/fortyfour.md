# FortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyFour } from "@vercel/sdk/models/usereventpayload22provider.js";

let value: FortyFour = {
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