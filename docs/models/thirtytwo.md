# ThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyTwo } from "@vercel/sdk/models/usereventpayload26apikey.js";

let value: ThirtyTwo = {
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