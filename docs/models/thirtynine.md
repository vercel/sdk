# ThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyNine } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: ThirtyNine = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `credential`                                 | [models.Credential](../models/credential.md) | :heavy_check_mark:                           | N/A                                          |